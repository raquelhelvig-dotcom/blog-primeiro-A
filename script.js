const botaoLike = document.querySelector (".like");
const botaoDeslike = document.querySelector (".deslike");

botaoLike.addEventListener("click", clickLike);
botaoDeslike.addEventListener("click", clickDeslike);


function clickLike () {

        console.log ("Fui Clicado");
        let texto1=botaoLike.querySelector("span");
        texto1.textContent++;


}

function clickDeslike () {

        console.log ("Fui Clicado");
        let texto2=botaoDeslike.querySelector("span");
        texto2.textContent++;
}