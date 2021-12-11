

function toUnicode(){
    var getStrValue = document.getElementById('charinputarea').value;
    var uniCodes = "";
    var binaryValue = "";
    var hexValue = "";
    var octalValue = "";
    for (let i = 0; i < getStrValue.length; i++) {
        
        var currentBinary = to8bitBinary(getStrValue.charCodeAt(i));
        var currentOctal = toOctal(getStrValue.charCodeAt(i));
        var currentHex = toHex(getStrValue.charCodeAt(i));
        uniCodes= uniCodes+ getStrValue.charCodeAt(i)+", ";
        binaryValue = binaryValue+ currentBinary+ ", ";
        hexValue = hexValue+ currentHex+ ", ";
        octalValue = octalValue+ currentOctal+ ", ";
        
    }
    document.getElementById('unicodevalue').innerText = uniCodes.slice(0, -2);
    document.getElementById('binaryvalue').innerText = binaryValue.slice(0, -2);
    document.getElementById('hexvalue').innerText = hexValue.slice(0, -2);
    document.getElementById('octalvalue').innerText = octalValue.slice(0, -2);

}
function toOctal(number){
    return number.toString(8);
}

function toHex(number){
    return number.toString(16);
}

function to8bitBinary(number){
    var binary = number.toString(2);
    return binary.padStart(8,0);
}

function toChar(){
    var getUnicode = document.getElementById('uniinputarea').value;
    var unicodeArray = getUnicode.split(',');
    var charValue = "";
    for (let index = 0; index < unicodeArray.length; index++) {
        var currentUniValue = Number(unicodeArray[index].trim())
        var currentUniChar = String.fromCharCode(currentUniValue);
        charValue = charValue+ currentUniChar+ ", ";
    }
    document.getElementById('carvalue').innerText = charValue.slice(0, -2);

    
}


document.getElementById('convertToCode').onclick = toUnicode;
document.getElementById('convertToChar').onclick = toChar;