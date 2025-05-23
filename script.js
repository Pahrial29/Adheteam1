
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.hero, section').forEach(el => {
      el.classList.remove('visible'); // reset dulu
      observer.observe(el);
    });
  