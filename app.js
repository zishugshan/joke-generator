const jokeEl = document.getElementById("joke");
const jokeBtn = document.querySelector(".btn");

jokeBtn.addEventListener("click",getJoke);

async function getJoke(){
    // call api
    const receivedJoke = await fetch("https://icanhazdadjoke.com",{
        headers : {
            'Accept' : 'application/json'
        }
    });

    const joke = await receivedJoke.json();
    const newjoke = joke.joke;
    if(newjoke.length >100){
        getJoke();
    }
    else {
        jokeEl.innerHTML = newjoke;
    }

    


    // setting new joke
}