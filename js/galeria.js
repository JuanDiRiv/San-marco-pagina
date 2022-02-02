window.addEventListener('load', function(){
  let imagenes = [
    { img: "./imgs/1.jpeg" },
    { img: "./imgs/2.jpeg" },
    { img: "./imgs/3.jpeg" },
    { img: "./imgs/4.jpeg" },
    { img: "./imgs/5.jpeg" },
    { img: "./imgs/6.jpeg" },
    { img: "./imgs/7.jpeg" },
    { img: "./imgs/8.jpeg" },
    { img: "./imgs/9.jpeg" },
    { img: "./imgs/10.jpeg" },
    { img: "./imgs/11.jpeg" },
    { img: "./imgs/12.jpeg" },
    { img: "./imgs/13.jpeg" },
    { img: "./imgs/14.jpeg" },
    { img: "./imgs/15.jpeg" },
    { img: "./imgs/16.jpeg" },
    { img: "./imgs/17.jpeg" },
    { img: "./imgs/18.jpeg" },
    { img: "./imgs/19.jpeg" },
    { img: "./imgs/20.jpeg" },
    { img: "./imgs/21.jpeg" },
    { img: "./imgs/22.jpeg" },
    { img: "./imgs/23.jpeg" },
    { img: "./imgs/24.jpeg" },
    { img: "./imgs/25.jpeg" },
    { img: "./imgs/26.jpeg" },
    { img: "./imgs/27.jpeg" },
    { img: "./imgs/28.jpeg" },
    { img: "./imgs/29.jpeg" },
    { img: "./imgs/30.jpeg" },
    { img: "./imgs/31.jpeg" },
    { img: "./imgs/32.jpeg" },
    { img: "./imgs/33.jpeg" },
    { img: "./imgs/34.jpeg" },
    { img: "./imgs/35.jpeg" },
    { img: "./imgs/36.jpeg" },
    { img: "./imgs/37.jpeg" },
    { img: "./imgs/38.jpeg" },
    { img: "./imgs/39.jpeg" },
    { img: "./imgs/40.jpeg" },
    { img: "./imgs/41.jpeg" },
    { img: "./imgs/42.jpeg" },
    { img: "./imgs/43.jpeg" },
    { img: "./imgs/44.jpeg" },
    { img: "./imgs/45.jpeg" }
  ]

  let contador = 0
  const contenedor = document.querySelector(".slideshow")
  const overlay = document.querySelector(".overlay")
  const galeria_imagenes = document.querySelectorAll(" .galeria img")
  const img_slideshow = document.querySelector(".slideshow img")

  contenedor.addEventListener("click", function (event) {
    let atras = contenedor.querySelector(".atras"),
     adelante = contenedor.querySelector(".adelante"),
      img = contenedor.querySelector("img"),
      tgt = event.target

    if (tgt == atras) {
      if (contador > 0) {
        img.src = imagenes[contador - 1].img
        contador--
      } else {
        img.src = imagenes[imagenes.length - 1].img
        contador = imagenes.length - 1
      }
    } else if (tgt == adelante) {
      if (contador < imagenes.length - 1) {
        img.src = imagenes[contador + 1].img
        contador++
      } else {
        img.src = imagenes[0].img
        contador = 0
      }
    }
  })

  Array.from (galeria_imagenes) .forEach(img => {
    img.addEventListener("click", event => {
      const imagen_seleccionada = +event.target.dataset.imgMostrar
      img_slideshow.src = imagenes [imagen_seleccionada].img
      contador = imagen_seleccionada
      overlay.style.opacity= 1
      overlay.style.visibility = "visible"

    });
  });
const cerrar= document.querySelector(".btn_cerrar")

cerrar.addEventListener("click", function(){
overlay.style.visibility = "hidden"
overlay.style.opacity= 0


})

});
