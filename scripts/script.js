$(document).ready(function(){
  
  console.log("Top: " + $("img").position().top + "Left: " + $("img").position().left);
  
  $("img").draggable({
    stop: function () {
      console.log("stopping???");

      let dogeLeft = $("img").position().left;

      if (dogeLeft > 100, dogeLeft <= 1500) {
        console.log(dogeLeft);

        $("p").text("Wow, you got " + dogeLeft + " points. Good for you.");

      }
      if (dogeLeft > 1500) {
        console.log(dogeLeft);

        $("p").text("Wow, you got " + dogeLeft + " points. You Win.");

      }
    },
  });

});
