<template>
	<a :data-id="post.id" class="item-list__item" @click.prevent="openItem(post.id)">
		<div class="item-list__image">
			<img
				:alt="post.title"
				:src="post.pic"
				height="196"
				loading="lazy"
				width="327"
			>
		</div>
		<div class="item-list__main">
			<div class="item-list__title">
				{{ post.title }}
			</div>

			<div v-if="scheduleMessage.length > 0 && priceMessage" class="item-list__footer">
				<div v-if="scheduleMessage.length > 0" class="item-list__date">
					{{ scheduleMessage }}
				</div>
				<div v-if="priceMessage" class="item-list__price">
					<span>
						от {{ priceMessage }}
					</span>
				</div>
			</div>
		</div>
	</a>
</template>

<script>
export default {
	name  : 'PostItem',
	props : {
		post : {
			type    : Object,
			default : () => ({}),
			require : true
		}
	},
	data () {
		return {
			schedule : (this.post.schedule[0]) ? this.post.schedule[0].left : ''
		}
	},
	computed : {
		scheduleMessage () {
			return this.post.schedule[0] ? this.post.schedule[0].left : 'Не доступно'
		},
		priceMessage () {
			const tickets = this.post.tickets[0].value
			return tickets ? tickets.toString().replace(/[^0-9]+/g, '') : false
		}
	},
	methods : {
		openItem (post) {
			this.$router.push('/category/' + post)
		}
	}
}
</script>
