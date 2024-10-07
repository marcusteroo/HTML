const numero = 101;

function esPrimo(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let j = 3; j < num; j++) {
        if (num % j === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i <= numero; i++) {
    let nuevoDiv = document.createElement('div');
    nuevoDiv.innerHTML = i;

    if (esPrimo(i)) {
        nuevoDiv.className = 'rojo';
    } else if (i % 2 == 0) {
        nuevoDiv.className = 'verde';
    } else {
        nuevoDiv.className = 'amarillo';
    }

    document.body.append(nuevoDiv);
}

function cambiaColor() {
    const pares = document.getElementsByClassName("verde");
    
    // Itera sobre cada elemento con la clase "verde" para cambiar su color de fondo
    for (let i = 0; i < pares.length; i++) {
        pares[i].style.backgroundColor = "blue";
    }
}
