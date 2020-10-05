const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let counter = 0;
    expr = expr.replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ');
    newStr = '';  
    for (let i = 0; i < expr.length - 1; i++) {

        if (expr[i] == '1' && expr[i+1] == '0') {
            newStr += '.';
            i++
        } else if (expr[i] == '1' && expr[i+1] == '1') {
            newStr += '-';
            i++;
        } else if (expr[i] == ' ') {
            newStr += '   ';
            counter = 0;
            continue;
        } else {
            i++
        }


        counter++
        if (counter == 5) {
            newStr += ' ';
            counter = 0;
        }
    }

    let decoding = [];
    newStr.split('   ').map( (word) => {
        word.split(' ').map( (letter) => {
            decoding.push(MORSE_TABLE[letter]);
        });
        decoding.push(' ');
    });
    // write your solution here
    decodingStr = decoding.join("");
    decodingStr = decodingStr.replace(/\s+/g, ' ').trim();
    return decodingStr;

}

module.exports = {
    decode
}
