var total = 0;

document.getElementById("entry").onsubmit = addTotal;

function addTotal(event){
event.preventDefault();
 var a = parseFloat(document.getElementById('newEntry').value);
  if (isNaN(a)){
  document.getElementById("entry").reset()
  } else {

   total = total + a
  
  document.getElementById("total").innerHTML = "$" + total

 document.getElementById("entry").reset()
 
  }
  

}

  

