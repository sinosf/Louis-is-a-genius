const form = document.getElementById('askForm');
const successMsg = document.getElementById('successMsg');
const ball = document.getElementById('magicBall');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const contact = document.getElementById('contact').value.trim();
  const question = document.getElementById('question').value.trim();

  if (!name || !contact || !question) return;

  // Petite animation de la boule magique pendant que "Louis réfléchit"
  ball.classList.add('thinking');
  ball.style.animation = 'floatBall 0.4s ease-in-out infinite';

  // NOTE: ceci est une démo front-end uniquement.
  // Pour un vrai envoi de message a Louis (email/SMS), il faudra connecter
  // ce formulaire a un backend ou un service (ex: Formspree, EmailJS, Zapier...).
  const payload = { name, contact, question, timestamp: new Date().toISOString() };
  console.log('Nouvelle question pour Louis :', payload);

  setTimeout(() => {
    ball.style.animation = 'floatBall 3s ease-in-out infinite';
    form.reset();
    successMsg.classList.remove('hidden');
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 900);
});
