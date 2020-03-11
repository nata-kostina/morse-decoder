const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = "";       // хранит преобразованную строку
    let space = "**********";
    for (i = 0; i < (expr.length);) {
        str = expr.slice(i, i + 10);    // взять десять символов из строки
        let morseCode = "";          // хранит код Морзе
        if (str == space)
            result += " ";
        else {
            for (n = 0; n < str.length;) {
                let el = str.slice(n, n + 2);   // взять два символа
                switch (el) {
                    case "10":
                        morseCode += ".";
                        break;
                    case "11":
                        morseCode += "-";
                        break;
                }
                n = n + 2;
            }
            for (let key in MORSE_TABLE) {      // преобразовать код в букву
                if (key == morseCode) {
                    result += MORSE_TABLE[key];
                }
            }
        }
        i = i + 10;
    }
    return result;
}

module.exports = {
    decode
}