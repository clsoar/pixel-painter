$(function(){
  const colorPicker = $("#colorPicker");
  const pixelCanvas = $("#pixelCanvas");
  const sizePicker = $("#sizePicker");
//get size and make grid
  $(sizePicker).submit(function (event) {
    event.preventDefault();
    //first empty current canvas
    $(pixelCanvas).empty();
    //get dimensions from input form
    gridHeight = $("#input_height").val();
    gridWidth = $("#input_width").val();
    //make the grid
    makeGrid(gridHeight, gridWidth);
  });

  //loops to make the grid
  function makeGrid(h, w){
    for (let y = 1; y <= h; y++){
      $(pixelCanvas).append("<tr></tr>");
    }
    let x = 1;
    while (x <= w){
      $("tr").append("<td></td>");
      x++;
    }
  }

  //listen for mouse clicks and change cell color

 $(pixelCanvas).on("click", "td", function(){
   $(this).css("background-color", $(colorPicker).val());
    });

  //color while mouse is down

    $(pixelCanvas).on("mousemove", "td", function(event){
      event.preventDefault();
      if (event.which == 1){
        $(this).css("background-color", $(colorPicker).val());
      }
  });

// press and hold color for touchscreen
  /*var touchOn = false;
  $("#pixel_canvas").on("touchstart", "td", function(event){
    event.preventDefault();
    touchOn = true;
    //if (event.targetTouches.length == 1){
    $(event.target).css("background-color", $("#colorPicker").val());
    });
  $("#pixel_canvas").on("touchmove", "td", function(event){
      event.preventDefault();
    var touches = touchEvent.targetTouches;

    if (touches.is("td")){
      $(event.target).css("background-color", $("#colorPicker").val());
    }
  });*/
  //new attempt at touch events
  //var pixelCanvas = document.querySelector("pixel_canvas");

  /*function touchStart (event){
    event.preventDefault();


  }
  function touchMove (event){
    event.preventDefault();
  }*/

  //pixelCanvas.addEventListener("touchstart", touchStart, false);
  //pixelCanvas.addEventListener("touchmove", touchMove, false);


});
