let familia = {
   receitas: [1000, 1500, 2000], 
   despesas: [600, 800, 1000],  
};

function calcularSaldo(familia) {
   const totalReceitas = familia.receitas.reduce((total, receita) => total + receita, 0);

   const totalDespesas = familia.despesas.reduce((total, despesa) => total + despesa, 0);

   const saldo = totalReceitas - totalDespesas;


   let mensagem = `Saldo da família é `;
   if (saldo >= 0) {
       mensagem += `positivo: R$ ${saldo.toFixed(2)}`;
   } else {
       mensagem += `negativo: R$ ${saldo.toFixed(2)}`;
   }

   console.log(mensagem);
}

calcularSaldo(familia);