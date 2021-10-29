var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function clearAllErrors() {
    var errorSummary = getById("error-list");
    errorSummary.innerText = "";
}
function addVideoGame() {
    clearAllErrors();
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
    else {
        displayRatingsLink();
    }
}
function displayRatingsLink() {
    var ratingsElements = document.querySelectorAll(".rating-error");
    for (var i = 0; i < ratingsElements.length; i++) {
        var currElements = ratingsElements[i];
        currElements.onclick = goToRatingsPage;
    }
}
function goToRatingsPage() {
    window.open("https://www.esrb.org/", "_blank");
}
function getById(id) {
    return document.getElementById(id);
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = getById("title");
    game.title = titleInput.value;
    var priceInput = getById("price");
    game.price = parseFloat(priceInput.value);
    var ratingInput = getById("rating");
    game.rating = ratingInput.value;
    var digitalOnly = getById("online");
    game.isDigitalOnly = digitalOnly.checked;
    return game;
}
function displayGame(myGame) {
    var displayDiv = getById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var physicalOrDigitalDisplay = "";
    if (myGame.isDigitalOnly) {
        physicalOrDigitalDisplay = "This is a digital only game.";
    }
    else {
        physicalOrDigitalDisplay = "Physical copies available.";
    }
    var gameInfo = document.createElement("p");
    gameInfo.innerText = myGame.title + " has a rating of " + myGame.rating + ". It costs $" + myGame.price.toFixed(2) + ".  " + physicalOrDigitalDisplay;
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function getInputById(id) {
    return document.getElementById(id);
}
function isAllDataValid() {
    var isValid = true;
    var title = getInputById("title").value;
    if (title == "") {
        isValid = false;
        addErrorMessage("Title is required.");
    }
    var price = getInputById("price").value;
    var priceValue = parseFloat(price);
    if (price == "" || isNaN(priceValue)) {
        isValid = false;
        addErrorMessage("Price is required and should be a number.");
    }
    var rating = getById("rating").value;
    if (rating == "") {
        isValid = false;
        addErrorMsgWithCustomClass("You must choose a rating.", "rating-error");
    }
    return isValid;
}
function addErrorMessage(errMsg) {
    var errorSummary = getById("error-list");
    var errorItem = document.createElement("li");
    errorItem.innerText = errMsg;
    errorSummary.appendChild(errorItem);
}
function addErrorMsgWithCustomClass(errMsg, cssClass) {
    var errorSummary = getById("error-list");
    var errorItem = document.createElement("li");
    errorItem.classList.add(cssClass);
    errorItem.innerText = errMsg;
    errorSummary.appendChild(errorItem);
}
