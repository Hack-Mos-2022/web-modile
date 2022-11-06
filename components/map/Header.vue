<template>
	<div class="map-header">
		<div class="wrapper map-header__wrapper">
			<div class="map-header__input">
				<input aria-label="Поиск на карте" inputmode="search" placeholder="Что вы хотите посмотреть" type="text">
				<NuxtLink class="map-header__logo" to="/mobile-app">
					<img :src="require('@/assets/images/logo-min.svg')" alt="ВДНХ" height="31" loading="eager" width="31">
				</NuxtLink>
			</div>
			<NuxtLink class="map-header__button" to="/catalog">
				<svg fill="none" height="20" viewBox="0 0 19 20" width="19" xmlns="http://www.w3.org/2000/svg">
					<path d="M3.06055 14.9385H11.4279" stroke="#202020" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
					<path d="M3.06055 9.91797H8.91769" stroke="#202020" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
					<path d="M2.85156 5.31543H16.6577" stroke="#202020" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
				</svg>
			</NuxtLink>
		</div>
	</div>
</template>

<script>
export default {
	name : 'MapHeader'
}
</script>
