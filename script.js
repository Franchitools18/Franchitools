
const productos = [
  { id: 1, nombre: "Taladro Percutor", precio: 49990, imagen: "https://via.placeholder.com/250x150?text=Taladro" },
  { id: 2, nombre: "Amoladora Angular", precio: 35500, imagen: "https://via.placeholder.com/250x150?text=Amoladora" },
  { id: 3, nombre: "Soldadora Inverter", precio: 89900, imagen: "https://via.placeholder.com/250x150?text=Soldadora" }
];

const contenedor = document.querySelector("#productos");
const carrito = [];
const listaCarrito = document.querySelector("#carrito");
const total = document.querySelector("#total");

productos.forEach(prod => {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `
    <img src="${prod.imagen}" alt="${prod.nombre}">
    <h3>${prod.nombre}</h3>
    <p>$${prod.precio.toLocaleString()}</p>
    <button onclick="agregarAlCarrito(${prod.id})">Agregar</button>
  `;
  contenedor.appendChild(div);
});

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  actualizarCarrito();
}

function vaciarCarrito() {
  carrito.length = 0;
  actualizarCarrito();
}

function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  let suma = 0;
  carrito.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - $${p.precio.toLocaleString()}`;
    listaCarrito.appendChild(li);
    suma += p.precio;
  });
  total.textContent = "Total: $" + suma.toLocaleString();
}
