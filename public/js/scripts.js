// Общие скрипты
const body = document.body;

body.addEventListener('submit', (e) => {
  e.preventDefault();
  // Ловим кнопки submit
  switch (e.target.id) {
    case 'login':
      submitLogin(e.target);
      break;
    case 'registration':
      submitRegister(e.target);
      break;
    case 'addProduct':
      submitProduct(e.target);
      break;
    default:
      break;
  }
});

body.addEventListener('click', (e) => {
  if (e.target.type === 'button') {
    // Ловим кнопки button
    switch (e.target.id) {
      case 'formRegister':
        formRegister(e.target);
        break;
      case 'formLogin':
        formLogin(e.target);
      default:
        break;
    }
  }
});
