var letter;
var $letters = $('.letters');

while (!letter) {
  letter = prompt('Type a letter.');
}

for (var i = 0; i < 10; i++) {
  var $li = $('<li>');
  var allLetters = '';

  for (var j = 0; j <= i; j++) {
    allLetters += letter;
  }

  $li.html(allLetters);
  $letters.append($li);
}
