// Общие скрипты
const body = document.body;

body.addEventListener('click', (e) => {
  // Отслеживание событий нажатия
  e.preventDefault();
  // Отключение стандартного поведения
  if (e.target.type === 'submit') {
    // Ловим кнопки submit
    switch (e.target.id) {
      case 'login':
        submitLogin(e.target);
        break;
      case 'register':
        submitRegister(e.target);
        break;
      case 'addProduct':
        submitProduct(e.target);
        break;
      default:
        break;
    }
  } else {
    // Остальные события
  }
});
