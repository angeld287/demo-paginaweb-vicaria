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
      <v-jumbotron color="grey lighten-2">
        <v-container fill-height>
        <v-layout align-center>
            <v-flex>
            <h3 class="display-3">Las Vicarías Episcopales</h3>
            <span class="subheading">Son circunscripciones canónicas creadas por el Arzobispo para determinados asuntos dentro del territorio de la Arquidiócesis (Cf. Can. 476) para animar la acción pastoral y administrativa.</span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3"></div>
            <v-btn large color="primary" class="mx-0">Ver mas</v-btn>
            </v-flex>
        </v-layout>
        </v-container>
    </v-jumbotron>
    <v-jumbotron color="grey lighten-2">
        <v-container fill-height>
        <v-layout align-center>
            <v-flex>
            <h3 class="display-3">Como estan conformadas las Vicarías Episcopales?</h3>
            <span class="subheading">Están conformadas por una o varias Zonas Pastorales y por todas las personas e instituciones Publicas, privadas y no gubernamentales que las integran. Comprende a los presbíteros y diáconos que viven y ejercen su ministerio en ese territorio, así como los miembros de la vida consagrada y de los laicos.</span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3"></div>
            <v-btn large color="primary" class="mx-0">Ver mas</v-btn>
            </v-flex>
        </v-layout>
        </v-container>
    </v-jumbotron>
    <v-jumbotron color="grey lighten-2">
        <v-container fill-height>
        <v-layout align-center>
            <v-flex>
            <h3 class="display-3">Vicaria episcopal digital</h3>
            <span class="subheading">En un encuentro llevado a cabo con el Ing. José Armando Tavarez  Rector del Instituto Tecnológico  de Las Américas (ITLA) en el cual se le solicitó Asesoría para todo lo relacionado para crear una plataforma Digital / Tecnológica de la Vicaría Episcopal Santo Domingo Este.</span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3"></div>
            <v-btn large color="primary" class="mx-0">Ver mas</v-btn>
            </v-flex>
        </v-layout>
        </v-container>
    </v-jumbotron>
    </section>
  </v-content>
</template>

<script>
</script>