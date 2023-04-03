function cambiarTitulo(){
    console.log('Pruebas desde la funcion cambiar titulo');
    //como traer un elemento del html a mi js
    // let titulo = document.querySelector('h1');//selector de css
    // let titulo = document.getElementsByTagName('section');
    // let titulo = document.getElementsByClassName('container')
    let titulo = document.getElementById('tituloPrincipal');
    titulo.className = 'text-primary';
    titulo.innerHTML = '<b>Nuevo</b> titulo'
    // titulo.innerText = 'Nuevo titulo'
    console.log(titulo);
}