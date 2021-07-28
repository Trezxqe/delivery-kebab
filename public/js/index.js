function submitLogin(target) {}
function submitRegister(target) {
  // console.log(target.login.value);
  const { login, phone, password, role } = target;
  // console.log(login.value, phone.value, password.value, role.value);
  const { action, method } = target;
  fetch(action , { 
    method, 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ 
      username: login.value, 
      phone: phone.value, 
      password: password.value, 
      role: role.value
    })})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log)
}
function formLogin(target) {}
function formRegister(target) {}
