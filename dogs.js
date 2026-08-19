// Flying dogs everywhere, because Louis loves dogs 🐶
(function () {
  const DOG_EMOJIS = ['🐶', '🐕', '🦮', '🐩'];
  const NUM_DOGS = 14;

  function spawnDog() {
    const dog = document.createElement('span');
    dog.className = 'flying-dog';
    dog.textContent = DOG_EMOJIS[Math.floor(Math.random() * DOG_EMOJIS.length)];

    const startY = Math.random() * 100;
    const duration = 8 + Math.random() * 10;
    const size = 1.2 + Math.random() * 1.6;
    const delay = Math.random() * 6;

    dog.style.top = startY + 'vh';
    dog.style.fontSize = size + 'rem';
    dog.style.animationDuration = duration + 's';
    dog.style.animationDelay = delay + 's';

    document.body.appendChild(dog);
  }

  function initFlyingDogs() {
    const layer = document.createElement('div');
    layer.className = 'flying-dogs-layer';
    layer.id = 'flyingDogsLayer';
    document.body.appendChild(layer);

    for (let i = 0; i < NUM_DOGS; i++) {
      spawnDogInto(layer);
    }
  }

  function spawnDogInto(layer) {
    const dog = document.createElement('span');
    dog.className = 'flying-dog';
    dog.textContent = DOG_EMOJIS[Math.floor(Math.random() * DOG_EMOJIS.length)];

    const startY = Math.random() * 100;
    const duration = 8 + Math.random() * 10;
    const size = 1.2 + Math.random() * 1.6;
    const delay = Math.random() * 6;

    dog.style.top = startY + 'vh';
    dog.style.fontSize = size + 'rem';
    dog.style.animationDuration = duration + 's';
    dog.style.animationDelay = delay + 's';

    layer.appendChild(dog);
  }

  document.addEventListener('DOMContentLoaded', initFlyingDogs);
})();
