document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userName = document.getElementById('user-name').value;
    const contactNumber = document.getElementById('contact-number').value;
    const address = document.getElementById('address').value;
    
    if (userName && contactNumber && address) {
      localStorage.setItem('userName', userName);
      localStorage.setItem('contactNumber', contactNumber);
      localStorage.setItem('address', address);
      window.location.href = 'order.html';
    }
  });
  