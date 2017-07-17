import slider from './lib/slider.js';
import lb from 'lightbox2'
slider('.slider__display','.slider__prev','.slider__next');

 lb.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
