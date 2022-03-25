<template>
  <v-container fluid class="pa-2">
    <v-row align="center">
      <v-col cols="12" sm="8">
        <div
          class="text-h5 text-sm-h4 text-lg-h3 text-sm-h3 text-lg-h2 primary--text font-weight-light"
        >
          <span>Art of the Smile</span> <span class="fade-in-fast"> is a 21st century
          dental office with a new approach.</span>
        </div>
      </v-col>
    </v-row>
    <v-row align="start" justify="space-around" class="ml-2 mr-2">
      <v-col cols="12" sm="6" class="mt-12 pl-6 concave">
        <div
          style="line-height: 150%"
          class="text-body-1 fade-in-med md-text-h6 text-lg-h5 secondary--text font-weight-light"
        >
          Dr. Brock Tekin’s focus is on providing state-of-the-art dentistry
        </div>

        <p
          class="text-body-1 ml-sm-6 fade-in-slow md-text-subtitle-1 mt-12 text-lg-h6 primary--text text--darken-1 font-weight-light"
        >
         in a uniquely nontraditional setting. The result is a comfortable and non-intimidating environment. Services
          from basic teeth cleaning to advanced cosmetic makeovers are offered
          to accommodate any dental needs.
        </p>

        <p
          class="text-body-1 pl-sm-6 md-text-subtitle-1 mt-12 text-lg-h6 accent--text font-weight-light"
        >
          The practice is a synergistic blend of
          <span class="fade-in-med secondary--text font-italic">artistry</span> and <span class="fade-in-med secondary--text font-italic">technology.</span>
        </p>
        <!-- <nuxt-img preload style="opacity: .1;" sizes="sm:25px md:50px lg:40px" src="/dental-options.svg" class="mb-8" alt="art of the smile options" /> -->
      </v-col>
      <v-col cols="12" sm="6" align="center" class="order-first order-sm-last">
        <nuxt-img
          preload
          sizes="xl:50vw lg:50vw md:50vw sm:70vw xs:70vw"
          src="/invisalign-woman.png"          
          alt="invisalign-woman"          
        />

        <v-row justify="center" align="center">
          <v-col>
            <v-row justify="center" align="center" class="ma-2">
              <div
                class="text-body-1 font-italic md-text-h6 text-lg-h5 secondary--text font-weight-light"
              >
                Providing Invisalign services since 2007
              </div>              
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center">
      <div
        class="text-h6 text-center text-sm-h3 text-lg-h2 primary--text font-italic"
      >
        Our Team
      </div>
    </v-row>
    <v-row justify="center">
      <v-img eager class="slide-in-left" src="/swoosh.png" alt="swoosh" />
    </v-row>

    <Team />
    <ReviewCarousel />
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.fade-in-fast {
  animation: fade-in 3s ease;
}

.fade-in-med {
  animation: fade-in 5s ease;
}

.fade-in-slow {
  animation: fade-in 7s ease;
}

.slide-in-bottom {
  animation: bottom_up 4s ease;
}

@keyframes to_italic {
  from {
    font-style: normal;
  }

  to {
    font-style: italic;
  }
}

.concave { 
   box-shadow: inset 0 0 4px #000000;
   border-radius: 2rem;      
}


</style>
