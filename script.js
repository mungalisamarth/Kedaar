/* Kedaar.ca — scroll reveal + small interactions */
(function () {
  'use strict';

  // ---- Year in footer ----
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- IntersectionObserver reveals ----
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: just show everything
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ---- Subtle parallax on hero blobs ----
  var blobs = document.querySelectorAll('.section-hero .blob');
  var hero = document.querySelector('.section-hero');
  if (blobs.length && hero) {
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      if (y > window.innerHeight) return; // only while hero is on screen
      blobs.forEach(function (b, i) {
        var speed = (i + 1) * 0.06;
        b.style.transform = 'translate3d(0,' + (y * speed) + 'px, 0)';
      });
    }, { passive: true });
  }

  // ---- Floating buy button: hide near footer to avoid overlap ----
  var buyBtn = document.querySelector('.floating-buy');
  var footer = document.querySelector('.site-footer');
  if (buyBtn && footer) {
    var hideObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          buyBtn.style.opacity = '0';
          buyBtn.style.pointerEvents = 'none';
          buyBtn.style.transform = 'translateY(20px)';
        } else {
          buyBtn.style.opacity = '';
          buyBtn.style.pointerEvents = '';
          buyBtn.style.transform = '';
        }
      });
    }, { threshold: 0.1 });
    hideObs.observe(footer);
  }

  // ---- Active section highlight in topnav ----
  var navLinks = document.querySelectorAll('.topnav a[href^="#"]');
  if (navLinks.length) {
    var linkMap = {};
    navLinks.forEach(function (a) {
      var id = a.getAttribute('href').replace('#', '');
      if (id) linkMap[id] = a;
    });
    var sections = document.querySelectorAll('.section[id]');
    var navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.id;
        var link = linkMap[id];
        if (!link) return;
        if (entry.isIntersecting) {
          Object.keys(linkMap).forEach(function (k) { linkMap[k].classList.remove('is-active'); });
          link.classList.add('is-active');
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(function (s) { navObs.observe(s); });
  }

})();
