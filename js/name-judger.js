$('#name-form').on('submit', function (e) {
  var name = $('#name').val();

  e.preventDefault();

  $(this).attr('hidden', true);
  $('.name').html(name);

  if (name.length < 4) {
    $('#short-name').removeAttr('hidden');
    return;
  }

  if (name.length < 10) {
    $('#medium-name').removeAttr('hidden');
    return;
  }

  $('#long-name').removeAttr('hidden');
});
