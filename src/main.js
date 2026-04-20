// Header Scroll Effect
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const mobileNav = document.getElementById('mobile-nav');
const projectsTrigger = document.querySelector('.mobile-label');
const projectsDropdown = document.querySelector('.mobile-sub-menu');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
  });
}

if (projectsTrigger && projectsDropdown) {
  projectsTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    projectsDropdown.classList.toggle('open');
    const arrow = projectsTrigger.querySelector('.dropdown-arrow');
    if (arrow) {
      arrow.style.transform = projectsDropdown.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
    }
  });
}

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileToggle.classList.remove('active');
    mobileNav.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

// FAQ Toggle
window.toggleFaq = function (btn) {
  const answer = btn.nextElementSibling;
  const allAnswers = document.querySelectorAll('.faq-a');
  const allBtns = document.querySelectorAll('.faq-q');
  allAnswers.forEach((a, i) => {
    if (a !== answer) {
      a.classList.remove('open');
      allBtns[i].classList.remove('open');
    }
  });
  answer.classList.toggle('open');
  btn.classList.toggle('open');
}

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Form submission
window.sendToSheet = async function (e) {
  e.preventDefault();

  const data = {
    name: document.querySelector('input[placeholder="Your Full Name"]').value,
    phone: document.querySelector('input[placeholder="Your Mobile Number"]').value,
    email: document.querySelector('input[placeholder="Your Email Address"]').value,
    interest: document.querySelectorAll('select')[0].value,
    budget: document.querySelectorAll('select')[1].value
  };

  try {
    await fetch("https://script.google.com/macros/s/AKfycbytOpOPkxiVJF6EKgLnuvR1DMhMqiGbPz6kknc5p6uC3XS1sRCbcLqYVFG0F4E3J3Q/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data)
    });

    alert("Thank you! We will contact you soon.");

    const btn = document.querySelector('.form-submit');
    if (btn) {
      btn.innerHTML = '✅ Request Sent! We\'ll call you shortly.';
      btn.style.background = 'linear-gradient(135deg, #1A7A4A, #0F5C35)';
      btn.style.color = '#fff';
    }

    window.open("https://wa.me/917995843339", "_blank");
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}

// Firebase Configuration (Standard Import for Vite)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBrwDzp_ozvO64zJt-o1tXHbHsaRZkHnKU",
  authDomain: "avighna-dev-buliders.firebaseapp.com",
  projectId: "avighna-dev-buliders",
  storageBucket: "avighna-dev-buliders.firebasestorage.app",
  messagingSenderId: "45417754635",
  appId: "1:45417754635:web:73b0200173c180d020d70e",
  measurementId: "G-ZE3YMQEGQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
