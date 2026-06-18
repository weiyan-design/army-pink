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

  // --- Hero stage: pinned scroll transition. The fullscreen video shrinks into
  //     the upper area while the mission statement rises up to meet it; the
  //     statement's char-blur reveal is driven by the same progress. ---
  var heroStage = document.getElementById('home');
  var statementTextEl = document.getElementById('statementText');
  if (heroStage && heroStage.classList.contains('hero-stage') && statementTextEl) {
    var heroScrub = document.getElementById('heroScrub');
    var heroMission = document.getElementById('heroMission');
    var scrubPlay = heroScrub && heroScrub.querySelector('.hero-scrub__play');
    var siteHeader = document.querySelector('.site-header');
    var reduceMo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function splitToChars(el) {
      var words = el.textContent.trim().split(/\s+/);
      var html = '';
      for (var w = 0; w < words.length; w++) {
        html += '<span class="statement-word">';
        for (var c = 0; c < words[w].length; c++) html += '<span class="statement-char">' + words[w][c] + '</span>';
        html += '</span>';
        if (w < words.length - 1) html += '<span class="statement-space"> </span>';
      }
      el.innerHTML = html;
    }
    var pillEl = heroMission && heroMission.querySelector('.pill-label');
    if (pillEl) splitToChars(pillEl);
    splitToChars(statementTextEl);
    var chars = heroMission ? heroMission.querySelectorAll('.statement-char') : [];
    var REVEAL_WINDOW = 0.14, MAX_BLUR = 8;

    function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

    function updateHero() {
      var vw = window.innerWidth, vh = window.innerHeight;
      var stageRect = heroStage.getBoundingClientRect();
      var scrollable = heroStage.offsetHeight - vh; // ~1 viewport of scrub
      var p = (reduceMo || scrollable <= 0) ? 1 : clamp01(-stageRect.top / scrollable);
      var e = 1 - Math.pow(1 - p, 3); // easeOutCubic

      var hH = siteHeader ? siteHeader.offsetHeight : 0;
      var Wf = Math.max(280, Math.min(vw * 0.4, 520)); // docked thumb width
      var Hf = Wf * 9 / 16;
      var dockTop = hH + 0.15 * vh;                     // sits ~15% viewport below the header

      if (heroScrub) {
        var W = vw + (Wf - vw) * e;
        var H = vh + (Hf - vh) * e;
        heroScrub.style.width = W + 'px';
        heroScrub.style.height = H + 'px';
        heroScrub.style.left = ((vw - W) / 2) + 'px';
        heroScrub.style.top = (dockTop * e) + 'px';
        heroScrub.style.borderRadius = (20 * e) + 'px';
      }
      if (scrubPlay) scrubPlay.style.opacity = String(e);

      if (heroMission) {
        // Statement rises from the bottom of the viewport up to its docked spot
        var restingTop = dockTop + Hf + Math.max(0.03 * vh, 24);
        var startTop = vh; // off the bottom edge
        var curTop = startTop + (restingTop - startTop) * e;
        heroMission.style.top = restingTop + 'px';
        heroMission.style.transform = 'translateY(' + (curTop - restingTop) + 'px)';
        heroMission.style.opacity = '1';
        // Blur clears as it rises — fully clear when it reaches 50% viewport
        // (or by the time it docks, if it settles below the midpoint).
        var revealDoneTop = Math.max(0.5 * vh, restingTop);
        var reveal = clamp01((startTop - curTop) / Math.max(1, startTop - revealDoneTop));
        for (var i = 0; i < chars.length; i++) {
          var start = (i / chars.length) * (1 - REVEAL_WINDOW);
          var cp = clamp01((reveal - start) / REVEAL_WINDOW);
          chars[i].style.setProperty('--blur', (MAX_BLUR * (1 - cp)).toFixed(2) + 'px');
        }
      }
    }

    var heroTicking = false;
    function onHeroScroll() {
      if (heroTicking) return;
      heroTicking = true;
      requestAnimationFrame(function () { updateHero(); heroTicking = false; });
    }
    window.addEventListener('scroll', onHeroScroll, { passive: true });
    window.addEventListener('resize', updateHero);
    updateHero();
  }

  // --- Founder quote: same char-blur reveal as the mission statement ---
  var quoteSection = document.querySelector('.quote-section');
  if (quoteSection) {
    // Same splitter as the statement section (scoped copy). Only the plain
    // .q-reveal text runs are split, so the chip + dot markup survive.
    quoteSection.querySelectorAll('.q-reveal').forEach(function (seg) {
      var words = seg.textContent.trim().split(/\s+/);
      var html = '';
      for (var w = 0; w < words.length; w++) {
        html += '<span class="statement-word">';
        for (var c = 0; c < words[w].length; c++) {
          html += '<span class="statement-char">' + words[w][c] + '</span>';
        }
        html += '</span>';
        if (w < words.length - 1) html += '<span class="statement-space"> </span>';
      }
      seg.innerHTML = html;
    });

    var qChars = quoteSection.querySelectorAll('.statement-char');
    var Q_WINDOW = 0.12;
    var Q_MAX_BLUR = 8;

    function updateQuoteReveal() {
      var rect = quoteSection.getBoundingClientRect();
      // Progress 0 as the section top enters the viewport bottom; 1 exactly
      // when the section's center reaches the viewport's center.
      var span = Math.max(1, (window.innerHeight + rect.height) / 2);
      var progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / span));
      for (var i = 0; i < qChars.length; i++) {
        var start = (i / qChars.length) * (1 - Q_WINDOW);
        var p = Math.max(0, Math.min(1, (progress - start) / Q_WINDOW));
        qChars[i].style.setProperty('--blur', (Q_MAX_BLUR * (1 - p)).toFixed(2) + 'px');
      }
    }

    window.addEventListener('scroll', updateQuoteReveal, { passive: true });
    window.addEventListener('resize', updateQuoteReveal);
    updateQuoteReveal();
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
    var prev    = root.querySelector('.fc-arrow--prev');
    var next    = root.querySelector('.fc-arrow--next');
    if (!track || cards.length === 0) return;

    var captions = cards.map(function (c) { return c.getAttribute('data-caption') || ''; });
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
        setTimeout(function () {
          caption.textContent = captions[active];
          caption.classList.remove('is-fading');
        }, 180);
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

