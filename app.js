$(function() {
  
  $('#toggleButton').on('click', function() {
    $('#myParagraph').toggle();
  });

  $('#colorButton').on('click', function() {
    $('#colorDiv').css('background-color', 'yellow');
  });

  $('#addClassButton').on('click', function() {
    $('#classDiv').addClass('New-Class');
  });

  $('#removeClassButton').on('click', function() {
    $('#classDiv').removeClass('New-Class');
  });

  $('#fadeInButton').on('click', function() {
    $('#fadeDiv').fadeIn();
  });

  $('#fadeOutButton').on('click', function() {
    $('#fadeDiv').fadeOut();
  });

  $('#slideUpButton').on('click', function() {
    $('#slideDiv').slideUp();
  });

  $('#slideDownButton').on('click', function() {
    $('#slideDiv').slideDown();
  });

});