console.log("hello meus bacanos");

var Variavel01 = "oi";
let Variavel02 = "Tudo bem?";
const Variavel03 = "vocês são lindos";

// concatenação de varoaveis 

console.log (Variavel01 + Variavel02); // sem espaço
console.log (Variavel01, Variavel02); // insere espaço 

Variavel01 = "Olá!"; 
console.log (Variavel01 + Variavel02);

//Variaveis do tipo constante, não podem recever um novo valor que sobreescreva o original 

let Teste = "Texto"
console.log(typeof(Teste));
Teste = 2;
console.log(typeof(Teste));
Teste = {nome: "João", idade: 38};
console.log("O tipo agora é:", typeof(Teste));
Teste = [1, 2]
console.log("O resultado do tipo array é", typeof(Teste));
