<template lang="">
    <div>
      <navbar/>
        <HomeSection/>
      <clientFooter/>
    </div>
</template>


<script>
import navbar from '../../layouts/Client/nav.vue';
import clientFooter from '../../layouts/Client/footer.vue';
import HomeSection from '../../components/HomeSection.vue';

export default {
    components:{
        navbar,clientFooter,HomeSection
    }
}
</script>
<style lang="">
    
</style>