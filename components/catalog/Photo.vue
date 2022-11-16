<template>
	<section ref="swiper" class="category-photo section">
		<SectionHeader
			:link="header.link"
			:title="header.title"
		/>

		<NuxtLink class="category-photo__item" to="/category/9767">
			<div class="category-photo__image">
				<picture>
					<source :srcset="require(`~/assets/images/photo/item.webp`) + ' 1x, ' + require(`~/assets/images/photo/item@2x.webp`) + ' 1.3x'" type="image/webp">
					<source :srcset="require(`~/assets/images/photo/item.jpg`) + ' 1x, ' + require(`~/assets/images/photo/item@2x.jpg`) + ' 1.3x'" type="image/jpg">
					<img
						:src="require(`~/assets/images/photo/item.jpg`)"
						alt=""
						height="298"
						loading="lazy"
						width="327"
					>
				</picture>
			</div>
			<div class="category-photo__main">
				<div class="category-photo__catalog">
					Фотовыставка
				</div>
				<div class="category-photo__title">
					«Сердце Югры»
				</div>
			</div>
		</NuxtLink>
	</section>
</template>

<script>
export default {
	name : 'CatalogPhoto',
	data () {
		return {
			header : {
				title : 'Популярные  места',
				link  : '/category'
			}
		}
	}
}
</script>
