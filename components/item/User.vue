<template>
	<div class="article-user">
		<NuxtLink class="article-user__cell" to="/mobile-app">
			<span class="article-user__icon">
				<svg fill="none" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
					<path d="m16.7071 26.4853 10.129-10.129c2.4888-2.4888 2.856-6.58328.5008-9.19882a6.50115 6.50115 0 0 0-2.1091-1.55753 6.50033 6.50033 0 0 0-7.324 1.30386L16 8.80761l-1.6437-1.64374c-2.4888-2.4888-6.58328-2.85599-9.19882-.50074a6.50037 6.50037 0 0 0-.25367 9.43307L15.2929 26.4853c.1875.1875.4419.2929.7071.2929.2652 0 .5196-.1054.7071-.2929v0Z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
				</svg>
			</span>
			<span class="article-user__title">
				Хочу сходить
			</span>
		</NuxtLink>
		<NuxtLink class="article-user__cell" to="/mobile-app">
			<span class="article-user__icon">
				<svg fill="none" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
					<path d="m21.5 13-7.3334 7L10.5 16.5" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
					<path d="M16 28c6.6274 0 12-5.3726 12-12 0-6.62742-5.3726-12-12-12C9.37258 4 4 9.37258 4 16c0 6.6274 5.37258 12 12 12Z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
				</svg>
			</span>
			<span class="article-user__title">
				Уже ходил
			</span>
		</NuxtLink>
	</div>
</template>

<script>
export default {
	name : 'ItemUser'
}
</script>

<style scoped>

</style>
