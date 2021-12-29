// Создаем массив со словами
var words = ["программа", "макака", "прекрасный", "оладушек", "кирпич", "голова", "небоскреб"];
// Выбираем случайное слово
var word = words[Math.floor(Math.random() * words.length)];
// Создаем итоговый массив
var answerArray = [];
for (var i = 0; i < word.length; i++) {
answerArray[i] = "_";
}

var remainingLetter = word.length;
// Итоговый массив
while(remainingLetter > 0) {
    // Показываем состояние игры
alert(answerArray.join(" "));

// Запрашиваем вариант ответа 
var guess = prompt("Угадай букву");
if (guess === null) {
    // Выходим из игрового цикла
break;
} else if (guess.length !== 1) {
alert ("Введи одну букву!");
} else {
    guess = guess.toLocaleLowerCase();
    // Обновляем состояние игры
for (var j = 0; j < word.length; j++){
if (word[j] === guess) {
answerArray[j] = guess;
remainingLetter--;
}
}
}
// Конец игрового цикла
}
// Отображаем ответ и поздравляем игрока
alert (answerArray.join(" "));
alert ("Отлично! Было загадано слово " + word");