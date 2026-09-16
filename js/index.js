let keys = "http://www.omdbapi.com/?i=tt3896198&apikey=54b19a43";

let apiky = "54b19a43";

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchInput.addEventListener("input", () => {
    const newInput = searchInput.value;
    if(newInput === "") {
        // clear movie 

    } else {
        fetch(`http://www.omdbapi.com/?s=${newInput}&apikey=54b19a43`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

        })
    }
})




