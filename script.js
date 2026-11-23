"use strict";
// Œuvres présentes dans le fichier mais non affichées sur la version actuelle du site.
const masquesNumeros = new Set(['09', '10', '11', '13']);
// Œuvres à afficher dans la rubrique « Autres œuvres ».
const autresNumeros = new Set(['19', '20', '21', '22']);

function creerElement(tag, classe, texte) {
  const el = document.createElement(tag);
  if (classe) el.className = classe;
  if (texte != null) el.textContent = texte;
  return el;
}

function creerVignette(image, prioritaire = false) {
  const [src, legende] = image;
  const vendu = /(?:^|[\s—-])vendu(?:e)?\s*$/i.test(legende);
  const legendeVisible = legende.replace(/\s*[-—]\s*vendu(?:e)?\s*$/i, '').trim();
  const figure = creerElement('figure', 'work-image');
  const bouton = creerElement('button', 'image-button');
  bouton.type = 'button';
  bouton.dataset.full = src;
  bouton.dataset.caption = legendeVisible;
  bouton.setAttribute('aria-label', `Agrandir : ${legendeVisible}${vendu ? ' (œuvre vendue)' : ''}`);
  const img = creerElement('img');
  img.src = src;
  img.alt = legendeVisible;
  img.loading = prioritaire ? 'eager' : 'lazy';
  bouton.appendChild(img);
  figure.appendChild(bouton);
  if (vendu) {
    const marque = creerElement('span', 'sold-mark', 'vendu');
    marque.setAttribute('aria-label', 'Œuvre vendue');
    figure.classList.add('is-sold');
    figure.appendChild(marque);
  }
  figure.appendChild(creerElement('figcaption', '', legendeVisible));
  return figure;
}

function ajouterOeuvre(oeuvre, parent, position) {
  const article = creerElement('article', 'work');
  const head = creerElement('div', 'work-header');
  head.appendChild(creerElement('span', 'work-number', String(position).padStart(2, '0')));
  const text = creerElement('div');
  text.appendChild(creerElement('h3', '', oeuvre.titre));
  if (oeuvre.commentaire && oeuvre.commentaire.trim()) {
    text.appendChild(creerElement('p', 'work-comment', oeuvre.commentaire));
  }
  head.appendChild(text);
  article.appendChild(head);
  const images = creerElement('div', 'work-images');
  oeuvre.images.forEach((image, i) => {
    const figure = creerVignette(image, i === 0);
    if (oeuvre.images.length > 1 && i === 0) figure.classList.add('work-image-main');
    if (oeuvre.images.length === 1) figure.classList.add('work-image-single');
    images.appendChild(figure);
  });
  article.appendChild(images);
  parent.appendChild(article);
}

// Ordre de présentation pensé pour les rangées de trois œuvres sur ordinateur.
const ordrePhanogrammes = ['01', '02', '03', '07', '05', '04', '06', '08', '12', '14', '18', '15', '16', '17'];
const galeriePhanogrammes = document.getElementById('phanogrammes-gallery');
const galerieAutres = document.getElementById('autres-gallery');
if (typeof oeuvres !== 'undefined') {
  const visibles = oeuvres.filter(oeuvre => !masquesNumeros.has(oeuvre.numero));
  const parNumero = new Map(visibles.map(oeuvre => [oeuvre.numero, oeuvre]));
  const ordonnes = [
    ...ordrePhanogrammes.map(numero => parNumero.get(numero)).filter(Boolean),
    ...visibles.filter(oeuvre => !ordrePhanogrammes.includes(oeuvre.numero) && !autresNumeros.has(oeuvre.numero))
  ];
  ordonnes.forEach((oeuvre, index) => ajouterOeuvre(oeuvre, galeriePhanogrammes, index + 1));
  visibles.filter(oeuvre => autresNumeros.has(oeuvre.numero))
    .forEach((oeuvre, index) => ajouterOeuvre(oeuvre, galerieAutres, index + 1));
}

const lightbox = document.getElementById('lightbox');
const large = document.getElementById('large');
const caption = document.getElementById('caption');
document.addEventListener('click', e => {
  const bouton = e.target.closest('.image-button');
  if (!bouton) return;
  large.src = bouton.dataset.full;
  large.alt = bouton.dataset.caption || '';
  caption.textContent = bouton.dataset.caption || '';
  if (typeof lightbox.showModal === 'function') lightbox.showModal();
});
document.getElementById('close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });
