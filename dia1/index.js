var numeroUm = 1;
var stringUm = "1";
var numeroTrinta = 30;
var stringTrinta = "30";
var numeroDez = 10;
var stringDez = "10";

if (numeroUm == stringUm) {
  console.log(
    "As variáveis numero um e string um tem o mesmo valor, mas tipos diferentes"
  );
} else {
  console.log("As variáveis numero um e string um não tem o mesmo valor");
}

if (numeroTrinta === stringTrinta) {
  console.log(
    "As variáveis numero trinta e string trinta tem o mesmo valor e mesmo tipo"
  );
} else {
  console.log(
    "As variáveis numero trinta e string trinta não tem o mesmo tipo"
  );
}

if (numeroDez == stringDez) {
  console.log(
    "As variáveis numero dez e string dez tem o mesmo valor, mas tipos diferentes"
  );
} else {
  console.log("As variáveis numero dez e string dez não tem o mesmo valor");
}
