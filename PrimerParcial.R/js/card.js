const ventas = JSON.parse(localStorage.getItem("ventas")) || [];

const $contenedor = document.querySelector(".contenedor");

function crearTarjeta(elemento){
    
    const newCard = document.createElement("div");

    const titulo = document.createElement("h4");
    titulo.textContent = "-Titulo:" + elemento.titulo;

    const descripcion = document.createElement("p");
    descripcion.textContent = "-Descripcion: " + elemento.descripcion;

    const precio = document.createElement("p")
    precio.textContent = "-Precio: " + elemento.precio;

    const icono = document.createElement("img");
    icono.setAttribute("src", "./imagenes/img_72966.png");

    const estado = document.createElement("p");
    estado.textContent = "Vacunas: " + elemento.vacunas + ", Desparacitado: " + elemento.desparacitado;

    const estadoDos = document.createElement("p");
    estadoDos.textContent = "Fecha de nacimiento: " + elemento.fecha + ", Raza: " + elemento.raza;

    const pedigree= document.createElement("p");
    pedigree.textContent = "Pedigree: " + elemento.pedigree;

    newCard.appendChild(titulo);
    newCard.appendChild(descripcion);
    newCard.appendChild(precio);
    newCard.appendChild(estado);
    newCard.appendChild(estadoDos);
    newCard.appendChild(pedigree);
    newCard.appendChild(icono);

    return newCard;
}

ventas.forEach(element => {
    const tarjeta = crearTarjeta(element);
    $contenedor.appendChild(tarjeta);
}); 

