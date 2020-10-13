<template>
  <div class="container">
      <img id="symbol" src="../assets/phone_icon.png">
  <h3> 
      טלפון:
      <br>
      050-4278446
  </h3>
  <div>
      <b-row>
      <b-col id="col">
          <p>
        <a href="tel:050-427-8446">
            <img id="icon" src="../assets/call_icon.png" style=" filter : invert(1);" >
            <br>
            חיוג
        </a>
          </p>
      </b-col>
      <b-col id="col">
          <p>
        <a href="https://wa.me/972504278446">
            <img id="icon" src="../assets/whatsapp_icon.png" >
            <br>
            WhatsApp      
        </a>
          </p>
      </b-col>
      <b-col id="col">
          <p>
          <a href="https://www.instagram.com/asafhadad111/">
          <img id="icon" src="../assets/Instagram_icon.png" style="background-color: white; border-radius: 50%;" >
          <br>
          Instagram
          </a>
          </p>
      </b-col>
      </b-row>
  </div>
  </div>
</template>

<script>
export default {        
    
}
</script>

<style scoped>
  #symbol{
     height: 70px;
    width: 70px;
    filter : invert(1);
  }

    #icon{
     height: 50px;
    width: 50px;
    /* filter : invert(1); */
  }

  a{
      color: whitesmoke;
      font-size: 12px;
  }

  #col{
      width: 100px;
  }
</style>