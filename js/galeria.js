window.addEventListener('load', function(){
  let imagenes = [
    { img: "../images/Formación Academica/ (1).jpeg" },
    { img: "../images/Formación Academica/ (2).jpeg" },
    { img: "../images/Formación Academica/ (3).jpeg" },
    { img: "../images/Formación Academica/ (4).jpeg" },
    { img: "../images/Formación Academica/ (5).jpeg" },
    { img: "../images/Formación Academica/ (6).jpeg" },
    { img: "../images/Formación Academica/ (7).jpeg" },
    { img: "../images/Formación Academica/ (8).jpeg" },
    { img: "../images/Formación Academica/ (9).jpeg" },
    { img: "../images/Formación Academica/ (10).jpeg" },
    { img: "../images/Formación Academica/ (11).jpeg" },
    { img: "../images/Formación Academica/ (12).jpeg" },
    { img: "../images/Formación Academica/ (13).jpeg" },
    { img: "../images/Formación Academica/ (14).jpeg" },
    { img: "../images/Formación Academica/ (15).jpeg" },
    { img: "../images/Formación Academica/ (16).jpeg" },
    { img: "../images/Formación Academica/ (17).jpeg" },
    { img: "../images/Formación Academica/ (18).jpeg" },
    { img: "../images/Formación Academica/ (19).jpeg" },
    { img: "../images/Formación Academica/ (20).jpeg" },
    { img: "../images/Formación Academica/ (21).jpeg" },
    { img: "../images/Formación Academica/ (22).jpeg" },
    { img: "../images/Formación Academica/ (23).jpeg" },
    { img: "../images/Formación Academica/ (24).jpeg" },
    { img: "../images/Formación Academica/ (25).jpeg" },
    { img: "../images/Formación Academica/ (26).jpeg" },
    { img: "../images/Formación Academica/ (27).jpeg" },
    { img: "../images/Formación Academica/ (28).jpeg" },
    { img: "../images/Formación Academica/ (29).jpeg" },
    { img: "../images/Formación Academica/ (30).jpeg" },
    { img: "../images/Formación Academica/ (31).jpeg" },
    { img: "../images/Formación Academica/ (32).jpeg" },
    { img: "../images/Formación Academica/ (33).jpeg" },
    { img: "../images/Formación Academica/ (34).jpeg" },
    { img: "../images/Formación Academica/ (35).jpeg" },
    { img: "../images/Formación Academica/ (36).jpeg" },
    { img: "../images/Formación Academica/ (37).jpeg" },
    { img: "../images/Formación Academica/ (38).jpeg" },
    { img: "../images/Formación Academica/ (39).jpeg" },
    { img: "../images/Formación Academica/ (40).jpeg" },
    { img: "../images/Formación Academica/ (41).jpeg" },
    { img: "../images/Formación Academica/ (42).jpeg" },
    { img: "../images/Formación Academica/ (43).jpeg" },
    { img: "../images/Formación Academica/ (44).jpeg" },
    { img: "../images/Formación Academica/ (45).jpeg" },
    { img: "../images/Formación Academica/ (46).jpeg" },
    { img: "../images/Formación Academica/ (47).jpeg" },
    { img: "../images/Formación Academica/ (47).jpeg" },  //bug
    { img: "../images/Formación para la vida/ (1).jpeg" },
    { img: "../images/Formación para la vida/ (2).jpeg" },
    { img: "../images/Formación para la vida/ (3).jpeg" },
    { img: "../images/Formación para la vida/ (4).jpeg" },
    { img: "../images/Formación para la vida/ (5).jpeg" },
    { img: "../images/Formación para la vida/ (6).jpeg" },
    { img: "../images/Formación para la vida/ (7).jpeg" },
    { img: "../images/Formación para la vida/ (8).jpeg" },
    { img: "../images/Formación para la vida/ (9).jpeg" },
    { img: "../images/Formación para la vida/ (10).jpeg" },
    { img: "../images/Formación para la vida/ (11).jpeg" },
    { img: "../images/Formación para la vida/ (12).jpeg" },
    { img: "../images/Formación para la vida/ (13).jpeg" },
    { img: "../images/Formación para la vida/ (14).jpeg" },
    { img: "../images/Formación para la vida/ (15).jpeg" },
    { img: "../images/Formación para la vida/ (16).jpeg" },
    { img: "../images/Formación para la vida/ (17).jpeg" },
    { img: "../images/Formación para la vida/ (18).jpeg" },
    { img: "../images/Formación para la vida/ (19).jpeg" },
    { img: "../images/Formación para la vida/ (20).jpeg" },
    { img: "../images/Formación para la vida/ (21).jpeg" },
    { img: "../images/Formación para la vida/ (22).jpeg" },
    { img: "../images/Formación para la vida/ (23).jpeg" },
    { img: "../images/Formación para la vida/ (24).jpeg" },
    { img: "../images/Formación para la vida/ (25).jpeg" },
    { img: "../images/Formación para la vida/ (26).jpeg" },
    { img: "../images/Formación para la vida/ (27).jpeg" },
    { img: "../images/Formación para la vida/ (28).jpeg" },
    { img: "../images/Formación para la vida/ (29).jpeg" },
    { img: "../images/Formación para la vida/ (30).jpeg" },
    { img: "../images/Formación para la vida/ (31).jpeg" },
    { img: "../images/Formación para la vida/ (32).jpeg" },
    { img: "../images/Formación para la vida/ (33).jpeg" },
    { img: "../images/Formación para la vida/ (34).jpeg" },
    { img: "../images/Formación para la vida/ (35).jpeg" },
    { img: "../images/Formación para la vida/ (36).jpeg" },
    { img: "../images/Formación para la vida/ (37).jpeg" },
    { img: "../images/Formación para la vida/ (38).jpeg" },
    { img: "../images/Formación para la vida/ (39).jpeg" },
    { img: "../images/Formación para la vida/ (40).jpeg" },
    { img: "../images/Formación para la vida/ (41).jpeg" },
    { img: "../images/Formación para la vida/ (42).jpeg" },
    { img: "../images/Formación para la vida/ (43).jpeg" },
    { img: "../images/Formación para la vida/ (44).jpeg" },
    { img: "../images/Formación para la vida/ (45).jpeg" },
    { img: "../images/Formación para la vida/ (46).jpeg" },
    { img: "../images/Formación para la vida/ (47).jpeg" },
    { img: "../images/Formación para la vida/ (48).jpeg" },
    { img: "../images/Formación para la vida/ (49).jpeg" },
    { img: "../images/Formación para la vida/ (50).jpeg" },
    { img: "../images/Formación para la vida/ (51).jpeg" },
    { img: "../images/Formación para la vida/ (52).jpeg" },
    { img: "../images/Formación para la vida/ (53).jpeg" },
    { img: "../images/Formación para la vida/ (54).jpeg" },
    { img: "../images/Formación para la vida/ (55).jpeg" },
    { img: "../images/Formación para la vida/ (56).jpeg" },
    { img: "../images/Formación para la vida/ (57).jpeg" },
    { img: "../images/Formación para la vida/ (58).jpeg" },
    { img: "../images/Formación para la vida/ (59).jpeg" },
    { img: "../images/Formación para la vida/ (60).jpeg" },
    { img: "../images/Recreación y tiempo libre/(1).jpeg" },
    { img: "../images/Recreación y tiempo libre/(2).jpeg" },
    { img: "../images/Recreación y tiempo libre/(3).jpeg" },
    { img: "../images/Recreación y tiempo libre/(4).jpeg" },
    { img: "../images/Recreación y tiempo libre/(5).jpeg" },
    { img: "../images/Recreación y tiempo libre/(6).jpeg" },
    { img: "../images/Recreación y tiempo libre/(7).jpeg" },
    { img: "../images/Recreación y tiempo libre/(8).jpeg" },
    { img: "../images/Recreación y tiempo libre/(9).jpeg" },
    { img: "../images/Recreación y tiempo libre/(10).jpeg" },
    { img: "../images/Recreación y tiempo libre/(11).jpeg" },
    { img: "../images/Recreación y tiempo libre/(12).jpeg" },
    { img: "../images/Recreación y tiempo libre/(13).jpeg" },
    { img: "../images/Recreación y tiempo libre/(14).jpeg" },
    { img: "../images/Recreación y tiempo libre/(15).jpeg" },
    { img: "../images/Recreación y tiempo libre/(16).jpeg" },
    { img: "../images/Recreación y tiempo libre/(17).jpeg" },
    { img: "../images/Recreación y tiempo libre/(18).jpeg" },
    { img: "../images/Recreación y tiempo libre/(19).jpeg" },
    { img: "../images/Recreación y tiempo libre/(20).jpeg" },
    { img: "../images/Recreación y tiempo libre/(21).jpeg" },
    { img: "../images/Recreación y tiempo libre/(22).jpeg" },
    { img: "../images/Recreación y tiempo libre/(23).jpeg" },
    { img: "../images/Recreación y tiempo libre/(24).jpeg" },
    { img: "../images/Recreación y tiempo libre/(25).jpeg" },
    { img: "../images/Recreación y tiempo libre/(26).jpeg" },
    { img: "../images/Recreación y tiempo libre/(27).jpeg" },
    { img: "../images/Recreación y tiempo libre/(28).jpeg" },
    { img: "../images/Recreación y tiempo libre/(29).jpeg" },
    { img: "../images/Recreación y tiempo libre/(30).jpeg" },
    { img: "../images/Recreación y tiempo libre/(31).jpeg" },
    { img: "../images/Recreación y tiempo libre/(32).jpeg" },
    { img: "../images/Recreación y tiempo libre/(33).jpeg" },
    { img: "../images/Recreación y tiempo libre/(34).jpeg" },
    { img: "../images/Recreación y tiempo libre/(35).jpeg" },
    { img: "../images/Recreación y tiempo libre/(36).jpeg" },
    { img: "../images/Recreación y tiempo libre/(37).jpeg" },
    { img: "../images/Recreación y tiempo libre/(38).jpeg" },
    { img: "../images/Recreación y tiempo libre/(39).jpeg" },
    { img: "../images/Recreación y tiempo libre/(40).jpeg" },
    { img: "../images/Recreación y tiempo libre/(41).jpeg" },
    
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


const btnMenu = document.querySelector(".btn_menu")
const close = document.querySelector(".closeBtn")
const close1 = document.querySelector(".closeBtn1")
const close2 = document.querySelector(".closeBtn2")
if (btnMenu) {
  btnMenu.addEventListener("click", function(){
    const navItems = document.querySelector(".nav_items")
    navItems.classList.toggle("show")

  
  })
}
if(close  ){
  close.addEventListener("click", function(){
    const navItems = document.querySelector(".nav_items")
    navItems.classList.remove("show")

    
  })
  close1.addEventListener("click", function(){
    const navItems = document.querySelector(".nav_items")
  navItems.classList.remove("show")
  
  })
  close2.addEventListener("click", function(){
    const navItems = document.querySelector(".nav_items")
  navItems.classList.remove("show")
  })
}
});
