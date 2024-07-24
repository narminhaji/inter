document.addEventListener('DOMContentLoaded', function() {
    const address = localStorage.getItem('address');
    const couriers = {
      "küçə1": { name: "Akif", contact: "0603939393" },
      "küçə2": { name: "Babək", contact: "0503939393" },
      "küçə3": { name: "Cəlal", contact: "0513939393" },
      "küçə4": { name: "Dadaş", contact: "0703939393" },
      "küçə5": { name: "Elman", contact: "0103939393" },
    };
  
    const courier = couriers[address.toLowerCase()];
  
    if (courier) {
      const courierList = document.getElementById('courier-list');
      courierList.innerHTML = `
        <li>${courier.name} - Contact: ${courier.contact}</li>
      `;
      document.getElementById('courier-rating').style.display = 'block';
    }
  });
  
  function rateCourier() {
    const rating = document.getElementById('rating').value;
    alert(`Thank you for rating the courier: ${rating} stars`);
  }
  