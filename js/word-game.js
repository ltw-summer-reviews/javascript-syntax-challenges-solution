$('#words').on('submit', function (e) {
  e.preventDefault();

  $('#words input').each(function (item) {
    var matchId = '#word-' + $(this).attr('data-answer');

    $(matchId).html($(this).val());
  });

  $(this).attr('hidden', true);
  $('#story').removeAttr('hidden');
});
