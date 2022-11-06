<template>
	<div class="swiper-slide">
		<NuxtLink class="preview-item" to="/mobile-app">
			<div class="preview-item__main">
				<div class="preview-item__label">
					{{ slide.label }}
				</div>
				<div class="preview-item__title" v-html="slide.title" />
				<div class="preview-item__desc">
					{{ slide.desc }}
				</div>
				<div class="preview-item__link">
					<div class="b-btn b-btn--white b-btn--small">
						Смотреть
					</div>
				</div>
			</div>
			<picture class="preview-item__image">
				<source :srcset="require(`~/assets/images/preview/${slide.image}.webp`) + ' 1x, ' + require(`~/assets/images/preview/${slide.image}@2x.webp`) + ' 1.3x'" type="image/webp">
				<source :srcset="require(`~/assets/images/preview/${slide.image}.jpg`) + ' 1x, ' + require(`~/assets/images/preview/${slide.image}@2x.jpg`) + ' 1.3x'" type="image/jpg">
				<img :alt="slide.title" :src="require(`~/assets/images/preview/${slide.image}.jpg`)" height="483" width="282">
			</picture>
		</NuxtLink>
	</div>
</template>

<script>

export default {
	name  : 'PostItem',
	props : {
		slide : {
			type    : Object,
			default : () => ({}),
			require : true
		}
	}
}
</script>
