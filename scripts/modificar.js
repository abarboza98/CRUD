document.getElementById("btnPut").addEventListener("click", ()=> {
    let id = document.getElementById("inputPutId").value;

    let nombre = document.getElementById("inputPutNombre").value;

    let apellido = document.getElementById("inputPutApellido").value;

    fetch(
    'https://63653a20046eddf1bae8ee0e.mockapi.io/users/' + id, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'PUT',
    body: JSON.stringify({
        name: nombre,
        lastname: apellido,
    })
})
    .then(response => response.json())
    showList(data);
})
