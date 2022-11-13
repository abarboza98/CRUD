function borrarPorID(id) {
  fetch(`https://63653a20046eddf1bae8ee0e.mockapi.io/users/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      Swal.fire({
        icon: 'success',
        title: 'El registro ha sido eliminado satisfactoriamente',
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch(function (error) {
      document.getElementById('alert-error').classList.add('show');
    });
}

document.getElementById('btnDelete').addEventListener('click', () => {
  let id = document.getElementById('inputDelete').value;
  borrarPorID(id);
});
