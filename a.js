// a.js
fetch('https://dummyjson.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data received from API:', data); // Log the response data
    // Extract the 'users' array from the response
    
 /*fetch('https://dummyjson.com/users/search?q=John')
 .then(res => res.json())
  .then(console.log);*/
  
fetch('https://dummyjson.com/users/filter?key=hair.color&value=Black')
.then(res => res.json())
.then(console.log);
    const users = data.users || [];
    // Check if 'users' is an array
    if (!Array.isArray(users)) {
      throw new Error('Data is not in the expected format');
    }
    return users;
  })
  .then(users => {
    // Populate the table with user data
    const tableBody = document.getElementById('table-body');

    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
       <td><img src=${user.image|| ''}" alt="user image" class="circle-img"></td>
       <td>${user.firstName || ''}</td>
        <td>${user.email || ''}</td>
        <td>${user.password || ''}</td>
        <td>${user.gender|| ''}</td>
        `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
