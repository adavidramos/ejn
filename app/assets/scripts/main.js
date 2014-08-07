console.log('\'Allo \'Allo!');



/* nav menu */
$("#show-mobile-nav").click(function() {
		$(".nav-mobile-hidden").toggle(200);
});



// masonry layout for stories
var masonryContainer = document.querySelector('.masonry-layout');
var masnry;
imagesLoaded ( masonryContainer, function() {
	masnry = new Masonry( masonryContainer, {
		itemSelector: '.masonry-item'
	});
});


