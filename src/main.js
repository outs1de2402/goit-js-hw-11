import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
gallery.style.display = 'grid';
gallery.style.gridTemplateColumns = 'repeat(3, 1fr)';
gallery.style.gap = '10px';

gallery.querySelectorAll('.gallery-image').forEach(img => {
  img.style.width = '100%';
  img.style.height = 'auto';
});

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
    });
    return;
  }

  gallery.innerHTML = '';
  loader.style.display = 'block';

  const images = await fetchImages(query);
  loader.style.display = 'none';

  if (images.length === 0) {
    iziToast.warning({
      title: 'No Results',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  } else {
    renderGallery(images);
  }
});
