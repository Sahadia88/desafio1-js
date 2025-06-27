
//precio producto y cantidad inicial (let ya que son valores que pueden cambiar con el tiempo)
let precio = 400000
let cantidad = 0


//selectores para acceder al html (constantes que permanecen en el html)
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");
const btnSumar = document.querySelector(".btn-sumar");
const btnRestar = document.querySelector(".btn-restar");

//mostrar en pantalla valores iniciales
precioSpan.innerHTML = precio
cantidadSpan.innerHTML = cantidad
totalSpan.innerHTML = precio * cantidad

//actualizar cantidad y total al momento del click
function actualizarTotal() {
  cantidadSpan.innerHTML = cantidad;
  totalSpan.innerHTML = cantidad * precio;
}

//instrucciones a ejecutar con botón sumar
//no se usa el "if" ya que puedo sumar sin límite
btnSumar.onclick = function () {
  cantidad++; //suma uno por cada click
  actualizarTotal(); //actualiza cantidad y total
};

//instrucciones a ejecutar con botón restar
//se agrega "if" ya que no quiero que la cantidad baje a números negativos
//solo se resta si la cantidad actual es mayor a cero
btnRestar.onclick = function () {
  if (cantidad > 0) {
    cantidad--; //resta uno por cada click
    actualizarTotal();
  }
};

