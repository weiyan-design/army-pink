/* ============================================
   Army Pink — Landing Page Scripts
   Minimal, trauma-informed interactions
   ============================================ */

(function () {
  'use strict';

  // --- Mobile Menu Toggle ---
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Box Breathing Exercise ---
  const breathToggle = document.getElementById('breath-toggle');
  const breathCircle = document.getElementById('breath-circle');
  const breathInstruction = document.getElementById('breath-instruction');
  let breathingActive = false;
  let breathTimeout = null;

  const BREATH_PHASES = [
    { name: 'Breathe in…', className: 'inhale', duration: 4000 },
    { name: 'Hold…', className: 'hold', duration: 4000 },
    { name: 'Breathe out…', className: 'exhale', duration: 4000 },
    { name: 'Hold…', className: 'hold-empty', duration: 4000 },
  ];

  function runBreathCycle(phaseIndex) {
    if (!breathingActive) return;
    const phase = BREATH_PHASES[phaseIndex];
    breathInstruction.textContent = phase.name;
    breathCircle.classList.remove('inhale', 'hold', 'exhale', 'hold-empty');
    breathCircle.classList.add(phase.className);
    breathTimeout = setTimeout(function () {
      runBreathCycle((phaseIndex + 1) % BREATH_PHASES.length);
    }, phase.duration);
  }

  if (breathToggle) {
    breathToggle.addEventListener('click', function () {
      if (breathingActive) {
        breathingActive = false;
        clearTimeout(breathTimeout);
        breathCircle.classList.remove('inhale', 'hold', 'exhale', 'hold-empty');
        breathInstruction.textContent = 'Tap to begin';
        breathToggle.textContent = 'Start breathing exercise';
      } else {
        breathingActive = true;
        breathToggle.textContent = 'Stop';
        runBreathCycle(0);
      }
    });
  }

  // --- Gentle scroll reveal (top 1/3 viewport trigger) ---
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealElements = document.querySelectorAll(
      '.card, .journey-card, .wellness-card, .community-feature, .tier, .value, .reveal-item'
    );

    revealElements.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -33% 0px' }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // --- Journey Overlays ---
  function closeOverlay(overlay) {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('overlay-open');
  }

  document.querySelectorAll('[data-overlay]').forEach(function (card) {
    card.addEventListener('click', function () {
      var overlay = document.getElementById(this.dataset.overlay);
      if (overlay) {
        overlay.classList.add('active');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('overlay-open');
        overlay.querySelector('.overlay-close').focus();
      }
    });
  });

  document.querySelectorAll('.overlay').forEach(function (overlay) {
    overlay.querySelector('.overlay-close').addEventListener('click', function () {
      closeOverlay(overlay);
    });
    overlay.querySelector('.overlay-backdrop').addEventListener('click', function () {
      closeOverlay(overlay);
    });

    overlay.querySelectorAll('[data-close-overlay]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var href = this.getAttribute('href');
        closeOverlay(overlay);
        setTimeout(function () {
          var target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 400);
      });
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var active = document.querySelector('.overlay.active');
      if (active) {
        e.stopPropagation();
        closeOverlay(active);
      }
    }
  });

  // --- Carousel Arrow Scrolling ---
  document.querySelectorAll('.carousel').forEach(function (carousel) {
    var track = carousel.querySelector('.carousel-track');
    var prev = carousel.querySelector('.carousel-prev');
    var next = carousel.querySelector('.carousel-next');
    var scrollAmount = 240;

    if (prev && next && track) {
      prev.addEventListener('click', function () {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
      next.addEventListener('click', function () {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    }
  });

  // --- Thumb Row Scroll (fade edges + arrows) ---
  document.querySelectorAll('.thumb-row-wrap').forEach(function (wrap) {
    var row = wrap.querySelector('.thumb-row');
    var prev = wrap.querySelector('.thumb-arrow-prev');
    var next = wrap.querySelector('.thumb-arrow-next');

    function updateFades() {
      var scrollLeft = row.scrollLeft;
      var maxScroll = row.scrollWidth - row.clientWidth;
      wrap.classList.toggle('fade-left', scrollLeft > 4);
      wrap.classList.toggle('fade-right', scrollLeft < maxScroll - 4);
    }

    if (row) {
      row.addEventListener('scroll', updateFades);
      window.addEventListener('resize', updateFades);
      setTimeout(updateFades, 200);
    }

    if (prev && row) {
      prev.addEventListener('click', function () {
        row.scrollBy({ left: -200, behavior: 'smooth' });
      });
    }
    if (next && row) {
      next.addEventListener('click', function () {
        row.scrollBy({ left: 200, behavior: 'smooth' });
      });
    }
  });

  // --- Featured Cards Scroll (fade edges + arrows) ---
  document.querySelectorAll('.featured-wrap').forEach(function (wrap) {
    var row = wrap.querySelector('.featured-grid');
    var prev = wrap.querySelector('.thumb-arrow-prev');
    var next = wrap.querySelector('.thumb-arrow-next');

    function updateFades() {
      var scrollLeft = row.scrollLeft;
      var maxScroll = row.scrollWidth - row.clientWidth;
      wrap.classList.toggle('fade-left', scrollLeft > 4);
      wrap.classList.toggle('fade-right', scrollLeft < maxScroll - 4);
    }

    if (row) {
      row.addEventListener('scroll', updateFades);
      window.addEventListener('resize', updateFades);
      setTimeout(updateFades, 200);
    }

    if (prev && row) {
      prev.addEventListener('click', function () {
        row.scrollBy({ left: -300, behavior: 'smooth' });
      });
    }
    if (next && row) {
      next.addEventListener('click', function () {
        row.scrollBy({ left: 300, behavior: 'smooth' });
      });
    }
  });

  // --- Drag & swipe support for scrollable rows ---
  document.querySelectorAll('.thumb-row, .featured-grid').forEach(function (row) {
    var startX = 0;
    var startY = 0;
    var scrollStart = 0;
    var isDragging = false;
    var hasDragged = false;
    var direction = null;
    var velocity = 0;
    var lastX = 0;
    var lastTime = 0;
    var momentumId = null;

    // Prevent clicks on links during/after drag
    row.addEventListener('click', function (e) {
      if (hasDragged) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);

    // Touch events
    row.addEventListener('touchstart', function (e) {
      startX = e.touches[0].pageX;
      startY = e.touches[0].pageY;
      scrollStart = row.scrollLeft;
      direction = null;
      hasDragged = false;
      if (momentumId) cancelAnimationFrame(momentumId);
    }, { passive: true });

    row.addEventListener('touchmove', function (e) {
      var dx = e.touches[0].pageX - startX;
      var dy = e.touches[0].pageY - startY;

      if (!direction) {
        direction = Math.abs(dx) > Math.abs(dy) ? 'horizontal' : 'vertical';
      }

      if (direction === 'horizontal') {
        e.preventDefault();
        row.scrollLeft = scrollStart - dx;
        if (Math.abs(dx) > 5) hasDragged = true;
      }
    }, { passive: false });

    // Mouse drag events
    row.addEventListener('mousedown', function (e) {
      isDragging = true;
      hasDragged = false;
      startX = e.pageX;
      lastX = e.pageX;
      lastTime = Date.now();
      scrollStart = row.scrollLeft;
      velocity = 0;
      row.style.cursor = 'grabbing';
      row.style.userSelect = 'none';
      if (momentumId) cancelAnimationFrame(momentumId);
      e.preventDefault();
    });

    document.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
      var now = Date.now();
      var dx = e.pageX - lastX;
      var dt = now - lastTime;
      if (dt > 0) velocity = dx / dt;
      lastX = e.pageX;
      lastTime = now;

      var totalDx = e.pageX - startX;
      row.scrollLeft = scrollStart - totalDx;
      if (Math.abs(totalDx) > 5) hasDragged = true;
    });

    document.addEventListener('mouseup', function () {
      if (!isDragging) return;
      isDragging = false;
      row.style.cursor = 'grab';
      row.style.userSelect = '';

      // Momentum scroll
      if (Math.abs(velocity) > 0.3) {
        var momentum = velocity * 150;
        var start = row.scrollLeft;
        var startTime = Date.now();
        var duration = 600;

        function step() {
          var elapsed = Date.now() - startTime;
          var progress = Math.min(elapsed / duration, 1);
          var ease = 1 - Math.pow(1 - progress, 3);
          row.scrollLeft = start - momentum * ease;
          if (progress < 1) {
            momentumId = requestAnimationFrame(step);
          }
        }
        momentumId = requestAnimationFrame(step);
      }

      setTimeout(function () { hasDragged = false; }, 10);
    });

    row.style.cursor = 'grab';
  });

  // --- Survivor Stories: Deck Fan + Shuffle ---
  var deck = document.getElementById('stories-deck');
  var quoteBox = document.getElementById('story-quote-box');
  var cards = document.querySelectorAll('.story-card');
  var quotes = document.querySelectorAll('.story-quote');
  var prevBtn = document.querySelector('.stories-prev');
  var nextBtn = document.querySelector('.stories-next');
  var storyIndex = 0;
  var hasFanned = false;
  var totalCards = cards.length;

  function layoutCards() {
    if (!hasFanned) return;
    for (var i = 0; i < totalCards; i++) {
      var offset = (i - storyIndex + totalCards) % totalCards;
      var card = cards[i];

      if (offset === 0) {
        card.style.transform = 'rotate(-8deg) translateX(-15%)';
        card.style.zIndex = totalCards + 1;
        card.style.opacity = '1';
      } else {
        var xShift = 20 + offset * 28;
        var rotation = -2 + offset * 10;
        card.style.transform = 'rotate(' + rotation + 'deg) translateX(' + xShift + '%)';
        card.style.zIndex = totalCards - offset;
        card.style.opacity = '1';
      }
    }

    quotes.forEach(function (q) { q.classList.remove('story-quote-active'); });
    quotes[storyIndex].classList.add('story-quote-active');
  }

  function showStory(idx) {
    storyIndex = (idx + totalCards) % totalCards;
    cards.forEach(function (c) { c.classList.remove('story-card-active'); });
    cards[storyIndex].classList.add('story-card-active');
    layoutCards();
  }

  if (prevBtn && nextBtn && totalCards > 0) {
    prevBtn.addEventListener('click', function () { showStory(storyIndex - 1); });
    nextBtn.addEventListener('click', function () { showStory(storyIndex + 1); });

    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        if (hasFanned) {
          showStory(parseInt(card.dataset.index));
        }
      });
    });
  }

  // Fan out when section hits middle of viewport
  if (deck) {
    var storiesSection = document.getElementById('stories');
    var fanObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !hasFanned) {
          hasFanned = true;
          deck.classList.add('fanned');
          layoutCards();
          setTimeout(function () {
            if (quoteBox) quoteBox.classList.add('visible');
          }, 800);
        }
      });
    }, { threshold: 0, rootMargin: '-33% 0px -33% 0px' });

    fanObserver.observe(storiesSection);
  }

  // --- Hero Flower Scroll Rotation ---
  var flower = document.querySelector('.hero-flower');
  if (flower) {
    var hero = document.querySelector('.hero');
    window.addEventListener('scroll', function () {
      var rect = hero.getBoundingClientRect();
      var progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
      flower.style.transform = 'rotate(' + (progress * 180) + 'deg)';
    }, { passive: true });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    if (anchor.closest('.overlay')) return;
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
