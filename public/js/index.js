function submitLogin(target) {
  const { login, password } = target;
  const { action, method } = target;
  fetch(action, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: login.value,
      password: password.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(console.log);
}

function submitRegister(target) {
  const { login, phone, password, role } = target;
  const { action, method } = target;
  
  fetch(action, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: login.value,
      phone: phone.value,
      password: password.value,
      role: role.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const p = document.createElement('p');
      p.innerText = data.message;
      const out = document.getElementById('out');
      out.innerHTML = '';
      out.append(p);
      out.style.display = 'block';
    })
    .catch(console.log);
}

function formLogin(target) {}

function formRegister(target) {}
