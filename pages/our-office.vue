<template>
  <v-container fluid>
    <v-row justify="center">
      <div
        class="text-h6 ma-4 text-center text-sm-h5 text-lg-h4 primary--text font-weight-light"
      >
        Art Gallery
      </div>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <carousel-3d border="0">
          <slide :index="0"> <v-img src="art/art-2.jpg" /> </slide>
          <slide :index="1">
            <v-img src="art/art-1.jpg" />            
          </slide>
          <slide :index="2">
            <v-img src="art/art-3.jpg" />
          </slide>
          <slide :index="3">
            <v-img src="art/art-4.jpg" />
          </slide>
          <slide :index="4">
            <v-img src="art/art-5.jpg" />
          </slide>
          <slide :index="5">
            <v-img src="art/art-6.jpg" />
          </slide>
          <slide :index="6">
            <v-img src="art/art-7.jpg" />
          </slide>
        </carousel-3d>
        <v-row justify="end">
          ART TITLE            
        </v-row>
      </v-col>
      <v-row justify="center">
        <div
          class="text-h6 ma-4 text-center text-sm-h5 text-lg-h5 primary--text font-weight-light"
        >
          We aim to provide our patients with a dental experience that is so
          much more than you’d expect
        </div>
      </v-row>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="4">
        <v-col>
          <p class="primary--text text-h6">Amenities</p>
          <ul
            style="list-style: none"
            class="secondary--text text-body-1"
          >
            <li>- Wi-Fi Wireless Internet</li>
            <li>- TVs for each dental chair</li>
            <li>- Original artwork throughout</li>
            <li>- Tempur-Pedic neck pillows</li>
            <li>- Soft, incandescent lighting</li>
            <li>- Fleece blankets</li>
            <li>- Large plasma screen TV</li>
            <li>- Hundreds of movies available</li>
            <li>- Aromatic candles throughout office</li>
          </ul>
        </v-col>
      </v-col>
      <v-col cols="12" sm="3">
        <v-row justify="center">
          <v-col cols="8">
          <v-img src="office/office-1.png" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" >
      <v-col cols="12" sm="4">
        <div class="primary--text">
          We believe in creating a comfortable environment that you will look
          forward to spending time in. Gone is the old clinical dental office
          feel – when you step foot into Art of the Smile, you’ll see how we
          work hard to change your expectation of a dental visit. If there’s
          anything you need to make you feel more at home – don’t hesitate to
          ask, and we will do whatever it takes to put you at ease.
        </div>
      </v-col>
      <v-col cols="12" sm="3">
        <div
          class="accent--text text-subtitle-1 font-weight-thin text-center font-italic"
        >
          “I now look forward to having my dental needs taken care of in such a
          serene setting”…Click here to read more.
        </div>
      </v-col>
    </v-row>
    <ReviewCarousel />
  </v-container>
</template>

<script>
export default {
  name: 'OurOfficePage',
}
</script>

<style>
.carousel-3d-slide {
  background-color: transparent;
}
</style>