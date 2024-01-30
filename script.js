 document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault();
      var name = document.getElementById('name').value;
      var year = document.getElementById('year').value;
      var urlText = 'https://localhost:8080/';
      
      // Construct the query string
      var queryParams = new URLSearchParams();
      if(name) queryParams.append('name', name);
      if(year) queryParams.append('year', year);
      
      // Update the h3 text
      document.getElementById('url').textContent = urlText + '?' + queryParams.toString();
    });