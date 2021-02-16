$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#topButtom').fadeIn();
        } else {
            $('#topButtom').fadeOut();
        }
    });
$('#topButtom').click(function() {
    $('body,html').animate({scrollTop:0},700);
    });
});

$(document).ready(function(){
    let link = $('.menu-link');
    let link_active = $('.menu-link_active');
    let menu = $('.menu');
  

    link.click(function() {
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
  
    });
    link_active.click(function() {
        link.removeClass('menu-link_active');

    });
});

  AOS.init({
    disable: function () {
      var maxWidth = 640;
      return window.innerWidth < maxWidth;
    }
  });

 
 
  // Get the modal "Волонтерство"
 var modal = document.getElementById("myVolun");
 // Get the button that opens the modal
 var btn = document.getElementById("myVolun-btn");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 // When the user clicks the button, open the modal 
 btn.onclick = function () {
     modal.style.display = "flex";
 }
 // When the user clicks on <span> (x), close the modal
 span.onclick = function () {
     modal.style.display = "none";
 }
 //WhenTheUserClicksAnywhereOutsideOfTheModal,CloseIt
 window.onclick = function (event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

  // Get the modal "Волонтерство"
  var modal = document.getElementById("myAuto");
  // Get the button that opens the modal
  var btn = document.getElementById("myAuto-btn");
 
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks the button, open the modal 
  btn.onclick = function () {
      modal.style.display = "flex";
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
      modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

 