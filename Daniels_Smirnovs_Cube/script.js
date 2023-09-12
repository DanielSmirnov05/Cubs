const cube = document.getElementById('cube');
const button = document.getElementById('button');

let rotationAngle = 0;
let clickCount = 0;

button.addEventListener('click', () => {
    rotationAngle += 45;
    cube.style.backgroundColor = getRandomColor();
    cube.style.transform = `rotate(${rotationAngle}deg) translateX(${getRandomPosition()}px)`;
    
    clickCount++;
    button.textContent = clickCount;
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomPosition() {
    return Math.floor(Math.random() * 600) - 150;
}