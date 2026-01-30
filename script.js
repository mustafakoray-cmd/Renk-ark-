const wheel = document.getElementById("wheel");
const front = document.getElementById("front");

let dragging = false;
let centerX = 0;
let centerY = 0;

/* merkez noktası */
function updateCenter() {
    const rect = wheel.getBoundingClientRect();
    centerX = rect.left + rect.width / 2;
    centerY = rect.top + rect.height / 2;
}

updateCenter();
window.addEventListener("resize", updateCenter);

/* açı hesaplama */
function rotateTo(x, y) {
    const dx = x - centerX;
    const dy = y - centerY;
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    front.style.transform = `rotate(${angle}deg)`;
}

/* -------------------- */
/* MOUSE (PC) */
/* -------------------- */

wheel.addEventListener("mousedown", () => dragging = true);
document.addEventListener("mouseup", () => dragging = false);

document.addEventListener("mousemove", e => {
    if (!dragging) return;
    rotateTo(e.clientX, e.clientY);
});

/* -------------------- */
/* TOUCH (iPhone / iPad) */
/* -------------------- */

wheel.addEventListener("touchstart", e => {
    dragging = true;
    const touch = e.touches[0];
    rotateTo(touch.clientX, touch.clientY);
});

wheel.addEventListener("touchmove", e => {
    if (!dragging) return;
    const touch = e.touches[0];
    rotateTo(touch.clientX, touch.clientY);
    e.preventDefault();
});

wheel.addEventListener("touchend", () => {
    dragging = false;
});
