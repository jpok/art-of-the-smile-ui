<template>
  <v-container fluid>
    <v-row align="center" dense>                                                              
      <v-col cols="12" sm="8 ">
        <div class="text-h5 text-sm-h3 text-lg-h2 primary--text font-weight-light">
          Art of the Smile is a 21st century dental office with a new approach  
        </div>
      </v-col>        
    </v-row>
    <v-row align="center">
      <v-col cols="12" sm="6">
        <div class="text-body-1 md-text-h6 text-lg-h6 secondary--text font-weight-light">
          Dr. Brock Tekin’s focus is on providing state-of-the-art dentistry in a uniquely nontraditional setting. The result is a comfortable and non-intimidating environment.  Services from basic teeth cleaning to advanced cosmetic makeovers are offered to accommodate any dental needs.  The practice is a synergistic blend of artistry and technology. 
        </div>
      </v-col>      
      <v-col cols="12" sm="6" class="order-first order-sm-last">
        <v-img src="/invisalign-woman.png" alt="invisalign-woman"/>              
      </v-col>
    </v-row>
    <v-row justify="end" align="center">
      <v-col cols="6" md="4">
        <div class="text-body-1 md-text-h6 lg-text-h3 secondary--text font-weight-light">
          Award Winning INVISALIGN provider
        </div>
      </v-col>
      <v-col cols="3" md="1">
        <v-img src="/invisalign-reward.png" alt="invisalign-reward"/>              
      </v-col>
    </v-row>
    <v-row justify="center">
      <div class="text-h6 text-center text-sm-h3 text-lg-h2 primary--text font-italic">
        Our Team
      </div>
    </v-row>
    <v-row justify="center">
        <v-img src="/swoosh.png" alt="swoosh"/>              
    </v-row>

    <Team/>    
    <v-row justify="center">
      <div class="text-h6 ma-4 text-center text-sm-h3 text-lg-h2 primary--text font-italic">
        Our Testimonials
      </div>
    </v-row>
    <ReviewCarousel/>
    
  </v-container>

</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
