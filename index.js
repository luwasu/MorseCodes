const charToMorseCode = function(char) {
    const alphabetString =
        "a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
        "m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
        "y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..";

    const alphabetArray = alphabetString.split(";");

    for (let i = 0; i < alphabetArray.length; i++) {
        let letter = alphabetArray[i].split("=")[0];

        if (letter === char.toLowerCase()) {
            return alphabetArray[i].split("=")[1];
        }
    }
}

const convertToMorse = function(str) {
    const array = str.split("");
    let result = '';

    for (const i in str) {
        result += charToMorseCode(array[i])
        result += " ; "
    }
    return str + " --> translated to morse code -->  " + result;
}

console.log(convertToMorse("Hello?"))




