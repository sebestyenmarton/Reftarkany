/*****************************NAV__LINKS*************************************************************************************/
const navMozgasok = ()=>{ 
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav__links');
  const navLinks = document.querySelectorAll('.nav__links li');
  burger.addEventListener('click',()=>{
      nav.classList.toggle('nav-active');
      burger.classList.toggle('is-active');
      navLinks.forEach((link, index) => {   
        if(link.style.animation){
          link.style.animation = '';
        } else {
          link.style.animation=`navLinkFade .5s ease forwards ${index / 7 + .3}s`;
        }
      });
    }
  );
}
navMozgasok();
/*****************************NAV__LINKS*************************************************************************************/

function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
/*****************************RADIO*************************************************************************************/
var radio = document.getElementById("radio"); 
function playRadio() {radio.play();} 
function pauseRadio() {radio.pause();} 
/*****************************RADIO*************************************************************************************/

var modal = document.getElementById("id01");
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




/*************************      JQuery       *************************/  
$(document).ready(function () {
  $(window).scroll(function () {       /******************Scrolling**********************/  
    if (120 < this.scrollY < 135) {
      $('.burger, .mobil__icon').addClass("sticky__eltol");
    } else{
      $('.burger .mobil__icon').removeClass("sticky__eltol");
    }
    if (this.scrollY > 30) {
      $('.content').addClass("content__up");
      setTimeout(function(){
        $(".heptagon__title1, .heptagon__title2").css({color: "#ccaaaa"});
        $(".heptagon__title3, .heptagon__title4").css({color: "#ffffff"});
        $(".heptagon__title5, .heptagon__title6").css({color: "#f3f3f3"});
        $(".heptagon__text b:first-child, .heptagon__text b:last-child").css({color: "#f3f3f3"});
        $(this).css({color: "#f3f3f3"});
      },1000);
      setTimeout(function(){
        $(".burger.sticky").css("top","9px");
        $("i#play").css("right","70px");
        $(".icons").css("opacity","0");
        $(".radio__title").css("right","97px");
        $(".mobil__icon.sticky").addClass("up");
      },200);
    } else{
      $('.content').removeClass("content__up");
      setTimeout(function(){
        $(".heptagon__text b:first-child, .heptagon__text b:last-child").css({color: "#424242"});
        $(".heptagon__title1, .heptagon__title2").css({color: "#ccaaaa"});
        $(".heptagon__title3, .heptagon__title4").css({color: "#ffffff"});
        $(".heptagon__title5, .heptagon__title6").css({color: "#f3f3f3"});
      },1000);
      setTimeout(function(){
        $(".burger.sticky").css("top","68px");
        $("i#play").css("right","125px");
        $(".icons").css("opacity","1");
        $(".radio__title").css("right","152px");
        $(".mobil__icon.sticky").removeClass("up");
      },200);
    }
    if (this.scrollY > 450) {                                  /* A Footerek slideUp és slideDown mozgásai -Classokkal*/
      $('.footer__container').addClass("slideup");
    } else{
      $('.footer__container').removeClass("slideup");
    }
    if (this.scrollY > 25) {
      $('.footer__container').addClass("slideup__other");
    } else{
      $('.footer__container').removeClass("slideup__other");
    }
    if (this.scrollY > 25) 
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $('.footer__container').addClass("slideup__other__alkalmaink__");
    }else{
      $('.footer__container').removeClass("slideup__other__alkalmaink__");
    }
    if (this.scrollY > 400) {
      $('.footer__container').addClass("slideup__other__alkalmaink");
    } else{
      $('.footer__container').removeClass("slideup__other__alkalmaink");
    }
    $("#scrollTopId").click(function(){                                   /*Kiíratom az aktuális scrollTop poziciót */
      alert($(window).scrollTop() + " px");
    });
  });                                                     /******************Scrolling vége*****************/  
  
  /*********************FELVÉTELEK LINKSZŰRŐ + GÖRGETŐ*********************/ 
  $(".li1, .li2, .li3, .li4").click(function (){          /* Felvételekre kattintva automatikusScrolling jön létre */
    $('html, body').animate({
        scrollTop: $(".youtube").offset().top
    }, 2000);
  });
  $(".li1").click(function(){
    $("#ifjusagienek, #korusenek, #ahitat").css("display","none");
    $("#istentisztelet").css("display","block");
  });
  $(".li2").click(function(){
    $("#istentisztelet, #korusenek, #ahitat").css("display","none");
    $("#ifjusagienek").css("display","block");
  });
  $(".li3").click(function(){
    $("#istentisztelet, #ifjusagienek, #ahitat").css("display","none");
    $("#korusenek").css("display","block");
  });
  $(".li4").click(function(){
    $("#istentisztelet, #ifjusagienek, #korusenek").css("display","none");
    $("#ahitat").css("display","block");
  });
    /*********************eddig__FELVÉTELEK LINKSZŰRŐ + GÖRGETŐ*********************/ 
                                                /* A navLinks Li tag-jeinek komplexebb hoverelései*/
  var numbers = ['1','2','3','4','5','6','7'];   
  jQuery.each( numbers, function( i, val){     
    $('.l' + val).mouseenter(function(){
      $('.a' + val).css("color","#ffc21c");
    });
    $('.l' + val).mouseleave(function(){
      $('.a' + val).css("color","#f3f3f3");
    });
  });
  
  setTimeout(function(){
    $('.first__mainpage').css("display","none");
  },2000);

  setTimeout(function(){
    $('.nav .navbar h4 .fulfilling-square-spinner, h4 #k__icon, h4 b').css("display","none");
    $('.burger, .mobil__icon, .mobil__icon b').addClass("sticky");
    $('.nav .navbar').css("margin-top","37px");
    $('.titleText__new').css("display","block");
    $('#play, #pause').css("top","16.5px");
    $('.radio__title').css({top:"9.9px", transition:"all 0.9s ease"});
    $('.icons').css({top:"14.5px", transition:"all 0.9s ease"});
  },0);


  $(".mainpage__first").mouseenter(function(){
    $(".mainpage .title h5").animate({opacity: "0"}, 350);
    setTimeout(function(){
      $(".mainpage .rotated").animate({opacity: "1"}, 350);
    },350);
    $(".mainpage .title").animate(
      { deg: 180 },
        {
          duration: 700,
          step: function(now) {
            $(this).css({ transform: 'rotateY(' + now + 'deg)' });
            $(".mainpage .rotated").css({ transform: 'rotateY(' + now + 'deg)' });
        }
      }
    );
  });
  
  $(".mainpage__first").mouseleave(function(){
    setTimeout(function(){
      setTimeout(function(){
        $(".mainpage .title h5").animate({opacity: "1"}, 350);
      },350);
      $(".mainpage .rotated").animate({opacity: "0"}, 350);
      $(".mainpage .title").animate(
        { deg: 0 },
          {
            duration: 700,
            step: function(now) {
              $(this).css({ transform: 'rotateY(' + now + 'deg)' });
              $(".mainpage .rotated").css({ transform: 'rotateY(' + now + 'deg)' });
          }
        }
      );
    },350);
  });
  /***************************************FELVÉTELEK******************************************/  
  $('.li1').mouseenter(function(){$('.li2, .li3, .li4').addClass("lihover");$('.li1 a').css("color","#15151590");});
  $('.li1').mouseleave(function(){$('.li2, .li3, .li4').removeClass("lihover");$('.li1 a').css("color","#f4f4f4");});
  $('.li2').mouseenter(function(){$('.li1, .li3, .li4').addClass("lihover");$('.li2 a').css("color","#15151590");});
  $('.li2').mouseleave(function(){$('.li1, .li3, .li4').removeClass("lihover");$('.li2 a').css("color","#f4f4f4");});
  $('.li3').mouseenter(function(){$('.li2, .li1, .li4').addClass("lihover");$('.li3 a').css("color","#15151590");});
  $('.li3').mouseleave(function(){$('.li2, .li1, .li4').removeClass("lihover");$('.li3 a').css("color","#f4f4f4");});
  $('.li4').mouseenter(function(){$('.li2, .li3, .li1').addClass("lihover");$('.li4 a').css("color","#15151590");});
  $('.li4').mouseleave(function(){$('.li2, .li3, .li1').removeClass("lihover");$('.li4 a').css("color","#f4f4f4");});
  $('.section__box__header ul li').mouseenter(function(){
    $('polygon').css({
      fill: "#cd3700"
    });
  });
  $('.section__box__header ul li').mouseleave(function(){
    $('polygon').css({
      fill: "#973c00"
    });
  });


  $(".radio__title, #content__radio__title").mouseenter(function(){
    $("#play, #content__play").css("color","#ffc21c");
  });
  $(".radio__title, #content__radio__title").mouseleave(function(){
    $("#play, #content__play").css("color","#535353");
  });
  $("#facebook__icon, #youtube__icon, #play, #content__play, #pause, #content__pause").mouseleave(function(){
    $(this).css("color","#535353");
  });
  $("#facebook__icon, #youtube__icon, #user__icon, #pause, #content__pause, #button__click").mouseenter(function(){
    $(this).css("color","#157878");
  });
  $("#facebook__icon, #youtube__icon, #user__icon, #play, #content__play, #pause, #content__pause").mouseleave(function(){
    $(this).css("color","#535353");
  });
  $("#play, #content__play, .social__icon--link, #footer__logo b").mouseenter(function(){
    $(this).css("color","#ffc21c");
  });
  $("#button__click, .social__icon--link, #footer__logo b").mouseleave(function(){
    $(this).css("color","#f4f4f4");
  });
  $(".radio__title, #content__radio__title").click(function(){
    $("#radio").css("bottom","0");
    $("#pause, #content__pause").css("display","block");
    $("#play, #content__play").css("display","none");
    playRadio();
  });
  $("#button__click").click(function(){
    $(this).css({display:"none",bottom:"-29px"})
    $("#radio").css("bottom","-40px");
    $("#play, #content__play").css("display","block");
    $("#pause, #content__pause").css("display","none");
    pauseRadio();
  });
  var n=1;
  $("#play, #content__play").click(function(){
    if(n===1){
      $("#button__click").css({bottom:"11px",display:"block"});
      ++n;
    }else{
      setTimeout(function(){
        $("#button__click").css({bottom:"11px",display:"block"});
      },900);
    }
    $("#radio").css("bottom","0");
    $("#pause, #content__pause").css("display","block");
    $("#play, #content__play").css("display","none");
  });
  $("#pause, #content__pause").click(function(){
    $("#button__click").css({display:"none",bottom:"-29px"});
    $("#radio").css("bottom","-40px");
    $("#play, #content__play").css("display","block");
    $("#pause, #content__pause").css("display","none");
  });

  /* NAPI IGE ÉS GONDOLATOK */
  $(".heptagon").mouseenter(function(){
    $(".napiige").addClass("napiigehover");
    $(".napiige-box").css("display","block");
    $(".napiige-box1").addClass("napiige-box1hover");
    $(".napiige-box2").addClass("napiige-box2hover");
  });
  $(".napiige__container").mouseleave(function(){
    $(".napiige-box").css("display","none");
    $(".napiige").removeClass("napiigehover");
    $(".napiige-box1").removeClass("napiige-box1hover");
    $(".napiige-box2").removeClass("napiige-box2hover");
    $(".heptagon__text i").css({
      color: "#f3f3f3"  
    });
  });
  $(".napiige__container").mouseenter(function(){
    $(".heptagon__text i").css({
      color: "#ffc21c"  
    });
  });
  $(".heptagon").animate({
    bottom: "-55px",
    left: "-79px"
  });
  $(".heptagon__text").animate({
    bottom: "23px",
    left: "10px"
  });
  $(".gondolatok").animate({
    bottom: "7px",
    left: "5px"
  });
  /* setTimeout(function(){
    $("#photo:nth-of-type(3)").attr("src","pic/harang1.jpg");
  }, 2000);*/
  $('#photo').click(function(){
    $(this).toggleClass("fullscreen");
  });

  $(window).resize(function() {
    if (window.matchMedia("(max-width: 500px)").matches) {
      $(".heptagon__title1, .heptagon__title2, .heptagon__title3, .heptagon__title4, .heptagon__title5, .heptagon__title, .heptagon__text b:first-of-type, .heptagon__text b:last-of-type").css("display","none");
      $(".heptagon__text b i").css("font-size","35px");
      $(".gray__box").css("top"," 1100px");
      $(".heptagon").click(function() { window.location = "https://m.facebook.com/napiigegondolat"; })
      $(".heptagon__text").click(function() { window.location = "https://m.facebook.com/napiigegondolat"; })
      $("#content__play, #content__pause").css("opacity","0");
    } else {
      $(".heptagon__title1, .heptagon__title2, .heptagon__title3, .heptagon__title4, .heptagon__title5, .heptagon__title6").css("display","block");
      $(".heptagon__text b i").css("font-size","25px");
      $(".gray__box").css("top"," 700px");
      $("#content__play, #content__pause").css("opacity","1");
    }
  }).trigger("resize");

});