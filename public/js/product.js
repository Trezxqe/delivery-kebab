
function submitProduct(target) {
  console.log(target);
  console.log(target.img.value);
  const { img, name, price, productLocation } = target;
  const { action, method } = target;
  fetch(action, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      img: img.value,
      name: name.value,
      price: price.value,
      productLocation: productLocation.value,
    }),
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch(console.log);
}

function uploadImg(target) {
  let fileImg = req.img;
  console.log(fileImg);
}
function deleteProduct(target) {}
function showProducts(target) {}
