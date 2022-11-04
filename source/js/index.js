import Swiper, { A11y, Pagination } from 'swiper';
import Alpine                     from 'alpinejs';

// Slider
function sliders(el, config) {
	if (!el) {
		return false;
	}
	const slider       = el.querySelector('.swiper');
	const paginationEl = el.querySelector('.swiper-pagination');
	const settings     = {
		modules               : [A11y, Pagination],
		loop                  : false,
		slidesPerView         : 'auto',
		spaceBetween          : 0,
		preloadImages         : false,
		watchSlidesVisibility : true,
		watchOverflow         : true,
		threshold             : 10,
		observer              : true,
		pagination            : {
			el             : paginationEl,
			type           : 'bullets',
			clickable      : true,
			dynamicBullets : false,
		},
	};

	if (config) {
		Object.assign(settings, config);
	}
	return new Swiper(slider, settings);
}

// Init
function init() {
	window.Alpine = Alpine;

	Alpine.start();

	const sliderCategory = document.querySelectorAll('[data-slider="slide"]');
	sliderCategory.forEach((item) => sliders(item, {
		slideToClickedSlide : true,
	}));

	const sliderGallery = document.querySelectorAll('[data-slider="gallery"]');
	sliderGallery.forEach((item) => sliders(item, {
		loop       : true,
		grabCursor : true,
	}));
}

(function () {
	init();
}());
