import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const renderGalleryMarkup = gallery => {
  const markup = gallery.reduce((acc, { original, preview, description }) => {
    acc += `<li>
              <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
              </a>
            </li>`;
    return acc;
  }, ``);
  document.querySelector('.gallery').insertAdjacentHTML('beforeend', markup);
};

renderGalleryMarkup(galleryItems);


var carousel = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.7,
  // captionSelector: (this) => { return console.log(this) },
  captionType: "attr",
  captionsData: "alt",
  captionsDelay: 250

});

