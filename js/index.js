    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
      if (window.scrollY > Math.round(window.innerHeight)) { // change after 50px of scrolling
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });