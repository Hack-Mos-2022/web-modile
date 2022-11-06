<template>
	<div class="wrapper">
		<div class="mobile-app wrapper">
			<div class="mobile-app__main">
				<div class="mobile-app__icon">
					<img alt="ВДНХ" height="55" loading="eager" src="~assets/images/logo-min.svg" width="55">
				</div>
				<h1 class="mobile-app__title">
					Купить билеты вы можете в нашем приложении со скидкой
				</h1>
				<div class="mobile-app__desc">
					Получайте бльше бонусов в приложении
				</div>
			</div>

			<div class="mobile-app__button">
				<a class="b-btn b-btn--red" href="#" target="_blank">
					Скачать приложение
				</a>
				<button class="b-btn b-btn--blank" type="button" @click.prevent="$router.go(-1);">
					Не сейчас
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name : 'MobileApp'
}
</script>
