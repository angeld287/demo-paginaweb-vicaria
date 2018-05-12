<template>
  <v-content>
    <!-- <v-spacer></v-spacer> -->
    <section>
      <v-parallax :src="require('@/assets/hero.jpeg')" height="200">
        <v-layout column align-center justify-center>

        </v-layout>
      </v-parallax>
    </section>
    <!-- Seccion de contenido -->
    <section>
          <v-layout row wrap>
            <v-flex md12 lg4>
              <v-date-picker v-model="picker"></v-date-picker>
            </v-flex>
            <v-flex md12 lg8 class="hidden-xs-only">
              <v-date-picker v-model="picker2" landscape></v-date-picker>
            </v-flex>
          </v-layout>
    </section>
  </v-content>
</template>

<script>
  export default {
    data () {
      return {
        picker: null,
        picker2: null
      }
    }
  }
</script>