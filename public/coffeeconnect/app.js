'use strict';
// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  // Close on link click (mobile)
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// Smooth scroll for anchor links
const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach(link => {
  link.addEventListener('click', e => {
    const hash = link.getAttribute('href');
    if (hash.length > 1) {
      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Portfolio filtering (simple, no lib)
const filters = document.querySelectorAll('.filter');
const gridItems = document.querySelectorAll('.grid__item');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter.is-active')?.classList.remove('is-active');
    btn.classList.add('is-active');
    const value = btn.dataset.filter;
    gridItems.forEach(item => {
      const show = value === 'all' || item.classList.contains(value);
      item.style.display = show ? 'block' : 'none';
    });
  });
});

// Testimonials carousel buttons
const track = document.getElementById('testimonialTrack');
const prev = document.querySelector('.carousel__btn.prev');
const next = document.querySelector('.carousel__btn.next');
if (track && prev && next) {
  const step = () => track.querySelector('.quote')?.clientWidth || 320;
  prev.addEventListener('click', () => track.scrollBy({ left: -step() - 16, behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: step() + 16, behavior: 'smooth' }));
}

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
