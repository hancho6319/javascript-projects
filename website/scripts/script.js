window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 50) { /* Adjust the value based on when you want the header to stick */
      header.style.position = 'fixed';
      header.style.top = '0';
    } else {
      header.style.position = 'absolute';
      header.style.top = '0';
    }
  });
  