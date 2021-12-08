

function toUnicode(){
    var getStrValue = document.getElementById('charinputarea').value;
    var arrValue = getStrValue.split('');
    var uniCodes = "";
    var binaryValue = "";
    for (let i = 0; i < getStrValue.length; i++) {
        // uniCodes=uniCodes+x.charCodeAt(position)+', '

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




document.getElementById('convertToCode').onclick = toUnicode;