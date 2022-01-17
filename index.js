const alphabetString =
    "a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
    "m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
    "y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..";

let alphabetArray = alphabetString.split(";");


function charToMorseCode(char) {
    for (let i = 0; i < alphabetArray.length; i++) {
        let letter = alphabetArray[i].split("=")[0];

        if (letter === char.toLowerCase()) {
            return alphabetArray[i].split("=")[1];
        }
    }
}

console.log(charToMorseCode("h"));


function convertToMorse(str) {
    const array = [];
    let result = '';

    for (const i in str) {
        result += array[i] = charToMorseCode(str[i])
        result += "; "
    }
    return str + " translated to morse code:  " + result;
}

console.log(convertToMorse("Hello"))




