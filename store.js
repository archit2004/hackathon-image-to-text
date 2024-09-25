function filterProducts() {
    const checkboxes = document.querySelectorAll('.filter input[type="checkbox"]');
    const products = document.querySelectorAll('.product');
    const selectedPets = Array.from(checkboxes)
                              .filter(checkbox => checkbox.checked)
                              .map(checkbox => checkbox.value);

    const minPrice = parseFloat(document.getElementById('min-price').value);
    const maxPrice = parseFloat(document.getElementById('max-price').value);

    products.forEach(product => {
        const petType = product.getAttribute('data-pet');
        const price = parseFloat(product.getAttribute('data-price'));

        const petMatch = selectedPets.length === 0 || selectedPets.includes(petType);
        const priceMatch = price >= minPrice && price <= maxPrice;

        if (petMatch && priceMatch) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
function updatePriceRange() {
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const minRange = document.getElementById('price-range-min');
    const maxRange = document.getElementById('price-range-max');

    minPriceInput.value = minRange.value;
    maxPriceInput.value = maxRange.value;

    filterProducts();
}

function filterProducts() {
    const checkboxes = document.querySelectorAll('.filter input[type="checkbox"]');
    const products = document.querySelectorAll('.product');
    const selectedPets = Array.from(checkboxes)
                              .filter(checkbox => checkbox.checked)
                              .map(checkbox => checkbox.value);

    const minPrice = parseFloat(document.getElementById('min-price').value);
    const maxPrice = parseFloat(document.getElementById('max-price').value);

    products.forEach(product => {
        const petType = product.getAttribute('data-pet');
        const price = parseFloat(product.getAttribute('data-price'));

        const petMatch = selectedPets.length === 0 || selectedPets.includes(petType);
        const priceMatch = price >= minPrice && price <= maxPrice;

        if (petMatch && priceMatch) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
