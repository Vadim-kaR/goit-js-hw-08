// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallaryContainer = document.querySelector('.gallery');
const imageListMurkup = createImageListMarkup(galleryItems);

gallaryContainer.insertAdjacentHTML('afterbegin', imageListMurkup);
gallaryContainer.addEventListener('click', onImageClick);


let instance = null;

function createImageListMarkup(item) { 
    return item.map(({ preview, original, description }) =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`).join('')
    
}

function onImageClick(e) { 
    if (e.target.nodeName !== "IMG") { 
        return;
    }
    e.preventDefault();

    
    instance = basicLightbox.create(
        `<img src="${e.target.dataset.source}">`, {
            onShow: () => {gallaryContainer.addEventListener('keydown', onImageKeyDown)},
            onClose: () => {gallaryContainer.removeEventListener('keydown', onImageKeyDown)}
        });
    instance.show();
}

function onImageKeyDown(e) { 
    if (e.key === "Escape") {
        instance.close();
    }
}
