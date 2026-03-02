// --- LOADER ---
window.onload = function(){
  document.getElementById("loader").style.display="none";
}

// --- TYPING EFFECT ---
const roles = [
  "AI & Data Science Enthusiast 🤖",
  "Web Development Enthusiast 🌐",
  "Photography Hobbyist 📷",
  "Creative Thinker ✨"
];

let i = 0, j = 0;
let typingText = "";

function typeWriter() {
    const typingEl = document.getElementById("typing");
    if (i < roles[j].length) {
        typingText += roles[j].charAt(i);
        typingEl.innerHTML = typingText;
        i++;
        setTimeout(typeWriter, 50);
    } else {
        setTimeout(() => {
            i = 0;
            typingText = "";
            j = (j + 1) % roles.length;
            typingEl.innerHTML = "";
            typeWriter();
        }, 1500);
    }
}
typeWriter();

// --- DARK MODE ---
document.getElementById("modeToggle").onclick = function(){
  document.body.classList.toggle("light");
}

// --- VANTA.NET Initialization ---
VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x00f7ff,
  backgroundColor: 0x0f2027,
  points: 15.00,
  maxDistance: 20.00,
  spacing: 18.00
});

// --- SCROLL REVEAL ---
ScrollReveal().reveal('.section', { delay: 200, distance:'50px', origin:'bottom' });