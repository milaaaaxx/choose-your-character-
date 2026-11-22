const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const description = params.get("description");
const characterTitle = document.querySelector("#character-name");
const characterDescripton = document.querySelector("#character-descripton");

characterTitle.textContent = name || "Choose a character first";
characterDescription.textContent = description || "Go back and choose one of the characters";
