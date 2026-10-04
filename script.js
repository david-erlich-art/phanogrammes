const galerie=document.querySelector('#series');

function imageFigure([src,caption],classe=''){
  const f=document.createElement('figure');
  if(classe) f.className=classe;
  const b=document.createElement('button');
  b.dataset.src=src; b.dataset.caption=caption; b.setAttribute('aria-label','Agrandir : '+caption);
  const img=document.createElement('img'); img.src=src; img.alt=caption; img.loading='lazy';
  b.appendChild(img); f.appendChild(b);

if(classe!=='phanogramme') {
  const legende=document.createElement('figcaption');
  legende.textContent=caption;
  f.appendChild(legende);
}

return f;
}

oeuvres.forEach(o=>{
  const article=document.createElement('article'); article.className='series';
  const titre=document.createElement('div'); titre.className='series-title';
  const numero=document.createElement('span'); numero.textContent=o.numero;
  const bloc=document.createElement('div'); bloc.className='title-copy';
  const h2=document.createElement('h2'); h2.textContent=o.titre; bloc.appendChild(h2);
  if(o.commentaire && o.commentaire.trim()) { const p=document.createElement('p'); p.className='series-comment'; p.textContent=o.commentaire; bloc.appendChild(p); }
  titre.append(numero,bloc); article.appendChild(titre);
  const visuels=document.createElement('div'); visuels.className='art-layout';
  visuels.appendChild(imageFigure(o.images[0],'phanogramme'));
  const suite=document.createElement('div'); suite.className='sources';
  o.images.slice(1).forEach(im=>suite.appendChild(imageFigure(im)));
  visuels.appendChild(suite); article.appendChild(visuels); galerie.appendChild(article);
});

const d=document.querySelector('#lightbox'),large=document.querySelector('#large'),caption=document.querySelector('#caption');
document.querySelectorAll('.art-layout button').forEach(b=>b.addEventListener('click',()=>{large.src=b.dataset.src;large.alt=b.dataset.caption;caption.textContent=b.dataset.caption;d.showModal()}));
document.querySelector('#close').addEventListener('click',()=>d.close());
d.addEventListener('click',e=>{if(e.target===d)d.close()});
