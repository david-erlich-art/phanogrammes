/* ============================================================
   CONTENU DU SITE — C'EST PRINCIPALEMENT CE FICHIER À MODIFIER.

   Pour ajouter un commentaire sous un titre :
   commentaire: "Votre texte ici",

   Pour ne rien afficher :
   commentaire: "",

   Évitez simplement de supprimer les guillemets et les virgules.
   ============================================================ */

const oeuvres = [
  { numero:"01", titre:"Vallon des Auffes, Marseille", commentaire:"Un phanogramme classique avec un premier état à l'encre", images:[
    ["assets/works/vallon-aquarelle.jpg","Phanogramme de David Erlich — Vallon des Auffes, Marseille"],
    ["assets/works/vallon-nb.jpg","Vallon des Auffes — état intermédiaire"],
    ["assets/works/vallon-photo.jpg","Vallon des Auffes — photographie"] ] },
  { numero:"02", titre:"Cascade, Saint-Gervais-les-Bains", commentaire:"le phanogramme le plus authentique même si il n'est pas spectaculaire, la version noir et blanc mérite mieux qu'une qualification inermédiaire", images:[
    ["assets/works/cascade-iii.jpg","Phanogramme de David Erlich — Cascade, Saint-Gervais-les-Bains"],
    ["assets/works/cascade-encre.jpg","Cascade - lavis phanographique"],
    ["assets/works/cascade-photo.jpg","Cascade — photographie"] ] },
  { numero:"03", titre:"Esztergom, Hongrie", commentaire:"", images:[
    ["assets/works/esztergom-3.jpg","Phanogramme de David Erlich — Esztergom, Hongrie"],
    ["assets/works/esztergom-lavis.jpg","Esztergom — état intermédiaire au lavis"],
    ["assets/works/esztergom-photo.jpg","Esztergom — photographie"] ] },
  { numero:"04", titre:"Travaux sur le canal Saint-Martin, Paris", commentaire:"", images:[
    ["assets/works/travaux-canal-final.jpg","Phanogramme de David Erlich — Travaux sur le canal Saint-Martin, Paris"],
    ["assets/works/travaux-canal-intermediaire.jpg","Travaux sur le canal — état intermédiaire"],
    ["assets/works/travaux-canal-photo.jpg","Travaux sur le canal — photographie"] ] },
  { numero:"05", titre:"Bac Ha, Vietnam", commentaire:"", images:[
    ["assets/works/bac-ha-final.jpg","Phanogramme de David Erlich — Bac Ha, Vietnam"],
    ["assets/works/bac-ha-intermediaire.jpg","Bac Ha — style illustration"],
    ["assets/works/bac-ha-photo.jpg","Bac Ha — photographie"] ] },
  { numero:"06", titre:"Rue de Lancry en hiver, Paris", commentaire:"", images:[
    ["assets/works/lancry-hiver-final.jpg","Phanogramme de David Erlich — Rue de Lancry en hiver, Paris"],
    ["assets/works/lancry-hiver-intermediaire.jpg","Lancry, hiver — lavis"],
    ["assets/works/lancry-hiver-photo.jpg","Lancry, hiver — photographie"] ] },
  { numero:"07", titre:"Antoine rapporté à Cléopâtre, Eugène-Ernest Hillemacher, musée de Grenoble", commentaire:"le phanogramme est constitué d'une série de 15 épreuves en noir et blanc dont seuls deux sont montrés", images:[
    ["assets/works/marc-antoine-final.jpg","Phanogramme de David Erlich d’après Antoine rapporté à Cléopâtre d’Eugène-Ernest Hillemacher"],
    ["assets/works/marc-antoine-intermediaire.jpg","Antoine rapporté à Cléopâtre — phanogramme alternatif"],
    ["assets/works/marc-antoine-photo.jpg","Antoine rapporté à Cléopâtre — œuvre source"] ] },
  { numero:"08", titre:"Quai de Jemmapes au printemps, Paris", commentaire:"", images:[
    ["assets/works/printemps-final.jpg","Phanogramme de David Erlich — Quai de Jemmapes au printemps, Paris"],
    ["assets/works/printemps-intermediaire.jpg","Quai de Jemmapes — dessin"],
    ["assets/works/printemps-photo.jpg","Quai de Jemmapes — photographie"] ] },
  { numero:"09", titre:"Rochers de Chausey", commentaire:"Ces rochers pouvaient pratiquement se suffire à eux-mêmes comme phanogramme", images:[
    ["assets/works/chausey-final.jpg","Phanogramme de David Erlich — Rochers de Chausey"],
    ["assets/works/chausey-NB.jpg","Rochers de Chausey - Phanogramme alternatif à l'encre"],
    ["assets/works/chausey-photo.jpg","Rochers de Chausey — photographie"] ] },
  { numero:"10", titre:"Autoportrait", commentaire:"", images:[
    ["assets/works/autoportrait-final.jpg","Phanogramme de David Erlich — Autoportrait"],
    ["assets/works/autoportrait-graphite.jpg","Autoportrait — graphite"],
    ["assets/works/autoportrait-lavis.jpg","Autoportrait — lavis"] ] },
{numero: "11", titre: "Baignade sur le canal Saint-Martin",commentaire: "", images: [
    ["assets/works/bains-parisiens.jpg",
     "Phanogramme de David Erlich — Baignade sur le canal Saint-Martin"],
    ["assets/works/bains-parisiens-NB.jpg",
     "Baignade sur le canal Saint-Martin — état intermédiaire"],
     ["assets/works/bains-parisiens-photo.jpg",
     "Baignade sur le canal Saint-Martin — photographie (avec floutage)"],]},
 {numero: "12", titre: "Tunis",commentaire: "dans ce phanogramme l'image finale a été inversée par la volonté de rompre avec une certaine monotonie dans les compositions", images: [
    ["assets/works/tunis-final.jpg",
     "Phanogramme de David Erlich — Tunis"],
      ["assets/works/Tunis-NB.jpg",
     "Tunis — état intermédiaire"],
     ["assets/works/Tunis-photo.jpg",
     "Tunis — photographie"],]},
 {numero: "13", titre: "Saint Vincent de paul",commentaire: "", images: [
    ["assets/works/st-vincent-final.jpg",
     "Phanogramme de David Erlich — Eglise Saint-Vincent-de-Paul"],
    ["assets/works/st-vincent-prephanogramme.jpg",
     "Eglise Saint-Vincent-de-Paul — pré-phanogramme"],
       ["assets/works/st-vincent-sketch.jpg",
     "Eglise Saint-Vincent-de-Paul—sketch "],
    ["assets/works/st-vincent-initial.jpg",
     "Eglise Saint-Vincent-de-Paul — photographie "], ]},

     {numero: "14", titre: "Hanoi",commentaire: "", images: [
    ["assets/works/hanoi-final.jpg",
     "Phanogramme de David Erlich — Hanoi"],
    ["assets/works/hanoi-NB.jpg",
     "Hanoi — pré-phanogramme"],
       ["assets/works/hanoi-photo.jpg",
     "Hanoi — photographie "], ]},
];
