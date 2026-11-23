const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const description = params.get("description");
const characterTitle = document.querySelector("#character-name");
const characterDescription = document.querySelector("#character-description");

characterTitle.textContent = name || "Choose a character first";
characterDescription.textContent = description || "Go back and choose one of the characters";

const character = {
    Mochi: {
        personality: "Curious and adventurous",
        food: "Fish",
        skill: "Finding hidden paths"
    },
    Ash: {
        peronality: "Strong and sweeet",
        food: "Honey",
        skill: "Lifting heavy things"
    },
    Mila: {
        Personality: "Cuddle and gentle",
        food: "Berries",
        skill:"Making everyone feel welcome",
    },
    Milo: {
        personality: "Goofy and cheerful",
        food:"Corn",
        skill: "Making everyone laugh"
    },
    Nonna: {
        personality: "Clever and confident",
        food: "Apples",
        skill: "Solving tricky problems"
    }
};

const facts = character[name];

document.querySelector("#personality").textContent = 
facts?.personality || "Coming soon";
document.querySelector("#food").textContent = 
facts?.food || "Coming soon";
document.querySelector("#skill").textContent = 
facts?.skill || "Coming soon"