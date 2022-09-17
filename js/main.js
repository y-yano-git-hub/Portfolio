'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const mask = document.getElementById('mask');
  const about = document.getElementById('overlay-about');
  const menu = document.getElementById('overlay-menu');
  const contact = document.getElementById('overlay-contact');
  const twitter = document.getElementById('overlay-twitter');
  const instagram = document.getElementById('overlay-instagram');

  function overlayClose(link) {
    link.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
    }); 
  };
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  overlayClose(close);
  overlayClose(mask);
  overlayClose(about);
  overlayClose(menu);
  overlayClose(contact);
  overlayClose(twitter);
  overlayClose(instagram);
}