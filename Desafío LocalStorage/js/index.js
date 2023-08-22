document.getElementById("buttonText").addEventListener("click", () => {

    localStorage.setItem("ingresado", document.getElementById("inputText").value)
})