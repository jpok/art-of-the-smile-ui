<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <div
        class="text-subtitle-1 text-center text-sm-h4 text-lg-h3 primary--text font-weight-light"
      >
        Everything At Art of the Smile, is computerized and efficient for your
        maximum benefit. We are a paperless office!
      </div>
    </v-row>
    <v-row justify="center" class="pt-12">
      <v-col cols="12" sm="4" lg="2" class="d-flex flex-column">
        <TechnologyCard
          icon="intra-oral.svg"
          toolTipImage="intra-oral-pic.jpeg"
          title="Intra-oral Digital Scanner"
          logo="itero-digital-practice.png"
          text="No more “goopy” impression material in your mouth! Scanning teeth to provide digital impressions is the latest technology in dentistry. Incredible accuracy combined with patient comfort is paramount at Art of the Smile!"
        />
      </v-col>
      <v-col cols="12" sm="4" lg="2" class="d-flex flex-column">
        <TechnologyCard
          icon="flashlight-icon.svg"
          title="ISolite Dryfield Illuminator"
          toolTipImage="isolate-pic.png"
          logo="invisalign-provider.png"
          text="delivers a clear, well-lighted and open patient mouth. The combination of comfortable tongue and cheek retraction, continuous hands-free suction, and illumination helps speed procedures by 30%. The device gently holds the patient’s mouth and delivers state-of-the-art isolation and humidity control which improves dental outcomes. "
        />
      </v-col>
      <v-col cols="12" sm="4" lg="2" class="d-flex flex-column">
        <TechnologyCard
          icon="camera-icon.svg"
          title="Professional Digital Camera"
          text="A picture is worth a thousand words. Close up digital photographs of your teeth serve to document and educate. All images (photographs and x-rays) can be instantly displayed for you to see on a high-definition television, and are saved in your digital chart. Dr. Tekin loves to photograph!!"
        />
      </v-col>
      <v-col cols="12" sm="4" lg="2" class="d-flex flex-column">
        <TechnologyCard
          icon="doctor-icon.svg"
          title="Sterilization Center"
          text="Our office is fully OSHA compliant. We are very proud of our state-of-the-art sterilization center, but we don’t just stop there. We go the extra mile and have weekly third-party sterilization audits to make sure the sterilization procedures are at peak level for your safety. We even use a special water bottle sterilization system that is proven to eliminate bacteria problems."
        />
      </v-col>
      <v-col cols="12" sm="4" lg="2" class="d-flex flex-column">
        <TechnologyCard
          icon="x-ray-icon.svg"
          title="Digital X-rays"
          text="No more waiting for film development! X-ray images appear instantaneously like a digital camera. And radiation exposure is 40% less!"
        />
      </v-col>
    </v-row>
    <v-row justify="center" no-gutters align="center">
      <v-col cols="12" sm="4">
        <div
          class="primary--text text-center text-h6 text-sm-left pa-4 font-weight-light"
        >
          At Art of the Smile, we offer the best dental products that are safe,
          effective and affordable. Check out our current selection, and feel
          free to contact us for more information on any product
        </div>
      </v-col>
      <v-col>
        <div
          v-bind:class="$vuetify.breakpoint.xs ? 'line-hor' : 'line'"
          class="primary"
        ></div>
      </v-col>
      <v-col cols="12" sm="7">
        <ul style="list-style: none" class="text-overline secondary--text">
          <li>
            <span class="primary--text"> Colgate Tooth Whitening System </span>–
            In office or take home whitening to get a beautiful, white smile.
          </li>
          <li>
            <span class="primary--text">Philips Sonicare Toothbrushes </span>–
            Professional powered toothbrush.
          </li>
          <li>
            <span class="primary--text">PreviDent 5000 Plus Toothpaste </span>–
            For patients that need extra fluoride.
          </li>
          <li>
            <span class="primary--text"
              >Oral-b – Biotene Dry Mouth products </span
            >– A hydrated mouth is a healthy mouth!
          </li>
        </ul>
      </v-col>
    </v-row>

    <!-- <v-row justify="end" no-gutters class="">

      <v-img
        contain
        src="itero-digital-practice.png"
        alt="itero digital practice"
        max-width="150px"        
      ></v-img>

      <v-img
        contain        
        max-width="150px"
        src="invisalign-provider.png"
        alt="invisalign provider"
      ></v-img>
      
    </v-row> -->
  </v-container>
</template>

<script>
export default {
  name: 'TechnologyPage',
}
</script>

<style scoped>
.line {
  width: 0.25rem;
  margin: 1rem;
  height: 15rem;
}

.line-hor {
  width: 90%;
  margin: 1rem;
  height: 0.25rem;
}
</style>
