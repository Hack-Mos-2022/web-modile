<template>
	<section ref="swiper" class="category-popular section">
		<SectionHeader
			:title="header.title"
		/>

		<NuxtLink class="category-popular__box" to="/mobile-app">
			<div class="category-popular__main">
				<div class="category-popular__meta">
					Море впечатлений!
				</DIV>
				<div class="category-popular__title">
					Подборка для компании
				</div>
			</div>
		</NuxtLink>
	</section>
</template>

<script>
export default {
	name : 'CatalogPopular',
	data () {
		return {
			header : {
				title : 'Популярные  места'
			}
		}
	}
}
</script>
