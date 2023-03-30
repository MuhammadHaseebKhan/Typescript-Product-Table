var table = document.getElementById('productTable');
var tableBody = document.getElementById('tableBody');
var tableRows = '';
function getProducts() {
    fetch('https://dummyjson.com/products')
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
        data.products.map(function (product) {
            tableRows += '<tr>' +
                '<td>' + product.id + '</td>' +
                '<td>' + product.title + '</td>' +
                '<td>' + product.description + '</td>' +
                '<td>' + product.brand + '</td>' +
                '<td>' + product.category + '</td>' +
                '</tr>';
        });
        tableBody.innerHTML = tableRows;
    });
}
getProducts();
