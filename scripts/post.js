document.getElementById("btnPost").addEventListener("click",() =>{
 let nombre = document.getElementById("inputPostNombre").value;
 let apellido = document.getElementById("inputPostApellido").value; 

fetch('https://63653a20046eddf1bae8ee0e.mockapi.io/users', {
   headers: { "Content-Type": "application/json; charset=utf-8" },
   method: 'POST',
   body: JSON.stringify({
     name: nombre,
     lastname: apellido   
   })
 })
 .then(response => response.json())
 .then(data => {
 showList(data);
 })
})
