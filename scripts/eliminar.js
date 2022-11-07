function borrarPorID(id) {
    fetch (`https://63653a20046eddf1bae8ee0e.mockapi.io/users/${id}`, {
      method: 'DELETE'
    })
    .then((response)=> {
        Swal.fire({
            icon: 'success',
            title: 'El registro ha sido eliminado satisfactoriamente',
            showConfirmButton: false,
            timer: 1500
          })
    });
  }

  document.getElementById("btnDelete").addEventListener("click",()=>{
  let id=document.getElementById("inputDelete").value
    borrarPorID(id)
  })