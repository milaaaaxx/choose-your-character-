const params = new URLSearchParams(window.location.search);

document.querySelector("#character-name").textContent = params.get("name") || "character not found";
document.querySelector("#character-description").textContent = params.get("description") || "character not found";