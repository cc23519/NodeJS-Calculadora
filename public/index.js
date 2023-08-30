function visor(value) {
    document.getElementById("teclado").value += value;
}

function limpaVisor() {
    document.getElementById("teclado").value = "";
}

function Resultado() {
    var resultado = eval(document.getElementById("teclado").value);
    document.getElementById("teclado").value = resultado;
}