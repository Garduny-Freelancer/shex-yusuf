<template>
    <div>
        <navbar/>

        <v-app>
            <v-container>
                <v-layout column>
                     <v-row class="d-flex justify-center">
                       <v-col cols="12" md="12">
                         <center>
                           <p>دەربارە</p>
                                 <!-- <h3>{{testVuex}}</h3> -->
                                    <v-btn @click="changeTestVuex()" small elevation="10" color="primary">change</v-btn>
                                    <v-btn @click="getUsers()" class="white--text mx-3" small elevation="10" color="purple">get all user</v-btn>

                                  <p>{{users}}</p>
                           </center>
                       </v-col>
                     </v-row>
                </v-layout>
            </v-container>
        </v-app>

        <clientFooter/>

    </div>
</template>

<script>
import navbar from '../../layouts/Client/nav.vue';
import {mapState,mapActions} from 'vuex';
import clientFooter from '../../layouts/Client/footer.vue';
    export default {

components:{
    navbar,clientFooter
  },
  computed: {
    ...mapState('users',['users'])
  },
  methods:{
    ...mapActions('users',['getUsers']),

  }

    }
</script>

<style scoped>
@font-face {
  font-family: "rabar";
  src: local("rabar"),
   url(../../assets/fonts/Rabar_039.ttf) format("truetype");
}

.v-application{
  font-family: "rabar" !important;
}


</style>