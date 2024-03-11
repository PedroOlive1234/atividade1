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
let array3 = [true, false, "true", "false", false];
let array4 = ['apple', 'morango', 'orange', 'grape', 'kiwi'];
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




//Conserte o código abaixo e siga as instruções:

const atividadeCodificada = "C2,r9,i2,e18, 19,u6,m11, 13,a13,r22,q6,u14,i23,v9,o21, 9,j5,a6,v6,a9,s17,c20,r11,i18,p18,t17, 0,q14,u8,e13, 3,t16,e0,n24,h7,a6, 6,322, 3,o7,b18,j1,e22,t19,o8,s19, 18,d21,i19,s17,t22,i3,n14,t0,o5,s1.,,7, 16,C8,a16,d1,a23, 10,o8,b15,j22,e4,t0,o5, 20,d23,e21,v24,e8, 2,p16,o24,s18,s8,u0,i17,r15, 11,321, 16,p15,r13,o9,p15,r9,i14,e9,d12,a18,d12,e10,s15, 1,q7,u21,e4, 12,c22,o9,n20,t16,e8,n8,h3,a2,m18, 20,v16,a16,l0,o21,r10,e19,s7, 23,d8,e0, 7,t0,i15,p13,o13,s23, 7,p21,r23,i0,m13,i11,t14,i19,v13,o9,s0, 18,d1,i14,f3,e21,r16,e14,n10,t19,e2,s16,.14, 9,A19,p5,ó0,s10, 4,f15,a7,z20,e8,r7, 18,i16,s20,t18,o15,,22, 12,c22,r23,i6,e5, 10,u6,m21, 20,q4,u0,a2,r8,t9,o13, 0,o7,b11,j22,e17,t2,o18, 20,q24,u11,e15, 2,r1,e15,c6,e15,b19,a20, 17,e18,m23, 2,s6,i13, 0,m0,e24,s19,m13,o4, 5,p11,e6,l10,o20, 8,m20,e7,n14,o9,s17, 16,d10,u3,a9,s17, 1,p24,r23,o8,p22,r16,i15,e18,d19,a18,d7,e22,s20, 9,d10,e22, 8,c23,a11,d9,a0, 21,u14,m16, 18,d4,o1,s22, 16,o12,u18,t20,r11,o14,s20, 8,o0,b21,j24,e14,t2,o7,s5,.14, 14,A8,p23,ó7,s14, 2,f16,a21,z0,e11,r13, 7,i3,s22,t14,o4,,17, 7,c2,r21,i17,e1, 10,u14,m2, 20,r24,e19,p5,o18,s6,i20,t7,ó2,r15,i2,o22, 24,n15,o22, 19,g11,i21,t10,h4,u3,b12, 17,p15,a5,r12,a20, 18,e14,s15,t9,e10, 4,a24,r7,q19,u13,i6,v9,o12,,15, 18,f9,a3,ç14,a10, 7,u0,p10,l5,o2,a18,d3, 18,d21,o24, 7,a23,r10,q9,u13,i8,v23,o2, 2,p2,a15,r10,a21, 21,s14,e5,u14, 5,r6,e22,s20,p9,e20,c19,t9,i15,v0,o23, 4,r24,e11,p16,o4,s13,i3,t7,ó14,r6,i24,o12, 9,e8, 8,e11,n10,v0,i16,e19, 23,o15, 3,l21,i24,n14,k1, 5,p21,a15,r1,a13, 17,o14, 18,p3,r6,o21,f2,e19,s5,s23,o21,r13";

function decodificarAtividade(variavelComTexto) {
    let primeiraDecodificacao = variavelComTexto.split(',').toString();
    let segundaDecodificacao = primeiraDecodificacao.split('');
    let terceiraDecodificacao = segundaDecodificacao.filter((item) => {
        if (item === " ") 
            return true;
        if (item === ",")
            return false;
        return Number.isNaN(Number(item));
    });
    let quartaDecodificacao = terceiraDecodificacao.join('');
    console.log(quartaDecodificacao);
}

console.log (decodificarAtividade(atividadeCodificada));


// Definindo objetos distintos com propriedades de tipos primitivos diferentes
const objeto1 = {
    nome: "Alice",
    idade: 30,
    ativo: true,
    altura: 1.65,
};

const objeto2 = {
    cidade: "Bobville",
    populacao: 50000,
    temperatura: 25.5,
    habitavel: true,
};

const jogador = {
    nome: "Player",
    atribudos: 2022,
    pontosDeVidas: 100,
};

// Criando um quarto objeto que recebe propriedades dos objetos anteriores
const objetoCombinado = {
    // Propriedades do objeto1
    nome: objeto1.nome,
    idade: objeto1.idade,

    // Propriedades do objeto2
    cidade: objeto2.cidade,
    populacao: objeto2.populacao,

    // Propriedades do jogador
    linguagem: jogador.linguagem,
    versao: jogador.versao,
};

// Exibindo os objetos no console para verificação
console.log("Objeto 1:", objeto1);
console.log("Objeto 2:", objeto2);
console.log("jogador:", jogador);
console.log("Objeto Combinado:", objetoCombinado);
