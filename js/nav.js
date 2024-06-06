// Declaracion de las constantes

const body = document.body;
const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");
const links = ["Index", "Productos", "Contacto"];
const A = document.createElement('a');



// Incorporacion de las constantes en su elemento padre

body.appendChild(header);
header.appendChild(nav);
nav.appendChild(ul);

// Asignacion ID y clases a las etiquetas 

header.id = "miHeader";
nav.id = "navBar";
A.href = '/';

// Creacion de las li

for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`;
    ul.appendChild(li);
}

// Estilos

body.style.backgroundColor = "rgba(227, 243, 246, 0.53)";
header.style.backgroundColor = "#AEC6CF";
header.style.padding = "5px";
header.style.position = "sticky";
header.style.zIndex = "1000";
header.style.left = 0;
header.style.top = 0;

// Estilos de flexbox para la navegación
nav.style.display = "flex";
nav.style.justifyContent = "center";
ul.style.display = "flex";
ul.style.justifyContent = "space-around";
ul.style.listStyleType = "none";
ul.style.padding = 0;
ul.style.margin = 0;

// Estilos para los enlaces
const linksList = ul.querySelectorAll("a");
linksList.forEach(link => {
    link.style.textDecoration = "none";
    link.style.color = "#246f9d";
});

// Estilos para los elementos li, para separar los botones de navegacion
const liElements = ul.querySelectorAll('li');
liElements.forEach(li => {
    li.style.margin = "0 10px"; // 
});











