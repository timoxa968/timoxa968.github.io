$(document).foundation();

$(document).ready(function(){
	
});

$(window).load(function(){
	heightBody();
});

function heightBody(){
	$('body, .page-wrapper, .footer-box').height('auto');
	var heightFooter = $('.footer-box').outerHeight(),
		pageHeight = $('html').height(),
		bodyHeight = $('body').height(pageHeight);
	$('.page-wrapper').css({
		"padding-bottom": heightFooter
	});
	$('.footer-box').css({
		"margin-top": -heightFooter
	});
}

function maxHeight(elem) {

	var maxHeight = 0;
	$(elem).each(function(){
		if ( $(this).height() > maxHeight ){
			maxHeight = $(this).height();
		}
	});
	$(elem).height(maxHeight);

}

function heightImgBox(elem, n){

	var w = $(elem).width();
	$(elem).height(w-n);

}

function toggleActive(elem){

	$(elem).on('click', function(){
		var $this = $(this)
		if($this.hasClass('active')){
			$this.removeClass('active')
		} else {
			$this.addClass('active')
		}
	});

}

function callModal(elem, id){

	$(elem).on('click', function(){
		$(id).arcticmodal();
	});

}