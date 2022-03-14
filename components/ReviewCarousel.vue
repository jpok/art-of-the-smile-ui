<template>
  <v-container fluid>
    <v-row justify="center">
      <div
        class="text-h6 ma-4 text-center text-sm-h3 text-lg-h2 primary--text font-italic"
      >
        Our Testimonials
      </div>
    </v-row>
    <v-row justify="center">
      <v-icon x-large> mdi-format-quote-open </v-icon>
    </v-row>

    <v-row v-if="model">
      <v-icon @click="model--"> </v-icon>
      <v-icon @click="model++"> </v-icon>
    </v-row>

    <v-carousel      
      hide-delimiters
      height="24rem"      
      v-model="model"
    >
      <v-carousel-item v-for="review in reviews" :key="review.reviewer">
        <v-col align="center">
          <div
            class="text-body-2 text-sm-body-1 font-weight-light secondary--text"
          >
            {{ review.comments }}
          </div>
          <br />
          <div
            class="text-h6 accent--text text-sm-h3 font-weight-light primary--text"
          >
            {{ review.reviewer }}
          </div>
        </v-col>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  name: 'ReviewCarousel',

  data: () => ({
    model: 0,
    reviews: [
      {
        reviewer: 'JB',
        comments:
          'Unbelievable!!! I now look forward to having my dental needs taken care of in such a serene setting. I truly do enjoy being at Dr. Tekin’s office because I can listen to the daily selection of up-to-date music and feel like the staff are friends that would be fun to be with even out of the office. I have found Dr. Tekin incredibly accommodating: time for me when I need an appointment, prompt scheduling, procedures that have caused me no real pain and beautiful results. I am a bit of a perfectionist and Dr. Tekin is too! Congratulations and thanks for bringing comfort to the “Art of the Smile.”',
      },
      {
        reviewer: 'KM',
        comments:
          'Having not seen a dentist in awhile I was a little apprehensive about going back for what I thought would be significant work; bridge, crown, and veneers! However, from the moment I walked into Dr. Tekin’s office, I felt at ease. Everyone was very personable and the atmosphere was very relaxed. I was getting married in just four months and needed some serious help if I wanted to smile proudly on my big day. Dr. Tekin assured me that he could help. Well, he did that and more! The pictures look great and I can’t seem to stop smiling now! Neither can my lovely bride. Thanks Dr. Tekin! ',
      },
      {
        reviewer: 'SC',
        comments:
          'My experience with Dr. Tekin is tremendously positive both in the professional and personal treatment I’ve been given. Attitudes previously experienced and treatment plans referred to my previous dental professional, but not provided, made me wary of visiting the dentist again and maintaining my dental care. But, my positive experience with Dr. Tekin has helped me overcome what I believe had become an intimidation and I am finally back on track with my care.',
      },
      {
        reviewer: 'Diana',
        comments:
          'I thought I was too old, and I knew I was too scared to have my teeth fixed – but you proved me wrong on both counts. Thanks to your patience and professionalism, I will enjoy my new smile for years to come and remember my experience as a pleasant one. Thank you so much !',
      },
    ],
  }),
}
</script>
