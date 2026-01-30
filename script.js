const wheel = document.getElementById("wheel");
const front = document.getElementById("front");

let isDragging = false;
let centerX = 0;
let centerY = 0;

/* Merkez noktasını hesapla */
function calculateCenter() {
    const rect = wheel.getBoundingClientRect();
    centerX = rect.left + rect.width / 2;
    centerY = rect.top + rect.height / 2;
}

calculateCenter();
window.addEventListener("resize", calculateCenter);

/* Fare basılıyken döndür */
wheel.addEventListener("mousedown", () => {
    isDragging = true;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

document.addEventListener("mousemove", (event) => {
    if (!isDragging) return;

    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;

    const angle = Math.atan2(dy, dx) * 180 / Math.PI;

    front.style.transform = `rotate(${angle}deg)`;
});
