    let espacio = document.getElementById("contenedor")
    let palabras = document.getElementsByTagName("li")
    let ingresado


document.getElementById("agregar").addEventListener("click", () =>{

    let texto = document.getElementById("item").value

    if(texto !== ""){
        espacio.innerHTML += '<li>' + texto +'</li>'
        ingresado = 'ingresado' + palabras.length;
        localStorage.setItem(ingresado, texto)
        document.getElementById("item").value = ""
    }
})

document.getElementById("limpiar").addEventListener("click", () =>{
    espacio.innerHTML = ""
    localStorage.clear()
})


document.addEventListener("DOMContentLoaded", () =>{
    let i = 1;
    let ingresado = 'ingresado' + i;
    while (localStorage.getItem(ingresado)) {
        espacio.innerHTML += '<li>' + localStorage.getItem(ingresado) +'</li>';
        i++
        ingresado = 'ingresado' + i;
    }

})
