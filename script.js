
function vitorias(vitoria, derrotas) {
  return vitoria - derrotas
}

var saldoVitorias = vitorias(120,2);


function calcular() {
if( saldoVitorias < 10) {
    console.log(`O herói tem de saldo de ${saldoVitorias} e está no nível Ferro`);
} else if ( saldoVitorias >= 11 && saldoVitorias <= 20 ) {
    console.log(`O herói tem de saldo de ${saldoVitorias} e está no nível Bronze`)
} else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    console.log(`O herói tem de saldo de ${saldoVitorias} e está no nível Prata`)
} else if (saldoVitorias >= 51 && saldoVitorias <= 80 ) {
    console.log(`O herói tem de saldo de ${saldoVitorias} e está no nível Ouro`)
} else if (saldoVitorias >= 81 && saldoVitorias <= 90 ) {
    console.log(`O herói tem de saldo de ${saldoVitorias} e está no nível Diamante`)
} else if (saldoVitorias >= 91 && saldoVitorias <= 100 ) {
    console.log(`O herói tem de saldo de ${saldoVitorias} e está no nível Lendario`)
} else if (saldoVitorias >= 101) {
    console.log(`O herói tem de saldo de ${saldoVitorias} e está no nível Imortal`)
}
}

calcular()