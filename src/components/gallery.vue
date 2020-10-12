<template>
  <div>
    <b-carousel id="carousel" img-width="50px" img-height="50px" :interval="4000" controls indicators>
      <!-- <b-carousel-slide  v-for="img in images" :key="img" :img-src="require('../assets/images/img1.jpeg')"></b-carousel-slide> -->
      <!-- <b-carousel-slide :img-src="require('../assets/images/img2.jpeg')"></b-carousel-slide> -->
        <b-carousel-slide  v-for="img in images" :key="img" :img-src="img"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
// import {Carousel3d,Slide } from 'vue-carousel-3d';

export default {
  name: "gallery",
  // components:{
  //   Carousel3d,
  //   Slide
  // },
  data(){
    return{
      imageDir: "../assets/images",
      images: [],
      img: "../assets/images/img1.jpeg"
    }
  },
  mounted(){
    this.importAllImages();   
  },
  methods: {
    importAllImages() {
      let data=require.context('../assets/images/', true, /\.jpeg$/);
      var imgs = [];
      // data.keys().forEach(key => (imgs[key] = data(key)))
      // data.keys().forEach(key => (imgs.push(this.imageDir+key.substring(1))));
      data.keys().forEach(key => (imgs.push(data(key))));
      this.images = imgs
    }
  }
}
</script>

<style scoped>
 #carousel{
    height: 400px;
    width: 300px;
  }
</style>