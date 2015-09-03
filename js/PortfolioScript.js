function loop(){
$("#head").fadeIn("slow")
     .animate({marginTop:'-50'},1600)
     .delay(1200)
     .animate({marginTop:'80',},1000, loop)
     .delay(1400);

}
  loop(); 

function Hide_Overlay(){
    $("#overlay").css("visibility","hidden");

}

function shutlippy(){
    $("#design_box").css("display","none");
    Hide_Overlay();
}

$('.intro').fadeOut(1500, function() {
    $('.intro').fadeIn(100);
});

function OpenLippy(event){
    event.preventDefault();
    $("#design_box").css("display","block");
    OverlayDisplay();
}
/* Overlay */
function OverlayDisplay(event){
   var docHeight = $(document).height();
   $("body").append("<div id='overlay'></div>");
   $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.7,
         'position': 'absolute',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'z-index': 600,
        'visibility':'visible'
      });
    
}

function OpenGrouchie(event){
    event.preventDefault();
    $("#design_box2").css("display","block");
    OverlayDisplay();
}

function shutgrouchie(){
    Hide_Overlay();
    $("#design_box2").css("display","none");

}

/* Sticky Header */
  var $header = $("header"),
      $clone = $header.before($header.clone().addClass("clone"));

  $(window).on("scroll", function() {
    var fromTop = $("body").scrollTop();
    $('body').toggleClass("down", (fromTop > 200));
      if($this.scrollTop()) {
        $clone = $header.before($header.clone().removeClass("clone"));
    }
  });



