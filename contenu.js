/* ============================================================
   CONTENU DU SITE — C'EST PRINCIPALEMENT CE FICHIER À MODIFIER.

   Pour ajouter un commentaire sous un titre :
   commentaire: "Votre texte ici",

   Pour ne rien afficher :
   commentaire: "",

   Évitez simplement de supprimer les guillemets et les virgules.
   ============================================================ */

const oeuvres = [
  { numero:"01", titre:"Sacré-Cœur, Paris", commentaire:"", images:[
    ["assets/works/sacre-coeur-phanogramme.jpg","Sacré-Cœur — phanogramme"],
    ["assets/works/sacre-coeur-dessin.jpg","Sacré-Cœur — dessin à l'encre et au lavis"],
    ["assets/works/sacre-coeur-photo.jpg","Sacré-Cœur — photographie"] ] },
  { numero:"02", titre:"Xàtiva, Espagne", commentaire:"", images:[
    ["assets/works/xativa-phanogramme.jpg","Xàtiva — phanogramme"],
    ["assets/works/xativa-dessin.jpg","Xàtiva — dessin à l'encre et au lavis"],
    ["assets/works/xativa-photo.jpg","Xàtiva — photographie"] ] },

  { numero:"03", titre:"Vallon des Auffes, Marseille", commentaire:"Un phanogramme classique avec un premier état à l'encre", images:[
    ["assets/works/vallon-aquarelle.jpg","Phanogramme de David Erlich — Vallon des Auffes, Marseille — vendu"],
    ["assets/works/vallon-nb.jpg","Vallon des Auffes — état intermédiaire"],
    ["assets/works/vallon-photo.jpg","Vallon des Auffes — photographie"] ] },
  { numero:"04", titre:"Cascade, Saint-Gervais-les-Bains", commentaire:"Le phanogramme le plus authentique, même s'il n'est pas spectaculaire ; la version noir et blanc mérite mieux qu'une qualification d'état intermédiaire.", images:[
    ["assets/works/cascade-iii.jpg","Phanogramme de David Erlich — Cascade, Saint-Gervais-les-Bains"],
    ["assets/works/cascade-encre.jpg","Cascade — lavis phanographique"],
    ["assets/works/cascade-NV.jpg","Cascade — étude en noir et blanc"],
    ["assets/works/cascade-couleur.jpg","Cascade — étude en couleur"],
    ["assets/works/cascade-photo.jpg","Cascade — photographie"] ] },
  { numero:"05", titre:"Esztergom, Hongrie", commentaire:"", images:[
    ["assets/works/esztergom-3.jpg","Phanogramme de David Erlich — Esztergom, Hongrie — vendu"],
    ["assets/works/esztergom-lavis.jpg","Esztergom — état intermédiaire au lavis"],
    ["assets/works/Esztergom-dessin.jpg","Esztergom — dessin"],
    ["assets/works/esztergom-photo.jpg","Esztergom — photographie"] ] },
  { numero:"06", titre:"Travaux sur le canal Saint-Martin, Paris", commentaire:"", images:[
    ["assets/works/travaux-canal-final.jpg","Phanogramme de David Erlich — Travaux sur le canal Saint-Martin, Paris"],
    ["assets/works/travaux-canal-intermediaire.jpg","Travaux sur le canal — état intermédiaire"],
    ["assets/works/travaux-canal-photo.jpg","Travaux sur le canal — photographie"] ] },
  { numero:"07", titre:"Bac Ha, Vietnam", commentaire:"", images:[
    ["assets/works/bac-ha-final.jpg","Phanogramme de David Erlich — Bac Ha, Vietnam"],
    ["assets/works/bac-ha-intermediaire.jpg","Bac Ha — style illustration"],
    ["assets/works/Bac-Ha-NB.jpg","Bac Ha — dessin en noir et blanc"],
    ["assets/works/bac-ha-photo.jpg","Bac Ha — photographie"] ] },
  { numero:"08", titre:"Rue de Lancry en hiver, Paris", commentaire:"", images:[
    ["assets/works/lancry-hiver-final.jpg","Phanogramme de David Erlich — Rue de Lancry en hiver, Paris"],
    ["assets/works/lancry-hiver-intermediaire.jpg","Lancry, hiver — lavis"],
    ["assets/works/lancry-hiver-photo.jpg","Lancry, hiver — photographie"] ] },
  { numero:"09", titre:"Quai de Jemmapes au printemps, Paris", commentaire:"", images:[
    ["assets/works/printemps-final.jpg","Phanogramme de David Erlich — Quai de Jemmapes au printemps, Paris"],
    ["assets/works/printemps-intermediaire.jpg","Quai de Jemmapes — dessin"],
    ["assets/works/printemps-photo.jpg","Quai de Jemmapes — photographie"] ] },
  { numero:"10", titre:"Rochers de Chausey", commentaire:"Ces rochers pouvaient pratiquement se suffire à eux-mêmes comme phanogramme.", images:[
    ["assets/works/chausey-final.jpg","Phanogramme de David Erlich — Rochers de Chausey"],
    ["assets/works/chausey-NB.jpg","Rochers de Chausey — phanogramme alternatif à l'encre"],
    ["assets/works/chausey-photo.jpg","Rochers de Chausey — photographie"] ] },
  { numero:"11", titre:"Autoportrait", commentaire:"", images:[
    ["assets/works/autoportrait-final.jpg","Phanogramme de David Erlich — Autoportrait"],
    ["assets/works/autoportrait-graphite.jpg","Autoportrait — graphite"],
    ["assets/works/autoportrait-lavis.jpg","Autoportrait — lavis"] ] },
  { numero:"12", titre:"Baignade sur le canal Saint-Martin", commentaire:"", images: [
    ["assets/works/bains-parisiens.jpg","Phanogramme de David Erlich — Baignade sur le canal Saint-Martin — vendu"],
    ["assets/works/bains-parisiens-NB.jpg","Baignade sur le canal Saint-Martin — état intermédiaire"],
    ["assets/works/bains-parisiens-photo.jpg","Baignade sur le canal Saint-Martin — photographie (avec floutage)"] ] },
  { numero:"13", titre:"Tunis", commentaire:"Dans ce phanogramme, l'image finale a été inversée par la volonté de rompre avec une certaine monotonie dans les compositions.", images: [
    ["assets/works/tunis-final.jpg","Tunis — vendu"],
    ["assets/works/Tunis-NB.jpg","Tunis — état intermédiaire"],
    ["assets/works/Tunis-photo.jpg","Tunis — photographie"] ] },
  { numero:"14", titre:"Saint-Vincent-de-Paul", commentaire:"", images: [
    ["assets/works/st-vincent-final.jpg","Phanogramme de David Erlich — Église Saint-Vincent-de-Paul"],
    ["assets/works/st-vincent-prephanogramme.jpg","Église Saint-Vincent-de-Paul — pré-phanogramme"],
    ["assets/works/st-vincent-sketch.jpg","Église Saint-Vincent-de-Paul — sketch"],
    ["assets/works/st-vincent-initial.jpg","Église Saint-Vincent-de-Paul — photographie"] ] },
  { numero:"15", titre:"Hanoï", commentaire:"", images: [
    ["assets/works/hanoi-final.jpg","Phanogramme de David Erlich — Hanoï"],
    ["assets/works/hanoi-NB.jpg","Hanoï — pré-phanogramme"],
    ["assets/works/hanoi-photo.jpg","Hanoï — photographie"] ] },
  {
    numero: "16",
    titre: "Château d'Eau, Paris",
    commentaire: "",
    images: [
      ["assets/works/chateau-d-eau-final.jpeg","Château d'Eau, Paris — vendu"],
      ["assets/works/Chateau-d-eau-aquarelle.jpg","Château d'Eau — vendue"],
      ["assets/works/chateau-d-eau-NB1.jpg","Château d'Eau — dessin à l'encre et lavis"],
      ["assets/works/chateau-d-eau-photo.jpg","Château d'Eau — photographie originale"]
    ]
  },
  {
    numero: "17",
    titre: "Quai de Jemmapes, Paris",
    commentaire: "",
    images: [
      ["assets/works/Jemmapes-final.jpg","Phanogramme de David Erlich — Quai de Jemmapes, Paris"],
      ["assets/works/jemmapes-NB.jpg","Quai de Jemmapes — dessin à l'encre et lavis"],
      ["assets/works/jemmapes-photo.jpeg","Quai de Jemmapes — photographie originale"]
    ]
  },
  {
    numero: "18",
    titre: "Abbesses, Paris",
    commentaire: "Quatre interprétations phanographiques des Abbesses, accompagnées de deux dessins préparatoires.",
    images: [
      ["assets/works/abbesses-ph-4.jpg","Abbesses — phanogramme IV"],
      ["assets/works/abbesses-ph-3.jpg","Abbesses — phanogramme III"],
      ["assets/works/abbesses-ph-1.jpg","Abbesses — phanogramme I"],
      ["assets/works/abbesses-2.jpg","Abbesses — dessin au lavis — vendu"],
      ["assets/works/abbesses-1.jpg","Abbesses — dessin à l'encre — vendu"]
    ]
  },
  {
    numero: "19",
    titre: "Place Jacques-Bonsergent, Paris",
    commentaire: "",
    images: [["assets/autres/abbesses-lavis.jpg", "Encre et lavis — scène urbaine"]]
  },
  {
    numero: "20",
    titre: "Darsena del Naviglio, Milan",
    commentaire: "",
    images: [["assets/autres/canal-nuit.jpg", "Aquarelle — paysage urbain nocturne"]]
  },
  {
    numero: "21",
    titre: "Canal Saint-Martin, Paris",
    commentaire: "",
    images: [["assets/autres/canal-brume.jpg", "Aquarelle — canal dans la brume"]]
  },
  {
    numero: "22",
    titre: "Porte de Versailles, Paris",
    commentaire: "",
    images: [["assets/autres/route-eau.jpg", "Aquarelle — route et reflets"]]
  }
];
