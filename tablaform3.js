window.addEventListener('DOMContentLoaded', async () => {
  const endpoint = 'https://api.quinielacrypto.com/tables?formType=3';
  console.log(window.http);
console.log(window.axios,window.fetch, window )
  try {
    const response = await axios.get(endpoint, {
      httpsAgent: false // Specify to use only HTTP
    });    console.log(response);
    const data = response.data; // Accessing response data directly with Axios
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
