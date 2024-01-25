
const emojis = ["😊", "😄", "😍", "🥳", "😎"];

const counters = Array.from({ length: emojis.length }, () => 0);

function render() {
    const container = document.getElementById("smileyContainer");
    container.innerHTML = "";

    emojis.forEach((emoji, index) => {
        const smileyElement = document.createElement("span");
        smileyElement.textContent = emoji;
        smileyElement.className = "smiley";
        smileyElement.addEventListener("click", () => {
            counters[index]++;
            render();
        });

        const counterElement = document.createElement("span");
        counterElement.textContent = ` - ${counters[index]}`;

        container.appendChild(smileyElement);
        container.appendChild(counterElement);
        container.appendChild(document.createElement("br"));
    });
}

render();
