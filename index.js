// Step 1: Add Event Listeners for keydown event
document.addEventListener('keydown', handleKeyPress);


// Step 2: Add Event Listeners for click events
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', handleKeyClick);
});

// Step 3: Define Event Handlers
function handleKeyPress(event) {
    const keyPressed = event.key.toUpperCase();
    console.log(keyPressed);
    animateKey(keyPressed);
}


function handleKeyClick(event) {
    const keyPressed = event.target.textContent.trim();
    console.log(keyPressed);
    animateKey(keyPressed);
}

function animateKey(keyPressed) {
    const keyElements = document.querySelectorAll('.key');
    keyElements.forEach(keyElement => {
        if (keyElement.textContent.trim() === keyPressed) {
            keyElement.classList.add('pressed');
            setTimeout(() => {
                keyElement.classList.remove('pressed');
            }, 500); 
        }
    });
}