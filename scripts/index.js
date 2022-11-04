function showList(array) {
  
  let contentToAppend = '';

  for (let i = 0; i < array.length; i++) {

    contentToAppend = `
      <li>
        <div>ID: ${array.id}</div>
        <div>Nombre: ${array.name}</div>
        <div>Apellido: ${array.lastname}</div>
      </li>
    `;

    document.getElementById('results').innerHTML += contentToAppend;
  }
}
