//1. CLASE----------------------------------------------------------------------------------------------------------------------------------------------------------------
let numeroSecreto = 0;
let intentos = 0;
let listanumerosSorteados = [];
let numeroMaximo = 10;

//Genera las condiciones iniciales al cargar la página, y parte de las condiciones al reiniciar juego:
condicionesIniciales();

//Asigna texto a etiquetas del HTML:
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Compara el número del usuario con el pseudo-aleatorio:
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //Remueve el atributo "disabled" del botón reiniciar juego, habilita el botón
        document.getElementById('intentar').setAttribute('disabled','true'); //YO: Deshabilita el botón intetntar cuando se acierta, creé el id = intentar
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//Limpia la caja de texto:
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; //en querySelector se necesita el numeral # para usar un id, ya que es un selector genérico
    /*Forma menos eficiente de hacer la línea anterior:
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
    */
}

//Genera el número secreto:
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    //Si ya sorteamos todos los números
    if (listanumerosSorteados.length == numeroMaximo) {
        document.getElementById('intentar').setAttribute('disabled','true'); //YO: Deshabilita el botón intetntar cuando se acierta, creé el id = intentar
        document.querySelector('#reiniciar').setAttribute('disabled','true'); //YO: deshabilitar el botón de nuevo juego
        asignarTextoElemento('h1','Recarge para jugar otra vez!');
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        console.log(listanumerosSorteados);
    } else {
        //Si el número generado está incluido en la lista:
        if (listanumerosSorteados.includes(numeroGenerado)) { //recorre el arreglo si es que el número aleatorio ya está incluido en esta
            return generarNumeroSecreto();  //recursividad, la función se llama a sí misma
        } else {
            console.log(listanumerosSorteados);         //muestro el arreglo antes de agregar el número generado
            console.log(numeroGenerado);                //muestro el número genardo
            listanumerosSorteados.push(numeroGenerado); //agregamos el número aleatorio generado al arreglo para que no vuelva a ser presentado al usuario
            return numeroGenerado;
        }
    }
}

//Indicar mensaje de intervalo de números, generar el número aleatorio, inicializar el número intentos:
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    document.getElementById('intentar').removeAttribute('disabled'); //YO: habilita el botón intentar, creé el id = intentar
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

//Reinicia el juego:
function reiniciarJuego() {
    limpiarCaja();  //limpia la caja
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true'); //deshabilitar el botón de nuevo juego
}






//2. YO-------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Crea una lista vacía llamada "listaGenerica".
console.log('---------------------');
let listaGenerica = [];



//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion" con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguagesDeProgramacion);
console.log('---------------------');



//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(lenguagesDeProgramacion);
console.log('---------------------');



//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion".
function mostrarLenguajes(){
    for(let i = 0; i < lenguagesDeProgramacion.length; i++){
        console.log(lenguagesDeProgramacion[i]);
    }
}
mostrarLenguajes();
console.log('---------------------');



//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion" en orden inverso.
function mostrarLenguajesInvertido(){
    for(let i = lenguagesDeProgramacion.length; i > 0; i--){
        console.log(lenguagesDeProgramacion[i - 1]);
    /* Otra forma:
    for(let i = lenguagesDeProgramacion.length - 1; i >= 0; i--){
        console.log(lenguagesDeProgramacion[i]);
    */
    }
}

mostrarLenguajesInvertido();
console.log('---------------------');



//Crea una función que calcule el promedio de los elementos en una lista de números.
let listanumeros1 = [30, 10, 50, 20, 40];
function calculoPromedio(){
    let sumaDENumeros = 0;
    for(let i = 0; i < listanumeros1.length; i++){
        sumaDENumeros += listanumeros1[i];
    }
    return sumaDENumeros/listanumeros1.length;
}

let promedio = calculoPromedio();
console.log('Promedio es: '+promedio);
console.log('---------------------');


//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

