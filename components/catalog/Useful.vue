<template>
	<section ref="swiper" class="category-useful section" data-slider="slide">
		<SectionHeader
			:title="header.title"
		/>

		<div class="swiper">
			<div class="swiper-wrapper">
				<div
					v-for="(item, index) in useful"
					:key="`useful-${index}`"
					class="swiper-slide"
				>
					<NuxtLink class="category-useful__item" to="/mobile-app">
						<picture>
							<source :srcset="require(`~/assets/images/useful/${item}.webp`) + ' 1x, ' + require(`~/assets/images/useful/${item}@2x.webp`) + ' 1.3x'" type="image/webp">
							<source :srcset="require(`~/assets/images/useful/${item}.png`) + ' 1x, ' + require(`~/assets/images/useful/${item}@2x.png`) + ' 1.3x'" type="image/png">
							<img
								:src="require(`~/assets/images/useful/${item}.png`)"
								alt=""
								height="327"
								loading="lazy"
								width="428"
							>
						</picture>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import creatSlider from '~/mixins/creatSlider'

export default {
	name   : 'CatalogUsefule',
	mixins : [creatSlider()],
	props  : {
		useful : {
			type    : Array,
			default : () => [],
			require : true
		}
	},
	data () {
		return {
			header : {
				title : 'Полезное'
			}
		}
	},
	mounted () {
		this.creatSlider(this.$refs.swiper)
	}
}
</script>
