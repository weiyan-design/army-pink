/* ============================================
   Army Pink — Landing Page Scripts
   Minimal, trauma-informed interactions
   ============================================ */

(function () {
  'use strict';

  // --- Safe Exit ---
  function safeExit() {
    window.location.replace('https://www.google.com');
  }

  var safeExitBtn = document.getElementById('safeExitBtn');
  if (safeExitBtn) {
    safeExitBtn.addEventListener('click', safeExit);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var hasActivePanel = document.querySelector(
      '.overlay.active, .slide-panel.active'
    );
    if (!hasActivePanel) safeExit();
  });

  // --- Header height → --app-header-h, kept in sync for every page so any
  //     full-bleed hero (.hero-bleed / .sky-hero) underlaps the nav flush. ---
  var appHeaderEl = document.querySelector('.site-header');
  function syncAppHeaderH() {
    if (appHeaderEl) {
      document.documentElement.style.setProperty('--app-header-h', appHeaderEl.offsetHeight + 'px');
    }
  }
  syncAppHeaderH();
  window.addEventListener('resize', syncAppHeaderH);

  // --- Sky hero: keeps the sky flush behind the transparent nav, plays a
  //     staggered landing reveal, parallaxes the clouds on scroll, and flips the
  //     nav to solid once the hero has scrolled past. Clicking the video opens the
  //     sound-on popup (wired below via [data-hero-thumb]). ---
  var skyHero = document.querySelector('[data-sky-hero]');
  if (skyHero) {
    var clouds = Array.prototype.slice.call(skyHero.querySelectorAll('[data-cloud-speed]'));
    var skyReduceMo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Reveal on load (wait a frame so the transition runs from the start state).
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { skyHero.classList.add('is-revealed'); });
    });

    var skyTicking = false;
    function onSkyScroll() {
      if (skyTicking) return;
      skyTicking = true;
      requestAnimationFrame(function () {
        var y = window.pageYOffset || document.documentElement.scrollTop || 0;
        var heroH = skyHero.offsetHeight;
        // Clouds drift only while the hero is on screen.
        if (!skyReduceMo && y < heroH) {
          for (var i = 0; i < clouds.length; i++) {
            var sp = parseFloat(clouds[i].getAttribute('data-cloud-speed')) || 0;
            clouds[i].style.setProperty('--cloud-y', (y * sp).toFixed(1) + 'px');
          }
        }
        skyTicking = false;
      });
    }
    window.addEventListener('scroll', onSkyScroll, { passive: true });
    onSkyScroll();
  }

  // --- Adaptive nav: the floating pill swaps light / dark / transparent based on
  //     the [data-nav-theme] section currently behind it. Untagged pages/sections
  //     default to light glass; a section tagged "dark" forces the dark variant,
  //     "hero" makes it fully transparent. ---
  var navEl = document.querySelector('.main-nav');
  var navPill = navEl && navEl.querySelector('.nav-inner');
  if (navEl && navPill) {
    var navThemed = Array.prototype.slice.call(document.querySelectorAll('[data-nav-theme]'));
    var NAV_TOP = 24; // px of scroll before the contained pill appears
    function navApply(cls) {
      if (navEl.classList.contains(cls)) return;
      navEl.classList.remove('is-transparent', 'is-light', 'is-dark');
      navEl.classList.add(cls);
    }
    function navUpdate() {
      var y = window.pageYOffset || document.documentElement.scrollTop || 0;
      var probe = navPill.getBoundingClientRect().bottom;
      var theme = null;
      for (var i = 0; i < navThemed.length; i++) {
        var r = navThemed[i].getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) { theme = navThemed[i].getAttribute('data-nav-theme'); break; }
      }
      var media = (theme === 'hero' || theme === 'dark');
      // Transparent only at the very top over a media hero; otherwise the
      // contained pill shows (dark glass over media, light glass over light).
      if (y < NAV_TOP && media) {
        navApply('is-transparent');
      } else {
        navApply(media ? 'is-dark' : 'is-light');
      }
    }
    var navTicking = false;
    function onNavScroll() {
      if (navTicking) return;
      navTicking = true;
      requestAnimationFrame(function () { navUpdate(); navTicking = false; });
    }
    window.addEventListener('scroll', onNavScroll, { passive: true });
    window.addEventListener('resize', onNavScroll);
    navUpdate();
  }

  // --- Hero click-to-toggle + spacebar (while hero in view) ---
  var heroVideo = document.querySelector('.home-hero-video');
  var heroVideoBg = document.querySelector('.home-hero-video-bg');
  var heroSection = document.querySelector('.home-hero');
  if (heroVideo && heroSection) {
    function syncHeroState() {
      heroSection.classList.toggle('is-paused', heroVideo.paused || heroVideo.ended);
      heroSection.classList.toggle('is-muted', heroVideo.muted);
      // Mirror play/pause onto the blurred backdrop so a paused hero freezes both.
      if (heroVideoBg) {
        if (heroVideo.paused) {
          heroVideoBg.pause();
        } else if (heroVideoBg.paused) {
          try { heroVideoBg.currentTime = heroVideo.currentTime; } catch (e) {}
          heroVideoBg.play().catch(function () {});
        }
      }
    }

    // Muted autoplay (allowed by browsers); sync state either way.
    var attempt = heroVideo.play();
    if (attempt && typeof attempt.then === 'function') {
      attempt.then(syncHeroState).catch(syncHeroState);
    } else {
      syncHeroState();
    }

    heroVideo.addEventListener('play', syncHeroState);
    heroVideo.addEventListener('pause', syncHeroState);
    heroVideo.addEventListener('volumechange', syncHeroState);

    function toggleHeroVideo() {
      // First interaction while muted: turn sound on, keep playing — don't pause.
      if (heroVideo.muted) {
        heroVideo.muted = false;
        if (heroVideo.paused) heroVideo.play().catch(function () {});
        return;
      }
      if (heroVideo.paused) {
        heroVideo.play().catch(function () {});
      } else {
        heroVideo.pause();
      }
    }

    heroSection.addEventListener('click', toggleHeroVideo);

    // Spacebar: toggle only while hero is in view and no input/button is focused.
    document.addEventListener('keydown', function (e) {
      if (e.key !== ' ' && e.code !== 'Space') return;
      if (window.scrollY >= window.innerHeight - 40) return;
      var ae = document.activeElement;
      var tag = ae && ae.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'BUTTON' ||
          tag === 'SELECT' || tag === 'A' || (ae && ae.isContentEditable)) return;
      if (document.querySelector('.overlay.active, .slide-panel.active')) return;
      e.preventDefault();
      toggleHeroVideo();
    });
  }

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

  // --- Stats columns parallax (right column drifts up faster than left) ---
  var statsCells = document.querySelector('.stats-cells');
  if (statsCells && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var statsCols = statsCells.querySelectorAll('.stats-col');
    if (statsCols.length === 2) {
      var COL_DRIFT = [36, 280]; // total upward px of travel: [left, right]

      function updateStatsParallax() {
        // Measure the untransformed parent — the cols' own rects move as
        // they're translated, which would feed back into the math.
        var r = statsCells.getBoundingClientRect();
        var vh = window.innerHeight;
        var p = Math.max(0, Math.min(1, (vh - r.top) / (vh + r.height)));
        var centered = p - 0.5; // 0 at mid-journey = natural position
        statsCols[0].style.transform =
          'translate3d(0,' + (-centered * COL_DRIFT[0]).toFixed(1) + 'px,0)';
        statsCols[1].style.transform =
          'translate3d(0,' + (-centered * COL_DRIFT[1]).toFixed(1) + 'px,0)';
      }

      window.addEventListener('scroll', updateStatsParallax, { passive: true });
      window.addEventListener('resize', updateStatsParallax);
      updateStatsParallax();
    }
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

  // --- Donate: trigger Givebutter popup ---
  document.querySelectorAll('[data-donate-panel]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var gb = document.getElementById('gb-trigger');
      // Try in order: descendant button (light DOM), shadow-root button, host element itself
      var target = null;
      if (gb) {
        target = gb.querySelector('button, a');
        if (!target && gb.shadowRoot) target = gb.shadowRoot.querySelector('button, a');
        if (!target) target = gb;
      }
      if (target && typeof target.click === 'function') {
        target.click();
      } else {
        // Fallback: hosted page in a new tab
        window.open('https://givebutter.com/pathwaytofreedom', '_blank', 'noopener');
      }
    });
  });

  // --- Class Slide-Up Panel ---
  var slidePanel = document.getElementById('slide-panel');
  var slideBackdrop = document.getElementById('slide-panel-backdrop');
  var slidePanelImg = document.getElementById('slide-panel-img');
  var slidePanelTitle = document.getElementById('slide-panel-title');
  var slidePanelCategory = document.getElementById('slide-panel-category');
  var slidePanelLevel = document.getElementById('slide-panel-level');
  var slidePanelDesc = document.getElementById('slide-panel-desc');
  var slidePanelLink = document.getElementById('slide-panel-link');

  function openSlidePanel(data) {
    slidePanelImg.src = data.img;
    slidePanelImg.alt = data.title;
    slidePanelTitle.textContent = data.title;
    slidePanelCategory.textContent = data.category;
    slidePanelLevel.textContent = data.level;
    slidePanelDesc.textContent = data.desc;
    slidePanelLink.href = data.link;
    slidePanel.classList.add('active');
    slidePanel.setAttribute('aria-hidden', 'false');
    slideBackdrop.classList.add('active');
    document.body.classList.add('overlay-open');
  }

  function closeSlidePanel() {
    slidePanel.classList.remove('active');
    slidePanel.setAttribute('aria-hidden', 'true');
    slideBackdrop.classList.remove('active');
    document.body.classList.remove('overlay-open');
  }

  if (slidePanel && slideBackdrop) {
    // Open on card click
    document.querySelectorAll('[data-slide-panel]').forEach(function (card) {
      card.addEventListener('click', function (e) {
        e.preventDefault();
        openSlidePanel({
          title: this.dataset.title,
          category: this.dataset.category,
          level: this.dataset.level,
          desc: this.dataset.desc,
          link: this.dataset.link,
          img: this.dataset.img
        });
      });
    });

    // Close on backdrop click
    slideBackdrop.addEventListener('click', closeSlidePanel);

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && slidePanel.classList.contains('active')) {
        closeSlidePanel();
      }
    });

    // Swipe down to dismiss
    var panelStartY = 0;
    var panelCurrentY = 0;
    var panelSwiping = false;

    slidePanel.addEventListener('touchstart', function (e) {
      if (slidePanel.scrollTop > 0) return;
      panelStartY = e.touches[0].pageY;
      panelSwiping = true;
      slidePanel.style.transition = 'none';
    }, { passive: true });

    slidePanel.addEventListener('touchmove', function (e) {
      if (!panelSwiping) return;
      panelCurrentY = e.touches[0].pageY;
      var dy = panelCurrentY - panelStartY;
      if (dy > 0) {
        slidePanel.style.transform = 'translateY(' + dy + 'px)';
      }
    }, { passive: true });

    slidePanel.addEventListener('touchend', function () {
      if (!panelSwiping) return;
      panelSwiping = false;
      slidePanel.style.transition = '';
      var dy = panelCurrentY - panelStartY;
      if (dy > 100) {
        closeSlidePanel();
      } else {
        slidePanel.style.transform = '';
      }
    });

    // Handle click on drag handle to close
    slidePanel.querySelector('.slide-panel-handle').addEventListener('click', closeSlidePanel);
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

  // --- Feature Carousel (Stripe-style active-tile rotator) ---
  // Active card always sits leftmost (widest slot). Clicking a card rotates
  // the array so the clicked card moves to slot 0; cards that were to its left
  // wrap around to the rightmost narrow slots. Slot widths are fixed and
  // stepped (widest → narrowest, left → right).
  var FC_SLOT_WEIGHTS = [10, 5, 2, 1, 0.8];
  var FC_GAP = 8;
  var FC_MOBILE_MAX = 768;

  document.querySelectorAll('[data-feature-carousel]').forEach(function (root) {
    var track   = root.querySelector('.fc-track');
    var cards   = Array.prototype.slice.call(root.querySelectorAll('.fc-card'));
    var caption = root.querySelector('.fc-caption');
    var cta     = root.querySelector('.fc-cta');
    var ctaLbl  = root.querySelector('.fc-cta__label');
    var prev    = root.querySelector('.fc-arrow--prev');
    var next    = root.querySelector('.fc-arrow--next');
    if (!track || cards.length === 0) return;

    var captions  = cards.map(function (c) { return c.getAttribute('data-caption') || ''; });
    var ctaHrefs  = cards.map(function (c) { return c.getAttribute('data-cta-href'); });
    var ctaLabels = cards.map(function (c) { return c.getAttribute('data-cta-label') || ''; });

    function syncCta() {
      if (!cta) return;
      var href = ctaHrefs[active];
      if (href) {
        cta.setAttribute('href', href);
        if (ctaLbl) ctaLbl.textContent = ctaLabels[active];
        cta.style.display = '';
      } else {
        cta.style.display = 'none';
      }
    }
    var active = 0;
    var N = cards.length;

    // Pad slot weights if there are more cards than configured weights
    var weights = [];
    for (var w = 0; w < N; w++) {
      weights.push(FC_SLOT_WEIGHTS[w] !== undefined ? FC_SLOT_WEIGHTS[w] : 0.5);
    }
    var totalWeight = weights.reduce(function (a, b) { return a + b; }, 0);

    function layout() {
      var isMobile = window.innerWidth <= FC_MOBILE_MAX;

      if (isMobile) {
        cards.forEach(function (card, idx) {
          var isActive = idx === active;
          card.style.display = isActive ? '' : 'none';
          card.style.left = '0px';
          card.style.width = '100%';
          card.classList.toggle('is-active', isActive);
        });
        return;
      }

      var trackW = track.clientWidth;
      var totalGap = FC_GAP * (N - 1);
      var availW = Math.max(0, trackW - totalGap);

      var slotWidths = weights.map(function (wt) { return (wt / totalWeight) * availW; });
      var slotLefts = [];
      var accum = 0;
      for (var s = 0; s < N; s++) {
        slotLefts.push(accum);
        accum += slotWidths[s] + FC_GAP;
      }

      // Lock the image's visual size to the widest slot so the picture inside
      // doesn't resize when the card frame expands/contracts.
      track.style.setProperty('--fc-active-width', slotWidths[0] + 'px');

      cards.forEach(function (card, idx) {
        var slot = ((idx - active) % N + N) % N;
        card.style.display = '';
        card.style.left = slotLefts[slot] + 'px';
        card.style.width = slotWidths[slot] + 'px';
        card.classList.toggle('is-active', slot === 0);
      });
    }

    function setActive(i) {
      var newActive = ((i % N) + N) % N;
      if (newActive === active) return;
      active = newActive;
      layout();
      if (caption) {
        caption.classList.add('is-fading');
        if (cta) cta.classList.add('is-fading');
        setTimeout(function () {
          caption.textContent = captions[active];
          syncCta();
          caption.classList.remove('is-fading');
          if (cta) cta.classList.remove('is-fading');
        }, 180);
      } else {
        syncCta();
      }
    }

    if (prev) prev.addEventListener('click', function () { setActive(active - 1); });
    if (next) next.addEventListener('click', function () { setActive(active + 1); });
    cards.forEach(function (card, idx) {
      card.addEventListener('click', function () {
        if (idx !== active) setActive(idx);
      });
    });

    // Initial layout, then enable transitions and fade cards in
    layout();
    syncCta();
    requestAnimationFrame(function () { track.classList.add('fc-track--ready'); });

    window.addEventListener('resize', layout);
  });

  // --- Partner Strip (hover-reveal on desktop via CSS; click toggle for touch) ---
  document.querySelectorAll('[data-partner-track]').forEach(function (track) {
    var tiles = Array.prototype.slice.call(track.querySelectorAll('.partner-tile'));
    tiles.forEach(function (tile) {
      tile.addEventListener('click', function () {
        var wasActive = tile.classList.contains('is-active');
        tiles.forEach(function (t) { t.classList.remove('is-active'); });
        if (!wasActive) tile.classList.add('is-active');
      });
    });
  });

  // --- Hero video thumbnail → full-video popup ---
  var heroThumb = document.querySelector('[data-hero-thumb]');
  var videoModal = document.getElementById('heroVideoModal');
  if (heroThumb && videoModal) {
    var modalVid = videoModal.querySelector('.video-modal__vid');
    var thumbVid = heroThumb.querySelector('video');
    var closeBtn = videoModal.querySelector('.video-modal__close');

    function openVideoModal() {
      videoModal.hidden = false;
      videoModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (thumbVid) thumbVid.pause();
      if (modalVid) {
        try { modalVid.currentTime = 0; } catch (e) {}
        modalVid.muted = false;
        var p = modalVid.play();
        if (p && p.catch) p.catch(function () {});
      }
      if (closeBtn) closeBtn.focus();
    }

    function closeVideoModal() {
      if (modalVid) modalVid.pause();
      videoModal.hidden = true;
      videoModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (thumbVid) thumbVid.play().catch(function () {});
      heroThumb.focus();
    }

    heroThumb.addEventListener('click', openVideoModal);
    videoModal.querySelectorAll('[data-close]').forEach(function (el) {
      el.addEventListener('click', closeVideoModal);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !videoModal.hidden) closeVideoModal();
    });
  }

  // --- Hero Flower Scroll Rotation (escape-club wavy hero) ---
  var flower = document.querySelector('.hero-flower');
  if (flower) {
    var flowerHero = document.querySelector('.hero');
    window.addEventListener('scroll', function () {
      var rect = flowerHero.getBoundingClientRect();
      var progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
      flower.style.transform = 'rotate(' + (progress * 180) + 'deg)';
    }, { passive: true });
  }
})();

