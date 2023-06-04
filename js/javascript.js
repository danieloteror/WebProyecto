document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  function checkLogin(username, password) {
  
    var validUsers = localStorage.getItem('validUsers');
    if (validUsers) {
      validUsers = JSON.parse(validUsers); 
    } else {
      validUsers = []; 
    }

    for (var i = 0; i < validUsers.length; i++) {
      var user = validUsers[i];
      if (user.username === username && user.password === password) {
        return true; 
      }
    }

    return false; 
  }

  var isLoggedIn = checkLogin(username, password);

  if (isLoggedIn) {
    window.location.href = "menu.html";
  } else {
    alert("Credenciales de inicio de sesión inválidas. Inténtelo de nuevo.");
  }
});

function goBack() {
  window.history.back();
}

function goToHome() {
  window.location.href = "menu.html";
}

function searchMovies() {
  var searchTerm = document.getElementById("search").value.toLowerCase();

}



function redirectToMenu() {
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  
}
