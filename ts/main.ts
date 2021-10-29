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
    alert("You rang");

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
    // TODO: display video game below the form
}

// add validation code *******
function isAllDataValid(){
    return true;
}



