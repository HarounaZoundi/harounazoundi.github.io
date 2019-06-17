/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";
  document.getElementById("footer").style.marginLeft = "200px";

}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
   document.getElementById("footer").style.marginLeft = "0";
}


$(document).ready(function(){
	$(".sidebar .1").hover(function(){
        $(".link .1").css("background-color", "#ffffff");
        $(".link .1").css("color", "#000000");
        },
         function(){
            $(".link .1").css("background-color", "#000000");
             $(".link .1").css("color", "#ffffff");
    });
    $(".sidebar .2").hover(function(){
        $(".link .2").css("background-color", "#ffffff");
        $(".link .2").css("color", "#000000");
        },
         function(){
            $(".link .2").css("background-color", "#000000");
             $(".link .2").css("color", "#ffffff");
    });
    $(".sidebar .3").hover(function(){
        $(".link .3").css("background-color", "#ffffff");
        $(".link .3").css("color", "#000000");
        },
         function(){
            $(".link .3").css("background-color", "#000000");
             $(".link .3").css("color", "#ffffff");
    });
    $(".sidebar .4").hover(function(){
        $(".link .4").css("background-color", "#ffffff");
        $(".link .4").css("color", "#000000");
        },
         function(){
            $(".link .4").css("background-color", "#000000");
             $(".link .4").css("color", "#ffffff");
    });
		

});

$(document).ready(function(){
	$(".link a").hover(function(){
        $(this).css("background-color", "#ffffff");
        $(this).css("color", "#000000");
        },
         function(){
            $(this).css("background-color", "#000000");
           $(this).css("color", "#ffffff");
    });
  });  
$(document).ready(function(){
	$(".sidebar a").hover(function(){
        $(this).css("background-color", "#ffffff");
        $(this).css("color", "#000000");
        },
         function(){
            $(this).css("background-color", "#000000");
           $(this).css("color", "#ffffff");
    });
  }); 

