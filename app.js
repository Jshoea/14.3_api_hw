const $gifgallery = $("#gif-gallery");
const $searchInput = $("#search");

function addGif (res) {
    let numResults = res.data.length;
    if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        //will give us a random number from the amount of provided gifs
        let $newCol = $("<div>", {class: "form-control"});
        let $newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url, class:"w-100"
        });
        $newCol.append($newGif);
        $gifArea.append($newCol);
        //append the newgif to newcol then newcol to the gifArea
    }
}

/*handle form submission and get the api*/
$("form").on("submit", async function(evt) {
    evt.preventDefault();

    let $searchItem = $searchInput.val();
     $searchInput.val("");

     const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
         params: {
             q: $searchItem,
             api_key: MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym,
         }
//this is the link they provided https://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym
     });
     addGif(response.data);
});

$("#remove").on("click", function () {
    $gifArea.empty();
});
//empty method will wipe the slate and .on "click" is another event listener