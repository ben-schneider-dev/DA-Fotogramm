"use strict";
const images = [
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

let currentIndex = 0;
let modalIsOpen = false;

function openModal(index) {
    currentIndex = index;
    modalIsOpen = true;

    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");

    modalImage.src ="assets/img/" + images[currentIndex];
    modal.classList.remove("hide");
}

function closeModal(){
    modalIsOpen = false;

    const modal =document.getElementById("modal");
    modal.classList.add("hide");
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex = currentIndex + 1;
    } else{
        currentIndex = 0;
    }
    openModal(currentIndex);
}

function previousImage() {
    if (currentIndex > 0) {
        currentIndex = currentIndex - 1;
    } else {
        currentIndex = images.length - 1;
    }
    openModal(currentIndex);
}

function renderGallery() {
    const galleryDiv = document.getElementById("gallery");

    for (let i = 0; i < images.length; i++) {
        const imageFrame = document.createElement("div");
        imageFrame.classList.add("thumbnail");
        imageFrame.setAttribute("tabindex", "0");
       
        imageFrame.addEventListener("click", function() {
            openModal(i);
        });
        imageFrame.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                openModal(i);
            }
        })

        const imgElement = document.createElement("img");
        imgElement.src = "assets/img/" + images[i];
        imgElement.alt = "Foto " + (i + 1);

        imageFrame.appendChild(imgElement);
        galleryDiv.appendChild(imageFrame);


    }
    
}
renderGallery();

document.getElementById("btn-close").addEventListener("click", closeModal);

document.getElementById("btn-next").addEventListener("click", nextImage);

document.getElementById("btn-back").addEventListener("click", previousImage);

document.getElementById("modal-background").addEventListener("click", closeModal);

document.addEventListener("keydown", function(event) {
    if (modalIsOpen === false) {
        return;
    }
    if (event.key === "ArrowRight") {
        nextImage();
    }
    if (event.key === "ArrowLeft") {
        previousImage();
    }
    if (event.key === "Escape") {
        closeModal();
    }
});