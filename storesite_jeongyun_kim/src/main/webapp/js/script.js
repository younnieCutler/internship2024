document.addEventListener("DOMContentLoaded", () => {
  const products = Array.from(document.querySelectorAll('.product'));
  const container = document.querySelector('.product-list');

  document.getElementById('sort-asc').addEventListener('click', () => {
    const sorted = [...products].sort((a, b) => {
      const priceA = parseInt(a.querySelector('.product-price').textContent.replace(/\D/g, ''));
      const priceB = parseInt(b.querySelector('.product-price').textContent.replace(/\D/g, ''));
      return priceA - priceB;
    });
	
    container.innerHTML = '';
    sorted.forEach(p => container.appendChild(p));
  });

  document.getElementById('sort-desc').addEventListener('click', () => {
    const sorted = [...products].sort((a, b) => {
      const priceA = parseInt(a.querySelector('.product-price').textContent.replace(/\D/g, ''));
      const priceB = parseInt(b.querySelector('.product-price').textContent.replace(/\D/g, ''));
      return priceB - priceA;
    });
    
	container.innerHTML = '';
    sorted.forEach(p => container.appendChild(p));
  });
});
