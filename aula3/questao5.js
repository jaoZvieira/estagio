function inverteString(string) {
    let invertedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        invertedString += string[i];
    }
    return invertedString;
}

// String a ser invertida (pode ser alterada)
const entrada = "vamos inverter a palavra";

const stringInvertida = inverteString(entrada);
console.log("String original:", entrada);
console.log("String invertida:", stringInvertida);
