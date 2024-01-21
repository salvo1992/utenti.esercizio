import { filterUsers } from './fetch.js';

export function renderTable(users) {
  const tableBody = document.querySelector('#tableContainer tbody');
  tableBody.innerHTML = ''; // Pulisci la tabella prima di riempirla con nuovi dati

  const rows = users.map((user, index) => {
    return createTableRow(index + 1, user.name, user.username, user.email);
  });

  tableBody.innerHTML = rows.join('');
}

function createTableRow(index, name, username, email) {
  return `
    <tr>
      <th scope="row">${index}</th>
      <td>${name}</td>
      <td>${username}</td>
      <td>${email}</td>
    </tr>
  `;
}

export function renderDropdown(users) {
  const dropdown = document.getElementById('dropdown');
  dropdown.addEventListener('change', () => {
    const searchTerm = document.getElementById('searchInput').value;
    const selectedField = dropdown.value;

    const filteredUsers = filterUsers(searchTerm, selectedField);
    renderTable(filteredUsers);
  });
}