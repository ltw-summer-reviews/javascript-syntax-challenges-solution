var $questionName = $('#question-name');
var $questionStory = $('#question-story');
var $story1 = $('#story-1');
var $story2 = $('#story-2');

$questionName.on('submit', function (e) {
  e.preventDefault();
  $('.name').html($('#name').val());
  $questionName.attr('hidden', true);
  $questionStory.removeAttr('hidden');
});

$questionStory.on('submit', function (e) {
  var answer = $('[name="answer-story"]:checked').val();

  e.preventDefault();

  $questionStory.attr('hidden', true);

  switch (answer) {
    case "a":
      $story1.removeAttr('hidden');
      break;
    case "b":
      $story2.removeAttr('hidden');
      break;
  }
});

$story1.on('submit', function (e) {
  var answer = $('[name="answer-1"]:checked').val();

  e.preventDefault();

  $story1.attr('hidden', true);
  $('#story-1-end').removeAttr('hidden');
  $('#story-1-end-' + answer).removeAttr('hidden');
});

$story2.on('submit', function (e) {
  var answer = $('[name="answer-2"]:checked').val();

  e.preventDefault();

  $story2.attr('hidden', true);
  $('#story-2-end').removeAttr('hidden');
  $('#story-2-end-' + answer).removeAttr('hidden');
});
