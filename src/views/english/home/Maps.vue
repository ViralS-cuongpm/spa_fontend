<template>
  <div style="padding-top: 20px">
    <!--<b-row>-->
      <!--<b-colxx xxs="12">-->
        <!--<h2 class="mb-4 card-title">News and Events</h2>-->
        <!--<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>-->
      <!--</b-colxx>-->
    <!--</b-row>-->

    <b-row>
      <b-colxx xxs="12">
        <b-card title="Google Map" class="mb-4">
          <GmapMap
            :center="center"
            :zoom="9"
            map-type-id="roadmap"
            class="map-item"
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
            />
          </GmapMap>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
  import vue from 'vue'
  import * as VueGoogleMaps from 'vue2-google-maps'

  const googleOptions = {
    load: {
      key: 'AIzaSyCO8MfadmlotuuHC8wmjwL_46I5QAMIiRU',
      libraries: 'geometry,drawing,places',
      v: '3.exp'
    }
  }

  vue.use(VueGoogleMaps, googleOptions)

  export default {
    data () {
      return {
        center: {lat: -34.397, lng: 150.644},
        markers: [{
          position: {lat: -34.397, lng: 150.644}
        }],
        placemarks: [
          {
            coords: [-34.397, 150.644],
            properties: {}, // define properties here
            options: {}, // define options here
            clusterName: '1',
            balloonTemplate: '<div>"Your custom template"</div>',
            callbacks: {
              click: function () {
              }
            }
          }
        ]
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
