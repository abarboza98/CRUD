let URL = `https://63653a20046eddf1bae8ee0e.mockapi.io/users/`;
let currentArray = [];
let filtredArray = [];

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnGet1').addEventListener('click', () => {
    let id = document.getElementById('inputGet1Id').value;
    fetch(URL + id)
      .then((response) => response.json())
      .then((data) => {
        currentArray = data;
        if (id === '') {
          showList(currentArray);
        } else {
          showList([currentArray]);
          console.log(currentArray);
        }
      });
  });
});
