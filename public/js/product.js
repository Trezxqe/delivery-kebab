function submitProduct(target) {
  const { img, name, price, coords, address, discount } = target;
  const { action, method } = target;

  const text = {
    name: name.value,
    coords: coords.value,
    address: address.value,
    price: price.value,
    discount: discount.value,
  };

  fetch(action, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(text),
  })
    .then((response) => response.json())
    .then((data) => {
      const image = new FormData();
      image.append('file', img.files[0]);
      fetch(action, {
        method,
        body: image,
      })
        .then((response) => response.json())
        .then(console.log);
    })
    .catch(console.log);
}
function createProduct(target) {
  fetch('/product/add', {})
    .then((response) => response.text())
    .then((data) => {
      const inner = document.getElementById('inner');
      inner.innerHTML = data;
      ymaps.ready(init);
    });
}
function deleteProduct(target) {}
function showProducts(target) {}
