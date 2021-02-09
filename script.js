var randomimagesrc = "notes/a2.png";

function GetNewImage() {
  var imagearray = new Array("notes/a2.png", "notes/a3.png", "notes/c3.png", "notes/c4.png", "notes/d3.png", "notes/d4.png", "notes/e3.png", "notes/e4.png", "notes/f3.png", "notes/f4.png", "notes/g3.png", "notes/g4.png", "notes/h2.png", "notes/h3.png");
  randomimagesrc = imagearray[Math.floor(Math.random()*imagearray.length)]; // choose random image

  document.getElementById("img1").src = randomimagesrc; // set image to element
} 

function GetResult() {
  var p = document.getElementById('answer');
  var input = document.getElementById('imagetxt').value;
  var answer = randomimagesrc.slice(6,-4)

  if (input === answer) {
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