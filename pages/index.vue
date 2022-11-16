<template>
	<div class="wrapper">
		<div class="preview">
			<h1 class="preview__title">
				Рекомендации
			</h1>
			<div class="preview__desc">
				Мы собрали интересные события этой недели
			</div>
			<PreviewList
				:slides="slides"
			/>
			<div class="preview__button">
				<NuxtLink class="b-btn b-btn--black" to="/map">
					Закрыть
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script>
import previewData from '~/static/data/preview.json'

export default {
	name : 'IndexPage',
	data () {
		return {
			slides : previewData
		}
	}
}
</script>
