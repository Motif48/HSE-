
/* ── Navbar scroll ── */
window.addEventListener('scroll', () => {{
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
}});

/* ── Mobile menu ── */
function toggleMenu() {{
  document.getElementById('mobileMenu').classList.toggle('open');
}}

/* ── Scroll reveal ── */
const revealEls = document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
const observer = new IntersectionObserver((entries) => {{
  entries.forEach(e => {{ if (e.isIntersecting) e.target.classList.add('visible'); }});
}}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

/* ── Contact form ── */
function submitContact() {{
  const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
  const msg = document.getElementById('contact-msg');
  const name = inputs[0].value.trim();
  const phone = inputs[1].value.trim();
  const email = inputs[2].value.trim();
  const text = inputs[3]?.value.trim() || document.querySelector('.contact-form textarea').value.trim();

  if (!name || (!phone && !email)) {{
    msg.textContent = '⚠ Please fill in your name and at least a phone number or email.';
    msg.style.display = 'block';
    msg.style.background = 'rgba(139,0,0,0.15)';
    msg.style.border = '1px solid rgba(139,0,0,0.3)';
    msg.style.color = '#ff6b6b';
    return;
  }}

  const waText = encodeURIComponent(`Hello HSE! My name is ${name}.${phone ? ' Phone: '+phone+'.' : ''}${email ? ' Email: '+email+'.' : ''}} ${text ? 'Message: '+text : ''}`);
  window.open('https://wa.me/254111994579?text=' + waText, '_blank');

  msg.textContent = '✅ Opening WhatsApp to send your message directly!';
  msg.style.display = 'block';
  msg.style.background = 'rgba(22,163,74,0.1)';
  msg.style.border = '1px solid rgba(22,163,74,0.3)';
  msg.style.color = '#4ade80';
  inputs.forEach(i => i.value = '');
  setTimeout(() => msg.style.display = 'none', 5000);
}}

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {{
  let cur = '';
  sections.forEach(s => {{ if (window.scrollY >= s.offsetTop - 80) cur = s.id; }});
  document.querySelectorAll('.nav-links a').forEach(a => {{
    a.style.color = a.getAttribute('href') === '#'+cur ? 'var(--gold)' : '';
  }});
}});