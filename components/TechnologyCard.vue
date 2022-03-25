<template>
  <v-tooltip right nudge-left="200px" color="white">
    <template v-slot:activator="{ on, attrs }">
      <v-card flat class="flex d-flex flex-column" v-bind="attrs" v-on="on">
        
          <div style="display: block; height: 70px" class="pl-4">
            <v-row>
              <v-img eager class="icon" max-width="50" :src="icon" />
              <v-img class="pl-12" v-if="logo" max-height="40" contain max-width="90" eager :src="logo" />
            </v-row>            
          </div>        

        <div class="primary--text pl-4">
          <v-row>
            <p>{{ title }}</p>
          </v-row>
        </div>
        <v-card-text class="secondary--text"> {{ text }} </v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions v-if="toolTipImage">
          <span
            v-if="$vuetify.breakpoint.width >= 1080"
            class="accent--text text-center captionfont-weight-bold"
          >
            Hover to view photo
          </span>
          <span
            v-if="$vuetify.breakpoint.mobile"
            class="accent--text text-center captionfont-weight-bold"
          >
            Click to view photo
          </span>
          <v-img v-if="$vuetify.breakpoint.xs" eager :src="toolTipImage" />
          <v-icon
            v-if="!$vuetify.breakpoint.xs"
            class="arrows"
            color="accent"
            size="1rem"
            >mdi-chevron-double-right</v-icon
          >
        </v-card-actions>
      </v-card>
    </template>
    <v-img
      v-if="!$vuetify.breakpoint.xs"
      eager
      max-width="300"
      :src="toolTipImage"
    />
  </v-tooltip>
</template>

<script>
export default {
  name: 'TechnologyCard',
  props: {
    icon: String,
    title: String,
    text: String,
    toolTipImage: String,
    logo: String,
  },
}
</script>

<style>
.icon {
  transform: rotateY(360deg);
  animation: turn 5.5s ease-in-out forwards 0s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}

.arrows {
  -webkit-animation: test 2s infinite; /* Chrome, Safari, Opera */
  animation: bounce 2s forwards infinite;
}

@keyframes bounce {
  50% {
    margin-left: 5px;
  }
}
</style>