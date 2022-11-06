<template>
	<div class="map">
		<MapHeader />
		<div class="map__wrapper">
			<Mapbox
				:access-token="accessToken"
				:fullscreen-control="{
					show: false,
					position: 'bottom-left'
				}"
				:geolocate-control="{
					show: true,
					position: 'bottom-left'
				}"
				:map-options="{
					style: mapStyle,
					center: [37.622705, 55.834554],
					zoom: 16,
				}"
				:nav-control="{
					show: true,
					position: 'bottom-right'
				}"
				:scale-control="{
					show: false,
					position: 'bottom-left'
				}"
				@map-load="loaded"
			/>
		</div>
		<MobileInformer />
	</div>
</template>

<script>
import Mapbox   from 'vue2-mapbox'
import { MglMap } from 'vue-mapbox'

export default {
	name       : 'MapPage',
	components : {
		Mapbox
	},
	data () {
		return {
			accessToken : 'pk.eyJ1IjoiYW5hdG9saXktb2xvbG8iLCJhIjoiY2p0OTA2YmtsMGQ5NjQ1bXJhdTIybzR6aSJ9.2XNGR0tsOpFC7oWwQRzgVw',
			mapStyle    : 'mapbox://styles/mapbox/outdoors-v11'
		}
	},
	methods : {
		loaded (map) {
			const images = [
				{
					url : require('~/assets/images/pin/pin.png'),
					id  : '1'
				}, {
					url : require('~/assets/images/pin/pin2.png'),
					id  : '2'
				}
			]
			Promise.all(
				images.map(img => new Promise((resolve, reject) => {
					map.loadImage(img.url, function (error, res) {
						if (error) { throw error }
						map.addImage(img.id, res)
						resolve()
					})
				}))
			).then(console.log('Images Loaded'))

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
									coordinates : [37.622705, 55.83455]
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
	}
}
</script>
