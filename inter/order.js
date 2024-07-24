document.addEventListener('DOMContentLoaded', function() {
    const userName = localStorage.getItem('userName');
    const address = localStorage.getItem('address');
  
    if (!userName || !address) {
      window.location.href = 'login.html';
      return;
    }
  
    document.getElementById('order-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const productSelect = document.getElementById('product-select');
      const selectedProduct = productSelect.options[productSelect.selectedIndex];
      const pricePerKg = parseFloat(selectedProduct.getAttribute('data-price'));
      const kg = parseFloat(document.getElementById('product-kg').value);
  
      const totalPrice = pricePerKg * kg;
  
      document.getElementById('price').innerText = totalPrice.toFixed(2);
      document.getElementById('total-price').style.display = 'block';
  
      setTimeout(() => {
        window.location.href = 'courier.html';
      }, 3000);
    });
  });
  