<template>
	<div
		v-if="showWindow"
		class="mobile-informer"
	>
		<div class="mobile-informer__wrapper">
			<NuxtLink class="mobile-informer__grid" to="/mobile-app">
				<div class="mobile-informer__logo">
					<img alt="ВДНХ" height="55" loading="lazy" src="~assets/images/logo-min.svg" width="55">
				</div>

				<div class="mobile-informer__main">
					<div class="mobile-informer__title">
						Скачать приложение
					</div>
					<div class="mobile-informer__desc">
						Все возможности в нашем приложении
					</div>
				</div>
			</NuxtLink>
			<button
				class="mobile-informer__close"
				type="button"
				@click="buttonClickHandler"
			>
				<svg fill="none" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
					<path clip-rule="evenodd" d="M7.42616 6L11.7046 10.2785C12.0985 10.6723 12.0985 11.3108 11.7046 11.7046C11.3108 12.0985 10.6723 12.0985 10.2785 11.7046L6 7.42616L1.72153 11.7046C1.3277 12.0985 0.68919 12.0985 0.295367 11.7046C-0.0984557 11.3108 -0.0984557 10.6723 0.295367 10.2785L4.57384 6L0.295367 1.72153C-0.0984557 1.3277 -0.0984557 0.68919 0.295367 0.295367C0.68919 -0.0984557 1.3277 -0.0984557 1.72153 0.295367L6 4.57384L10.2785 0.295367C10.6723 -0.0984557 11.3108 -0.0984557 11.7046 0.295367C12.0985 0.68919 12.0985 1.3277 11.7046 1.72153L7.42616 6Z" fill="currentColor" fill-rule="evenodd" />
				</svg>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name : 'MobileInformer',
	data () {
		return {
			showWindow : true
		}
	},
	created () {
		const lsHideWindow = localStorage.getItem('mobileInformer')
		if (lsHideWindow && lsHideWindow === 'hide') {
			this.showWindow = false
		} else {
			this.$emit('shown')
		}
	},
	methods : {
		buttonClickHandler () {
			this.$emit('accept')
			this.$emit('ls-saved')
			localStorage.setItem('mobileInformer', 'hide')
			this.showWindow = false
			this.$emit('hidden')
		}
	}
}
</script>
