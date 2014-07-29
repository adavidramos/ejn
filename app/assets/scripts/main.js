console.log('\'Allo \'Allo!');



/* nav menu */
$("#show-mobile-nav").click(function() {
		$(".nav-mobile-hidden").toggle(200);
});



// masonry for layout
var container = document.querySelector('.masonry-layout');
var msnry = new Masonry( container, {
  itemSelector: 'section'
});
