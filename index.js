// Preloader
window.addEventListener('load', function() {
  const preloader = document.getElementById('site-preloader');
  if (preloader) {
    preloader.style.transition = 'opacity 0.5s ease';
    preloader.style.opacity = '0';
    setTimeout(() => preloader.remove(), 500);
  }
});

// Vanilla JS to restore interactivity

// Navigation Dropdowns
(function() {
  let openDropdown = null;

  document.querySelectorAll('.nav-dropdown-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const dropdownId = 'dropdown-' + this.dataset.dropdown;
      const dropdown = document.getElementById(dropdownId);

      // Close currently open dropdown if different
      if (openDropdown && openDropdown !== dropdown) {
        openDropdown.classList.add('hidden');
        const openBtn = document.querySelector(`[data-dropdown="${openDropdown.id.replace('dropdown-', '')}"]`);
        if (openBtn) {
          openBtn.querySelector('svg').style.transform = 'rotate(0deg)';
        }
      }

      // Toggle current dropdown
      if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        this.querySelector('svg').style.transform = 'rotate(180deg)';
        openDropdown = dropdown;
      } else {
        dropdown.classList.add('hidden');
        this.querySelector('svg').style.transform = 'rotate(0deg)';
        openDropdown = null;
      }
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (openDropdown && !e.target.closest('.dropdown-menu') && !e.target.closest('.nav-dropdown-btn')) {
      openDropdown.classList.add('hidden');
      const openBtn = document.querySelector(`[data-dropdown="${openDropdown.id.replace('dropdown-', '')}"]`);
      if (openBtn) {
        openBtn.querySelector('svg').style.transform = 'rotate(0deg)';
      }
      openDropdown = null;
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && openDropdown) {
      openDropdown.classList.add('hidden');
      const openBtn = document.querySelector(`[data-dropdown="${openDropdown.id.replace('dropdown-', '')}"]`);
      if (openBtn) {
        openBtn.querySelector('svg').style.transform = 'rotate(0deg)';
      }
      openDropdown = null;
    }
  });
})();

// Scroll Animations (Intersection Observer)
(function() {
  const animatedElements = document.querySelectorAll('[style*="opacity: 0"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0) translateX(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  animatedElements.forEach(el => observer.observe(el));
})();

// Button Click Handlers
(function() {
  document.querySelectorAll('button').forEach(btn => {
    const text = btn.textContent.toLowerCase();
    if (text.includes('view analysis') || text.includes('learn more')) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Coming soon!');
      });
    }
  });

  const subscribeBtn = document.querySelector('button:has(.z-10)');
  if (subscribeBtn && subscribeBtn.textContent.includes('Subscribe')) {
    subscribeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const input = subscribeBtn.parentElement.querySelector('input[type="email"]');
      if (input && input.value) {
        alert('Thank you for subscribing with: ' + input.value);
        input.value = '';
      } else {
        alert('Please enter your email address');
      }
    });
  }
})();

// Auto-rotate image carousel
(function() {
  const slider = document.querySelector('.slick-slider');
  if (slider) {
    const track = slider.querySelector('.slick-track');
    const slides = slider.querySelectorAll('.slick-slide:not(.slick-cloned)');
    let currentSlide = 0;

    function goToSlide(index) {
      const slideWidth = slides[0]?.offsetWidth || 263;
      if (track) {
        track.style.transition = 'transform 0.5s ease';
        track.style.transform = `translate3d(-${slideWidth * index}px, 0, 0)`;
      }
      slides.forEach((slide, i) => {
        slide.classList.toggle('slick-active', i === index);
        slide.classList.toggle('slick-current', i === index);
        slide.setAttribute('aria-hidden', i !== index);
      });
    }

    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      goToSlide(currentSlide);
    }, 4000);
  }
})();

// Header scroll effect
(function() {
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }
})();
