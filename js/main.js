const characterButtons = document.querySelectorAll(".character");
const selectName = document.querySelector("#selected-name");
const message = document.querySelector("#message");



characterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;

        selectName.textContent = name;
        message.textContent = 'You picked ${name}!';

        characterButtons.forEach((otherButton) => {
            otherButton.classList.remove("is-selected");
        });

        const params = new URLSearchParams({ name: name});
        window.location.href = 'character?${params.ToString()}';
        
        button.classList.add("is-selected");
    });
});

const params = new URLSearchURL(window.location.search);

window.location.href = 'character?${params.ToString()}';