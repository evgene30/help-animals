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


  $(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});
 
  // Get the modal "Волонтерство"
 var modal = document.getElementById("myVolun");
 // Get the button that opens the modal
 var btn = document.getElementById("myVolun-btn");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("one")[0];
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

 
  // Get the modal "Автопомощь"
  var modal2 = document.getElementById("myAuto");
  // Get the button that opens the modal
  var btn2 = document.getElementById("myAuto-btn");
 
  // Get the <span> element that closes the modal
  var span2 = document.getElementsByClassName("two")[0];
  // When the user clicks the button, open the modal 
  btn2.onclick = function () {
      modal2.style.display = "flex";
  }
  // When the user clicks on <span> (x), close the modal
  span2.onclick = function () {
      modal2.style.display = "none";
  }
  //WhenTheUserClicksAnywhereOutsideOfTheModal,CloseIt
  window.onclick = function (event) {
      if (event.target == modal2) {
          modal2.style.display = "none";
      }
  }

 
    // Get the modal "Забрать домой"
    var modal3 = document.getElementById("myHome");
    // Get the button that opens the modal
    var btn3 = document.getElementById("myHome-btn");
   
    // Get the <span> element that closes the modal
    var span3 = document.getElementsByClassName("free")[0];
    // When the user clicks the button, open the modal 
    btn3.onclick = function () {
        modal3.style.display = "flex";
    }
    // When the user clicks on <span> (x), close the modal
    span3.onclick = function () {
        modal3.style.display = "none";
    }
    //WhenTheUserClicksAnywhereOutsideOfTheModal,CloseIt
    window.onclick = function (event) {
        if (event.target == modal3) {
            modal3.style.display = "none";
        }
    }

    // Get the modal "Забрать на передержку"
    var modal4 = document.getElementById("myKeep");
    // Get the button that opens the modal
    var btn4 = document.getElementById("myKeep-btn");
   
    // Get the <span> element that closes the modal
    var span4 = document.getElementsByClassName("four")[0];
    // When the user clicks the button, open the modal 
    btn4.onclick = function () {
        modal4.style.display = "flex";
    }
    // When the user clicks on <span> (x), close the modal
    span4.onclick = function () {
        modal4.style.display = "none";
    }
    //WhenTheUserClicksAnywhereOutsideOfTheModal,CloseIt
    window.onclick = function (event) {
        if (event.target == modal4) {
            modal4.style.display = "none";
        }
    }