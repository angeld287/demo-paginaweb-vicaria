<template>
  <v-content>
    <!-- <v-spacer></v-spacer> -->
    <section>
      <v-parallax :src="require('@/assets/cielo.jpg')" height="200">
        <v-layout column align-center justify-center>

        </v-layout>
      </v-parallax>
    </section>
    <!-- Seccion de contenido -->
    <section>
      <v-flex xs12 sm7 offset-sm2>
      <v-card>
        <v-card-media :src="require('@/assets/digital.png')" height="700px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Vicaria Episcopal digital</h3>
            En un encuentro llevado a cabo con el Ing. José Armando Tavarez  Rector del Instituto Tecnológico  
            de Las Américas (ITLA) en el cual se le solicitó Asesoría para todo lo relacionado para crear una 
            plataforma Digital / Tecnológica de la Vicaría Episcopal Santo Domingo Este.
            <br><br>
            En dicho encuentro se estableció la estructura  que deberá existir para llevar a cabo el objetivo:
            <br>
            <br>
            <v-list>Sistema de Software.</v-list>
            <v-list>Medios  Digitales.</v-list>
            <v-list>Portal y presencia digital.</v-list>
            <v-list>Plataforma Tecnológica en la Vicaria.</v-list>
            <v-list>Una Institución de Formación Laical en Línea.</v-list>
            <v-list>Un Datacenter Eclesial.</v-list>
            <br>
            <br>
            Todo Esto podrá llevarse a cabo con la colaboración de la mano de un Equipo Técnico del Instituto, 
            junto con un Equipo de la Vicaria Episcopal Territorial Santo Domingo Este.
        

          </div>
        </v-card-title>
        <!-- <v-card-actions>
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