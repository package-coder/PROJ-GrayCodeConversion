const grayElement = document.querySelector('#gray');
const binaryElement = document.querySelector('#binary');

binaryElement.addEventListener('keyup', (e) => {
    grayElement.value = convertBinaryToGray(binaryElement.value);
})

grayElement.addEventListener('keyup', (e) => {
    binaryElement.value = convertGrayToBinary(grayElement.value);
})

function convertBinaryToGray(binary){
    if(!binary)
        return '';
    if(binary.toString().length > 4)
        return ''  

    let arrayBinary = binary.split('');
    let arrayGray = [];

    arrayGray.push(arrayBinary[0]);

    for (let i = 0; i < arrayBinary.length-1; i++) {
        const bit = arrayBinary[i];
        const nextBit = arrayBinary[i+1];
        arrayGray.push(performXOR(bit, nextBit));       
    }
    return arrayGray.join('');
}

function convertGrayToBinary(gray){
    if(!gray)
        return '';
    if(gray.toString().length > 4)
        return ''  

    let arrayGray = gray.split('');
    let arrayBinary = [];

    arrayBinary.push(arrayGray[0]);

    for (let i = 0; i < arrayGray.length-1; i++) {
        const bit = arrayBinary[i];
        const nextBit = arrayGray[i+1];
        arrayBinary.push(performXOR(bit, nextBit));       
    }
    return arrayBinary.join('');
}

function performXOR(bit1, bit2){
    let sum = parseInt(bit1, 2) + parseInt(bit2, 2);
    return (sum > 1)? '0' : sum.toString();
}
