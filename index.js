// setting up an event listener
    document.addEventListener("DOMContentLoaded", () => {
    fetchMovies();
  });

    const url="http://localhost:3000/films"
    const urlfirst="http://localhost:3000/films"
    
//   function displays movie on chrome by retrieving the element with the Id movies and assigns it to moviy variable.
    function displayMovies(movie){
    const moviy=document.getElementById("movies")

// creating a new div and assigning to the container.(element given container name)
    const container=document.createElement("div")
    container.className="container"

// setting up of the inner html of the container using template literal syntax(``)
    container.innerHTML=`
    <div class="movieCard"></div>
    <ul>
    <li class ="title"><span class="bold">Title:</span><a>${movie.title}</a></li>
    <li class ="title"><span class="bold">Runtime:</span><a>${movie.runtime}</a></li>
    <li class ="title"><span class="bold">Capacity:</span><a>${movie.capacity}</a></li>
    <li class ="title"><span class="bold">Showtime:</span><a>${movie.showtime}</a></li>
    <li class ="title"><span class="bold">Tickets Sold:</span><a>${movie.tickets_sold}</a></li>
    <li class ="title"><span class="bold">Description:</span><a>${movie.description}</a></li>
    <li class ="title"><span class="bold">Poster:</span><a>${movie.poster}</a></li>
    </ul>
 ` 
//   console.log(movie.poster)
container.querySelector(".movieCard").addEventListener("click", () => {
    displayMovieById(movie.id);
});
// appending the container
   moviy.appendChild(container);

   function displayMovieById(id)
   {
   fetch(`${url}/${id}`)
   .then((res) =>res.json())
   .then((emovieData) => {
       DisplayEachMovie(emovieData);
   })
}
    }
// declaring and and assigning to specific elements. 
function DisplayEachMovie(emovie){

    const title=document.querySelector(".title")
    const runtime=document.querySelector(".runtime")
    let availabletickets=document.querySelector(".availabletickets")
    const description=document.querySelector(".description")
    const poster=document.querySelector(".poster")

    title.innerHTML=`${title.textContent=emovie.title}`;
    availabletickets.textContent=`Available Tickets: ${emovie.capacity-emovie.tickets_sold}`
    runtime.innerHTML=`Runtime: ${runtime.textContent=emovie.runtime}`
    description.innerHTML=`<span class="description">Description:</span> ${description.textContent=emovie.description}`;
    poster.setAttribute("src", emovie.poster);
   
}
// fetching data by loop iteration
    function fetchMovies(){
    fetch(url)
    .then(res=>res.json())
    .then(charData => {
        console.log(charData)
        charData.forEach((chard) => {
            displayMovies(chard);
        })
    })
}
