const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const selectedBreed = document.querySelector(".breed");
let breed = "-";

console.log(breed);
const doggos = document.querySelector(".doggos");

function addNewDogo() {
    if (breed === "-") {
        const promise = fetch(DOG_URL);
        promise
            .then(function(response) {
                const processingPromise = response.json();
                return processingPromise;
            })
            .then(function(processedResponse) {
                const img = document.createElement("img")
                img.src = processedResponse.message;
                img.alt = "Cute doggo";
                doggos.appendChild(img);
            });
    } else {
        const promise = fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        promise
            .then(function(response) {
                const processingPromise = response.json();
                return processingPromise;
            })
            .then(function(processedResponse) {
                const img = document.createElement("img")
                img.src = processedResponse.message;
                img.alt = "Cute doggo";
                doggos.appendChild(img);
            });
    }

}

document.querySelector(".add-doggo").addEventListener("click", addNewDogo);

selectedBreed.addEventListener('change', (event) => {
    breed = event.target.value;
});

doggos.onload = function() {
    console.log("Image 1 ready to append");
    document.body.append(this);
};
