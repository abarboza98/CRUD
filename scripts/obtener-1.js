let id = document.getElementById('inputGet1Id').value;
let URL = `https://63653a20046eddf1bae8ee0e.mockapi.io/users/${id}`;

document.addEventListener('DOMContentLoaded', () => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => console.log(data));
});

document.getElementById('');
