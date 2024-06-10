function generateButtons() {
    const n = noButtons.value;
    const randomBtn = Math.floor(Math.random() * n) + 1;
    for (let i = 1; i <= n; i++) {
        const button = document.createElement("button");
        button.type = "button";
        button.innerText = `${i}`;
        button.id = `${i}`;
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
