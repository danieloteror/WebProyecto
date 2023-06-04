
var validUsers = localStorage.getItem('validUsers');
if (!validUsers) {

  validUsers = [
    { username: "Timur", password: "klok" },
    { username: "Daniel", password: "klok2" }
  ];
 
  localStorage.setItem('validUsers', JSON.stringify(validUsers));
} else {

  validUsers = JSON.parse(validUsers);
}

function addUser(username, password) {
  
  for (var i = 0; i < validUsers.length; i++) {
    var user = validUsers[i];
    if (user.username === username) {
      alert('El nombre de usuario ya existe');
      return;
    }
  }

  
  validUsers.push({ username: username, password: password });
  localStorage.setItem('validUsers', JSON.stringify(validUsers));
  alert('Registro exitoso');
}


var registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(event) {
  event.preventDefault(); 


  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var password2 = document.getElementById('confirmPassword').value;
  if (password==password2) {
    addUser(username, password);
  } else {
    alert('Las contraseñas no coinciden');
      return;
  }

 
  window.location.href = 'login.html';
});


function goBack() {
  window.history.back();
}
