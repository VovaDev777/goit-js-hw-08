import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

const imageList = document.querySelector(".gallery");

galleryItems.forEach((image) => {
    const listItem = document.createElement("li");
    listItem.insertAdjacentHTML(
      "beforeend",
      `<a class="gallery__link" href="${image.original}">
      <img class = "gallery__image" src="${image.preview}" data-source="large-image.jpg" alt="${image.description}" width = "100%" height = "100%"/>
      </a>`
    );
    listItem.classList.add('gallery__item');
      imageList.appendChild(listItem);
  });


  const lightbox = new SimpleLightbox('.gallery__item a', {
    captionDelay: 250,
  });
