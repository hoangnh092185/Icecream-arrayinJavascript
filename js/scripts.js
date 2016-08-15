$(document).ready(function(){
  var flavors = ["vanila", "coconut", "peanut butter", "Reeses chunky"];

  flavors.forEach(function(flavor){
    $("ul").append("<li>" + flavor + "</li>");
  })
})
