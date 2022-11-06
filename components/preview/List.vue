<template>
	<div ref="swiper" class="preview__slider">
		<div class="swiper">
			<div class="swiper-wrapper">
				<PreviewItem
					v-for="(slide, index) in slides"
					:key="`priview-${index}`"
					:slide="slide"
				/>
			</div>
		</div>
	</div>
</template>

<script>
// import Swiper core and required modules
import creatSlider from '~/mixins/creatSlider'

export default {
	name   : 'PreviewList',
	mixins : [creatSlider()],
	props  : {
		slides : {
			type    : Array,
			default : () => [],
			require : true
		}
	},
	mounted () {
		this.creatSlider(this.$refs.swiper)
	}
}
</script>
