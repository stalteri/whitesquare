$(document).ready(function(){


	$('[data-toggle="tooltip"]').tooltip();

	$('#home-page-slider').on('slid.bs.carousel', function (e) {
	  	var $this = $(this),
	  		current_index = $('.carousel-inner .item.active', $this).index();
	  	$('.slider-indicators',$this)
	  		.find('li').removeClass('active').end()
	  		.find('li').eq(current_index).addClass('active');
	})

})