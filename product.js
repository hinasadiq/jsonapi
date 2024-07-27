
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data =>{
 // console.log(data)
   if(!Array.isArray(data)){
    if(data && Array.isArray(data.products)){
     data=data.products;
    }
    else{
      console.log(data)
    }
   }
   //get the container of html element
   const productContainer=document.getElementById("product-container");
   //iterate over the product using for each method
   data.forEach(product => {
    const cardDiv=document.createElement('div');
    cardDiv.classList.add('col-md-4','mb-3')
    console.log(product);

    cardDiv.innerHTML = `
    <div class='card' style="width:300px;height:460px;box-shadow:10px 10px 15px grey">
        <img src="${product.images[0]}"class="img-fluid img-top" style= "height:150px" alt="${product.title}" />
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
  });
            