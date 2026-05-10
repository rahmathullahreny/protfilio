// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Close mobile menu when clicking a link
document.querySelectorAll('#mobileMenu a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Back to top button
const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
  if (!topBtn) return;

  if (window.scrollY > 400) {
    topBtn.classList.remove('hidden');
  } else {
    topBtn.classList.add('hidden');
  }
});

if (topBtn) {
  topBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Contact form message
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

if (contactForm && formMsg) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    formMsg.classList.remove('hidden');
    contactForm.reset();

    setTimeout(() => {
      formMsg.classList.add('hidden');
    }, 4000);
  });
}

// Active navbar link while scrolling
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header a[href^="#"]');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('text-secondary');

    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('text-secondary');
    }
  });
});

// Simple reveal animation on scroll
const revealElements = document.querySelectorAll('.skill-card, .work-card, .glass');

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.classList.add('opacity-100', 'translate-y-0');
      element.classList.remove('opacity-0', 'translate-y-6');
    }
  });
};

revealElements.forEach((element) => {
  element.classList.add('opacity-0', 'translate-y-6', 'transition', 'duration-700');
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
