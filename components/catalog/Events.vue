<template>
	<section class="category-events section">
		<SectionHeader
			:link="header.link"
			:title="header.title"
		/>

		<div class="category-events__list">
			<NuxtLink
				v-for="(item, index) in events"
				:key="`events-${index}`"
				class="category-events__item"
				to="/category"
			>
				<div class="category-events__image">
					<picture>
						<source :srcset="require(`~/assets/images/events/${item.image}.webp`) + ' 1x, ' + require(`~/assets/images/events/${item.image}@2x.webp`) + ' 1.3x'" type="image/webp">
						<source :srcset="require(`~/assets/images/events/${item.image}.jpg`) + ' 1x, ' + require(`~/assets/images/events/${item.image}@2x.jpg`) + ' 1.3x'" type="image/jpg">
						<img
							:alt="item.title"
							:src="require(`~/assets/images/events/${item.image}.jpg`)"
							height="70"
							loading="lazy"
							width="70"
						>
					</picture>
				</div>

				<div class="category-events__main">
					<div class="category-events__title" v-html="item.title" />
					<div v-if="item.meta.length > 0" class="category-events__meta">
						{{ item.meta }}
					</div>
				</div>
				<div class="category-events__icon">
					<svg fill="none" height="8" viewBox="0 0 5 8" width="5" xmlns="http://www.w3.org/2000/svg">
						<path clip-rule="evenodd" d="M0.195262 0.195262C0.455612 -0.0650874 0.877722 -0.0650874 1.13807 0.195262L4.4714 3.5286C4.73175 3.78894 4.73175 4.21106 4.4714 4.4714L1.13807 7.80474C0.877722 8.06509 0.455612 8.06509 0.195262 7.80474C-0.0650874 7.54439 -0.0650874 7.12228 0.195262 6.86193L3.05719 4L0.195262 1.13807C-0.0650871 0.877722 -0.0650871 0.455612 0.195262 0.195262Z" fill="currentColor" fill-rule="evenodd" />
					</svg>
				</div>
			</NuxtLink>
		</div>
	</section>
</template>

<script>
export default {
	name  : 'CatalogEvents',
	props : {
		events : {
			type    : Array,
			default : () => [],
			require : true
		}
	},
	data () {
		return {
			header : {
				title : 'Экскурсии сегодня',
				link  : '/category'
			}
		}
	}
}
</script>
