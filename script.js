// CampusBazzar JavaScript

console.log("CampusBazzar is running!");


// Search products
const searchBox = document.querySelector(".search-box");
const products = document.querySelectorAll(".product-card");

if (searchBox) {
    searchBox.addEventListener("input", function () {

        const searchText = this.value.toLowerCase();

        products.forEach(function (product) {

            const productName =
                product.innerText.toLowerCase();

            if (productName.includes(searchText)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });
}