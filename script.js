let current = 0;
    const images = document.querySelectorAll('.carousel img');

    function showSlide(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }

    function nextSlide() {
      current = (current + 1) % images.length;
      showSlide(current);
    }

    function prevSlide() {
      current = (current - 1 + images.length) % images.length;
      showSlide(current);
    }

    // Optional: Auto slide
    setInterval(nextSlide, 5000);