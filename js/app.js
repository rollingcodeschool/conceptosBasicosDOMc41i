let btnVerMas = document.querySelector("#btnVerMas");
//agregar un manejador de eventos
btnVerMas.addEventListener("click", mostrarOcultarParrafo);
// funcion con argumentos
// btnVerMas.addEventListener('click', ()=> mostrarOcultarParrafo(arg1,arg2) );

function cambiarTitulo() {
  console.log("Pruebas desde la funcion cambiar titulo");
  //como traer un elemento del html a mi js
  // let titulo = document.querySelector('h1');//selector de css
  // let titulo = document.getElementsByTagName('section');
  // let titulo = document.getElementsByClassName('container')
  let titulo = document.getElementById("tituloPrincipal");
  titulo.className = "text-primary";
  titulo.innerHTML = "<b>Nuevo</b> titulo";
  // titulo.innerText = 'Nuevo titulo'
  console.log(titulo);
}

function mostrarOcultarParrafo() {
  //Traer el contenedor padre
  let section = document.getElementById("contenedorPadre");
  console.log(section);

  if (btnVerMas.innerHTML === "Ver mas...") {
    //crear elemento
    let parrafoNuevo = document.createElement("p");
    parrafoNuevo.innerText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quaerat doloribus, dicta quae molestiae dolor error ducimus vel animi, minus veritatis aliquam culpa deserunt est, laborum vero temporibus. Numquam nesciunt facilis, quod beatae velit voluptas? Ullam consequuntur sapiente itaque delectus. Quaerat aspernatur perspiciatis praesentium eius sapiente fuga atque debitis, vitae fugit laudantium aut sequi? Laudantium deserunt quam aliquam aspernatur ullam, nam, asperiores quis labore qui voluptate, alias unde deleniti voluptatibus voluptas neque! Dolorum voluptatem, culpa laboriosam voluptates perspiciatis eligendi libero, autem enim, id explicabo consectetur sed. Quo esse voluptatibus at a eius sunt iure odit, excepturi, alias, possimus numquam nulla. Tempora hic quo veritatis aperiam autem possimus ducimus beatae provident, culpa a ab officiis saepe eius voluptate? Expedita dicta repudiandae possimus numquam quos? Cupiditate ea sint neque molestiae aut, rerum expedita! Nemo commodi sint dignissimos similique consectetur quod, consequuntur in aliquam quam rem error sunt, laboriosam maxime aut iste pariatur.`;
    parrafoNuevo.className = "lead text-secondary";
    //agregar elementos hijos
    // section.appendChild(parrafoNuevo); //agrega el nodo hijo al final
    // section.prepend(parrafoNuevo); //agrega el nodo hijo al principio
    section.insertBefore(parrafoNuevo, btnVerMas);

    btnVerMas.innerHTML = "Ocultar";
    btnVerMas.className = "btn btn-outline-danger";
  } else {
    console.log(section.children[3]);
    section.removeChild(section.children[3]);
    //resetear el boton
    btnVerMas.innerHTML ='Ver mas...';
    btnVerMas.className = 'btn btn-outline-primary'
  }
}
