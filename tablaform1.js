
window.addEventListener('DOMContentLoaded', async () => {

    try {
      console.log("Dat");
      const response = await fetch("https://api.quinielacrypto.com/tables?formType=1");
      console.log(response);
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
 // Check if position and points are not null
if (row.position !== null && row.points !== null) {
  newRow.innerHTML = `
      <td>${row.position}</td>
      <td>${row.points}st</td>
      <td>${row.name}</td>
      <td>${row.country}</td>
      <td>${row.wallet}</td>
      <td class="ticket"><button class="sh-btn btn-default">Descargar</button></td>
  `;
} else {
  // Fallback to the index logic
  newRow.innerHTML = `
      <td>${index + 1}</td>
      <td>${index + 1}st</td>
      <td>${row.name}</td>
      <td>${row.country}</td>
      <td>${row.wallet}</td>
      <td class="ticket"><button class="sh-btn btn-default">Descargar</button></td>
  `;
}
      table.appendChild(newRow);
    });
  }
