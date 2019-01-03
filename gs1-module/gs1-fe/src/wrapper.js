function queryProductInfo(gtin, targetMarket) {
 console.log(`queryProductInfo ${gtin} ${targetMarket}`)
 fetch(`http://127.0.0.1:8000/product/${gtin}/${targetMarket}`)
   .then(response => response.json())
   .then(data => console.log(data))
}

function queryAuthenticateKey(gtin) {
 console.log('queryAuthenticateKey')
 fetch(`http://127.0.0.1:8000/product/${gtin}`)
   .then(response => response.json())
   .then(data => console.log(data))
}

function validateProduct(gtin, targetMarket) {
 fetch(`http://127.0.0.1:8000/product/${gtin}/${targetMarket}/validate`)
   .then(response => response.json())
   .then(data => console.log(data))
}

function searchProduct(gpc, targetMarket) {
 fetch(`http://127.0.0.1:8000/products?gpc=${gpc}&tm=${targetMarket}`)
   .then(response => response.json())
   .then(data => console.log(data))
}

function downloadProductsDB() {
 fetch(`http://127.0.0.1:8000/products/db`)
   .then(response => response.json())
   .then(data => console.log(data))
}

function downloadProducts() {
 fetch(`http://127.0.0.1:8000/products`)
   .then(response => response.json())
   .then(data => console.log(data))
}

function getProductTimestamp(gtin, targetMarket) {
 fetch(`http://127.0.0.1:8000/product/${gtin}/${targetMarket}`, {
   method: 'HEAD'
 }).then(response => console.log(response.headers))
   .then(data => console.log(data))
}

function addProduct(product) {
  console.log(product)
  fetch('http://127.0.0.1:8000/product/', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(product)
  }).then(response => response.json())
    .then(body => console.log(body))
}

function modifyProduct(product) {
 console.log(product)
 fetch(`http://127.0.0.1:8000/product/${product.gtin}/${product.targetMarket}`, {
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
   method: 'PUT',
   body: JSON.stringify(product)
 }).then(response => response.json())
   .then(body => console.log(body))
}

function editProduct(gtin, targetMarket) {
 fetch(`http://127.0.0.1:8000/product/${gtin}/${targetMarket}`, {
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
   method: 'PUT',
   body: JSON.stringify({gtin: gtin, targetMarket: targetMarket})
 }).then(response => response.json())
   .then(body => console.log(body))
}

function deleteProduct(gtin, targetMarket) {
  fetch(`http://127.0.0.1:8000/product/${gtin}/${targetMarket}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'Delete',
    body: JSON.stringify({gtin: gtin, targetMarket: targetMarket})
  }).then(response => response.json())
    .then(body => console.log(body))
}

function refreshProduct(product) {
  fetch(`http://127.0.0.1:8000/product/${product.gtin}/${product.targetMarket}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify(product)
  }).then(response => response.json())
    .then(body => console.log(body))
}

function bulkUploadProducts(products) {
  console.log(products)

  fetch('http://127.0.0.1:8000/products/bulk', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(products)
  }).then(response => response.json())
    .then(body => console.log(body))
}

function batchDeleteProducts(products) {
  console.log(products)

  fetch('http://127.0.0.1:8000/products/delete', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'Post',
    body: JSON.stringify(products)
  }).then(response => response.json())
    .then(body => console.log(body))
}

function fileUploadProducts(files) {
  console.log(files)
  var formData = new FormData()
  //files.forEach(function(file) {
  formData.append('file', files)
  formData.append('filename', "DEBUG");
  //})
  fetch(`http://127.0.0.1:8000/products/file`, {
    method: 'POST',
    //body: new URLSearchParams("email=test@example.com&password=pw")
    body: formData
  }).then(response => response.json())
    .then(body => console.log(body))
}

export {
  // data retrieval API
  queryProductInfo,
  queryAuthenticateKey,
  validateProduct,
  searchProduct,
  downloadProductsDB,
  downloadProducts,
  getProductTimestamp,
  // data input API
  addProduct,
  modifyProduct,
  editProduct,
  deleteProduct,
  refreshProduct,
  bulkUploadProducts,
  batchDeleteProducts,
  fileUploadProducts
};
