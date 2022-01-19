<template>
  <div>
    <navbar/>
     <v-container class="my-10">
        <v-row class="d-flex justify-center">
            
          <v-col lg="3" md="3" xl="3"  sm="2"  v-for="item in info=8" :key="item">

               
            <v-card
              dir="rtl"
    class="mx-auto"
    max-width="280"
    height="280"
    style="border-radius:10px"
  >
    <v-img
      class="white--text align-end"
      height="100%"
      src="../../assets/img/image1.jpg"
    >
    </v-img>

  

  </v-card>



          </v-col>
        </v-row>
      </v-container>

      <clientFooter/>
  </div>
</template>

<script>
import navbar from '../../layouts/Client/nav.vue';
import clientFooter from '../../layouts/Client/footer.vue';
 

export default {

  components:{
    navbar,clientFooter
  },

  data() {
    return {
     
    }
  },


}
</script>


<style scoped>
@font-face {
  font-family: "rabar";
  src: local("rabar"),
   url(../../assets/fonts/Rabar_039.ttf) format("truetype");
}

.card-btn{
  font-family: "rabar" !important;
}


</style>