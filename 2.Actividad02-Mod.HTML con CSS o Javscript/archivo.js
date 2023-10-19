function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Esta función genera un color hexadecimal aleatorio

function changeColor() {
    const titulo1 = document.getElementById('titulo1');
    if (titulo1) {
        titulo1.style.color = getRandomColor();
    }
}

//Esta función cambia el color del elemento en este caso llamado título1

setInterval(changeColor, 1000);

//Esta función cambia el color cada segundo 