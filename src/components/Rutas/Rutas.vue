<template>
    <v-container>
        <v-flex xs12>
            <v-card>
                <!-- <v-btn type="submit" :disabled="loading" :loading="loading">
                     History Meetings
                     <span slot="loader" class="custom-loader">
                       <v-icon light>cached</v-icon>
                     </span>
                </v-btn> -->
            </v-card>
        </v-flex>
        <div>
            <gmap-map
                    id="map"
                    :center="center"
                    :zoom="15"
                    style="width: 100%; height: 600px"
            >
                <gmap-marker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="center = m.position"
                        :clickable="true"
                        :draggable="true"
                        @click="center=m.position"
                ></gmap-marker>
            </gmap-map>
        </div>
    </v-container>
</template>
<script>

    import * as VueGoogleMaps from 'vue2-google-maps';
    import Vue from 'vue';
  
    Vue.use(VueGoogleMaps, {
      load: {
        key: 'AIzaSyBkC6V4Mv7SUkgPOHutpiBuw7dKQtpVuGo',
        // v: 'OPTIONAL VERSION NUMBER',
        // libraries: 'places', //// If you need to use place input
      }
    });

    export default {
        data () {
        return {
            //19.281626,-70.5502492
            center: {lat: 19.281626, lng: -70.5502492},
            markers: [{
            position: {lat: 19.281626, lng: -70.5502492}
            }]
        }
        }
    }
</script>