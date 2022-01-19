<template>
  <v-footer dark padless class="client-footer">
    <v-card flat tile class="bg black--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 black--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-img :src="require(`../../assets/img/${icon.img}`)" width="10"></v-img>
          
        </v-btn>
      </v-card-text>

      <v-card-text class="black--text pt-0 sirwan-font">
        پێگەی فەرمی قورئان خوێن : <span class="browen-color">یوسف عثمان</span>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="black--text sirwan-font">
        {{ new Date().getFullYear() }} — <strong>Yusuf Othman</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.v-card {
  width: 100%;
}
</style>

<script>
export default {
  data: () => ({
    icons: [
      {
        img:"facebook.svg",
        link: "",
      },
      {
        img: "youtube.svg",
        link: "",
      },
      {
        img: "instagram.svg",
        link: "",
      },
      {
        img: "tiktok.svg",
        link: "https://instagram.com/",
      },
       {
        img: "snapchat.svg",
        link: "https://instagram.com/",
      }
    ],
  }),
};
</script>


<style>
@font-face {
  font-family: "sirwan";
  src: local("sirwan"),
   url(../../assets/fonts/sirwan.ttf) format("truetype");
}
.sirwan-font{
  font-family: "sirwan" !important;
}
.bg{
  background:#eeedf7 !important;
}

</style>
