<template>
	<section ref="swiper" class="category-todo section">
		<SectionHeader
			:link="header.link"
			:title="header.title"
		/>

		<div class="category-todo__list">
			<NuxtLink class="category-todo__item category-todo__item--big" to="/category">
				<div class="category-todo__category">
					Онлайн
				</div>

				<div class="category-todo__main">
					<div class="category-todo__meta">
						12 выставок
					</div>
					<div class="category-todo__title">
						Выставки которые стоит посетить
					</div>
				</div>

				<div class="category-todo__image">
					<picture>
						<source :srcset="require(`~/assets/images/todo/item-1.webp`) + ' 1x, ' + require(`~/assets/images/todo/item-1@2x.webp`) + ' 1.3x'" type="image/webp">
						<source :srcset="require(`~/assets/images/todo/item-1.jpg`) + ' 1x, ' + require(`~/assets/images/todo/item-1@2x.jpg`) + ' 1.3x'" type="image/jpg">
						<img
							:src="require(`~/assets/images/todo/item-1.jpg`)"
							alt="Выставки которые стоит посетить"
							height="281"
							loading="lazy"
							width="327"
						>
					</picture>
				</div>
			</NuxtLink>

			<NuxtLink class="category-todo__item" to="/category">
				<div class="category-todo__category">
					Онлайн
				</div>

				<div class="category-todo__main">
					<div class="category-todo__title">
						Новые экскурсии
					</div>
				</div>

				<div class="category-todo__image">
					<picture>
						<source :srcset="require(`~/assets/images/todo/item-2.webp`) + ' 1x, ' + require(`~/assets/images/todo/item-2@2x.webp`) + ' 1.3x'" type="image/webp">
						<source :srcset="require(`~/assets/images/todo/item-2.jpg`) + ' 1x, ' + require(`~/assets/images/todo/item-2@2x.jpg`) + ' 1.3x'" type="image/jpg">
						<img
							:src="require(`~/assets/images/todo/item-2.jpg`)"
							alt="Новые экскурсии"
							height="183"
							loading="lazy"
							width="158"
						>
					</picture>
				</div>
			</NuxtLink>

			<NuxtLink class="category-todo__item category-todo__item--more" to="/category">
				<div class="category-todo__num">
					22
				</div>

				<div class="category-todo__link">
					<span>Все советы</span>
					<svg fill="none" height="11" viewBox="0 0 7 11" width="7" xmlns="http://www.w3.org/2000/svg">
						<path d="M1.5 1.5L5.5 5.5L1.5 9.5" stroke="currentColor" stroke-width="2" />
					</svg>
				</div>
			</NuxtLink>
		</div>
	</section>
</template>

<script>
export default {
	name : 'CatalogTodo',
	data () {
		return {
			header : {
				title : 'Вам понравится',
				link  : '/category'
			}
		}
	}
}
</script>
