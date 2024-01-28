
/*Forma para cambiar texto al h1*/
/*let titulo = document.querySelector("h1");
titulo.innerHTML = 'Juego del número secreto';*/

/*Forma para cambiar texto al P que fue cambiado por la funcion asignarTextoElemento*/
/*let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número del 1 al 10";*/

let numeroSecreto;
let intentos =1;
let listaNumerosSorteados =[];
let numeroMaximo = 10;
//console.log(numeroSecreto);

  function asignarTextoElemento(elemento, texto){
    let textoAsignado = document.querySelector(elemento);
    textoAsignado.innerHTML = texto;
  }

  function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
    //console.log(typeof(numeroDeUsuario));10
    
    if(numeroDeUsuario===numeroSecreto){
      asignarTextoElemento("p",`Acertaste el numero secreto en ${intentos} ${(intentos===1)? "Vez" : "Veces"}`);
      document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else{
      if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento("p","El número es menor");
      }
      else{
        asignarTextoElemento("p","El número es mayor");
      }
      intentos++;
      limpiarCaja();
    }
    return;
  }


  function limpiarCaja(){
    //document.querySelector('#valorUsuario').value = " ";
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = "";
  }

  function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
  }
  condicionesIniciales();     // se establece un estado para el juego. los calores iniciales

  // permitira reiniciar el juego despues de que se haya terminado la partida
  function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
  document.querySelector('#reiniciar').setAttribute('disabled',true);   // deshabilitar boton de nuevo juego
  }

function generarNumeroSecreto(){ // Generamos el numero aleatorio
      let numeroGenerado =  Math.floor(Math.random()* numeroMaximo)+1;
    
      console.log(numeroGenerado);
      console.log(listaNumerosSorteados);

      // si ya sorteamos todos los números
      if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", " Ya se sortearon todos los números posibles.");

      }else{
        // si numero generado esta incluido hacemos operacion   
          if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
          }
          else{ 
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
          }
      }
}


