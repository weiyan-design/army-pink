// Spanish UI dictionary — mirror of en.js.
//
// ⚠️ NEEDS BILINGUAL / DV-ADVOCATE REVIEW before this ships. The shell strings
// are safety-critical (crisis banner, safe exit) and serve exactly the audience
// most likely to need Spanish. These are a solid working draft, NOT final:
//   • Confirm the crisis-line text keyword — the National DV Hotline's Spanish
//     text keyword may not be "START". Verify with thehotline.org (they have
//     Spanish-speaking advocates) before publishing.
//   • Any key you leave out here automatically falls back to English (see
//     useTranslations in ../utils.js), so partial translation is safe.
export const es = {
  'meta.title': 'Army Pink — Un Camino Hacia la Libertad',
  'meta.description':
    'Army Pink es una iniciativa liderada por sobrevivientes que atiende la necesidad más urgente y desatendida: transporte seguro e inmediato para salir de situaciones peligrosas. Convertimos la compasión en acción brindando viajes urgentes y apoyo estructurado de bienestar, ayudando a las sobrevivientes de violencia doméstica a dejar el peligro y comenzar de nuevo con dignidad, orientación y conexión.',

  // ⚠️ Verify the Spanish text keyword (see file header) — "START" kept as a placeholder.
  'crisis.line':
    'Si está en peligro inmediato, llame al <strong>911</strong>. &nbsp; Línea Nacional contra la Violencia Doméstica: <a href="tel:18007997233"><strong>1-800-799-7233</strong></a> &nbsp;|&nbsp; Envíe <strong>START</strong> al <strong>88788</strong> &nbsp;|&nbsp; <a href="https://www.thehotline.org" target="_blank" rel="noopener">thehotline.org</a> &nbsp;|&nbsp; Recuerde <strong>borrar el historial de su navegador</strong> al terminar.',
  'crisis.aria': 'Recursos de crisis',

  'nav.home': 'Inicio',
  'nav.mission': 'Misión',
  'nav.calmRoom': 'Sala de Calma',
  'nav.getInvolved': 'Participa',
  'nav.leadership': 'Liderazgo',
  'nav.volunteers': 'Voluntarios',
  'nav.donate': 'Donar',
  'nav.ariaMain': 'Navegación principal',
  'nav.ariaToggle': 'Abrir menú',
  'nav.logoAria': 'Inicio de Army Pink',
  'nav.langAria': 'Idioma',

  'safeExit.tooltip': 'Presione ESC para salir',
  'safeExit.label': 'Salida Rápida',
  'safeExit.aria': 'Salir de este sitio inmediatamente',
  'safeExit.groupAria': 'Salida segura',

  'form.name': 'Nombre',
  'form.email': 'Correo electrónico',
  'form.send': 'Enviar',
  'form.close': 'Cerrar',
  'vform.volTitle': 'Hazte voluntario',
  'vform.volIntro': 'Cuéntanos un poco sobre ti y cómo te gustaría ayudar — nos pondremos en contacto.',
  'vform.volMessage': 'Tu mensaje',
  'vform.contactTitle': 'Ponte en contacto',
  'vform.contactIntro':
    'Cuéntanos cómo te gustaría ayudar — una alianza, un evento o un capítulo universitario — y nos pondremos en contacto.',
  'vform.contactMessage': '¿Cómo podemos ayudar?',

  'footer.brand':
    'Army Pink es una organización sin fines de lucro 501(c)(3) que apoya a las sobrevivientes de violencia doméstica mediante transporte centrado en la seguridad, apoyo personalizado y recursos de bienestar.',
  'footer.locale': 'Con sede en California. Al servicio de sobrevivientes en todo el país.',
  'footer.resources': 'Recursos',
  'footer.about': 'Acerca de',
  'footer.connect': 'Conecta',
  'footer.legal': 'Legal',
  'footer.hotline': 'Línea de VD: 1-800-799-7233',
  'footer.safetyPlanning': 'Plan de Seguridad',
  'footer.crisisText': 'Línea de Texto de Crisis: Envíe START al 88788',
  'footer.partners': 'Aliados',
  'footer.volunteer': 'Voluntariado',
  'footer.faq': 'Preguntas Frecuentes',
  'footer.contact': 'Contáctanos',
  'footer.privacy': 'Privacidad',
  'footer.smsTerms': 'Términos y Condiciones de SMS',
  'footer.disclaimer': 'Aviso Legal',
  'footer.copyright': '© 2026 Army Pink. Todos los derechos reservados. Organización sin fines de lucro 501(c)(3).',
};
