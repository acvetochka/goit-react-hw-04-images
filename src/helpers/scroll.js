// import { gallery } from '../index';

// const gallery = document.querySelector('#gallery');

// export function scroll() {
//   console.dir(gallery);
//   if (!gallery.firstElementChild) {
//     return;
//   } else {
//     const { height: cardHeight } =
//       gallery.firstElementChild.getBoundingClientRect();

//     window.scroll({
//       top: cardHeight * 2,
//       behavior: 'smooth',
//     });
//   }
// }

export const scroll = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};
