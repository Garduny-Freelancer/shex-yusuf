<template>
   <div>

       <navbar/>



       <div v-for="(item,index) in info" :key="index" class="my-8">
            <div v-if="item.id.videoId.includes(id)">

            <center>   
            <v-row class="d-flex justify-center">
             <v-col cols="12" md="12" sm="8" >
               <iframe class="radius-15"
                width="560" height="315" 
                :src="`https://www.youtube.com/embed/${item.id.videoId}`"
                 title="YouTube video player"
                  frameborder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen></iframe>

             </v-col>
           </v-row>

           <v-row class="d-flex justify-center">
             <p>تایتڵ</p>
           </v-row>


            </center>
            </div> 


            <!-- agar nabu -->
            <div v-else>
                
            </div>
        </div>

        <!-- see those -->

        <v-layout column class="my-9 mt-16">

           <v-row class="d-flex justify-center">
             <p class="deep-purple text--white pt-2 elevation-3 pb-2 pl-2 pr-2 radius-10">ئەمانەش ببینە</p>
           </v-row>

           <v-row class="d-flex justify-center">
             <v-col lg="3" md="3" xl="3"  sm="2" v-for="(item,index) in more" :key="index">
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
        class=" mx-auto card-btn see-btn"
        color="white"
        text
        elevation="5"
        small
        style="border-radius:8px;background:#83501b;font-size:12px"
       
   
        @click="changeRoute(`${item.id.videoId}`)"
      >
        سەیرکردن
      </v-btn>

     
    </v-card-actions>
  </v-card>
             </v-col>
           </v-row>
        </v-layout>

        <clientFooter/>
   </div>
</template>



<script>
import axios from 'axios';
import navbar from '../../layouts/Client/nav.vue';
import clientFooter from '../../layouts/Client/footer.vue';

export default {

    data() {
    return {
        id:this.$route.params.id,
      info:null,
      image:null,
      more:null,
    }
  },
beforeMount () {
    axios
      .get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCdyy5nLZDWUsecoOkvQGNBg&maxResults=10&order  =date&type=video&key=AIzaSyDYsRc4vsdDqSfgBY7g_sQvw-IJSRvqSSk')
      .then(response => (this.info = response.data.items))
       
  },

  mounted () {
    axios
      .get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCdyy5nLZDWUsecoOkvQGNBg&maxResults=4&order  =date&type=video&key=AIzaSyDYsRc4vsdDqSfgBY7g_sQvw-IJSRvqSSk')
      .then(response => (this.more = response.data.items))
  },

  components:{
      navbar,clientFooter
  },
  methods:{
    changeRoute(val) {
      this.$router.push({path:`${val}` });
      this.$router.go();
      // this.$forceUpdate();
    }
  }


//    watch:{
//     $route (to, from){
        
//     }
// } 

}
</script>


<style scoped>@font-face {
  font-family: "rabar";
  src: local("rabar"),
   url(../../assets/fonts/Rabar_039.ttf) format("truetype");
}

.v-application ,.see-btn{
  font-family: "rabar" !important;
}

p{
  font-family:"rabar" !important;
}

.text--white{
  color: white !important;
}

#about {
  background-color: #f4f7f5;
}

@media screen and (max-width: 600px){
    iframe{
        width: 90% !important;
        height: 215px !important;
    }
}
</style>
