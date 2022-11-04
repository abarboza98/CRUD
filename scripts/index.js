function showList(array) {
  let contentToAppend = '';

  for (let i = 0; i < array.length; i++) {
    contentToAppend = `
        <ul>ID: ${array.id}</ul>
        <ul>Nombre: ${array.name}</ul>
        <ul>Apellido: ${array.lastname}</ul>
    `;

    document.getElementById('results').innerHTML += contentToAppend;
  }
}
