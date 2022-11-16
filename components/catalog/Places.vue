<template>
	<section ref="swiper" class="category-place section">
		<SectionHeader
			:link="header.link"
			:title="header.title"
		/>

		<div class="category-place__place">
			<div class="swiper">
				<div class="swiper-wrapper">
					<div
						v-for="(item, index) in places"
						:key="`place-${index}`"
						class="swiper-slide"
					>
						<NuxtLink class="category-place__item" to="/category">
							<div class="category-place__image">
								<div class="category-place__rating">
									<svg fill="none" height="13" width="13" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.1687 5.28112a.50024.50024 0 0 0-.1653-.23125.5004.5004 0 0 0-.2647-.10375l-2.84501-.415-1.275-2.585a.5.5 0 0 0-.9 0l-1.275 2.58-2.845.42a.4999.4999 0 0 0-.25112.11208.4999.4999 0 0 0-.15388.22792.49997.49997 0 0 0 .125.5l2.065 2-.5 2.83998a.49985.49985 0 0 0 .02694.2792.50018.50018 0 0 0 .17306.2208.49981.49981 0 0 0 .25752.0922.50022.50022 0 0 0 .26748-.0572l2.56-1.33498 2.55 1.33998a.46448.46448 0 0 0 .23.06.49993.49993 0 0 0 .295-.095.50025.50025 0 0 0 .17306-.2208.49985.49985 0 0 0 .02694-.2792l-.5-2.83998 2.06501-2a.50058.50058 0 0 0 .1539-.23183.50034.50034 0 0 0 .0061-.27817Zm-3.07501 2a.4999.4999 0 0 0-.145.445l.36 2.095-1.88-1a.5.5 0 0 0-.47 0l-1.88 1 .36-2.095a.49993.49993 0 0 0-.145-.445l-1.5-1.5 2.105-.305a.49998.49998 0 0 0 .38-.275l.89-1.905.94 1.91a.49993.49993 0 0 0 .38.275l2.105.305-1.5 1.495Z" fill="#fff" />
									</svg>
									<span>4.5 (3 432)</span>
								</div>
								<picture>
									<source :srcset="require(`~/assets/images/place/${item.image}.webp`) + ' 1x, ' + require(`~/assets/images/place/${item.image}@2x.webp`) + ' 1.3x'" type="image/webp">
									<source :srcset="require(`~/assets/images/place/${item.image}.jpg`) + ' 1x, ' + require(`~/assets/images/place/${item.image}@2x.jpg`) + ' 1.3x'" type="image/jpg">
									<img :alt="item.title" :src="require(`~/assets/images/place/${item.image}.jpg`)" height="157" loading="lazy" width="158">
								</picture>
							</div>
							<div class="category-place__main">
								<div class="category-place__title">
									{{ item.title }}
								</div>
								<div v-if="item.meta.length > 0" class="category-place__meta">
									{{ item.meta }}
								</div>
							</div>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import creatSlider from '~/mixins/creatSlider'

export default {
	name   : 'CatalogPlaces',
	mixins : [creatSlider()],
	props  : {
		places : {
			type    : Array,
			default : () => [],
			require : true
		}
	},
	data () {
		return {
			header : {
				title : 'Популярные заведения',
				link  : '/category'
			}
		}
	},
	mounted () {
		this.creatSlider(this.$refs.swiper)
	}
}
</script>
