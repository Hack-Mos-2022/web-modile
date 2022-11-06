// eslint-disable-next-line import/no-named-as-default
import Swiper, { A11y, Pagination } from 'swiper'

const creatSlider = () => {
	return {
		methods : {
			creatSlider (el, config) {
				if (!el) {
					return false
				}
				const slider       = el.querySelector('.swiper')
				const paginationEl = el.querySelector('.swiper-pagination')
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
						dynamicBullets : false
					}
				}

				if (config) {
					Object.assign(settings, config)
				}
				return new Swiper(slider, settings)
			}
		}
	}
}

export default creatSlider
