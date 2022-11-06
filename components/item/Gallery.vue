<template>
	<section v-if="image" ref="swiper" class="article-gallery">
		<button class="article-gallery__back" type="button" @click.prevent="$router.go(-1);">
			<svg fill="none" height="15" width="10" xmlns="http://www.w3.org/2000/svg">
				<path d="m4.0833 7.50043 4.5725-4.5725a1.29167 1.29167 0 0 0 0-1.82125 1.29174 1.29174 0 0 0-.91709-.38207 1.29166 1.29166 0 0 0-.91708.38207L1.34496 6.58335a1.29186 1.29186 0 0 0-.38207.91708 1.29166 1.29166 0 0 0 .38207.91709l5.47667 5.54128c.12069.1197.26383.2144.4212.2787.15738.0642.32589.0968.49588.0958.16999.001.33851-.0316.49588-.0958a1.29233 1.29233 0 0 0 .42121-.2787 1.29173 1.29173 0 0 0 0-1.8213L4.0833 7.50043Z" fill="currentColor" />
			</svg>
		</button>
		<div class="swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div class="article-gallery__image">
						<img :alt="title" :src="image" height="572" loading="eager">
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name  : 'ItemGallery',
	props : {
		title : {
			type    : String,
			default : ''
		},
		image : {
			type    : String,
			default : ''
		}
	}
}
</script>
