250document.getElementById('submitc').onclick = CelsiusToFarenheit;

function CelsiusToFarenheit() {
  var a = document.getElementById('celsius').value;
  var b = document.getElementById('farenheit').value;
  
  document.getElementById('farenheit').value = a * 1.8;
  
}

document.getElementById('submitf').onclick = FarenheitToCelsius;

function FarenheitToCelsius() {
  var a = document.getElementById('celsius').value;
  var b = document.getElementById('farenheit').value;
  
  document.getElementById('celsius').value = b / 1.8;
  
}