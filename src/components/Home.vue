<template>
  <v-content>
    <!-- <v-spacer></v-spacer> -->
    <section>
      <v-parallax :src="require('@/assets/hero.jpeg')" height="600">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <img :src="require('@/assets/logo-vicaria.png')" alt="Vuetify.js" height="200">
          <h1 class="white--text mb-2 display-1 text-xs-center">Vicaria Episcopal</h1>
          <div class="subheading mb-3 text-xs-center">Santo Domingo Este  </div>
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
            to="/informacion"
          >
            Conoce mas sobre el concepto de vicaria
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">La Alegría de Evangelizar</h2>
            <span class="subheading">
              <!-- Cras facilisis mi vitae nunc  -->
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                     <div class="headline text-xs-center">Mision</div>
                    <v-icon x-large class="blue--text text--lighten-2"><!-- color_lens --></v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center"><!-- Mision --></div>
                  </v-card-title>
                  <v-card-text>
                    La Vicaría Episcopal Este desde “La Alegría de Evangelizar” anhela anunciar a Jesucristo y su Evangelio 
                    siendo iglesia servidora, solidaria y misionera, atenta a las realidades de Santo Domingo 
                    Este, Guerra y Boca Chica, promoviendo e impulsando el desarrollo de una vida plena para todas las personas.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <div class="headline">Vision</div>
                    <v-icon x-large class="blue--text text--lighten-2"><!-- flash_on --></v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline"><!-- Vision --></div>
                  </v-card-title>
                  <v-card-text>
                    En representación de nuestro arzobispo Metropolitano de Santo Domingo y Primado de América, su Excelencia Mons. 
                    Francisco Ozoria Acosta y en comunión corresponsable con todos los agentes pastorales consagrados, sacerdotes, 
                    religiosos (as), laicos y todos los hombres y mujeres de buena Voluntad de los municipios de Santo Domingo Este, 
                    Guerra y Boca Chica; nos corresponde animar y apoyar la tarea apostólica en esta porción de la iglesia de Santo Domingo.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <div class="headline text-xs-center">Valores</div>
                    <v-icon x-large class="blue--text text--lighten-2"><!-- build --></v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center"><!-- Valores --></div>
                  </v-card-title>
                  <v-card-text>
                    <v-list >
                    <v-list-tile avatar>
                      <v-list-tile-action>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>Formacion</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile avatar>
                      <v-list-tile-action>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>Integridad</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile avatar>
                      <v-list-tile-action>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>Amor</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list> 
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-parallax :src="require('@/assets/section.jpg')" height="400">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">Los 12 Pasos del Plan Pastoral</div>
          <em>Kick-start your application today</em>
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
            to="/planpastoral"
          >
            Ver Mas
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Eventos de la Vicaria</h2>
            <span class="subheading">
              Cras facilisis mi vitae nunc 
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-card-media :src="require('@/assets/img4.png')" width="200px" height="200px"></v-card-media>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Encuentro con Pastoral Villa Duarte - Las Américas</div>
                  </v-card-title>
                  <v-card-text>
                    El Vicario Episcopal de Santo Domingo Este, Mons. Benito Ángeles  en compañía del Arzobispo Metropolitano... 
                    <br>
                    <v-btn
                      class="blue lighten-2 mt-5"
                      dark
                      large
                      to="/"
                    >
                      Ver Mas
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                     <v-card-media :src="require('@/assets/img2.png')" width="200px" height="200px"></v-card-media>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Ordenan tres obispos auxiliares de la Arquidiócesis de S. D.</div>
                  </v-card-title>
                  <v-card-text>
                    Monseñor  Francisco Ozoria Acosta ordenó el sábado 26 de Agosto del 2017 a tres sacerdotes como obispos aux...
                    <br>
                    <v-btn
                      class="blue lighten-2 mt-5"
                      dark
                      large
                      to="/"
                    >
                      Ver Mas
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                     <v-card-media :src="require('@/assets/img3.png')" width="200px" height="200px"></v-card-media>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">5to Encuentro con el Clero de la Vicaría Episcopal S. D. E.</div>
                  </v-card-title>
                  <v-card-text>
                    El 09 de Octubre del 2017, se realizó el quinto encuentro de Sacerdotes de la vicaría Episcopal, en esta...
                    <br>
                    <v-btn
                      class="blue lighten-2 mt-5"
                      dark
                      large
                      to="/"
                    >
                      Ver Mas
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>


    <section>
      <v-parallax :src="require('@/assets/cielo.jpg')" height="400">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">Proyecto Vicaria Digital</div>
          <em>Kick-start your application today</em>
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
            to="/digital"
          >
            Ver Mas
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>
    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>777-867-5309</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Chicago, US</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-content>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>