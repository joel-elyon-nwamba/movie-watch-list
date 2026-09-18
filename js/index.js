let keys = "http://www.omdbapi.com/?i=tt3896198&apikey=54b19a43";

let apiky = "54b19a43";

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
let movieList= document.getElementById("movie-list");

searchInput.addEventListener("input", () => {
    const newInput = searchInput.value;
    if(newInput === "") {
        // clear movie 
        movieList.innerHTML = " ";
    } else {
        fetch(`http://www.omdbapi.com/?s=${newInput}&plot=full&apikey=54b19a43`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.Response === "True") {
                movieList.innerHTML = " ";
                for(const movieData of data.Search) {
                       movieList.innerHTML +=  `
                        <div class="movie">
                            <img src="${movieData.Poster}" alt="${movieData.Title} poster" class="movie-img">
                            <h2>${movieData.Title}</h2>
                            <h3>${movieData.Year}</h3>
                            <h3>${movieData.Type}</h3>
                        </div>

                        `
                }
            } else {
                 movieList.innerHTML = `<p>${data.Error} Unable to find what you're looking for? Please try another search</p>`;
            }
        })
    }
});

searchButton.addEventListener("click", () => {
    
})




