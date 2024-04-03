const hightlight = document.getElementById('hightlight');
console.log(hightlight);

const messages = [
    "hé lô",
    "ƯTF",
    "Tôi là ai??",
    "CÁi đé gì zậy",
    "OHHH myyy góhh",
    "CÚT!!!",
];
let messlength = messages.length;
let messIndex = 0;
let charIndex = 0;

function typing(messIndex){
    let currentMess = messages[messIndex];
    if(charIndex < currentMess.length){
        let currentChar = currentMess.substring(0, charIndex + 1);
        hightlight.textContent = currentChar;
        charIndex ++;
    }else{
        if(messIndex < messlength){
        messIndex ++;
    }else{
        messIndex = 0;
    }
        charIndex = 0;
    }
    console.log(currentMess);
    setTimeout(typing, 200, messIndex);
}
typing(0);