<template>
	<section ref="swiper" class="category-impression section">
		<SectionHeader
			:link="header.link"
			:title="header.title"
		/>

		<div class="category-impression__list">
			<div class="swiper">
				<div class="swiper-wrapper">
					<div
						v-for="(item, index) in program"
						:key="`likes-${index}`"
						class="swiper-slide"
					>
						<NuxtLink class="category-impression__item" to="/mobile-app">
							<div class="category-impression__image">
								<div v-if="item.catalog.length > 0" class="category-impression__catalog">
									{{ item.catalog }}
								</div>
								<picture>
									<source :srcset="require(`~/assets/images/impression/${item.image}.webp`) + ' 1x, ' + require(`~/assets/images/impression/${item.image}@2x.webp`) + ' 1.3x'" type="image/webp">
									<source :srcset="require(`~/assets/images/impression/${item.image}.jpg`) + ' 1x, ' + require(`~/assets/images/impression/${item.image}@2x.jpg`) + ' 1.3x'" type="image/jpg">
									<img :alt="item.title" :src="require(`~/assets/images/impression/${item.image}.jpg`)" height="253" loading="lazy" width="327">
								</picture>
							</div>
							<div class="category-impression__main">
								<div v-if="item.meta.length > 0" class="category-impression__meta">
									{{ item.meta }}
								</div>
								<div v-if="item.title.length > 0" class="category-impression__title">
									{{ item.title }}
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
export default {
	name  : 'CatalogProgram',
	props : {
		program : {
			type    : Array,
			default : () => [],
			require : true
		}
	},
	data () {
		return {
			header : {
				title : 'Программы экскурсий',
				link  : '/mobile-app'
			}
		}
	}
}
</script>
