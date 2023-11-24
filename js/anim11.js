function deepV2(){
	let height = $('.hero-image-composition-4').height() + 20;
	let width = $( window ).width();
	if (width < 768){
		height = $('.hero-image-composition-4').height() + 80;
	}
	
	$(window).resize(function() {
		width = $( window ).width();
		if (width < 768){
			height = $('.hero-image-composition-4').height() + 80;
		}
	});
	
	$(window).scroll(function() {
		/*scroll = $(window).scrollTop();*/
		scroll = $('.hero-image-composition-4').offset().top - $(window).scrollTop();
		if (scroll > height){
			$('.hero-image-composition-4 .im_left').removeClass('anim');
			$('.hero-image-composition-4 .im_right').removeClass('anim');
		}else{
			$('.hero-image-composition-4 .im_left').addClass('anim');
			$('.hero-image-composition-4 .im_right').addClass('anim');
		}
	});
}

$(document).ready(function(){
	deepV2();
});