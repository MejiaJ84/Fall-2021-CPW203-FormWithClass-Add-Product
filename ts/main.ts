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

/**
 * Clears all errors in the validation summary
 */
function clearAllErrors(){
    let errorSummary = getById("error-list");
    errorSummary.innerText = "";
}

function addVideoGame(){
    clearAllErrors();

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

/**
 * Creates h2 and <p> elements to display the game info inside of
 * @param myGame The game and info to display
 */
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

// created a function to get input element values
function getInputById(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

// add validation code *******
function isAllDataValid():boolean{
    let isValid = true;

    let title = getInputById("title").value;
    if(title == ""){
        isValid = false;
        addErrorMessage("Title is required.");
    }

    let price = getInputById("price").value;
    let priceValue = parseFloat(price);
    if(price == "" || isNaN(priceValue)){
        isValid = false;
        addErrorMessage("Price is required and should be a number.");
    }

    let rating = (<HTMLOptionElement>getById("rating")).value;
    if(rating == ""){
        isValid = false;
        addErrorMessage("You must choose a rating.");
    }

    return isValid;
}



function addErrorMessage(errMsg:string) {
    let errorSummary = getById("error-list");
    let errorItem = document.createElement("li");
    errorItem.innerText = errMsg;
    errorSummary.appendChild(errorItem);
}

