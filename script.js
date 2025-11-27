// Select all product cards
const productsContainer = document.querySelector('.product-container');
let products = Array.from(document.querySelectorAll('.product-card'));

// Button functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        let text = btn.textContent.trim();

        if (text === "New List: High to low") {
            sortProducts("high");
        } 
        else if (text === "New List: Low to High") {
            sortProducts("low");
        }
        else if (text === "Recommended") {
            resetProducts();
        }
        else if (text === "Popular") {
            resetProducts();
        }
    });
});

// Sort logic
function sortProducts(order) {
    let sorted = products.sort((a, b) => {
        let priceA = parseFloat(a.querySelector("p").textContent);
        let priceB = parseFloat(b.querySelector("p").textContent);

        return order === "low" ? priceA - priceB : priceB - priceA;
    });

    sorted.forEach(item => productsContainer.appendChild(item));
}

// Reset list to original order
function resetProducts() {
    products.forEach(item => productsContainer.appendChild(item));
}
