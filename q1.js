var matriz1 = [[2, -1], [2, 0]];
var matriz2 = [[2, 3], [-2, 1]];
var matriz3 = [[0, 0], [0, 0]];

console.log("\nmatriz 1 \n" + matriz1[0] + "\n" + matriz1[1]);
console.log("\nmatriz 2 \n" + matriz2[0] + "\n" + matriz2[1]);

for (let lin = 0; lin < 2; lin++) {
    for (let col = 0; col < 2; col++) {
        matriz3[lin][col] = 0; 
        
        for (let i = 0; i < 2; i++) {
            matriz3[lin][col] += matriz1[lin][i] * matriz2[i][col]; 
        }
    }
}

console.log("\nmatriz nova \n" + matriz3[0] + "\n" + matriz3[1]);