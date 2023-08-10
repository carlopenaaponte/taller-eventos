const div = document.querySelector('div')

div.addEventListener("click", () => {
    alert("Hola! soy un div");
});

const button = document.querySelector('button'); 

button.addEventListener("click", (event) => {
    event.stopPropagation(); 
});