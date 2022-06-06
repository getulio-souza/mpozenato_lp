//interatividade para menu hamburguer
const menuIcon = document.querySelector (".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click" , () => {
  navbar.classList.toggle("change")
})


//botão scrool to top
myButton = document.getElementById("myBtn");
window.onscroll = function(){scrollFunction()};

//para mostrar o botao quando for descer a tela
function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    myButton.style.display = "block";
  }
  else {
   myButton.style.display = "none";
  }
}

//tela subindo depois de clicar no botao
function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
