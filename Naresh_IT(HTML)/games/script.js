document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
    let character = document.getElementById("character");
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500);
}