/*Yo, otra forma pero usando una función dentro de la principal:
function numerosMayorYMenor(lista){
    let valorMayor = 0;
    let valorMenor = 0;
    for (let i = 0; i < lista.length; ++i){
        if(lista[i] > valorMayor){
            valorMayor = lista[i];
        }
    }
    valorMenor = numeroMenor(lista, valorMayor);
    console.log('El valor menor es: '+valorMenor);
    console.log(`El valor mayor es: ${valorMayor}`);
}

function numeroMenor(lista2, entrada){
    for (let i = 0; i < lista2.length; ++i){
        if(lista2[i] < entrada){
            entrada = lista2[i];
            console.log('Veamos: '+entrada);
        }
    }
    return entrada;
}
*/
function numerosMayorYMenor(entrada){ //reutilizable, ya que podemos utilizar cualquir arreglo como entrada
    let valorMayor = entrada[0];
    let valorMenor = entrada[0];
    for (let i = 0; i < entrada.length; ++i){
        if(entrada[i] > valorMayor){
            valorMayor = entrada[i];
        }
        if(entrada[i] < valorMenor){
            valorMenor = entrada[i];
        }
    }
    console.log('El valor menor es: '+valorMenor);
    console.log(`El valor mayor es: ${valorMayor}`);
}

let listanumeros2 = [15, 8, 26, 5, 12];
numerosMayorYMenor(listanumeros2);
console.log('---------------------');



//Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaDeLista(entrada){ //reutilizable, ya que podemos utilizar cualquir arreglo como entrada
    let suma = 0;
    for (let i = 0; i < entrada.length; ++i){
        suma += entrada[i];
    }
    return suma;
}

let suma = sumaDeLista(listanumeros2);
console.log(`la suma de [${listanumeros2}] es ${suma}`);
console.log('---------------------');



//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarPosicion(entradaArreglo, entradaElemento){
    for (let i = 0; i < entradaArreglo.length; ++i){
        if(entradaArreglo[i] === entradaElemento){
            return i;
        }
    }
    return -1;
}

let elementoAEncontrar = 26;
let encuentro = encontrarPosicion(listanumeros2, elementoAEncontrar);
if(encuentro != -1){
    console.log(`Elemento encontrado en la posición ${encuentro} del arreglo`);
} else {
    console.log('Elemento no encontrado en el arreglo, '+encuentro);
}
console.log('---------------------');



//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumaDosListas(arregloA, arregloB){
    let arregloC = [];
    for (let i = 0; i < arregloA.length; ++i){
        arregloC.push(arregloA[i] + arregloB[i]);
    }
    return arregloC;
}

let arregloSumado = sumaDosListas(listanumeros1, listanumeros2);
console.log(`la suma de los elementos de [${listanumeros1}] y [${listanumeros2}] uno a uno, es: [${arregloSumado}]`);
console.log('---------------------');
//otra forma:
function sumaDosListas(arregloA, arregloB){
    return arregloA.map((num, index) => num + arregloB[index]);
}

arregloSumado = sumaDosListas(listanumeros1, listanumeros2);
console.log(`la suma de los elementos de [${listanumeros1}] y [${listanumeros2}] uno a uno, es: [${arregloSumado}]`);
console.log('---------------------');



//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoDEArreglo(arregloA){
    return arregloA.map((num) => Math.pow(num,2));
}

let listanumeros3 = [2, 3, 4, 5, 6, 7];
arregloCuadraddo = cuadradoDEArreglo(listanumeros3);
console.log(`El cuadrado de los elementos de [${listanumeros3}] es: [${arregloCuadraddo}]`);
console.log('---------------------');

//otra forma:
function cuadradoDEArreglo(arregloA){
    return arregloA.map((num) => num**2);
}

arregloCuadraddo = cuadradoDEArreglo(listanumeros3);
console.log(`El cuadrado de los elementos de [${listanumeros3}] es: [${arregloCuadraddo}]`);
console.log('---------------------');