var inOut = 0;
do {
    var teclado = require("prompt-sync")();
    console.log("--------------------------------------------------------");
    console.log("Qual opera\u00E7\u00E3o deseja?");
    console.log("+ --> Adi\u00E7\u00E3o");
    console.log("- --> Subtra\u00E7\u00E3o");
    console.log("* --> Multiplica\u00E7\u00E3o");
    console.log("/ --> Divis\u00E3o");
    var opcao = teclado("Digite a op\u00E7\u00E3o desejada: ");
    var numeroUm = 0;
    var numeroDois = 0;
    var resultado = 0;
    if (opcao == "+") {
        numeroUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
        numeroDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
        resultado = numeroUm + numeroDois;
        console.log("--------------------------------------------------------");
        console.log("O valor da soma de ".concat(numeroUm, " com ").concat(numeroDois, " "));
        console.log();
        console.log("\u00E9 ".concat(resultado));
    }
    else if (opcao == "-") {
        numeroUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
        numeroDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
        resultado = numeroUm - numeroDois;
        console.log("--------------------------------------------------------");
        console.log("O valor da subtra\u00E7\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " "));
        console.log();
        console.log("\u00E9 ".concat(resultado));
    }
    else if (opcao == "*") {
        numeroUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
        numeroDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
        resultado = numeroUm * numeroDois;
        console.log("--------------------------------------------------------");
        console.log("O valor da multiplica\u00E7\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " "));
        console.log();
        console.log("\u00E9 ".concat(resultado));
    }
    else if (opcao == "/") {
        numeroUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
        numeroDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
        resultado = numeroUm / numeroDois;
        console.log("--------------------------------------------------------");
        console.log("O valor da multiplica\u00E7\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " "));
        console.log();
        console.log("\u00E9 ".concat(resultado));
    }
    else {
        console.log("Algo deu errado!!");
    }
    //console.clear();
    console.log("--------------------------------------------------------");
    console.log("Para continuar digite");
    console.log();
    console.log("0 - Sair");
    console.log("1 - Continuar");
    console.log();
    inOut = parseInt(teclado("Digite a op\u00E7\u00E3o: "));
} while (inOut != 0);
console.log("Fim de programa ...");
