var indexCount =1;

setInterval(function(){
  setInterval(function() {
    runAnims("active");
  }, 20);
},100);
setInterval(function(){
  setInterval(function() {
    runAnims("active-b");
  }, 20);
},100);
setInterval(function(){
  setInterval(function() {
    runAnims("active-c");
  }, 20);
},100);

function runAnims(className){
  $('.moda').removeClass(className);
  $('.moda:nth-child('+indexCount+')').addClass(className);
  if(indexCount >  $('.moda').length){
    $('.moda').removeClass(className);
    indexCount = 0;
  }
  indexCount++;
};