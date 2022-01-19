<template>
  <div>

    <!-- mobile sidebar -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      :style="grad"
      right
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar class="list_avatar">
            <img src="@/assets/img/logo_text3.png" class="image-sidebar" max-width="520px"  />
          </v-list-item-avatar>
          <!-- <v-list-item-content>
            <v-list-item-title class="title">Calango</v-list-item-title>
            <v-list-item-subtitle>WEB</v-list-item-subtitle>
          </v-list-item-content> -->
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          link
          @click="$router.push('/')"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">سەرەتا</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          @click="$router.push('/videos')"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>mdi-video</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">ڤیدیۆ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          @click="$router.push('/image')"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>mdi-image</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">وێنە</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      <v-list-item
          link
          @click="$router.push('/about')"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">دەربارە</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      <v-list-item
          link
          @click="$router.push('/contact')"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>mdi-card-account-phone</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">پەیوەندی</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-2 client-navbar"
      :class="{ expand: flat }"
      :style="grad"
      dir="rtl"
    >
      <v-toolbar-title>
        <v-img src="@/assets/img/logo_text3.png" max-width="120px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else >
        <v-btn text to="/">
          <span class="mr-2 nav-item">سەرەتا</span>
        </v-btn>
        <v-btn text to="/videos">
          <span class="mr-2 nav-item">ڤیدیۆ</span>
        </v-btn>
        <v-btn text to="/images">
          <span class="mr-2 nav-item">وێنە</span>
        </v-btn>
        <v-btn text to="/about">
          <span class="mr-2 nav-item">دەربارە</span>
        </v-btn>
        <v-btn text to="/contact">
          <span class="mr-2 nav-item">پەیوەندی</span>
        </v-btn>
       
        
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "rabar";
  src: local("rabar"),
   url(../../assets/fonts/Rabar_039.ttf) format("truetype");
}

@font-face {
  font-family: "sirwan";
  src: local("sirwan"),
   url(../../assets/fonts/sirwan.ttf) format("truetype");
}

.v-toolbar {
  transition: 0.6s;
}


.expand {
  height: 80px !important;
  padding-top: 10px;
}
.nav-item{
    color: #130F32 !important;
    font-family: "sirwan" !important;
    letter-spacing: 0px !important;
}

.v-btn--active{
    background:#83501b !important;
    padding:10px 3px 15px 10px !important;
}
.v-btn--active .nav-item{
color: white !important;
}

.mdi-menu{
    color: #130F32 !important;
}

.image-sidebar{
  width:101px !important;
  height:107px !important;
}

.list_avatar{
  width:200px !important;
}
.subtitile-1{
font-family: "rabar" !important;
}

.v-list-item{
  margin-bottom: 10px !important;
}



</style>

<script>
export default {
  data: () => ({
      grad:{'background':'#EEEDF7 !important'},
    drawer: null,
    isXs: false,
    goDark:false,
   
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },
  

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  
  

  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>


