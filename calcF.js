var teclado = require("prompt-sync")();
var n1 = 0;
var n2 = 0;
function sair() {
    console.clear();
    console.log("encerar calculadora...");
    process.exit;
}
function adicao(n1, n2) {
    var resultado = n1 + n2;
    console.log("a adi\u00E7\u00E3o dos numeros ".concat(n1, " e ").concat(n2, " \u00E9... "));
    console.log("".concat(resultado, " !!"));
    console.log();
    console.log("aperte ENTER para continuar...");
    teclado();
    menu();
}
function subtracao(n1, n2) {
    var resultado = n1 - n2;
    console.log("a subtra\u00E7\u00E3o dos numeros ".concat(n1, " e ").concat(n2, " \u00E9..."));
    console.log("".concat(resultado, " !!"));
    console.log();
    console.log("aperte ENTER para continuar...");
    teclado();
    menu();
}
function multiplicacao(n1, n2) {
    var resultado = n1 * n2;
    console.log("a multiplica\u00E7\u00E3o dos numeros ".concat(n1, " e ").concat(n2, " \u00E9..."));
    console.log("".concat(resultado, " !!"));
    console.log();
    console.log("aperte ENTER para continuar...");
    teclado();
    menu();
}
function divisao(n1, n2) {
    var resultado = n1 / n2;
    console.log("a soma dos numeros ".concat(n1, " e ").concat(n2, " \u00E9..."));
    console.log("".concat(resultado, " !!"));
    console.log();
    console.log("aperte ENTER para continuar...");
    teclado();
    menu();
}
function selecao(opcao) {
    n1 = parseInt(teclado("digite o primiro numero:  "));
    n2 = parseInt(teclado("digite o segundo numero:  "));
    switch (opcao) {
        case "+":
            adicao(n1, n2);
            break;
        case "-":
            subtracao(n1, n2);
            break;
        case "*":
            multiplicacao(n1, n2);
            break;
        case "/":
            divisao(n1, n2);
            break;
    }
}
function menu() {
    console.clear();
    console.log("---------- CALCULADORA ----------");
    console.log("-------- selecione op\u00E7\u00E3o --------");
    console.log();
    console.log("digite a op\u00E7\u00E3o desejada");
    console.log(" + -> adi\u00E7\u00E3o");
    console.log(" - -> subtra\u00E7\u00E3o");
    console.log(" * -> multiplica\u00E7\u00E3o");
    console.log(" / -> divis\u00E3o");
    console.log(" s -> sair");
    console.log();
    var opcao = teclado("digite a op\u00E7\u00E3o -->  ");
    selecao(opcao);
}
menu();
