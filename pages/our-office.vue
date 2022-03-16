<template>
  <v-container fluid>
    <v-row justify="center">
      <div
        class="text-h6 ma-4 text-center text-sm-h4 text-lg-h3 primary--text font-weight-light"
      >
        Art Gallery
      </div>
    </v-row>

    <v-row justify="center">
      <v-col>
        <v-row>
        <carousel-3d border="0">
          <slide :index="0">
            <figure>
              <v-img src="art/art-1.jpg" />
              <figcaption>
                Sundown Across the Lake in Tuscany by: Ruth Barett
              </figcaption>
            </figure>
          </slide>
          <slide :index="1">
            <figure>
              <v-img src="art/art-2.jpg" />
              <figcaption>Golden Bars by: Ruth Barett</figcaption>
            </figure>
          </slide>
          <slide :index="2">
            <figure>
              <v-img src="art/art-3.jpg" />
              <figcaption>
                Twilight Road Through Tuscany by: Ruth Barett
              </figcaption>
            </figure>
          </slide>
          <slide :index="3">
            <figure>
              <v-img src="art/art-4.jpg" />
              <figcaption>The Forrest by: Jeff Lange</figcaption>
            </figure>
          </slide>
          <slide :index="4">
            <figure>
              <v-img src="art/art-5.jpg" />
              <figcaption>Concentric Circles by: Jeff Lange</figcaption>
            </figure>
          </slide>
          <slide :index="5">
            <figure>
              <v-img src="art/art-6.jpg" />
              <figcaption>Stacked Yellow Roses by: Keith Abney</figcaption>
            </figure>
          </slide>
          <slide :index="6">
            <figure>
              <v-img src="art/art-7.jpg" />
              <figcaption></figcaption>
            </figure>
          </slide>
        </carousel-3d>
        </v-row>
      </v-col>
      </v-row>
      <v-row justify="center">
        <div
          class="text-h6 ma-4 text-center text-sm-h5 text-lg-h5 primary--text font-weight-light"
        >
          We aim to provide our patients with a dental experience that is so
          much more than you’d expect
        </div>
      </v-row>
    
    <v-row justify="center">
      <v-spacer></v-spacer>
      <v-col cols="12" sm="4">        
        <div class="primary--text text-h6 mb-4">Amenities</div>
      
        <ul style="list-style: none" class="pa-0 mt-12 secondary--text text-body-1">
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
      
      <v-col cols="12" sm="6">
        <p class="ml-2 primary--text text-h6">Virtual Office Tour</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1647387899793!6m8!1m7!1sCAoSLEFGMVFpcE05alAyekVtdGlhN3hEVGVmeWVDMkNPZ3dwU1d1OExTNGFBYnNE!2m2!1d33.84383236539094!2d-84.42861147735022!3f128.37850931082272!4f-11.021477472862614!5f0.4000000000000002"
          width="365"
          height="300"
          style="border: 0"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </v-col>
    </v-row>
    <v-row justify="center">
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


.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
</style>