<template>
	<section ref="swiper" class="category-week section">
		<SectionHeader
			:link="header.link"
			:title="header.title"
		/>

		<div class="swiper">
			<div class="swiper-wrapper">
				<div
					v-for="(item, index) in weeks"
					:key="`week-${index}`"
					class="swiper-slide"
				>
					<div class="swiper-slide">
						<NuxtLink class="category-week__item" to="/mobile-app">
							<div class="category-week__image">
								<div class="category-week__meta">
									{{ item.meta }}
								</div>
								<picture>
									<source :srcset="require(`~/assets/images/week/${item.image}.webp`) + ' 1x, ' + require(`~/assets/images/week/${item.image}@2x.webp`) + ' 1.3x'" type="image/webp">
									<source :srcset="require(`~/assets/images/week/${item.image}.jpg`) + ' 1x, ' + require(`~/assets/images/week/${item.image}@2x.jpg`) + ' 1.3x'" type="image/jpg">
									<img :alt="item.title" :src="require(`~/assets/images/week/${item.image}.jpg`)" height="253" loading="lazy" width="224">
								</picture>
							</div>
							<div class="category-week__main">
								<div class="category-week__title">
									{{ item.title }}
								</div>
								<div class="category-week__more">
									<svg fill="none" height="18" width="19" xmlns="http://www.w3.org/2000/svg">
										<path d="M5.00977 8.91406h8.88563m-3.6098 3.60974 3.6097-3.60974-3.6097-3.60978" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.47204" />
									</svg>
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
	name   : 'CatalogLikes',
	mixins : [creatSlider()],
	props  : {
		weeks : {
			type    : Array,
			default : () => [],
			require : true
		}
	},
	data () {
		return {
			header : {
				title : 'Вам понравится',
				link  : '/mobile-app'
			}
		}
	},
	mounted () {
		this.creatSlider(this.$refs.swiper)
	}
}
</script>
