// Function to fetch products
async function fetchProducts() {
  try {
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) {
          throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      console.log("Fetched products:", data); // Log the fetched data
      return data;
  } catch (error) {
      console.error('Error fetching products:', error);
      return null;
  }
}

// Function to display products
function displayProducts(products) {
  console.log("Products to display:", products); // Log the products to display
  const productContainer = document.getElementById("product-container");
  if (!Array.isArray(products) || products.length === 0) {
      console.log("No products found or invalid data format.");
      return;
  }

  const productsToDisplay = products.slice(0, 9);
  productsToDisplay.forEach(product => {
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('col-md-4', 'mb-3');
      cardDiv.innerHTML = `
          <div class='card' style="width:300px;height:460px;box-shadow:10px 10px 15px grey">
              <img src="${product.images[0]}" class="img-fluid img-top" style="height:150px" alt="${product.title}" />
              <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <h5 class="rating">${product.rating}</h5>
                  <p class="card-text">${product.description}</p>
                  <p class="card-price">&#8377;${product.price}</p>
                  <p class="card-text">${product.brand}</p>
              </div>
          </div>
      `;
      productContainer.appendChild(cardDiv);
  });
}

// Fetch and display products
async function fetchAndDisplayProducts() {
  const products = await fetchProducts();
  displayProducts(products);
}

// Call the function to fetch and display products when the page loads
window.onload = fetchAndDisplayProducts;
// Fetch and display products
async function fetchAndDisplayProducts() {
  try {
      const data = await fetchProducts();
      if (!data || !Array.isArray(data.products) || data.products.length === 0) {
          console.log("No products found or invalid data format.");
          return;
      }
      displayProducts(data.products);
  } catch (error) {
      console.error('Error fetching and displaying products:', error);
  }
}
