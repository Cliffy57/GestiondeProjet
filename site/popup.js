let liste = new Map();


let popup_boutton_list = document.getElementsByClassName("popup_boutton");

let conteneur = document.getElementsByClassName("cache_container");

document.addEventListener("click", (e) => {
    if (e.target.style.display = "flex" && e.target.classList.contains("cache_container")) {
        e.target.style.display = "none"
    }
});

// on ajoute l'évènement click pour chaque boutton popup

for (i=0; i<popup_boutton_list.length; i++) {
    liste.set(popup_boutton_list[i], conteneur[i]);

    popup_boutton_list[i].addEventListener("click", (e) => {
        // on empeche le bouton de nous rediriger en haut de la page
        e.preventDefault();


        

        liste.get(e.target).style.display = "flex";
         
    });
}

