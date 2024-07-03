function processFormData() {
   var temp_element;
   var temp;
   temp_element = document.getElementById('temp_num'); 
   temp = temp_element.value;
   var f = temp * 1.8 + 32;
   alert("Temperatura em Fahrenheit sera: " + f +" graus");
 }