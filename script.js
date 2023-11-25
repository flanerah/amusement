$(function() {
    var image = $("<img/>").attr("src", "/icons/dora.jpg").load(function() {
      var canvas = document.createElement("canvas");
      canvas.width = this.width;
      canvas.height = this.height;
  
      var context = canvas.getContext("2d");
      context.drawImage(this, 0, 0, canvas.width, canvas.height);
  
      var imageData = context.getImageData(200, 200, canvas.width - 200, canvas.height - 200);
      var data = imageData.data;
  
      var newCanvas = document.createElement("canvas");
      newCanvas.width = imageData.width; 
    })});
