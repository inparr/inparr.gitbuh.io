// Muestra y oculta los textos uno por uno
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');
const text5 = document.getElementById('text5');

function showText(textElement, duration) {
    textElement.style.display = 'block';
    setTimeout(() => {
        textElement.style.display = 'none';
    }, duration);
}

setTimeout(() => showText(text1, 7000), 0);
setTimeout(() => showText(text2, 7000), 7000);
setTimeout(() => showText(text3, 7000), 14000);
setTimeout(() => showText(text4, 7000), 21000);
setTimeout(() => showText(text5, 7000), 28000);

// Genera las flores amarillas
function generateFlowers() {
    const container = document.querySelector('.flowers-container');
    for (let i = 0; i < 30; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDelay = `${Math.random() * 7}s`;
        flower.style.animationDuration = `${5 + Math.random() * 3}s`;
        container.appendChild(flower);
    }
}

// Las flores empiezan a volar y llover después del tercer texto
setTimeout(() => {
    generateFlowers();
}, 14000);
