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
      <template>
        <v-layout column>
            <v-flex xs12 sm6 offset-sm3>
            <v-toolbar color="indigo" dark>
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title>Discover</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                <v-icon>search</v-icon>
                </v-btn>
            </v-toolbar>
            <v-container fluid grid-list-md class="grey lighten-4">
                <v-layout row wrap>
                <v-flex
                    v-bind="{ [`xs${card.flex}`]: true }"
                    v-for="card in cards"
                    :key="card.title"
                >
                    <v-card>
                    <v-card-media
                        :src="require('@/assets/hero.jpeg')"
                        height="200px"
                    >
                    <!-- card.src -->
                        <v-container fill-height fluid>
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                            <span class="headline white--text" v-text="card.title"></span>
                            </v-flex>
                        </v-layout>
                        </v-container>
                    </v-card-media>
                    <v-card-actions class="white">
                        <v-spacer></v-spacer>
                        <v-btn icon>
                        <v-icon>favorite</v-icon>
                        </v-btn>
                        <v-btn icon>
                        <v-icon>bookmark</v-icon>
                        </v-btn>
                        <v-btn icon>
                        <v-icon>share</v-icon>
                        </v-btn>
                    </v-card-actions>
                    </v-card>
                </v-flex>
                </v-layout>
            </v-container>
            </v-flex>
        </v-layout>
        </template>
    </section>
  </v-content>
</template>
<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'hero.jpeg', flex: 12 },
        { title: 'Favorite road trips', src: '/static/doc-images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: '/static/doc-images/cards/plane.jpg', flex: 6 }
      ]
    })
  }
</script>