<template>
	<section ref="swiper" class="category-likes section">
		<SectionHeader
			:link="header.link"
			:title="header.title"
		/>

		<div class="swiper">
			<div class="swiper-wrapper">
				<div
					v-for="(item, index) in likes"
					:key="`likes-${index}`"
					class="swiper-slide"
				>
					<NuxtLink class="category-likes__item" to="/mobile-app">
						<div v-if="item.image.length > 0" class="category-likes__image">
							<picture>
								<source :srcset="require(`~/assets/images/likes/${item.image}.webp`) + ' 1x, ' + require(`~/assets/images/likes/${item.image}@2x.webp`) + ' 1.3x'" type="image/webp">
								<source :srcset="require(`~/assets/images/likes/${item.image}.jpg`) + ' 1x, ' + require(`~/assets/images/likes/${item.image}@2x.jpg`) + ' 1.3x'" type="image/jpg">
								<img :alt="item.title" :src="require(`~/assets/images/likes/${item.image}.jpg`)" height="207" loading="lazy" width="327">
							</picture>
						</div>
						<div v-if="item.category.length > 0" class="category-likes__category">
							{{ item.category }}
						</div>

						<div class="category-likes__main">
							<div v-if="item.meta.length > 0" class="category-list__meta">
								{{ item.meta }}
							</div>
							<div v-if="item.name.length > 0" class="category-list__title">
								{{ item.name }}
							</div>
						</div>
					</NuxtLink>
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
		likes : {
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
