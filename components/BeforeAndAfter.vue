<template>
  <v-container fluid>
    <v-sheet elevation="2" class="rounded-pill">
      <v-carousel
        v-model="model"
        :height="$vuetify.breakpoint.xs ? '600px' : '400px'"
        hide-delimiters
      >
        <v-carousel-item v-for="item in items" :key="item.before">
          <v-row justify="center" align="center" class="fill-height">
            <v-col cols="12" sm="5" align="center">
              <div
                class="text-h6 text-sm-h5 text-lg-h4 accent--text font-italic font-weight-light"
              >
                Before
              </div>
              <!-- <nuxt-img
              preload
              class="accent mt-6"
              sizes="sm:70vw md:30vw lg:300px"
              style="border-radius: 20px; border: 1px solid; opacity: 0.9"              
              :src="item.before"
            /> -->
              <v-img
                eager
                contain
                :max-height="$vuetify.breakpoint.xs ? '' : '50%'"
                :max-width="$vuetify.breakpoint.xs ? '80%' : ''"
                class="accent mt-6"
                style="border-radius: 20px; border: 1px solid; opacity: 0.9"
                :src="item.before"
              />
            </v-col>

            <v-col cols="12" sm="5" align="center">
              <div
                class="text-h6 text-sm-h5 text-lg-h4 primary--text font-italic font-weight-light"
              >
                After
              </div>
              <!-- <nuxt-img
              preload
              class="primary mt-6"
              sizes="sm:70vw md:30vw lg:300px"
              style="border-radius: 20px; border: 1px solid; opacity: 0.9"              
              :src="item.after"
            /> -->
              <v-img
                eager
                contain
                :max-height="$vuetify.breakpoint.xs ? '' : '50%'"
                :max-width="$vuetify.breakpoint.xs ? '80%' : ''"
                class="primary mt-6"
                style="border-radius: 20px; border: 1px solid; opacity: 0.9"
                :src="item.after"
              />
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: 'ReviewCarousel',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    model: 0,
  }),
}
</script>
