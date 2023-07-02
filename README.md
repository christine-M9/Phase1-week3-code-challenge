# Phase1-week3-code-challenge
  ## Title
A MOVIE WEB APPLICATION.

  ## Description
This web application demonstrates how to fetch movie data from a server, generating movie cards, and displaying detailed movie information on the web.It contains the Javascript application for displaying movies.
You click on a movie card to view more details about the movie.
For you to run the application locally, ensure that you have;
     (a).Web browser e.g Google Chrome.
     (b).Server host http://localhost:3000/films

  ## Using the Project
(1).Clone the repository to your local machine.
(2).Run json-server --db.json on terminal in the db.json file to watch
(3).Open the index.html file in the web browser.
(4).The application will fetch the movie data from the server using the fetchMovies() function in the index.js file.The application will generate movie cards on the web page.
(5).You can click on a movie card to display more details about the Movie.


  ## Technlogies used
CSS
HTML
JAVASCRIPT
JSON

  ## Main functions used in the project
-fetchMovies()
     Fetches data from the server URL http://localhost:3000/films and sends a GET request which is then taken back as a response on JSON.
-displayMovies(movie)
     creates HTML elements for different movie attributes for example the title, description e.t.c .
-displayMovieById(id)
     When the function is passed it fetches detailed information about a specific movie using the movie ID given.
-DisplayEachMovie(emovie)
     It picks a movie object parameter and updates the HTML with its movie details. 
-document.querySelector
     This selects elements in HTML document using CSS selectors.
-.textContent
     Modifies the element.
-.addEventListener
      This attaches an event listener to the HTML element such that it gives a call back function when an event happens for example click, mouse movement e.t.c .

  ## Author
The author of this project is Christine K Juma.
https://github.com/christine-M9

