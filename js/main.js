const characterButtons = document.querySelectorAll(".character");
const selectName = document.querySelector("#selected-name");
const message = document.querySelector("#message");

characterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;

        selectedName.textContent = name;
        message.textContent = 'You picked ${name}!';

        characterButtons.forEach((otherButton) => {
            otherButton.classList.remove("is-selected");
        });   
        button.classList.add("is-selected");
    });
});