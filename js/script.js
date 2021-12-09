$(window).scroll(function(){
  

  if($(window).scrollTop() > 300){
    $(".menu").addClass("menufixed")
  }else{
    $(".menu").removeClass("menufixed")

  }

  if($(window).scrollTop() > 700){
    $(".top").fadeIn()
  }else{
    $(".top").fadeOut()

  }
})

$(".top").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})


AOS.init();

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});

$(".top-slider").slick({
  arrows: false
})
$(".bottom-slider").slick({
  slidesToShow: 3,
  centerMode: true,
  centerPadding: "0"
})

$("#process-part .item1").mouseenter(function(){
  $("#process-part .item1 .round").css("background","#000")
  $("#process-part .item1 .round1").css("background","#000")
  $("#process-part .line").css("width","11%")

})

$("#process-part .item1").mouseleave(function(){
  $("#process-part .item1 .round").css("background","transparent")
  $("#process-part .item1 .round1").css("background","transparent")
  $("#process-part .line").css("width","0%")

})

$("#process-part .item2").mouseenter(function(){
  $("#process-part .item1 .round").css("background","#000")
  $("#process-part .item1 .round1").css("background","#000")
  $("#process-part .item2 .round").css("background","#000")
  $("#process-part .item2 .round1").css("background","#000")
  $("#process-part .line").css("width","38%")

})

$("#process-part .item2").mouseleave(function(){
  $("#process-part .item1 .round").css("background","transparent")
  $("#process-part .item1 .round1").css("background","transparent")
  $("#process-part .item2 .round").css("background","transparent")
  $("#process-part .item2 .round1").css("background","transparent")
  $("#process-part .line").css("width","0%")

})

$("#process-part .item3").mouseenter(function(){
  $("#process-part .item1 .round").css("background","#000")
  $("#process-part .item1 .round1").css("background","#000")
  $("#process-part .item2 .round").css("background","#000")
  $("#process-part .item2 .round1").css("background","#000")
  $("#process-part .item3 .round").css("background","#000")
  $("#process-part .item3 .round1").css("background","#000")
  $("#process-part .line").css("width","63%")

})

$("#process-part .item3").mouseleave(function(){
  $("#process-part .item1 .round").css("background","transparent")
  $("#process-part .item1 .round1").css("background","transparent")
  $("#process-part .item2 .round").css("background","transparent")
  $("#process-part .item2 .round1").css("background","transparent")
  $("#process-part .item3 .round").css("background","transparent")
  $("#process-part .item3 .round1").css("background","transparent")
  $("#process-part .line").css("width","0%")

})


$("#process-part .item4").mouseenter(function(){
  $("#process-part .item1 .round").css("background","#000")
  $("#process-part .item1 .round1").css("background","#000")
  $("#process-part .item2 .round").css("background","#000")
  $("#process-part .item2 .round1").css("background","#000")
  $("#process-part .item3 .round").css("background","#000")
  $("#process-part .item3 .round1").css("background","#000")
  $("#process-part .item4 .round").css("background","#000")
  $("#process-part .item4 .round1").css("background","#000")
  $("#process-part .line").css("width","100%")

})

$("#process-part .item4").mouseleave(function(){
  $("#process-part .item1 .round").css("background","transparent")
  $("#process-part .item1 .round1").css("background","transparent")
  $("#process-part .item2 .round").css("background","transparent")
  $("#process-part .item2 .round1").css("background","transparent")
  $("#process-part .item3 .round").css("background","transparent")
  $("#process-part .item3 .round1").css("background","transparent")
  $("#process-part .item4 .round").css("background","transparent")
  $("#process-part .item4 .round1").css("background","transparent")
  $("#process-part .line").css("width","0%")

})


$(".mix-top-slider").slick({
  fade: true,
  asNavFor: ".mix-bottom-slider"
})
$(".mix-bottom-slider").slick({
  slidesToShow: 5,
  centerMode: true,
  centerPadding: "0",
  asNavFor:".mix-top-slider"
})

