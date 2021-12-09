

function toUnicode(){
    var getStrValue = document.getElementById('charinputarea').value;
    var uniCodes = "";
    var binaryValue = "";
    for (let i = 0; i < getStrValue.length; i++) {
        uniCodes= uniCodes+ getStrValue.charCodeAt(i)+", ";
        var currentBinary = to8bitBinary(getStrValue.charCodeAt(i));
        binaryValue = binaryValue+ currentBinary+ ", ";
        
        
    }
    document.getElementById('unicodevalue').innerText = uniCodes.slice(0, -2);
    document.getElementById('binaryvalue').innerText = binaryValue.slice(0, -2);

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