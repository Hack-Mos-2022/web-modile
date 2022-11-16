<template>
	<section ref="swiper" class="category-list section">
		<SectionHeader
			:link="header.link"
			:title="header.title"
		/>
		<div class="swiper">
			<div class="swiper-wrapper">
				<div
					v-for="item in category"
					:key="item.id"
					class="swiper-slide"
				>
					<NuxtLink class="category-list__item" to="/category">
						<div class="category-list__icon">
							<img :alt="item.name" :src="item.icon" height="24" width="24">
						</div>
						<div class="category-list__name">
							{{ item.name }}
						</div>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import creatSlider   from '~/mixins/creatSlider'
import SectionHeader from '~/components/SectionHeader'

export default {
	name       : 'CatalogCategory',
	components : { SectionHeader },
	mixins     : [creatSlider()],
	props      : {
		category : {
			type    : Array,
			default : () => [],
			require : true
		}
	},
	data () {
		return {
			header : {
				title : 'Категории',
				link  : '/category'
			}
		}
	},
	mounted () {
		this.creatSlider(this.$refs.swiper)
	}
}
</script>
