// Primeira Atividade


// Declarando variáveis com diferentes tipos de dados usando let e const
let numero = 42; 
let texto = "Olá, mundo!"; 
const booleano = true; 
const array = [1, 2, 3, 4, 5]; 
const objeto = { nome: "João", idade: 25, cidade: "Exemplo" }; 

// Exibindo as variáveis no console
console.log("Número:", numero);
console.log("Texto:", texto);
console.log("Booleano:", booleano);
console.log("Array:", array);
console.log("Objeto:", objeto);


// Segunda Atividade

// Criando 5 arrays com 5 itens diferentes
let array1 = [1, 2, 3, 4, 5];
let array2 = ['a', 'b', 'c', 'd', 'e'];
let array3 = [true, false, true, false, true];
let array4 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
let array5 = [10, 20, 30, 40, 50];

// Modificando os arrays conforme os requisitos
array1[1] = array5[2]; 
array2[1] = array4[1]; 

// Criando um novo array que recebe o quarto item de cada um dos outros 4 arrays
let arrayNovo = [array1[3], array2[3], array3[3], array4[3], array5[3]];

// Exibindo os arrays no console
console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Array 3:", array3);
console.log("Array 4:", array4);
console.log("Array 5:", array5);
console.log("Novo Array:", arrayNovo);
