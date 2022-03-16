<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="12" sm="8">
        <div
          class="text-h5 text-sm-h4 text-lg-h3 text-sm-h3 text-lg-h2 primary--text font-weight-light"
        >
          Art of the Smile is a 21st century dental office with a new approach.
        </div>
      </v-col>
    </v-row>
    <v-row align="start" justify="space-around">
      <v-col cols="12" sm="6" class="mt-12 pl-6">
        <p
          style="line-height: 180%"
          class="text-body-1 md-text-h6 text-lg-h5 secondary--text font-weight-light"
        >
          Dr. Brock Tekin’s focus is on providing state-of-the-art dentistry in
          a uniquely nontraditional setting. The result is a comfortable and
          non-intimidating environment. Services from basic teeth cleaning to
          advanced cosmetic makeovers are offered to accommodate any dental
          needs. The practice is a synergistic blend of artistry and technology.
        </p>
      </v-col>
      <v-col cols="12" sm="6" class="order-first order-sm-last">
        <v-img eager  src="/invisalign-woman.png" class="mb-8" alt="invisalign-woman" />

        <v-row justify="center" align="center">
          <v-col>
            <v-row justify="center" align="center">
              <div
                class="text-body-1 font-italic md-text-h6 text-lg-h5 secondary--text font-weight-light"
              >
                Award Winning INVISALIGN provider
              </div>
              <v-img eager 
                max-width="6rem"
                src="/invisalign-reward.png"
                alt="invisalign-reward"
              />
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
      <v-img eager  src="/swoosh.png" alt="swoosh" />
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
