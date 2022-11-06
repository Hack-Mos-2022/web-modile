<template>
	<div :class="{ ' page-header--static': catalog }" class="page-header">
		<NuxtLink v-if="catalog" class="page-header__back" to="/catalog">
			<svg fill="none" height="15" width="10" xmlns="http://www.w3.org/2000/svg">
				<path d="m4.0833 7.50043 4.5725-4.5725a1.29167 1.29167 0 0 0 0-1.82125 1.29174 1.29174 0 0 0-.91709-.38207 1.29166 1.29166 0 0 0-.91708.38207L1.34496 6.58335a1.29186 1.29186 0 0 0-.38207.91708 1.29166 1.29166 0 0 0 .38207.91709l5.47667 5.54128c.12069.1197.26383.2144.4212.2787.15738.0642.32589.0968.49588.0958.16999.001.33851-.0316.49588-.0958a1.29233 1.29233 0 0 0 .42121-.2787 1.29173 1.29173 0 0 0 0-1.8213L4.0833 7.50043Z" fill="currentColor" />
			</svg>
		</NuxtLink>
		<h1 v-if="title.length > 0" class="page__title" v-html="title" />
		<div v-if="map" class="page-header__meta">
			<NuxtLink class="page-header__close" to="/map">
				<svg fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
					<path clip-rule="evenodd" d="m13.4262 12 4.2784 4.2785c.3939.3938.3939 1.0323 0 1.4261-.3938.3939-1.0323.3939-1.4261 0L12 13.4262l-4.27847 4.2784c-.39383.3939-1.03234.3939-1.42616 0-.39383-.3938-.39383-1.0323 0-1.4261L10.5738 12 6.29537 7.72153c-.39383-.39383-.39383-1.03234 0-1.42616.39382-.39383 1.03233-.39383 1.42616 0L12 10.5738l4.2785-4.27843c.3938-.39383 1.0323-.39383 1.4261 0 .3939.39382.3939 1.03233 0 1.42616L13.4262 12Z" fill="currentColor" fill-rule="evenodd" />
				</svg>
			</NuxtLink>
		</div>
		<div v-if="desc.length > 0" class="page-header__desc">
			{{ desc }}
		</div>
	</div>
</template>

<script>
export default {
	name  : 'CatalogHeader',
	props : {
		title : {
			type    : String,
			default : ''
		},
		catalog : {
			type    : Boolean,
			default : false
		},
		map : {
			type    : Boolean,
			default : false
		},
		desc : {
			type    : String,
			default : ''
		}
	}
}
</script>
