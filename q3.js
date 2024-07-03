function processFormData() {
   var notas = []; 

   for (var i = 1; i <= 3; i++) {
      var nota_element = document.getElementById('not' + i + '_num');
      var nota = parseFloat(nota_element.value);  
      notas.push(nota);  
   }

   var media = (notas[0] + notas[1] + notas[2]) / 3;

   for (var i = 0; i < notas.length; i++) {
      if (notas[i] < 6) {
         console.log("aluno " + (i + 1) + " reprovado");
      } else {
         console.log("aluno " + (i + 1) + " aprovado");
      }
   }

   console.log("media: " + media);
}