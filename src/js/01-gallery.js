// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallaryContainer = document.querySelector('.gallery');

const itemMarkup = createGallaryMarkup(galleryItems);
gallaryContainer.insertAdjacentHTML('afterbegin', itemMarkup)

function createGallaryMarkup(item) { 
    return item.map(({ preview, original, description }) => `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity:0.9,
});

