window.addEventListener('DOMContentLoaded', async () => {
    const endpoint = 'http://localhost:3002/tables?formType=3';

    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log(data);
      populateTable(data);
    } catch (error) {
      console.error('Error:', error);
    }
  });

  function populateTable(data) {
    const table = document.querySelector('.table2');
    data?.forEach((row, index) => {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${index + 1}</td>
        <td>${index+1}</td>
        <td>${row.name}</td>
        <td>${row.country}</td>
        <td>${row.wallet}</td>
        <td class="ticket"><button class="sh-btn btn-default">Descargar</button></td>
      `;
      table.appendChild(newRow);
    });
  }
