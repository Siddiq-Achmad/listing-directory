var bar = document.getElementById('js-progressbar');
var loadingStatus = document.getElementById('loadingA');
var loading = setInterval(function () {
    bar.value += 10;
    // console.log(bar.value);
    loadingStatus.innerHTML = bar.value + '%' ;
    if (bar.value >= bar.max) {
        clearInterval(loading);
    }
}, 10);


function unLoader(e) {
  bar.value=0;
  $("#app").hide();
  $("#spinner").show();
  }

 $(window).on('load', function() {
  setTimeout(function(){
       $("#spinner").hide();
       $("#app").show();
        window.onbeforeunload = unLoader;
      },100); 
  });


$(function(){
  //Scroll event
  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('.backtotop').fadeIn('slow');
    if (scrolled < 200) $('.backtotop').fadeOut('slow');
  });
  
  //Click event
  $('.backtotop').click(function () {
    $("html, body").animate({ scrollTop: "0" },  500);
  });
});

UIkit.util.ready(function () {

var bar1 = document.getElementById('js-rating1');
var bar2 = document.getElementById('js-rating2');
var bar3 = document.getElementById('js-rating3');
var bar4 = document.getElementById('js-rating4');

var persen1 = document.getElementById('persen1');
var persen2 = document.getElementById('persen2');
var persen3 = document.getElementById('persen3');
var persen4 = document.getElementById('persen4');

const bars = [bar1,bar2,bar3,bar4];

const persens = [persen1,persen2,persen3,persen4];

  var animated = setInterval(function () {

      for(let i=0;bars.length;i++){

        let a = 2**(i+1);
        a +=10;
        console.log('i '+i);
        console.log('a '+a);
        bars[i].value += a;

        persens[i].innerHTML = bars[i].value + '%' ;


      if (bars[0].value >= bars[0].max) {
        clearInterval(animated);
        }
      }
      
      
  },500);



});