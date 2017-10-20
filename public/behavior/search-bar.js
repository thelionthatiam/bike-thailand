var topicList = ["about", "gear", "bags", "bicycles", "weight", "clothes", "daily", "riding", "locking", "expenses", "maps"];
// $('.dropdownList').scrollTop(1).scrollTop(0);

function dropdownMatcher(string, array) {
  var re = new RegExp("^(" + string + ").*", 'i')
  if (string === undefined) {

    $('.dropdownList').empty();
    for (var i = 0; i < array.length; i++) {
      $(".dropdownList").append("<li class='dropdownItem'>" + array[i] + "</li>");
    }
    $('.dropdownWrapper').removeClass('none');
  } else if (string.length === 1) {
    $('.dropdownList').empty();
    var re = new RegExp("^(" + string + ").*", 'i')
    for (var i = 0; i < array.length; i++) {
      if (re.test(array[i]) === true) {
        $(".dropdownList").append("<li class='dropdownItem'>" + array[i] + "</li>");
      }
    }
    $('.dropdownWrapper').removeClass('none');
  } else {
    $('.dropdownList').empty();
    for (var i = 0; i < array.length; i++) {
      if (re.test(array[i]) === true) {
        $(".dropdownList").append("<li class='dropdownItem'>" + array[i] + "</li>");
      }
    }
    $('.dropdownWrapper').removeClass('none');
  }
}

$('.dropdownSearch').focus(function() {
  var string = $(this).val().split('')[0];
  dropdownMatcher(string, topicList);
}).keyup(function () {
  var string = $(this).val();
  dropdownMatcher(string, topicList);
})

//click an item from the
$('.dropdownList').on('click', '.dropdownItem', function() {
  console.log('dopdowitem clicked', $(this).text())
  $('.dropdownSearch').val($(this).text())
  $('.dropdownList').empty();
  $('.dropdownWrapper').addClass('none');
});

//elements to clear upon window click
$(document).click(function(){
 $('.dropdownList').empty();
 $('.dropdownWrapper').addClass('none');
})
//stops event from window click
$('.dropdownWrapper, .dropdownSearch').click(function(e){
 e.stopPropagation();
})
