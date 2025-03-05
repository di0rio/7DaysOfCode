// Declaração das variáveis numéricas e strings
var numeroUm = 1;          // Número inteiro
var stringUm = "1";        // String contendo o caractere "1"
var numeroTrinta = 30;     // Número inteiro
var stringTrinta = "30";   // String contendo "30"
var numeroDez = 10;        // Número inteiro
var stringDez = "10";      // String contendo "10"

// Primeiro teste: Comparação com == (igualdade abstrata)
if (numeroUm == stringUm) {
    console.log("As variáveis numero um e string um tem o mesmo valor, mas tipos diferentes");
} else {
    console.log("As variáveis numero um e string um não tem o mesmo valor");
}

// Segundo teste: Comparação com === (igualdade estrita)
if (numeroTrinta === stringTrinta) {
    console.log("As variáveis numero trinta e string trinta tem o mesmo valor e mesmo tipo");
} else {
    console.log("As variáveis numero trinta e string trinta não tem o mesmo tipo");
}

// Terceiro teste: Comparação com == (igualdade abstrata)
if (numeroDez == stringDez) {
    console.log("As variáveis numero dez e string dez tem o mesmo valor, mas tipos diferentes");
} else {
    console.log("As variáveis numero dez e string dez não tem o mesmo valor");
}