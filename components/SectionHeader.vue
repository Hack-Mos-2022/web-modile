<template>
	<div class="section-header">
		<h3 class="section__title">
			{{ title }}
		</h3>
		<div v-if="link.length > 0" class="section-header__meta">
			<NuxtLink :to="`${link}`">
				<span>Все</span>
				<svg fill="none" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
					<path clip-rule="evenodd" d="M6.19526 4.19526c.26035-.26035.68246-.26035.94281 0L10.4714 7.5286c.2604.26034.2604.68246 0 .9428l-3.33333 3.3333c-.26035.2604-.68246.2604-.94281 0-.26035-.2603-.26035-.6824 0-.9428L9.05719 8 6.19526 5.13807c-.26035-.26035-.26035-.68246 0-.94281Z" fill="currentColor" fill-rule="evenodd" />
				</svg>
			</NuxtLink>
		</div>
		<div v-if="desc.length > 0" class="section-header__desc">
			{{ desc }}
		</div>
	</div>
</template>

<script>
export default {
	name  : 'SectionHeader',
	props : {
		title : {
			type    : String,
			default : '',
			require : true
		},
		desc : {
			type    : String,
			default : ''
		},
		link : {
			type    : String,
			default : ''
		}
	}
}
</script>
