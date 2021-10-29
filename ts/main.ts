class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;

}

function addVideoGame(){
    //alert("You rang");

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

// created function to shorten document.getelementbyid
function getById(id:string){
    return document.getElementById(id);
}

/**
 * Gets all video game from the form and 
 * @returns returns it in a VideoGame object 
 */
function getVideoGame():VideoGame{
    let game = new VideoGame(); 
    
    // game title
    let titleInput = <HTMLInputElement>getById("title");
    game.title = titleInput.value;

    //price
    let priceInput = <HTMLInputElement>getById("price");
    game.price = parseFloat(priceInput.value); // price is a number, have to convert .value with cast, since its originally a string.

    //rating
    let ratingInput = <HTMLSelectElement>getById("rating");
    game.rating = ratingInput.value;  

    //digital only?
    let digitalOnly = <HTMLInputElement>getById("online");
    game.isDigitalOnly = digitalOnly.checked; // returns true if the checkbox is checked.....similar to an if/else statement

    return game;

}

function displayGame(myGame:VideoGame):void{
    let displayDiv = getById("display");

    // creates h2 with game heading
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    let physicalOrDigitalDisplay = "";
    if(myGame.isDigitalOnly){
        physicalOrDigitalDisplay = "This is a digital only game.";
    }
    else{
        physicalOrDigitalDisplay = "Physical copies available.";
    }

    // creat <p> with game details
    let gameInfo = document.createElement("p");
    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}. It costs $${myGame.price.toFixed(2)}.  ${physicalOrDigitalDisplay}`
    
    // add h2 int the div id = display
    displayDiv.appendChild(gameHeading);

    // add p game info
    displayDiv.appendChild(gameInfo);

}

// add validation code *******
function isAllDataValid(){
    return true;
}



