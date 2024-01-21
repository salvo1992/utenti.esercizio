import { fetchData, filterUsers } from './fetch.js';
import { renderTable, renderDropdown } from './componets.js';

document.addEventListener('DOMContentLoaded', async () => {
  const searchInput = document.getElementById('searchInput');
  const dropdown = document.getElementById('dropdown');

  await fetchData();

  searchInput.addEventListener('input', async () => {
    const searchTerm = searchInput.value;
    const selectedField = dropdown.value;

    const filteredUsers = await filterUsers(searchTerm, selectedField);
    renderTable(filteredUsers);
  });

  dropdown.addEventListener('change', async () => {
    const searchTerm = searchInput.value;
    const selectedField = dropdown.value;

    const filteredUsers = await filterUsers(searchTerm, selectedField);
    renderTable(filteredUsers);
  });
});
