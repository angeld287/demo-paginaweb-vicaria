<template>
  <v-content>
    <!-- <v-spacer></v-spacer> -->
    <section>
      <v-parallax :src="require('@/assets/plane.jpg')" height="200">
        <v-layout column align-center justify-center>

        </v-layout>
      </v-parallax>
    </section>
    <!-- Seccion de contenido -->
    <section>
      <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media :src="require('@/assets/pasos.png')" height="1200px">
        </v-card-media>
        <!-- <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-flex>
    </section>
  </v-content>
</template>

<script>
</script>