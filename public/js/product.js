function submitProduct(target) {
  const { img, name, price, productLocation } = target;
  const { action, method } = target;

  const text = {
    name: name.value,
    coords: productLocation.value,
    price: price.value,
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
      console.log(data);
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

function deleteProduct(target) {}
function showProducts(target) {}
