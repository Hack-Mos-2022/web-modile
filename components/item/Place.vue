<template>
	<div v-if="(lat && lng) || address" class="article-place">
		<h2 class="article__title">
			Где проходит
		</h2>
		<div v-if="address" class="article-place__label">
			Адрес:
		</div>
		<div v-if="address" class="article-place__grid">
			<div class="article-place__main" v-html="address" />
			<div class="article-place__distance">
				800 м
			</div>
		</div>
		<div v-if="lat && lng" class="article-maps">
			<div class="article-maps__inner">
				<Mapbox
					:access-token="accessToken"
					:fullscreen-control="{
						show: false,
						position: 'top-left'
					}"
					:geolocate-control="{
						show: true,
						position: 'top-left'
					}"
					:map-options="{
						style: mapStyle,
						center: [lat, lng],
						zoom: 14
					}"
					:scale-control="{
						show: false,
						position: 'top-left'
					}"
					@map-load="loaded"
				/>
			</div>
		</div>
		<div v-if="lat && lng" class="article-place__button">
			<NuxtLink class="b-btn b-btn--red b-btn--full-size" to="/mobile-app">
				Маршрут
			</NuxtLink>

			<NuxtLink class="b-btn b-btn--grey-outline b-btn--full-size" to="/mobile-app">
				Арендовать
			</NuxtLink>
		</div>
	</div>
</template>

<script>
import Mapbox   from 'vue2-mapbox'
import { MglMap } from 'vue-mapbox'

export default {
	name       : 'ItemPlace',
	components : {
		Mapbox
	},
	props : {
		address : {
			type    : String,
			default : ''
		},
		title : {
			type    : String,
			default : ''
		},
		lat : {
			type    : Number,
			default : 0
		},
		lng : {
			type    : Number,
			default : 0
		}
	},
	data () {
		return {
			accessToken : 'pk.eyJ1IjoiYW5hdG9saXktb2xvbG8iLCJhIjoiY2p0OTA2YmtsMGQ5NjQ1bXJhdTIybzR6aSJ9.2XNGR0tsOpFC7oWwQRzgVw',
			mapStyle    : 'mapbox://styles/mapbox/outdoors-v11'
		}
	},
	methods : {
		loaded (map) {
			map.loadImage(
				require('~/assets/images/pin/pin.png'),
				(error, image) => {
					if (error) { throw error }

					// Add the image to the map style.
					map.addImage('pin', image)

					// Add a layer to use the image to represent the data.
					map.addLayer({
						id     : 'points',
						type   : 'symbol',
						source : {
							type : 'geojson',
							data : {
								type     : 'FeatureCollection',
								features : [
									{
										type     : 'Feature',
										geometry : {
											type        : 'Point',
											coordinates : [this.lat, this.lng]
										},
										properties : {
											title : this.title
										}
									}
								]
							}
						},
						layout : {
							'icon-image'  : 'pin',
							'text-field'  : '{title}',
							'text-font'   : ['Open Sans Semibold', 'Arial Unicode MS Bold'],
							'text-offset' : [0, 1.8],
							'text-anchor' : 'top'
						}
					})
				}
			)
		}
	}
}
</script>
