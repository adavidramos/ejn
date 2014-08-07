console.log('\'Allo \'Allo!');



/* nav menu */
$("#show-mobile-nav").click(function() {
		$(".nav-mobile-hidden").toggle(200);
});



// masonry for layout
var container = $('.masonry-layout');
$container.imagesLoaded ( function() {
	$container.masonry({
	    itemSelector: 'section'
	});
})

