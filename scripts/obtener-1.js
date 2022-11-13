let URL = `https://63653a20046eddf1bae8ee0e.mockapi.io/users/`;
let currentArray = [];
let filtredArray = [];

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnGet1').addEventListener('click', () => {
    let id = document.getElementById('inputGet1Id').value;
    fetch(URL + id)
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })

      .then((data) => {
        currentArray = data;
        if (id === '') {
          showList(currentArray);
        } else {
          showList([currentArray]);
        }
      })
      .catch(function (error) {
        document.getElementById('alert-error').classList.add('show');
      });
  });
});
