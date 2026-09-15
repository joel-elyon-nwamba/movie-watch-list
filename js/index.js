let keys = "http://www.omdbapi.com/?i=tt3896198&apikey=54b19a43";

let apiky = "54b19a43";

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchInput.addEventListener("input", () => {
    if(searchInput.value === " ") {
        searchInput.value = " ";
    } else {
        searchInput.value;
    }

})
