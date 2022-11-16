<template>
	<div class="map">
		<MapHeader />
		<div class="map__wrapper">
			<MapBox
				:access-token="accessToken"
				:fullscreen-control="{
					show: false,
				}"
				:geolocate-control="{
					show: true,
					position: 'bottom-left',
				}"
				:map-options="{
					style: mapStyle,
					center: [37.622705, 55.834554],
					zoom: 15,
					pitch: 50,
					trackResize: true
				}"
				:markers="markers"
				:nav-control="{
					show: true,
					position: 'bottom-right'
				}"
				:scale-control="{
					show: false,
				}"
			/>
		</div>
	</div>
</template>

<script>
import mapData from '~/static/data/map.json'

export default {
	name : 'MapPage',
	data () {
		return {
			accessToken : 'pk.eyJ1IjoiYW5hdG9saXktb2xvbG8iLCJhIjoiY2p0OTA2YmtsMGQ5NjQ1bXJhdTIybzR6aSJ9.2XNGR0tsOpFC7oWwQRzgVw',
			mapStyle    : 'mapbox://styles/mapbox/outdoors-v11',
			markers     : mapData
		}
	}
}
</script>
