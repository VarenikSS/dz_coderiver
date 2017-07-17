import slk from  'slick-carousel';

function slider(sliderClass,prevButton,nextButton) {
	$(document).ready(function(){
		$(sliderClass).slick({
			prevArrow: $(prevButton),
			nextArrow: $(nextButton),
		});
	});
}
module.exports = slider;