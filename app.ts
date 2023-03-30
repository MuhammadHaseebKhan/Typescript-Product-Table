const table = document.getElementById('productTable') as HTMLElement;
const tableBody = document.getElementById('tableBody') as HTMLElement;
let tableRows = '';

type ProductData = {
    limit: number,
    products: Product[],
    skip: number,
    total: number,
};

type Product = {
    id: number,
    title: string,
    description: string,
    brand: string,
    category: string,
};

function getProducts() {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data: ProductData) => {
        console.log(data);
        data.products.map((product: Product) => {
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

