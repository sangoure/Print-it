const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//Compte le nombre de slides 
const nb_slides=slides.length;
console.log("nombre de slides (nb_slides) : "+nb_slides);


const fleche_droite = document.querySelector('.arrow_right');
const fleche_gauche = document.querySelector('.arrow_left');
let image_affiche=0;
const image_diapo=document.querySelector('.banner-img');
const texte_diapo=document.querySelector('#banner p');


// Sélectionne la div contenant les points
const dotsContainer = document.querySelector('.dots');

// Crée les éléments <span> en fonction de nb_slides
for (let i = 0; i < nb_slides; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot'); // Ajoute la classe "dot" à chaque span
  if (i === 0) {
    dot.classList.add('dot_selected'); // Ajoute la classe "dot_selected" au premier span
  }
  dotsContainer.appendChild(dot); // Ajoute le span à la div
}




fleche_droite.addEventListener('click', function() {
    console.log('Clic sur la flèche droite !');
    image_affiche++;

    // Vérifie si image_affiche atteint le nombre total de diapositives (nb_slides)
    if (image_affiche === nb_slides) {
        image_affiche = 0; // Réinitialise à 0 pour boucler
    }

    change_slide(); // Appelle la fonction pour mettre à jour l'affichage
});





fleche_gauche.addEventListener('click', function() {
    console.log('Clic sur la flèche gauche !');
    image_affiche--;

    // Vérifie si image_affiche est inférieur à 0
    if (image_affiche < 0) {
        image_affiche = nb_slides - 1; // Réinitialise pour boucler
    }

    change_slide(); // Appelle la fonction pour mettre à jour l'affichage
});


function change_slide(){
	console.log("num image : "+image_affiche);
	image_diapo.src="./assets/images/slideshow/"+slides[image_affiche].image;

	texte_diapo.innerHTML=slides[image_affiche].tagLine;


	document.querySelector('.dot_selected').classList.remove('dot_selected');
	document.querySelectorAll('.dot')[image_affiche].classList.add('dot_selected');


}




// 
// document.body.onload = function () {
// 					nbr=4;
// 					p=0;
// 					cont=document.getElementById("cont");
// 					g=document.getElementById("g");
// 					d=document.getElementById("d");
// 					cont.style.width=(1000*nbr)+"px";
// 					for(i=1;i<=nbr;i++) {
// 						div=document.createElement ("div");
// 						div.className="images";
// 						div.style.backgroundImage="url('./assets/images/slideshow/ "+i+".jpg  ')";
// 						cont.appendChild(div);

// 					}
					
// 				}
// 				g.oneclick=function(){
// 					p--;
// 					con.style.transform="transl ("+p*1000+"px)";
// 				}
// 					*/