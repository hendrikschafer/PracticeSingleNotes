var randomimagesrc = "notes/a3.png";

function GetNewImage() {
  var imagearray = new Array("notes/a3.png", "notes/a4.png", "notes/c4.png", "notes/c5.png", "notes/d4.png", "notes/d5.png", "notes/e4.png", "notes/e5.png", "notes/f4.png", "notes/f5.png", "notes/g4.png", "notes/g5.png", "notes/h3.png", "notes/h4.png");
  randomimagesrc = imagearray[Math.floor(Math.random()*imagearray.length)]; // choose random image

  document.getElementById("img1").src = randomimagesrc; // set image to element
} 

function GetResult() {
  var p = document.getElementById('answer');
  var input = document.getElementById('imagetxt').value;
  var answer = randomimagesrc.slice(6,-4)

  if (input.toLowerCase() === answer) {
    p.textContent = "Congrats, " + answer + " is correct!";
  }
  else {
    p.textContent = "Wrong, " + answer + " is correct!";
  }
  document.getElementById('imagetxt').value = "";
}

window.onload = function(){ //generate image on page load
  GetNewImage();
  // document.getElementById('imagetxt').focus(); // activate text box
}

function CheckEnter(event) {
    var x = event.code;
    if(x == "Enter") {
        GetResult();
        GetNewImage();
    }    
}
