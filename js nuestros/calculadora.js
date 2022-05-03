function sumaNumeros() {
    var num1=document.getElementById("numero1").value;
    var num2=document.getElementById("numero2").value;
    var resultado=document.getElementById("resultado");
    var suma=parseInt(num1)+parseInt(num2);

    resultado.innerHTML="Resultado: "+suma;
}

function restaNumeros() {
    var resta=document.getElementById("numero1").value - document.getElementById("numero2").value;
    document.getElementById("resultado").innerHTML="Resultado: "+resta;
}

function multiNumeros() {
    var num1=document.getElementById("numero1").value;
    var num2=document.getElementById("numero2").value;
    var resultado=document.getElementById("resultado");
    var multiplicacion=num1*num2;

    resultado.innerHTML="Resultado: "+multiplicacion;
}

function divideNumeros() {
    var num1=document.getElementById("numero1").value;
    var num2=document.getElementById("numero2").value;
    var resultado=document.getElementById("resultado");
    var divide=num1/num2;

    resultado.innerHTML="Resultado: "+divide;
}