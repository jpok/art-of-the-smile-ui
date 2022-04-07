<template>
  <v-tabs color="primary" center-active slider-color="primary" grow show-arrows>
    <v-tab> Invisalign </v-tab>
    <v-tab-item>
      <v-sheet elevation="2" class="rounded-pill pa-4">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="4" align="center" class="pa-2">
            <div
              class="text-h6 text-sm-h5 text-lg-h4 accent--text font-italic font-weight-light"
            >
              Before
            </div>
            <v-img
              eager
              max-width="50%"
              class="accent mt-6"
              style="border-radius: 20px; border: 1px solid; opacity: 0.9"
              src="inv-before.jpg"
            />
          </v-col>
          <v-col cols="10" sm="4">
            <v-img
              class="concave-circle"
              eager
              src="/invisalign-woman.png"
              alt="invisalign-woman"
            />
          </v-col>

          <v-col cols="12" sm="4" align="center" class="pa-2">
            <div
              class="text-h6 text-sm-h5 text-lg-h4 primary--text font-italic font-weight-light"
            >
              After
            </div>
            <v-img
              preload
              max-width="50%"
              class="primary mt-6"
              style="border-radius: 20px; border: 1px solid; opacity: 0.9"
              src="inv-after.jpg"
            />
          </v-col>
        </v-row>
      </v-sheet>

      <v-row justify="space-around" class="mt-4">
        <v-col cols="12" sm="4">
          <div class="text-subtitle-1 text-sm-h6 primary--text">
            What is it?
          </div>

          <div class="text-body-1 mb-4 secondary--text font-weight-light">
            Invisalign uses a series of clear, removable, aligners. You can
            smile more during treatment as well as after. Invisalign is made
            with 3-D computer imaging technology and has been proven effective.
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="text-subtitle-1 text-sm-h6 primary--text">
            Why would I want it?
          </div>

          <div class="text-body-1 mb-4 secondary--text font-weight-light">
            Not only are the aligners clear, they are removable, so you can eat
            and drink what you want while in treatment. Plus, brushing and
            flossing are no problem. They are also comfortable, with no metal to
            cause mouth abrasions during treatment. And no metal and wires
            usually means you spend less time in your doctor’s office getting
            adjustments. Invisalign also allows you to view your own virtual
            treatment plan when you start so you can see how your straight teeth
            will look when your treatment is complete.
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="text-subtitle-1 text-sm-h6 primary--text">
            How does it work?
          </div>

          <div class="text-body-1 mb-4secondary--text font-weight-light">
            You wear each set of aligners for a week, removing them only to eat,
            drink, brush, and floss. As you replace each aligner with the next
            in the series, your teeth will move — little by little, week by week
            — until they have straightened to the final position Dr. Tekin has
            prescribed. You’ll visit Dr. Tekin about once every 8 weeks to
            ensure that your treatment is progressing as planned. Total
            treatment time averages 9-15 months and the average number of
            aligners worn during treatment is between 18 and 30, but both will
            vary from case to case.
          </div>
        </v-col>
      </v-row>
    </v-tab-item>
    <v-tab> Implants </v-tab>
    <v-tab-item>
      <v-row justify="space-around" align="center">
        <v-col cols="12" sm="5">
          <div
            class="text-h6 text-sm-h5 text-lg-h5 primary--text font-weight-light"
          >
            After a dental implant is placed surgically, an implant crown is
            seated and, presto: new tooth!
          </div>
          <br />
          <div
            class="text-body-1 md-text-h6 text-lg-h6 secondary--text font-weight-light"
          >
            Dr. Tekin restores dental implants. He has great working
            relationships with Oral Surgeon’s and Periodontists to help in the
            process. Schedule a cosmetic dentistry consultation with Dr. Tekin
            to discuss your dental implant options.
          </div>
        </v-col>
        <div v-if="!$vuetify.breakpoint.xs" cols="1" class="line primary"></div>

        <v-col cols="12" sm="6" class="order-first order-sm-last">
          <v-sheet elevation="2" class="rounded-pill pa-4">
            <v-row justify="center">
              <v-col cols="5">
                <v-row
                  justify="center"
                  class="text-h6 text-sm-h5 text-lg-h4 accent--text font-italic font-weight-light"
                >
                  Before
                </v-row>
              </v-col>
              <v-col cols="5">
                <v-row
                  justify="center"
                  class="text-h6 text-sm-h5 text-lg-h4 4 primary--text font-italic font-weight-light"
                >
                  After
                </v-row>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="5">
                <v-img
                  eager
                  max-height="160"                  
                  style="border-radius: 20px; border: 1px solid; opacity: 0.9"
                  class="accent"
                  src="implants-before.jpg"
                />
              </v-col>
              <v-col cols="5">
                <v-img
                  eager
                  max-height="160"
                  style="border-radius: 20px; border: 1px solid; opacity: 0.9"
                  class="primary"
                  src="implants-after.jpg"
                />
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-tab-item>
    <v-tab> Cleanings </v-tab>
    <v-tab-item>
      <v-row justify="space-around" align="center" class="">
        <v-col cols="12" sm="3" align-self="stretch">
          <v-col
            class="mr-auto text-subtitle-1 text-sm-h6 text-lg-h5 primary--text font-weight-light"
          >
            We believe in helping patients build a healthy foundation for teeth
            and gums through a combination of great
          </v-col>
          <v-col class="ml-auto">
            <ul
              style="list-style: none"
              class="pa-0 accent--text text-subtitle-1 text-sm-h6 font-italic"
            >
              <li class="my-4">home-care</li>
              <li class="my-4">regular cleanings</li>
              <li class="my-4">check-ups</li>
            </ul>
          </v-col>
        </v-col>
        <div v-if="!$vuetify.breakpoint.xs" cols="1" class="line primary"></div>
        <v-col cols="12" sm="8">
          <div
            class="ma-2 text-subtitle-1 text-sm-h6 primary--text font-weight-light"
          >
            Homecare + checkups + treatment = a happy smile!
          </div>

          <div
            class="ma-2 text-body-1 md-text-h6 text-lg-h6 secondary--text font-weight-light"
          >
            Remember, you’ve got to invest in your smile if you want to keep it
            healthy. We accept a variety of insurance plans and also offer
            flexible financing to fit treatments into your budget comfortably.
          </div>

          <div
            class="ma-2 text-subtitle-1 text-sm-h6 primary--text font-weight-light"
          >
            Fluoride for Adults
          </div>

          <div
            class="ma-2 text-body-1 md-text-h6 text-lg-h6 secondary--text font-weight-light"
          >
            Consumption of fluoride-free bottled-water is just one reason
            cavities are on the rise for the first time since the 1970’s. Adult
            fluoride treatments at you cleaning appointments are a must to
            fortify your teeth.
          </div>

          <div
            class="ma-2 text-subtitle-1 text-sm-h6 primary--text font-weight-light"
          >
            How does it work?
          </div>

          <div
            class="ma-2 text-body-1 md-text-h6 text-lg-h6 secondary--text font-weight-light"
          >
            You wear each set of aligners for a week, removing them only to eat,
            drink, brush, and floss. As you replace each aligner with the next
            in the series, your teeth will move — little by little, week by week
            — until they have straightened to the final position Dr. Tekin has
            prescribed. You’ll visit Dr. Tekin about once every 8 weeks to
            ensure that your treatment is progressing as planned. Total
            treatment time averages 9-15 months and the average number of
            aligners worn during treatment is between 18 and 30, but both will
            vary from case to case.
          </div>
        </v-col>
      </v-row>
    </v-tab-item>
    <v-tab> Whitening </v-tab>
    <v-tab-item>
      <v-row justify="space-around" align="center" class="">
        <v-col cols="12" sm="5">
          <div class="text-h6 text-sm-h5 primary--text font-weight-light">
            If your pearly whites seem to be gradually becoming “pearly
            off-whites,” it may be time to take action.
          </div>
          <br />

          <div class="text-body-1 accent--text font-italic font-weight-light">
            Note from Dr. Tekin:
          </div>

          <div class="text-subtitle-1 secondary--text font-weight-light">
            Typically patients bleach upper and lower teeth at the same time –
            so “before/after” photos can be misleading (photos taken weeks apart
            with different lighting). I like these pictures because there is a
            direct comparison with a point of reference.The pictures above are
            our actual patients with no digital photo enhancements other than
            sizing.
          </div>

          <div
            class="text-subtitle-1 secondary--text font-weight-light mt-12 font-weight-bold"
          >
            Bottom line teeth whitening works. It’s a matter of concentration
            and duration. You will get results!!!
          </div>
        </v-col>
        <div v-if="!$vuetify.breakpoint.xs" cols="1" class="line primary"></div>

        <v-col cols="12" sm="6" class="order-first order-sm-last">
          <v-row justify="space-between">
            <v-col
              align="center"
              class="text-h6 text-sm-h5 text-lg-h4 accent--text font-italic font-weight-light"
            >
              Before
            </v-col>
            <v-col
              align="center"
              class="text-h6 text-sm-h5 text-lg-h4 primary--text font-italic font-weight-light"
            >
              After
            </v-col>
          </v-row>
          <v-row>
            <v-img
              eager
              style="border-radius: 20px; border: 1px solid; opacity: 0.9"
              class="secondary"
              src="teeth-whitening.jpeg"
            />
          </v-row>
        </v-col>
      </v-row>
    </v-tab-item>
    <v-tab> Veneers </v-tab>
    <v-tab-item>
      <v-row justify="center">
        <BeforeAndAfter
          :items="[
            { before: 'veneer-before.jpg', after: 'veneer-after.jpg' },
            { before: 'veneer-before-1.jpg', after: 'veneer-after-1.jpg' },
            { before: 'veneer-before-2.jpg', after: 'veneer-after-2.jpg' },
            { before: 'veneer-before-3.jpg', after: 'veneer-after-3.jpg' },
            { before: 'veneer-before-4.jpg', after: 'veneer-after-4.jpg' },
            { before: 'veneer-before-5.jpg', after: 'veneer-after-5.jpg' },
            { before: 'veneer-before-6.jpg', after: 'veneer-after-6.jpg' },
            { before: 'veneer-before-7.jpg', after: 'veneer-after-7.jpg' },
            { before: 'veneer-before-10.jpg', after: 'veneer-after-10.jpg' },
          ]"
        />
      </v-row>
      <v-row justify="space-around" align="center">
        <v-col cols="12" sm="10">
          <div
            class="text-subtitle-1 text-sm-h6 text-center secondary--text font-weight-light"
          >
            Porcelain Veneers offer an amazing solution for all kinds of smile
            imperfections. Veneers can repair chips, cracks, discoloration, and
            close gaps with one of the most natural looking dental procedures
            offered today. They offer a relatively noninvasive way to enhance
            your smile’s appearance tremendously. Completed in just 2 visits,
            cosmetic veneers are often referred to as “instant orthodontics”
            because they can provide the look of a perfectly straightened smile
            without the long wait of braces.
          </div>
        </v-col>
      </v-row>
    </v-tab-item>

    <v-tab> Contouring </v-tab>
    <v-tab-item>
      <v-row justify="space-around" align="center" class="">
        <v-col cols="12" sm="6">
          <v-row>
            <v-col cols="12" class="text-h6 primary--text font-weight-light">
              If your teeth are pretty healthy, but they could use a little
              reshaping, enamel contouring is a safe and gentle solution. Enamel
              contouring provides subtle refinements to your natural teeth for a
              more youthful look.
            </v-col>
            <v-col
              cols="12"
              class="text-subtitle-1 secondary--text font-weight-light"
            >
              Dr. Tekin can perform enamel contouring with very little
              preparation in a quick appointment. The tooth reshaping process is
              easy on teeth, and there’s no anesthesia or downtime. This instant
              treatment can fix a variety of problems, including cracks, chips,
              rough surfaces, overlapping, and uneven alignment. Tooth
              reshaping, or contouring, can even be used on multiple teeth to
              create a smile that looks like it has been straightened with
              braces!
            </v-col>
          </v-row>
        </v-col>
        <div v-if="!$vuetify.breakpoint.smAndDown" cols="1" class="line primary"></div>
        
        <v-col cols="12" sm="5" class="order-first order-sm-last">
          <v-row justify="center">
            <v-sheet elevation="2" class="pa-6 pa-sm-8 pa-md-12 mt-4 rounded-pill">
              <v-img
                contain
                :max-width="$vuetify.breakpoint.xs ? '15rem' : '20rem'"
                style="border-radius: 100px; border: 1px solid"
                class="secondary"
                eager
                src="bonding.png"
              />
            </v-sheet>
          </v-row>
        </v-col>
      </v-row>
    </v-tab-item>
    <v-tab> Crowns </v-tab>
    <v-tab-item>
      <v-row>
        <BeforeAndAfter
          :items="[
            { before: 'crown-before.jpg', after: 'crown-after.jpg' },
            { before: 'crown-before-1.jpg', after: 'crown-after-1.jpg' },
          ]"
        />
      </v-row>

      <v-row justify="space-around">
        <v-col cols="12" sm="6">
          <div class="text-h6 primary--text mb-4 font-weight-light">
            The most beautiful and realistic looking crown is an all-ceramic
            crown.
          </div>
          <div class="text-subtitle-1 secondary--text font-weight-light">
            Dr. Tekin and his staff at Art of the Smile are committed to
            providing state-of-the-art, 21st century dentistry, and in doing so,
            move towards practicing metal-less dentistry.
          </div>
        </v-col>

        <v-col cols="12" sm="6">
          <div class="text-h6 primary--text font-weight-light">
            Why we don’t use old-fashioned metal crowns
          </div>
          <ul style="list-style: none" class="ma-2 secondary--text">
            <li>- Some people have metal allergies.</li>
            <li>- Metals blacken with time, and are unattractive.</li>
            <li>
              - The black metal must be opaqued to hide it’s color Natural
              looking translucency is very difficult to achieve.
            </li>
            <li>
              - Black lines are often visible at the gum line at the crown’s
              edge
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-tab-item>
    <v-tab> Fillings </v-tab>
    <v-tab-item>
      <v-row justify="space-around" align="center" class="">
        <v-col cols="12" sm="5">
          <div
            class="text-h6 ma-4 primary--text text-sm-h5 text-lg-h5 font-weight-light"
          >
            At Art of the Smile, we believe in using white composite fillings to
            stop harmful bacteria from spreading and damaging precious enamel.
          </div>
          <div
            class="text-body-1 md-text-h6 text-lg-h6 secondary--text ma-4 font-weight-light"
          >
            Dr. Tekin only offers white composite fillings for the treatment of
            cavities or to replace some older, outdated metal fillings. Because
            white fillings are chemically bonded to a tooth, they are sometimes
            referred to as “bonding”.
          </div>
        </v-col>
        <div v-if="!$vuetify.breakpoint.xs" cols="1" class="line primary"></div>
        <v-col cols="12" sm="6" class="order-first order-sm-last">
          <v-sheet elevation="2" class="rounded-pill pa-4">
            <v-row justify="center">
              <v-col cols="5">
                <v-row
                  justify="center"
                  class="text-h6 text-sm-h5 text-lg-h4 accent--text font-italic font-weight-light"
                >
                  Before
                </v-row>
              </v-col>
              <v-col cols="5">
                <v-row
                  justify="center"
                  class="text-h6 text-sm-h5 text-lg-h4 4 primary--text font-italic font-weight-light"
                >
                  After
                </v-row>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="5">
                <v-img
                  eager
                  max-height="160"
                  style="border-radius: 20px; border: 1px solid; opacity: 0.9"
                  class="accent"
                  src="filling-before.png"
                />
              </v-col>
              <v-col cols="5">
                <v-img
                  eager
                  max-height="160"
                  style="border-radius: 20px; border: 1px solid; opacity: 0.9"
                  class="primary"
                  src="filling-after.png"
                />
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-tab-item>
  </v-tabs>
</template>

<script>
export default {
  name: 'ProcedureTabs',
}
</script>

<style>
.v-tabs-items .v-window-item {
  padding: 1rem;
  min-height: 70vh !important; /* Adjust 270px to suits your needs */
  overflow-y: hidden;
}
</style>

<style scoped>
.line {
  width: 0.25rem;
  margin: 1rem;
  height: 20rem !important;
}

.line-hor {
  width: 90%;
  margin: 1rem;
  height: 0.25rem;
}

.concave-circle {
  box-shadow: inset 100px 100px 100px #000000;
  border-radius: 80%;
}
</style>
