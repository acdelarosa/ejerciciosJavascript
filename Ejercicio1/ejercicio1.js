function calcularIVA(precio) {
    let impuesto = precio * 12 / 100;
    let suma = precio + impuesto;
    return suma;
}

function calcularYMostrarIVA() {
    let inputElement = document.getElementById('input');
    let precio = parseFloat(inputElement.value);
    if (!isNaN(precio)) {
        let suma = calcularIVA(precio);
        displaySuma(suma);
    } else {
        alert('Por favor, ingrese un número válido.');
    }
}

function displaySuma(suma) {
    let mostrarDiv = document.getElementById('resultado');
    mostrarDiv.innerHTML = `
        <div class="finalHotel"> 
            <h3>$${suma.toFixed(2)}</h3> 
        </div>
    `;
}