<template>
	<div class="section">
		<NuxtLink class="category-route" to="/mobile-app">
			<div class="category-route__meta">
				Свой маршрут
			</div>

			<div class="category-route__title">
				Подбор маршрута по вашим запросам
			</div>

			<div class="category-route__image">
				<img
					:src="require(`~/assets/images/route/image.svg`)"
					alt=""
					height="112"
					loading="lazy"
					width="108"
				>
			</div>
		</NuxtLink>
	</div>
</template>

<script>
export default {
	name : 'CatalogRoute'
}
</script>
