// Общие скрипты
const body = document.body;

body.addEventListener('submit', (e) => {
  if (e.target.type !== 'radio') {
    e.preventDefault();
  }
  // Отслеживание событий нажатия
  // Отключение стандартного поведения
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
