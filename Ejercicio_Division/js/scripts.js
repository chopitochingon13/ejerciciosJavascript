/*!
* Start Bootstrap - Stylish Portfolio v6.0.4 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

  const sidebarWrapper = document.getElementById('sidebar-wrapper');
  let scrollToTopVisible = false;
  // Closes the sidebar menu
  const menuToggle = document.body.querySelector('.menu-toggle');
  menuToggle.addEventListener('click', event => {
      event.preventDefault();
      sidebarWrapper.classList.toggle('active');
      _toggleMenuIcon();
      menuToggle.classList.toggle('active');
  })

  // Closes responsive menu when a scroll trigger link is clicked
  var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
  scrollTriggerList.map(scrollTrigger => {
      scrollTrigger.addEventListener('click', () => {
          sidebarWrapper.classList.remove('active');
          menuToggle.classList.remove('active');
          _toggleMenuIcon();
      })
  });

  function _toggleMenuIcon() {
      const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
      const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-times');
      if (menuToggleBars) {
          menuToggleBars.classList.remove('fa-bars');
          menuToggleBars.classList.add('fa-times');
      }
      if (menuToggleTimes) {
          menuToggleTimes.classList.remove('fa-times');
          menuToggleTimes.classList.add('fa-bars');
      }
  }

  // Scroll to top button appear
  document.addEventListener('scroll', () => {
      const scrollToTop = document.body.querySelector('.scroll-to-top');
      if (document.documentElement.scrollTop > 100) {
          if (!scrollToTopVisible) {
              fadeIn(scrollToTop);
              scrollToTopVisible = true;
          }
      } else {
          if (scrollToTopVisible) {
              fadeOut(scrollToTop);
              scrollToTopVisible = false;
          }
      }
  })
})

function fadeOut(el) {
  el.style.opacity = 1;
  (function fade() {
      if ((el.style.opacity -= .1) < 0) {
          el.style.display = "none";
      } else {
          requestAnimationFrame(fade);
      }
  })();
};

function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";
  (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += .1) > 1)) {
          el.style.opacity = val;
          requestAnimationFrame(fade);
      }
  })();
};

/**** función de Euclides para la división entera  */

function diviEntera(){

    // captura de datos del formulario
        let divi=Number(document.getElementById("divi").value);
        let disor=Number(document.getElementById("disor").value);

    // valido los datos para comprobar que son positivos y enteros
    // solo realizo el algoritmo si resultan correctos los datos

     if (divi>=0 && disor>0 && Number.isInteger(divi) &&
         Number.isInteger(disor))   {

        // resto al dividendo el divisor, tantas veces como se pueda    
        let cociente=0;
        while (divi>=disor){
             divi-=disor;// el montón se reduce en la cantidad a repartir
             cociente++;
            }

        // salida de resultados: cociente y resto
          document.getElementById("solucion").innerHTML="El cociente es "+
          cociente+" y el resto es "+divi;
        } else {

          // si la validación falla, no entro en el bucle, y muestro
          // información de error
          document.getElementById("solucion").innerHTML="Los datos de entrada son erróneos. Vuelve a intentarlo"
        }
    }