document.querySelector('.form button[type=submit]')
    .addEventListener('click', signUp);

function signUp(e) {
  e.preventDefault();
  fetch('http://localhost:3000/sign-up', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          firstName: document.querySelector('.form input[name=first-name]').value,
          lastName: document.querySelector('.form input[name=last-name]').value,
          email: document.querySelector('.form input[name=email]').value,
          comment: document.querySelector('.form textarea[name=comment]').value
      })
  })
      .then(_ => {
        document.querySelector('.form').reset();
        $('#myModal').modal('hide');      
    });
}