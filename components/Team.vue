<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="3">
        <div
          class="text-body-1 md-text-h6 text-lg-h6 secondary--text font-weight-light"
        >
          Dr. Brock F. Tekin is a native of Atlanta. He graduated from the
          Lovett School in 1987 and maintains close ties with many of his
          classmates. He obtained a Bachelor of Science from Tulane University
          in 1991. Dr, Tekin received his dental degree from Tufts University
          School of Dental Medicine in 1995.
        </div>
      </v-col>
      <v-row v-if="$vuetify.breakpoint.xs" justify="center">
        <!-- <v-col cols="6"> -->
          <v-img max-width="250px" class="" src="/degrees.png" alt="degrees" />
        <!-- </v-col> -->
      </v-row>
      <v-col cols="12" sm="6" class="pa-12">
        <v-img src="/brock.png" alt="dentist brock tekin" />
      </v-col>
      <v-col cols="12" sm="3">
        <v-row>
          <v-col v-if="!$vuetify.breakpoint.xs" cols="6" sm="12">
            <v-img src="/degrees.png" alt="degrees" />
          </v-col>

          <v-col cols="12">
            <div
              class="text-body-1 md-text-h6 text-lg-h6 secondary--text font-italic"
            >
              “I’ve been exposed to a variety of dental offices with attributes
              of varying degree. I distilled the best elements they had to offer
              and added my own style and expectations to create a unique dental
              experience.” — Brock Tekin D.M.D
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center">
      <div
        class="text-h6 text-center text-sm-h3 primary--text font-weight-light"
      >
        Let us change your expectation of a dental visit
      </div>
    </v-row>
    <v-row justify="space-around">
      <v-col cols="12" md="4" v-for="member in team" :key="member.img">        
        <v-card flat>
        <v-img :src="member.img"/>
        <v-card-text class="secondary--text  text-center">
          {{ member.bio }}
        </v-card-text>
        </v-card>
      </v-col>      
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {
      team: [
        { img: 'sterling.png', bio: 'Originally from San Diego and Tampa, Sterling has been in Atlanta since 1996. She received a Pre-Nursing degree from Gainesville Sate and moved to Buckhead thereafter. She worked in Oral Surgery for five years before joining Dr. Tekin’s team at Art of the Smile. Sterling enjoys watching football , trying new restaurants and spending time with friends and her family who reside in Hilton Head.' },
        { img: 'jore.png', bio: 'Jore, Our New Office Manager, truly has a passion for making people smile. She has spent the last ten years helping people achieve the smile of their dreams. Her expertise spans from Dental Assisting to Practice Management. She prides herself on providing the best patient care possible by making each patient feel appreciated and comfortable. She was born and raised in Southwest Atlanta and is the mother of 17-year-old Chloe. Her spare time is spent attending Chloe’s Varsity and AAU basketball games, cooking for her family, and watching the Georgia Bulldogs. Jore is very active in her community, living by the mantra “To whom much is given, much is required…' },
        { img: 'christina.png', bio: 'Originally from Mississippi, Christina moved to Atlanta 2 years ago. Graduating in 2002 from The University of Mississippi Medical Center with a Bachelor’s in Dental Hygiene, Christina brings over 17 years of experience to our team. She truly enjoys educating patients about their oral health and making them feel cared for and comfortable while being treated. During her leisure time, Christina enjoys spending time with family, friends and her fur babies. She also enjoys traveling, cooking, dining at the many restaurants Atlanta has to offer and going to church . She also enjoys traveling, cooking and dining at the many restaurants Atlanta has to offer.' },
      ]
    }
  }
}
</script>

<style>

</style>