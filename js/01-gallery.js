import { galleryItems } from './gallery-items.js';
let modalImage;
// Change code below this line

// console.log(galleryItems);

const renderGalleryMarkup = gallery => {
  const markup = gallery.reduce((acc, { original, preview, description }) => {
    acc += `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div >`;
    return acc;
  }, ``);
  document.querySelector('.gallery').insertAdjacentHTML('beforeend', markup);
};

function onEscapeBtnClick(e) {
  if (e.key === 'Escape') {
    modalImage.close();
  }
}

renderGalleryMarkup(galleryItems);

document.querySelector('.gallery').addEventListener('click', onImageThumbnailClick);

function onImageThumbnailClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  } else {
    event.preventDefault();
    const originalImgUrl = event.target.dataset.source;
    const imgEl = event.target;
    imgEl.src = originalImgUrl;
    modalImage = basicLightbox.create(imgEl.parentNode.innerHTML, {
      closable: true,
      onShow: modalImage => {
        document.querySelector('body').addEventListener('keydown', onEscapeBtnClick);
      },
      onClose: modalImage => {
        document.querySelector('body').removeEventListener('keydown', onEscapeBtnClick);
      },
    });
    modalImage.show();
  }
}
