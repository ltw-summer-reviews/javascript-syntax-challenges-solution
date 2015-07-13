$('#name-form').on('submit', function (e) {
  var name = $('#name').val();

  e.preventDefault();

  $(this).attr('hidden', true);
  $('#name-wrap').removeAttr('hidden');
  $('.name').html(name);
});
