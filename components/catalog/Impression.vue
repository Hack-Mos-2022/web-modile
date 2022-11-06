<template>
	<section ref="swiper" class="category-impression section">
		<SectionHeader
			:link="header.link"
			:title="header.title"
		/>

		<div class="category-impression__list">
			<NuxtLink class="category-impression__item" to="/category">
				<div class="category-impression__image">
					<picture>
						<source :srcset="require(`~/assets/images/impression/item-1.webp`) + ' 1x, ' + require(`~/assets/images/impression/item-1@2x.webp`) + ' 1.3x'" type="image/webp">
						<source :srcset="require(`~/assets/images/impression/item-1.jpg`) + ' 1x, ' + require(`~/assets/images/impression/item-1@2x.jpg`) + ' 1.3x'" type="image/jpg">
						<img :src="require(`~/assets/images/impression/item-1.jpg`)" alt="" height="207" loading="lazy" width="327">
					</picture>
				</div>
				<div class="category-impression__main">
					<div class="category-impression__meta">
						12 Экускурсий
					</div>
					<div class="category-impression__title">
						Откройте для себя космос
					</div>
				</div>
			</NuxtLink>
		</div>
	</section>
</template>

<script>
export default {
	name  : 'CatalogImpression',
	props : {
		link : {
			type    : String,
			default : ''
		}
	},
	data () {
		return {
			header : {
				title : 'Впечетления прямо сейчас',
				link  : '/category',
				desc  : 'Подборка впечатлений с наименьшим количеством людей '
			}
		}
	}
}
</script>
