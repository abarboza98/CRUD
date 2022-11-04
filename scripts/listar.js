// https://63653a20046eddf1bae8ee0e.mockapi.io/users

let dataList = [];

let results = document.getElementById("results");



document.addEventListener("DOMContentLoaded", () => {

fetch("https://63653a20046eddf1bae8ee0e.mockapi.io/users")
  .then((response) => response.json())
  .then((data) => {

      dataList = data;
      console.log(dataList)
      
      showList(dataList);

  });

})