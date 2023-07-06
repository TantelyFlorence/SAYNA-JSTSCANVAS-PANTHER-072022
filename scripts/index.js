const animation = new IntersectionObserver ((entries) =>{
    entries.forEach ((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('apparition')
        }else{
            entry.target.classList.remove('apparition')
        }

    })
})
const scroll = document.querySelectorAll ('.scroll')
scroll.forEach((el) => animation.observe(el))
// curseur
let curseur = document.querySelector(".curseur")
document.addEventListener ("mousemove", function(e){
    curseur.style.cssText =  "left: " + e.clientX + "px; top: " + e.clientY + "px;"
})


const contenaire = document.querySelector('.acteur1');
const flecheDroite = document.querySelector('#droite');
const flecheGauche = document.querySelector('#gauche');

// initialisation
let page = 0;

flecheDroite.addEventListener('click', () => {
    page-- ;
    afficherMasquer();
    contenaire.style.transform = "translate("+ page*975 +"px)";
});

flecheGauche.addEventListener('click', () => {
    page++ ;
    afficherMasquer();
    contenaire.style.transform = "translate("+ page*975 +"px)";
    // container.style.transform = "translate("+ page*975 +"px)";
});

afficherMasquer();
// Affichage des flèches
function afficherMasquer() {
    if(page <= -5) {
        page = -4.5;
        flecheDroite.style.visibility = "hidden";
    }
    else if(page >= 0) {
        page = 0;
        flecheGauche.style.visibility = "hidden";
    }
    else {
        flecheGauche.style.visibility = "visible";
        flecheDroite.style.visibility = "visible";
    }
};
    

