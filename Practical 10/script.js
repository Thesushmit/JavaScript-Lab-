
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    
    setTimeout(() => {
      let table = document.getElementById('fetchTable');
      table.innerHTML = "<tr><th>ID</th><th>Name</th><th>Marks</th><th>Grade</th></tr>";

      data.forEach(student => {
        let row = document.createElement('tr');

        
        if (student.marks > 90) {
          row.classList.add('highlight');
        }

        row.innerHTML = `
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.marks}</td>
          <td>${student.grade}</td>
        `;
        table.appendChild(row);
      });
    }, 2000); // 2-second simulated delay
  })
  .catch(error => console.error('Fetch Error:', error));



$.getJSON('data.json', function(data) {
  let table = $('#jqueryTable');
  table.append("<tr><th>ID</th><th>Name</th><th>Marks</th><th>Grade</th></tr>");

  $.each(data, function(index, student) {
    let highlightClass = student.marks > 90 ? 'highlight' : '';
    table.append(`
      <tr class="${highlightClass}">
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.marks}</td>
        <td>${student.grade}</td>
      </tr>
    `);
  });
}).fail(function() {
  console.log("Error loading JSON data with jQuery.");
});
