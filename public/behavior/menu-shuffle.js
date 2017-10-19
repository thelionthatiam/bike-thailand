/*---------------menu stuff---------------------*/

var category = $('.categoryTitle');
var article = $('.subCategoryTitle');

function removeSelector(aClass) {
	var arr = aClass.split('');
	arr.shift();
	arr.join('');
	return arr.join('');
}

function slideDownNext(selected, highlightedClass, highlight) {
	var next = selected.next();
	next.addClass(highlight).slideDown();
}

function oneOpen(selected, highlightedClass, highlight) {
	if (selected.next().hasClass(highlight)) {
		$(highlightedClass).slideUp().removeClass(highlight);
		selected.next().removeClass(highlight);
	} else {
		$(highlightedClass).slideUp().removeClass(highlight);
		slideDownNext(selected, highlightedClass, highlight);
	}
}

function windowPosition(selected) {
  $('html, body').animate({
    scrollTop: selected.position().top
  });
}

category.click(function() {
	var selected = $(this);
	var highlightedClass = '.red';
	var highlight = removeSelector(highlightedClass);
	oneOpen(selected, highlightedClass, highlight);
});

article.click(function() {
	var selected = $(this);
	var highlightedClass = '.green';
	var highlight = removeSelector(highlightedClass);
  windowPosition(selected);
	oneOpen(selected, highlightedClass, highlight);
});


/*---------------about stuff---------------------*/
var about = $('.about')
