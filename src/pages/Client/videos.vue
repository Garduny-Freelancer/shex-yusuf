<template>
  <div>
    <navbar/>
     <v-container class="my-10">
        <v-row class="d-flex justify-center">
            
          <v-col lg="3" md="3" xl="3"  sm="2"  v-for="(item,index) in info" :key="index">

               
            <v-card
              dir="rtl"
    class="mx-auto"
    max-width="280"
    height="280"
    style="border-radius:10px"
  >
    <v-img
      class="white--text align-end"
      height="150px"
      :src="item.snippet.thumbnails.default.url"
    >
    </v-img>


    <v-card-text class="text--primary">
      <div style="height: 40px !important;
    overflow: hidden;">  {{item.snippet.title}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        class=" mx-auto card-btn"
        color="white"
        text
        elevation="5"
        small
        style="border-radius:8px;background:#83501b;font-size:12px"
       
        :to="`video_preview/${item.id.videoId}`"
      >
        سەیرکردن
      </v-btn>

     
    </v-card-actions>
  </v-card>

         <!-- :href="`https://www.youtube.com/watch?v=${item.id.videoId}`" -->
           <!-- <v-row>
             <v-col cols="" md="" >
               <iframe
                width="560" height="315" 
                :src="`https://www.youtube.com/embed/${item.id.videoId}`"
                 title="YouTube video player"
                  frameborder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen></iframe>

             </v-col>
           </v-row> -->

          </v-col>
        </v-row>
      </v-container>

      <clientFooter/>
  </div>
</template>

<script>
import navbar from '../../layouts/Client/nav.vue';
import clientFooter from '../../layouts/Client/footer.vue';
  import axios from 'axios';

export default {

  components:{
    navbar,clientFooter
  },

  data() {
    return {
      info:null,
      image:null
    }
  },
mounted () {
    axios
      .get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCdyy5nLZDWUsecoOkvQGNBg&maxResults=10&order  =date&type=video&key=AIzaSyDYsRc4vsdDqSfgBY7g_sQvw-IJSRvqSSk')
      .then(response => (this.info = response.data.items))
  }

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