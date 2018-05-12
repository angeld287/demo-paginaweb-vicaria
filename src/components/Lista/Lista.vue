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
       <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-toolbar>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>Listado de Parroquias que pertenecen a la Vicaria</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
               <!--  <v-icon>search</v-icon> -->
            </v-btn>
            <v-btn icon>
                <v-icon>check_circle</v-icon>
            </v-btn>
            </v-toolbar>
            <v-list two-line>
            <template v-for="(item, index) in items">
                <v-list-tile :key="index" avatar ripple :to="item.link">
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                    <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                    <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                    <v-icon color="grey lighten-1">star_border</v-icon>
                </v-list-tile-action>
                </v-list-tile>
                <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
            </template>
            </v-list>
        </v-card>
        </v-flex>
    </v-layout>
    </section>
  </v-content>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { action: '', headline: 'Marc Henry', title: 'Nuestra Sra. de la Altagracia', link:'/rutas', subtitle: "Cansino Adentro, Los Minas" },
          { action: '', headline: 'Fermin de los Santos', title: 'Nuestra Sra. de la Altagracia', link:'/rutas', subtitle: "La Caleta, Boca Chica" },
          { action: '', headline: 'Elias Nunes', title: 'San Francisco de Sales', link:'/rutas', subtitle: "Urbanizacion Fernandez Oriental, Oriental Sur" },
          { action: '', headline: 'Jose Mariano Galdez', title: 'Nuestra Sra. de la Candelaria', link:'/rutas', subtitle: "Prado Oriental, Oriental Sur" },
          { action: '', headline: 'Julian de la Cruz Moreta', title: 'Presentacion del Senor', link:'/rutas', subtitle: "Recidencial la Urena, Autopista Las Americas, Boca Chica" },
          { action: '', headline: 'Nazario Hernandez Sierra', title: 'San Carlos de Jerusalen', link:'/rutas', subtitle: "Barrio Brisas del Eden Mendoza, San Isidro" },
          { action: '', headline: 'Julian de La Cruz Moreta', title: 'Jesus Obrero', link:'/rutas', subtitle: "Residencial La Urena, Valiente, Boca Chica" }
        ]
      }
    }
  }
</script>