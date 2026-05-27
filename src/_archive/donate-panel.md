# Donate Slide-Up Panel — Archived 2026-05-24

Replaced by direct Givebutter popup trigger. To restore the slide-up panel design (tier selection UI), paste these three blocks back into their respective files and revert the Givebutter trigger.

This file is under `src/_archive/` (underscore prefix) so Astro does not treat it as a page or component to build.

---

## 1. HTML — paste into `src/layouts/Layout.astro` just before the Lenis `<script>`

```html
<!-- ===== DONATE SLIDE-UP PANEL ===== -->
<div class="slide-panel-backdrop" id="donate-panel-backdrop"></div>
<div class="slide-panel donate-panel" id="donate-panel" aria-hidden="true">
  <div class="slide-panel-handle"></div>
  <div class="donate-panel-header">
    <img src="/img/star.svg" class="donate-deco donate-star-1" alt="" aria-hidden="true" />
    <img src="/img/star.svg" class="donate-deco donate-star-2" alt="" aria-hidden="true" />
    <img src="/img/love.svg" class="donate-hero-img" alt="Love" />
    <img src="/img/rock.svg" class="donate-deco donate-rock" alt="" aria-hidden="true" />
  </div>
  <div class="donate-panel-body">
    <img src="/img/butterfly.svg" class="donate-deco donate-butterfly" alt="" aria-hidden="true" />
    <label class="donate-tier">
      <input type="radio" name="donate-tier" value="friend" />
      <div class="donate-tier-card">
        <div class="donate-tier-price">$10<small>/mo</small></div>
        <div class="donate-tier-info">
          <strong>Friend</strong>
          <p>Monthly impact updates and supporter badge</p>
        </div>
      </div>
    </label>
    <label class="donate-tier">
      <input type="radio" name="donate-tier" value="escape-club" checked />
      <div class="donate-tier-card donate-tier-featured">
        <div class="donate-tier-price">$50<small>/mo</small></div>
        <div class="donate-tier-info">
          <strong>Escape Club Member</strong>
          <p>Expert workshops, small groups, and impact reports</p>
        </div>
      </div>
    </label>
    <label class="donate-tier">
      <input type="radio" name="donate-tier" value="champion" />
      <div class="donate-tier-card">
        <div class="donate-tier-price">$100+<small>/mo</small></div>
        <div class="donate-tier-info">
          <strong>Champion</strong>
          <p>Advisory input, recognition, and leadership calls</p>
        </div>
      </div>
    </label>
    <div class="donate-actions">
      <button type="button" class="btn btn-ghost donate-cancel">cancel</button>
      <a href="#" class="btn btn-primary donate-continue">continue</a>
    </div>
    <p class="donate-note">Army Pink is a 501(c)(3) nonprofit. Donations are processed securely through Givebutter and are tax-deductible.</p>
  </div>
</div>
```

---

## 2. CSS — paste into `public/styles.css` (was around line 893, after the `.slide-panel*` rules)

