document.addEventListener('DOMContentLoaded', () => {
    const removeButtons = document.querySelectorAll('.remove-item');
    const quantityInputs = document.querySelectorAll('input[type="number"]');
    const totalElement = document.querySelector('.cart-total h2');
    
    // Remove item from cart
    removeButtons.forEach(button => {
      button.addEventListener('click', removeItem);
    });
    
    // Update total when quantity changes
    quantityInputs.forEach(input => {
      input.addEventListener('change', updateTotal);
    });
  
    function removeItem(event) {
      const item = event.target.closest('.cart-item');
      item.remove();
      updateTotal();
    }
  
    function updateTotal() {
      let total = 0;
      const cartItems = document.querySelectorAll('.cart-item');
      cartItems.forEach(item => {
        const priceElement = item.querySelector('p:nth-of-type(1)').innerText;
        const price = parseFloat(priceElement.replace('Price: $', ''));
        const quantity = item.querySelector('input[type="number"]').value;
        total += price * quantity;
      });
      totalElement.innerText = `Total: $${total.toFixed(2)}`;
    }
  });
  