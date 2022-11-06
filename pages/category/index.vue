<template>
	<main class="page-main">
		<div class="wrapper">
			<CatalogHeader
				:catalog="header.catalog"
				:desc="header.desc"
				:title="header.title"
			/>
			<CatalogPostList
				:posts="posts"
			/>
		</div>
	</main>
</template>

<script>
export default {
	name : 'CatalogPage',
	data () {
		return {
			head          : {},
			isPostLoading : false,
			posts         : {},
			header        : {
				catalog : true,
				title   : 'Все впечетления<br> прямо сейчас',
				desc    : 'Мы подобрали события без очередей, вы сможете насладиться экскурсиями прямо сейчас'
			}
		}
	},
	head () {
		return {
			title : 'ВДНХ - Категория'
		}
	},
	mounted () {
		this.featchPosts()
	},
	methods : {
		async featchPosts () {
			try {
				this.isPostLoading = true
				const response     = await this.$axios.$get('/data/catalog.json')
				this.posts         = { ...this.posts, ...response }
			} catch (e) {
				// eslint-disable-next-line no-console
				console.log('ошибка:' + e)
			} finally {
				this.isPostLoading = false
			}
		}
	}
}
</script>
