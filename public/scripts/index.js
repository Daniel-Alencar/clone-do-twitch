const buttonMostrarMais = document.querySelector("#separation .mostrar-mais button");

buttonMostrarMais.addEventListener("click", () => {

    const newCanais = document.querySelector('.canais').cloneNode(true);
    document.querySelector('.recomendacao-canal').appendChild(newCanais);
});
