// English UI dictionary — the shared shell (Layout.astro).
// This is the reference locale: every key that exists in the app lives here
// first, then gets mirrored in es.js. Flat dot-keys, grouped by region.
//
// Page-body copy (index, mission, donate, ...) is NOT here yet — those strings
// get extracted into per-page dictionaries as each page is made i18n-ready.
// Keeping the shell separate lets it ship translated while pages follow.
export const en = {
  // <head> defaults (used when a page doesn't pass its own title/description)
  'meta.title': 'Army Pink — Pathway to Freedom',
  'meta.description':
    'Army Pink is a survivor-led initiative addressing the #1 unmet need for survivors: safe, immediate transportation out of dangerous situations. We turn compassion into action by providing urgent rides and structured wellness support, helping survivors of domestic abuse leave danger and begin again with dignity, guidance, and connection.',

  // Crisis banner — rendered with set:html so the (safety-critical) markup and
  // phone numbers stay intact and a translator can reorder freely.
  'crisis.line':
    'If you are in immediate danger, call <strong>911</strong>. &nbsp; National DV Hotline: <a href="tel:18007997233"><strong>1-800-799-7233</strong></a> &nbsp;|&nbsp; Text <strong>START</strong> to <strong>88788</strong> &nbsp;|&nbsp; <a href="https://www.thehotline.org" target="_blank" rel="noopener">thehotline.org</a> &nbsp;|&nbsp; Remember to <strong>clear your browser history</strong> when finished.',
  'crisis.aria': 'Crisis resources',

  // Primary nav
  'nav.home': 'Home',
  'nav.mission': 'Mission',
  'nav.calmRoom': 'Calm Room',
  'nav.getInvolved': 'Get Involved',
  'nav.leadership': 'Leadership',
  'nav.volunteers': 'Volunteers',
  'nav.donate': 'Donate',
  'nav.ariaMain': 'Main navigation',
  'nav.ariaToggle': 'Toggle menu',
  'nav.logoAria': 'Army Pink home',
  'nav.langAria': 'Language',

  // Safe exit
  'safeExit.tooltip': 'Press ESC to exit',
  'safeExit.label': 'Quick Exit',
  'safeExit.aria': 'Immediately leave this site',
  'safeExit.groupAria': 'Safe exit',

  // Shared slide-up forms (volunteer + contact)
  'form.name': 'Name',
  'form.email': 'Email',
  'form.send': 'Send',
  'form.close': 'Close',
  'vform.volTitle': 'Become a volunteer',
  'vform.volIntro': "Tell us a little about you and how you'd like to help — we'll be in touch.",
  'vform.volMessage': 'Your message',
  'vform.contactTitle': 'Get in touch',
  'vform.contactIntro':
    "Tell us how you'd like to help — a partnership, an event, or a campus chapter — and we'll be in touch.",
  'vform.contactMessage': 'How can we help?',

  // Footer
  'footer.brand':
    'Army Pink is a 501(c)(3) nonprofit supporting domestic violence survivors through safety-centered transportation, concierge support, and wellness resources.',
  'footer.locale': 'Based in California. Serving survivors nationwide.',
  'footer.resources': 'Resources',
  'footer.about': 'About',
  'footer.connect': 'Connect',
  'footer.legal': 'Legal',
  'footer.hotline': 'DV Hotline: 1-800-799-7233',
  'footer.safetyPlanning': 'Safety Planning',
  'footer.crisisText': 'Crisis Text Line: Text START to 88788',
  'footer.partners': 'Partners',
  'footer.volunteer': 'Volunteer',
  'footer.faq': 'FAQ',
  'footer.contact': 'Contact Us',
  'footer.privacy': 'Privacy',
  'footer.smsTerms': 'SMS Terms & Conditions',
  'footer.disclaimer': 'Disclaimer',
  'footer.copyright': '© 2026 Army Pink. All rights reserved. 501(c)(3) nonprofit.',
};
