function generateButtons() {
    const genButtons=noButtons.value;
    const randomBtn=Math.floor(Math.random() * genButtons) + 1;
    for (let i = 1; i <= genButtons; ++i) {
        const button=document.createElement("button");
        button.type="button";
        button.innerText=i;
        button.id=i;
        document.body.appendChild(button);
        button.onclick=function() {displayMessage(i, randomBtn)};
    } 
}

function displayMessage(buttonNo, randomNo) {
    if (buttonNo === randomNo) {
        document.getElementById("Initial-text").innerHTML = "You win!";
    } else {
         document.getElementById("Initial-text").innerHTML = "You lose!";
    }
} 
