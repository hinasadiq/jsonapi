
/*fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then(data =>{
 // console.log(data);
})
if(!Array.isArray(data)){
  if(data && Array.isArray(data.recipes)){
   data=data.recipes;
  }
  else{
    console.log(data);
  }
 }*/
 /*fetch('https://dummyjson.com/recipes')
  .then(res => res.json())
  .then(data => {
    if (!Array.isArray(data)) {
      if (data && Array.isArray(data.recipes)) {
        data = data.recipes;
        // Now you can work with the `data` array here
        console.log(data);
      } else {
        console.log(data);
      }
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  .then(recipes => {
  const tableBody=document.getElementById("new table");
})
recipes.forEach(recipes => {
  const row=document.createElement("tr");
  row.innerHTML=`
  <td>${recipes.name || ''}</td>
  <td>${recipes.ingredent || ''}</td>
  <td>${recipes.instruction || ''} </td>
  `;
  tableBody.appendrow;
});
})
.catch(error => {
  console.error('Error fetching data:', error);
});*/
document.addEventListener("DOMContentLoaded", function() {
  const tableBody = document.getElementById("new-table-body");

  fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(data => {
      if (!Array.isArray(data)) {
        if (data && Array.isArray(data.recipes)) {
          data = data.recipes;
          data.forEach(recipe => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td><img src="${recipe.image || ''}" alt="recipeimage" class="img2"></td>
            <td>${recipe.name || ''}</td>
              <td>${recipe.ingredients || ''}</td>
              <td>${recipe.instructions || ''}</td>
            `;
            tableBody.appendChild(row); // Append the row to the table body
          });
        } else {
          console.log(data);
        }
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});

