import * as flsFunctions from './files/functions.js';

window.addEventListener('load', async () => {
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.register('js/sw.js');
      console.log('Service worker register success', reg);
    } catch (e) {
      console.log('Service worker register fail');
    }
  }
});

flsFunctions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();
