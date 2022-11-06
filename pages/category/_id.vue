<template>
	<article class="article page-main">
		<div v-if="!isPostLoading" class="wrapper">
			<ItemGallery
				:image="item.pic"
			/>
			<div class="article__category">
				<span>{{ item.type }}</span>
			</div>
			<h1 class="article__title">
				{{ title }}
			</h1>
			<div class="article__date">
				<div
					v-for="(schedule, key) in item.schedule"
					:key="key"
				>
					{{ schedule.left }}, {{ schedule.right }}
				</div>
			</div>
			<div class="article-pin">
				<div
					v-for="(contacts, key) in item.contacts"
					:key="key"
					class="article-pin__row"
				>
					<div class="article-pin__label">
						{{ contacts.left }}:
					</div>
					<div class="article-pin__value">
						<div v-html="contacts.right" />
					</div>
				</div>
			</div>
			<ItemInfo
				:link="item.tickets_link"
				:ticket="item.tickets_text"
			/>
			<ItemUser />
			<div class="article__desc">
				<h2 class="article__title">
					О событии
				</h2>
				<div v-html="item.preview_text" />
			</div>
			<ItemPlace
				:address="address"
				:lat="lat"
				:lng="lng"
				:title="title"
			/>
		</div>
	</article>
</template>

<script>
export default {
	name : 'ItemArticle',
	data () {
		return {
			isPostLoading : false,
			item          : {},
			title         : '',
			lat           : 0,
			lng           : 0,
			id            : this.$route.params.id
		}
	},
	head () {
		return {
			title : this.title
		}
	},
	computed : {
		address () {
			const contacts = this.item.contacts
			let address    = ''
			for (const property in contacts) {
				if (contacts[property].left === 'Адрес') {
					address = contacts[property].right
				}
			}
			return address
		}
	},
	mounted () {
		this.featchPosts()
	},
	methods : {
		async featchPosts () {
			try {
				const id           = this.id
				this.isPostLoading = true
				const response     = await this.$axios.$get('/data/catalog.json')
				this.item          = { ...this.item, ...response[id] }
				this.title         = response[id].title
				this.lat           = response[id].coordinates[0]
				this.lng           = response[id].coordinates[1]
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
