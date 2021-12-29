var words = ["программа", "макака", "прекрасный", "оладушек", "кирпич", "голова", "небоскреб"];
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
answerArray[i] = "_";
}

var remainingLetter = word.length;

while(remainingLetter > 0) {
alert(answerArray.join(" "));
var guess = prompt("Угадай букву");
if (guess === null) {
break;
} else if (guess.length !== 1) {
alert ("Введи одну букву!");
} else {
for (var j =0; j < word.length; j++){
if (word[j] === guess) {
answerArray[j] = guess;
remainingLetter--;
}
}
}
}
alert (answerArray.join(" "));
alert ("Отлично!");