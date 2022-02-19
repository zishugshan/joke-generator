const jokeEl = document.getElementById("joke");
const jokeBtn = document.querySelector(".btn");

jokeBtn.addEventListener("click",getJoke);

getJoke();

async function getJoke(){
    // call api
    const receivedJoke = await fetch("https://icanhazdadjoke.com",{
        headers : {
            'Accept' : 'application/json'
        }
    });

    const joke = await receivedJoke.json();

    jokeEl.innerHTML = joke.joke;

    


    // setting new joke
}