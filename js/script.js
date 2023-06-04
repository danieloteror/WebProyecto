var movies = [
  {
    id : 0,
    title: "Morbius",
    image: "images/movie-2.png",
    description: "Al intentar encontrar una cura para una extraña enfermedad en su sangre, un doctor se transforma en un vampiro.",
    url: "https://www.youtube.com/embed/SYOePdCZfqM?autoplay=1" ,
    
  },
  {
    id: 1,
    title: "Adam Project",
    image: "images/movie-3.png",
    description: "Adam Reed, un viajero del tiempo y piloto de combate, aterriza en el año 2022. Allí, se encuentra con su yo de doce años y, junto a él, tratará de salvar el futuro.",
    url: "https://www.youtube.com/embed/6ayGhk_StJQ?autoplay=1",
   
  },
  {
    id: 2,
    title: "Free guy",
    image: "images/movie-4.png",
    description: "Un cajero de un banco descubre que en realidad es un personaje sin papel dentro de un videojuego",
    url: "https://www.youtube.com/embed/tZbNDmRGx_M?autoplay=1",
  },
  {
    id: 3,
    title: "The batman",
    image: "images/movie-5.png",
    description: "Un cajero de un banco descubre que en realidad es un personaje sin papel dentro de un videojuego",
    url: "https://www.youtube.com/embed/IqRRLA6pZvo?autoplay=1",
  },
  {
    id: 4,
    title: "Uncharter",
    image: "images/movie-6.png",
    description: "El cazador de tesoros Victor Sullivan recluta a Nathan Drake para que lo ayude a recuperar una fortuna de 500 años de antigüedad. Lo que comienza como un atraco se convierte en una competencia contra el despiadado Santiago Moncada.",
    url: "https://www.youtube.com/embed/v6uwWIK3p4g?autoplay=1",
  },
  {
    id: 5,
    title: "Death of the nile",
    image: "images/movie-7.png",
    description: "El detective Hercule Poirot investiga el asesinato de una joven heredera a bordo de un crucero por el río Nilo.",
    url: "https://www.youtube.com/embed/dZRqB0JLizw?autoplay=1",
  },
  {
    id: 6,
    title: "The kings man",
    image: "images/movie-8.png",
    description: "Un grupo formado por los tiranos y las mentes criminales más malvadas de la historia se une para desencadenar una guerra que matará a millones de personas. Un hombre tendrá que luchar contra el mal y contra el tiempo para detenerlos.",
    url: "https://www.youtube.com/embed/3t6uJabIReA?autoplay=1",
  },
  {
    id: 7,
    title: "Moon Knigth",
    image: "images/series-1.png",
    description: "La investigación de los misterios del antiguo Egipto desde el interior de un mismo cuerpo.",
    url: "https://www.youtube.com/embed/x7Krla_UxRg?autoplay=1",
  },
  {
    id: 8,
    title: "Halo",
    image: "images/series-2.png",
    description: "Master Chief, un supersoldado mejorado cibernéticamente, defiende a la humanidad del alienígena Covenant en el siglo 26.",
    url: "https://www.youtube.com/embed/5mcO5WiBmxM?autoplay=1",
  },
  {
    id: 9,
    title: "La casa de papel",
    image: "images/series-4.png",
    description: "Una banda organizada de ladrones se propone cometer el atraco del siglo en la Fábrica Nacional de Moneda y Timbre. Cinco meses de preparación quedarán reducidos a once días para poder llevar a cabo con éxito el gran golpe.",
    url: "https://www.youtube.com/embed/3y-6iaveY6c?autoplay=1",
  },
  {
    id: 10,
    title: "The northman",
    image: "images/upcoming-1.png",
    description: "El príncipe Amleth está a punto de convertirse en hombre pero, en ese momento, su tío asesina brutalmente a su padre y secuestra a la madre del niño. Dos décadas después, Amleth es un vikingo que tiene la misión de salvar a su madre.",
    url: "https://www.youtube.com/embed/7HZ4tBQEiB0?autoplay=1",
  },
  {
    id: 11,
    title: "Memory",
    image: "images/upcoming-3.png",
    description: "Alex, un sicario, se convierte en el objetivo de su organización por negarse a cumplir un trabajo. Mientras huye de ellos, el FBI y el servicio de inteligencia mexicano siguen sus pasos, alertados por el reguero de cadáveres que deja por donde va.",
    url: "https://www.youtube.com/embed/50s-JEK_XQM?autoplay=1",
  },
  
];


function generateMovieCards() {
  var moviesContainer = document.querySelector(".movies");

  
  movies.forEach(function(movie) {
    var movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

   
    var movieTitle = document.createElement("h2");
    movieTitle.textContent = movie.title;

    var movieImage = document.createElement("img");
    movieImage.src = movie.image;

    var movieDescription = document.createElement("p");
    movieDescription.textContent = movie.description;

    
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieDescription);

   
    moviesContainer.appendChild(movieCard);


    movieCard.addEventListener("click", function() {
      redirectToMoviePage(movie);
    });
  });
}


function redirectToMoviePage(movie) {
 
  var url = "Pelicula.html?id=" + encodeURIComponent(movie.id) +
            "&title=" + encodeURIComponent(movie.title) +
            "&image=" + encodeURIComponent(movie.image) +
            "&description=" + encodeURIComponent(movie.description)+
            "&url=" + encodeURI(movie.url);
  

  window.location.href = url;
}


generateMovieCards();


// Función para buscar películas por título
function searchMovies() {
  var searchInput = document.getElementById("barra-busqueda").value.toLowerCase();
  var moviesContainer = document.querySelector(".movies");
  
  // Limpia las tarjetas de películas existentes
  moviesContainer.innerHTML = "";
  
  // Filtra las películas que coincidan con el término de búsqueda
  var filteredMovies = movies.filter(function(movie) {
    return movie.title.toLowerCase().includes(searchInput);
  });
  
  // Genera las tarjetas de las películas filtradas
  filteredMovies.forEach(function(movie) {
    var movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    
    // Crea los elementos de la tarjeta de la película
    var movieTitle = document.createElement("h2");
    movieTitle.textContent = movie.title;
    
    var movieImage = document.createElement("img");
    movieImage.src = movie.image;
    
    var movieDescription = document.createElement("p");
    movieDescription.textContent = movie.description;
    
    // Agrega los elementos a la tarjeta de la película
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieDescription);
    
    // Agrega la tarjeta de la película al contenedor
    moviesContainer.appendChild(movieCard);
    
    // Agrega un evento de clic a la tarjeta para redirigir a la página genérica de película y pasar los datos
    movieCard.addEventListener("click", function() {
      redirectToMoviePage(movie);
    });
  });
}

// Llama a la función para generar las tarjetas de las películas
generateMovieCards();

function logout() {
  window.location.href = "login.html";
}
