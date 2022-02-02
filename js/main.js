$(document).ready(function () {
  /***** Mostrar/Ocultar menu mobil *****/
  $(".show-close-menu-m").click(function () {
    var menu = $(".navigation");
    if (menu.css("opacity") == "0") {
      menu.addClass("show-navigations");
      $(this).css({ color: "#2e4b9a" });
    } else {
      menu.removeClass("show-navigations");
      $(this).css({ color: "#fff" });
    }
  });
  /***** Mostrar/ocultar mega-menu *****/
  $(".btm-mega-menu").click(function (e) {
    e.preventDefault();
    var megamenu = $(".mega-menu");
    if (megamenu.css("opacity") == "0") {
      megamenu.addClass("show-mega-menu");
      $(".btm-mega-menu").css({ color: "#2e4b9a" });
    } else {
      megamenu.removeClass("show-mega-menu");
      $(".btm-mega-menu").css({ color: "#fff" });
    }
  });
  /***** Abrir link en una nueva ventana *****/
  $(".open-link-newTab").click(function (e) {
    e.preventDefault();
    var HrefLink = $(this).attr("href");
    window.open(HrefLink, "_blank");
  });
  /***** Moverse el la pagina institucion con Scroll *****/
  $(".scroll-navigation-ins ul li").click(function () {
    var seccion = $(this).attr("data-href");
    $("body,html").animate(
      {
        scrollTop: $(seccion).offset().top - 70,
      },
      1000
    );
    return false;
  });
  
  /***** boton ir arriba *****/
  $(".btn-up").click(function () {
    $("body,html").animate({ scrollTop: "0px" }, 300);
  });
  /*****Mostrar y ocultar boton ir arriba *****/
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
      $(".btn-up").fadeIn();
    } else {
      $(".btn-up").fadeOut();
    }
  });
});
window.addEventListener("load", function () {
  let cerrar = document.querySelectorAll(".close")[0];
  let abrir = document.querySelectorAll(".cta")[0];
  let modal = document.querySelectorAll(".modal")[0];
  let modalC = document.querySelectorAll(".modal-container")[0];
  const formulario = this.document.forms[0];
  let inputUsuario = document.querySelector("#usuario");
  let inputContrasenia = document.querySelector("#password");

  abrir.addEventListener("click", function (e) {
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
  });

  cerrar.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.toggle("modal-close");
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
  });

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let usuario = inputUsuario.value;
    let contrasenia = inputContrasenia.value;

    if (usuario == "admin" && contrasenia == "admin") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuario y contraseña correctos",
        showConfirmButton: true,
      });

      setTimeout(function () {
        location.pathname = "../descarga.html";
      }, 2000);
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Usuario o contraseña incorrecta",
        showConfirmButton: true,
      });
    }
    formulario.reset();
  });
  
  
 


});