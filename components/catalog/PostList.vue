<template>
	<div class="item-list">
		<CatalogPostItem
			v-for="(post, key) in posts"
			:key="key"
			:post="post"
		/>
	</div>
</template>

<script>
export default {
	name  : 'PostList',
	props : {
		posts : {
			type    : Object,
			default : () => ({}),
			require : true
		}
	}
}
</script>
