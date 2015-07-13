var letter;
var $letters = $('.letters');

while (!letter) {
  letter = prompt('Type a letter.');
}

for (var i = 0; i < 10; i++) {
  var $li = $('<li>').html(letter);
  $letters.append($li);
}
