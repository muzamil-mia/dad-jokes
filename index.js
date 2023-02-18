const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apiKey = "DU17g8G+KgeWhczKMT6lcw==UnTtYTYsvGJgO3mZ"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },

};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {
    //console.log("clicked");

    try {
        jokeEl.innerText = "Updating..."
        btnEl.disabled = true;
        btnEl.innerText = "Loading..."
        const response = await fetch(apiURL, options);
        const data = await response.json()
        console.log(data[0]);

        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE"

        jokeEl.innerText = data[0].joke
    } catch (error) {
        jokeEl.innerText = "An error happened try again"
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE"
       // console.log(error);
    }

}

btnEl.addEventListener("click", getJoke);