let valores = [5, 2, 9, 1, 7];
let ordenados  = [5, 2, 9, 1, 7];

function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }

ordenados.sort(comparaNumeros)
console.log("valores ordenados: " + ordenados + "\nvalores em sequencia: " + valores)