```css
.donate-panel {
  background: var(--pink-pale);
}

.donate-panel-header {
  position: relative;
  display: flex;
  justify-content: center;
  padding: var(--space-lg) var(--space-md) var(--space-sm);
  overflow: visible;
}

.donate-hero-img {
  width: 200px;
  height: auto;
}

.donate-deco {
  position: absolute;
  pointer-events: none;
}

.donate-star-1 {
  width: 28px;
  top: 50px;
  left: 15%;
}

.donate-star-2 {
  width: 22px;
  top: 12px;
  right: 15%;
}

.donate-rock {
  width: 50px;
  bottom: -70px;
  right: 15%;
  transition: bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
}

.donate-panel.active .donate-rock {
  bottom: -40px;
}

.donate-butterfly {
  width: 40px;
  position: absolute;
  top: 2px;
  left: var(--space-md);
}

.donate-panel-body {
  position: relative;
  padding: var(--space-md) var(--space-lg) var(--space-lg);
}

.donate-tier {
  display: block;
  cursor: pointer;
  margin-bottom: var(--space-sm);
}

.donate-tier input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.donate-tier-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-md);
  align-items: center;
  background: var(--white);
  border: 2px solid transparent;
  border-radius: 1rem;
  padding: var(--space-md);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.donate-tier input:checked + .donate-tier-card {
  border-color: var(--pink);
  box-shadow: 0 0 0 1px var(--pink);
}

.donate-tier-featured {
  border-color: var(--pink-light);
}

.donate-tier-price {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text);
  white-space: nowrap;
}

.donate-tier-price small {
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--text-muted);
}

.donate-tier-info strong {
  display: block;
  font-size: 0.95rem;
  margin-bottom: 0.2rem;
}

.donate-tier-info p {
  font-size: 0.85rem;
  color: var(--text-light);
  line-height: 1.5;
}

.donate-actions {
  display: flex;
  gap: var(--space-sm);
  justify-content: center;
  margin-top: var(--space-lg);
}

.donate-actions .btn {
  min-width: 140px;
  text-align: center;
}

.donate-cancel {
  background: transparent;
  border-color: var(--beige-dark);
  color: var(--text-light);
}

.donate-cancel:hover {
  background: var(--white);
  border-color: var(--text-muted);
}

.donate-note {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-align: center;
  margin-top: var(--space-md);
  line-height: 1.5;
}
```

---

## 3. JS — paste into `public/script.js` (was around line 524, inside the IIFE)

```js
// --- Donate Slide-Up Panel ---
var donatePanel = document.getElementById('donate-panel');
var donateBackdrop = document.getElementById('donate-panel-backdrop');

function openDonatePanel() {
  donatePanel.classList.add('active');
  donatePanel.setAttribute('aria-hidden', 'false');
  donateBackdrop.classList.add('active');
  document.body.classList.add('overlay-open');
}

function closeDonatePanel() {
  donatePanel.classList.remove('active');
  donatePanel.setAttribute('aria-hidden', 'true');
  donateBackdrop.classList.remove('active');
  document.body.classList.remove('overlay-open');
}

if (donatePanel && donateBackdrop) {
  document.querySelectorAll('[data-donate-panel]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openDonatePanel();
    });
  });

  donateBackdrop.addEventListener('click', closeDonatePanel);

  donatePanel.querySelector('.donate-cancel').addEventListener('click', closeDonatePanel);

  donatePanel.querySelector('.slide-panel-handle').addEventListener('click', closeDonatePanel);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && donatePanel.classList.contains('active')) {
      closeDonatePanel();
    }
  });

  // Swipe down to dismiss
  var dStartY = 0, dCurrentY = 0, dSwiping = false;
  donatePanel.addEventListener('touchstart', function (e) {
    if (donatePanel.scrollTop > 0) return;
    dStartY = e.touches[0].pageY;
    dSwiping = true;
    donatePanel.style.transition = 'none';
  }, { passive: true });

  donatePanel.addEventListener('touchmove', function (e) {
    if (!dSwiping) return;
    dCurrentY = e.touches[0].pageY;
    var dy = dCurrentY - dStartY;
    if (dy > 0) donatePanel.style.transform = 'translateY(' + dy + 'px)';
  }, { passive: true });

  donatePanel.addEventListener('touchend', function () {
    if (!dSwiping) return;
    dSwiping = false;
    donatePanel.style.transition = '';
    if (dCurrentY - dStartY > 100) {
      closeDonatePanel();
    } else {
      donatePanel.style.transform = '';
    }
  });
}
```

---

## 4. Required SVG assets

The panel uses these files (all already in `public/img/`):

- `love.svg`
- `rock.svg`
- `star.svg`
- `butterfly.svg`

Don't delete them — other places (or future restoration) depend on them.

## When you restore

1. Remove the Givebutter trigger JS that replaced the panel JS.
2. Remove the hidden `<givebutter-button>` and `<script src="widgets.givebutter.com/...">` from `Layout.astro`.
3. Paste all three blocks above back into their original locations.
4. Re-wire the Continue button to trigger Givebutter (see git history pre-2026-05-24 for any previous wiring, or implement via Givebutter URL params on the Continue link).
