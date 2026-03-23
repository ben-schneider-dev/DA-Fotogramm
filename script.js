"use strict";
const bilder = [
    "pic_1.jpg" ,
    "pic_2.jpg" ,
    "pic_3.jpg" ,
    "pic_4.jpg" , 
    "pic_5.jpg" ,
    "pic_6.jpg" ,
    "pic_7.jpg" ,
    "pic_8.jpg" ,
    "pic_9.jpg" ,
    "pic_10.jpg" ,
    "pic_11.jpg" ,
    "pic_12.jpg" ,
];

let aktuellerIndex = 0;
let modalIstOffen = false;

function modalOeffnen(index) {
    aktuellerIndex = index;
    modalIstOffen = true;

    const modal = document.getElementById("modal");
    const modalBild = document.getElementById("modal-bild");

    modalBild.src ="assets/img/" + bilder[aktuellerIndex];
    modal.classList.remove("versteckt");
}

function modalSchliessen(){
    modalIstOffen = false;

    const modal =document.getElementById("modal");
    modal.classList.add("versteckt");
}

function galerieRendern() {
    const galerieDiv = document.getElementById("galerie");

    bilder.forEach(function(dateiname, index) {
        const bildRahmen = document.createElement("div");
        bildRahmen.classList.add("thumbnail");
       
        bildRahmen.addEventListener("click", function() {
            modalOeffnen(index);
        });

        const imgElement = document.createElement("img");
        imgElement.src = "assets/img/" + dateiname;
        imgElement.alt = "Foto" + (index + 1);

        bildRahmen.appendChild(imgElement);
        galerieDiv.appendChild(bildRahmen);


    });
    
}
galerieRendern();

document.getElementById("btn-schliessen").addEventListener("click", function() {
    modalSchliessen();
});

document.getElementById("modal-hintergrund").addEventListener("click", function() {
    modalSchliessen();
});