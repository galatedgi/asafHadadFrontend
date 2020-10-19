<template>
    <div>
        <img id="symbol" src="../assets/location_icon.png">
        <h3> 
            כתובת:
            <br>
            ביאליק 100, באר שבע
        </h3>
        <a href="https://ul.waze.com/ul?ll=31.24684900%2C34.78792080&navigate=yes"> 
            <img id="icon" src="../assets/waze_icon.png">
            <br>
           <a id="text"> נווט אלינו עם waze</a>
           </a> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.0568693319856!2d34.79010948507018!3d31.24684898146093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150266131dfa804f%3A0x1e5de0bc12c785ef!2z15fXmdeZ150g16DXl9ee158g15HXmdeQ15zXmdenIDEwMCwg15HXkNeoINep15HXog!5e0!3m2!1siw!2sil!4v1602674977758!5m2!1siw!2sil" width="300" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>     
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

#text{
      color: whitesmoke;
      font-size: 12px;
  }

  #symbol{
     height: 50px;
    width: 30px;
    filter : invert(1);
  }

#icon{
     height: 50px;
    width: 50px;
     /* border-radius: 20%; */
    /* filter : invert(1); */
  }

</style>