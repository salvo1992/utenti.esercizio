let users = [];

export async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await response.json();
  } catch (error) {
    console.error('Errore nel recupero dei dati:', error);
  }
}

export function filterUsers(searchTerm, selectedField) {
  try {
    let filteredUsers = users;

    if (searchTerm) {
      filteredUsers = filteredUsers.filter(user => {
        const value = user[selectedField].toString().toLowerCase();
        return value.includes(searchTerm.toLowerCase());
      });
    }

    return filteredUsers;
  } catch (error) {
    console.error('Errore nel filtrare gli utenti:', error);
  }
}
