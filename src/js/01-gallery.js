// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);


// Change code below this line
const container = document.querySelector('.gallery');
//console.log(galleryItems)
const markGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="galery__item"> 
        <a class = "image__link" href = "${original}" >
    <img class = "gallery__image" src= "${preview}" 
    alt = "${description}" 
     />
    </a>
    </li>`
  )
  .join('');
container.insertAdjacentHTML('beforeend', markGallery);
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsType: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
console.log(galleryItems);