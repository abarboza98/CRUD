function showList(array) {

  let contentToAppend = '';

  for (let i = 0; i < array.length; i++) {

    contentToAppend = `
      <li>
        <div class="text-white" >ID: ${array[i].id}</div>
        <div class="text-white" >Nombre: ${array[i].name}</div>
        <div class="text-white" >Apellido: ${array[i].lastname}</div>
      </li>
    `;

    document.getElementById('results').innerHTML += contentToAppend;
  }
}

