function generateButtons() {
    const genButtons = noButtons.value;
    const randomBtn = Math.floor(Math.random() * genButtons) + 1;
    for (let i = 1; i <= genButtons; ++i) {
        const button = document.createElement("button");
        button.type = "button";
        button.innerText = i;
        button.id = i;
        button.onclick= function displayMessage() {
            if (i === randomBtn) {
                document.getElementById("Initial-text").innerHTML = "You win!";
            } else {
                document.getElementById("Initial-text").innerHTML = "You lose!";
            }
        };
        document.body.appendChild(button);
    }   
}
