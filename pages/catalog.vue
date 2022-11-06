<template>
	<main class="page-main">
		<div class="wrapper">
			<CatalogHeader
				:map="header.map"
				:title="header.title"
			/>
			<CatalogCategory
				:category="categoryList"
			/>
			<CatalogLikes
				:likes="categoryLikes"
			/>
			<CatalogImpression />
			<CatalogRoute />
			<CatalogEvents
				:events="categoryEvents"
			/>
			<CatalogUseful
				:useful="categoryUseful"
			/>
			<CatalogTodo />
			<CatalogProgram
				:program="categoryProgram"
			/>
			<CatalogPopular />
			<CatalogWeek
				:weeks="categoryWeeks"
			/>
			<CatalogPhoto />
			<CatalogPlaces
				:places="categoryPlaces"
			/>
		</div>
	</main>
</template>

<script>
import categoryListData    from '~/static/data/category.json'
import categoryLikesData   from '~/static/data/likes.json'
import categoryEventsData  from '~/static/data/events.json'
import categoryUsefulData  from '~/static/data/useful.json'
import categoryProgramData from '~/static/data/program.json'
import categoryWeeksData   from '~/static/data/weeks.json'
import categoryPlacesData  from '~/static/data/places.json'

export default {
	name : 'CatalogPage',
	data () {
		return {
			header : {
				map   : true,
				title : 'Каталог'
			},
			categoryList    : categoryListData,
			categoryLikes   : categoryLikesData,
			categoryEvents  : categoryEventsData,
			categoryUseful  : categoryUsefulData,
			categoryProgram : categoryProgramData,
			categoryWeeks   : categoryWeeksData,
			categoryPlaces  : categoryPlacesData
		}
	},
	head () {
		return {
			title : 'ВДНХ - Каталог'
		}
	}
}
</script>
