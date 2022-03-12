<template>
  <v-container fluid>
    <v-tabs
      color="primary"
      center-active
      slider-color="primary"
      grow
      show-arrows
    >
      <v-tab> Implants </v-tab>
      <v-tab-item>
        <v-row justify="space-around" align="center" class="mt-12">
          <v-col cols="12" sm="6">
            <div class="text-h6 text-sm-h4 primary--text font-weight-light">
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
          <div
            v-if="!$vuetify.breakpoint.xs"
            cols="1"
            class="line primary"
          ></div>

          <v-col cols="12" sm="2" class="order-first order-sm-last">
            <v-img src="implants.png" />
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab> Invisalign </v-tab>
      <v-tab-item>
        <v-row justify="space-around" align="center" class="mt-12">
          <v-col cols="12" sm="8">
            <div
              class="text-subtitle-1 text-sm-h6 primary--text font-weight-light"
            >
              What is it?
            </div>

            <div
              class="text-body-1 md-text-h6 text-lg-h6 secondary--text font-weight-light"
            >
              Invisalign uses a series of clear, removable, aligners. You can
              smile more during treatment as well as after. Invisalign is made
              with 3-D computer imaging technology and has been proven
              effective. More than 70% of orthodontists in the US and Canada are
              certified to treat with Invisalign.
            </div>

            <div
              class="text-subtitle-1 text-sm-h6 primary--text font-weight-light"
            >
              Why would I want it?
            </div>

            <div
              class="text-body-1 md-text-h6 text-lg-h6 secondary--text font-weight-light"
            >
              Not only are the aligners clear, they are removable, so you can
              eat and drink what you want while in treatment. Plus, brushing and
              flossing are no problem. They are also comfortable, with no metal
              to cause mouth abrasions during treatment. And no metal and wires
              usually means you spend less time in your doctor’s office getting
              adjustments. Invisalign also allows you to view your own virtual
              treatment plan when you start so you can see how your straight
              teeth will look when your treatment is complete.
            </div>

            <div
              class="text-subtitle-1 text-sm-h6 primary--text font-weight-light"
            >
              How does it work?
            </div>

            <div
              class="text-body-1 md-text-h6 text-lg-h6 secondary--text font-weight-light"
            >
              You wear each set of aligners for a week, removing them only to
              eat, drink, brush, and floss. As you replace each aligner with the
              next in the series, your teeth will move — little by little, week
              by week — until they have straightened to the final position Dr.
              Tekin has prescribed. You’ll visit Dr. Tekin about once every 8
              weeks to ensure that your treatment is progressing as planned.
              Total treatment time averages 9-15 months and the average number
              of aligners worn during treatment is between 18 and 30, but both
              will vary from case to case.
            </div>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab> Cleanings </v-tab>
      <v-tab-item>
        <v-row justify="space-around" class="mt-12">
          <v-col cols="12" sm="3">
            <div
              class="text-subtitle-1 text-sm-h6 primary--text font-weight-light"
            >
              At Art of the Smile we believe in helping patients build a healthy
              foundation for teeth and gums through a combination of great
              home-care and regular cleanings and check-ups.
            </div>
          </v-col>
          <div
            v-if="!$vuetify.breakpoint.xs"
            cols="1"
            class="line primary"
          ></div>
          <v-col cols="12" sm="8">
            <div
              class="text-subtitle-1 text-sm-h6 primary--text font-weight-light"
            >
              HOME CARE + CHECK-UPS + DENTAL TREATMENT = A HAPPY SMILE!
            </div>

            <div
              class="text-body-1 md-text-h6 text-lg-h6 secondary--text font-weight-light"
            >
              Remember, you’ve got to invest in your smile if you want to keep
              it healthy. We accept a variety of insurance plans and also offer
              flexible financing to fit treatments into your budget comfortably.
            </div>

            <div
              class="text-subtitle-1 text-sm-h6 primary--text font-weight-light"
            >
              Fluoride for Adults
            </div>

            <div
              class="text-body-1 md-text-h6 text-lg-h6 secondary--text font-weight-light"
            >
              Consumption of fluoride-free bottled-water is just one reason
              cavities are on the rise for the first time since the 1970’s.
              Adult fluoride treatments at you cleaning appointments are a must
              to fortify your teeth.
            </div>

            <div
              class="text-subtitle-1 text-sm-h6 primary--text font-weight-light"
            >
              How does it work?
            </div>

            <div
              class="text-body-1 md-text-h6 text-lg-h6 secondary--text font-weight-light"
            >
              You wear each set of aligners for a week, removing them only to
              eat, drink, brush, and floss. As you replace each aligner with the
              next in the series, your teeth will move — little by little, week
              by week — until they have straightened to the final position Dr.
              Tekin has prescribed. You’ll visit Dr. Tekin about once every 8
              weeks to ensure that your treatment is progressing as planned.
              Total treatment time averages 9-15 months and the average number
              of aligners worn during treatment is between 18 and 30, but both
              will vary from case to case.
            </div>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab> Whitening </v-tab>
      <v-tab-item>
        <v-row justify="space-around" align="center" class="mt-12">
          <v-col cols="12" sm="6">
            <div class="text-h6 text-sm-h5 primary--text font-weight-light">
              If your pearly whites seem to be gradually becoming “pearly
              off-whites,” it may be time to take action.
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

            <div class="text-body-1 accent--text font-italic font-weight-light">
              Note from Dr. Tekin:
            </div>

            <div class="text-body-1 secondary--text font-weight-light">
              Typically patients bleach upper and lower teeth at the same time –
              so “before/after” photos can be misleading (photos taken weeks
              apart with different lighting). I like these pictures because
              there is a direct comparison with a point of reference.The
              pictures above are our actual patients with no digital photo
              enhancements other than sizing.
            </div>

            <div class="text-body-2 secondary--text font-weight-light">
              Bottom line teeth whitening works. It’s a matter of concentration
              and duration. You will get results!!!
            </div>
          </v-col>
          <div
            v-if="!$vuetify.breakpoint.xs"
            cols="1"
            class="line primary"
          ></div>

          <v-col cols="12" sm="2" class="order-first order-sm-last">
            <v-img src="implants.png" />
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab> Veneers </v-tab>
      <v-tab-item>
        <v-row justify="space-around" align="center" class="mt-12">
          <v-col cols="12" sm="6">
            <div class="text-subtitle-1 secondary--text font-weight-light">
              Porcelain Veneers offer an amazing solution for all kinds of smile
              imperfections. Veneers can repair chips, cracks, discoloration,
              and close gaps with one of the most natural looking dental
              procedures offered today. They offer a relatively noninvasive way
              to enhance your smile’s appearance tremendously. Completed in just
              2 visits, cosmetic veneers are often referred to as “instant
              orthodontics” because they can provide the look of a perfectly
              straightened smile without the long wait of braces.
            </div>
          </v-col>
          <v-col cols="12" sm="3">
            <v-row justify="center">
              <div>
                <span
                  class="text-h4 accent--text font-italic font-weight-light mx-2"
                >
                  Before
                </span>
                <span
                  class="text-h4 primary--text font-italic font-weight-light mx-2"
                >
                  After
                </span>
              </div>
            </v-row>
            <v-img class="mt-8" src="veneers.png" />
          </v-col>
        </v-row>
      </v-tab-item>

      <v-tab> Contouring </v-tab>
      <v-tab-item>
        <v-row justify="space-around" align="center" class="mt-12">
          <v-col cols="12" sm="6">
            <div class="text-h6 secondary--text accent--text font-weight-light">
              If your teeth are pretty healthy, but they could use a little
              reshaping, enamel contouring is a safe and gentle solution. Enamel
              contouring provides subtle refinements to your natural teeth for a
              more youthful look.
            </div>
            <div class="text-subtitle-1 secondary--text font-weight-light">
              Porcelain Veneers offer an amazing solution for all kinds of smile
              imperfections. Veneers can repair chips, cracks, discoloration,
              and close gaps with one of the most natural looking dental
              procedures offered today. They offer a relatively noninvasive way
              to enhance your smile’s appearance tremendously. Completed in just
              2 visits, cosmetic veneers are often referred to as “instant
              orthodontics” because they can provide the look of a perfectly
              straightened smile without the long wait of braces.
            </div>
          </v-col>
          <v-col cols="12" sm="4">
            <v-row>
              <v-col cols="6">
                <span
                  class="text-h3 accent--text font-italic font-weight-light mx-2"
                >
                  Before
                </span>
              </v-col>
              <v-col cols="6">
                <span
                  class="text-h3 primary--text font-italic font-weight-light mx-2"
                >
                  After
                </span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-img class="mt-8" src="before-1.png" />
                <v-img class="mt-8" src="before-2.png" />
              </v-col>
              <v-col cols="6">
                <v-img class="mt-8" src="after-1.png" />
                <v-img class="mt-8" src="after-2.png" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab> Crowns </v-tab>
      <v-tab-item>
        <v-row justify="space-around" class="mt-12">
          <v-col cols="12" sm="6">
            <div class="text-h6 primary--text font-weight-light">
              The most beautiful and realistic looking crown is an all-ceramic
              crown. Dr. Tekin and his staff at Art of the Smile are committed
              to providing state-of-the-art, 21st century dentistry, and in
              doing so, move towards practicing metal-less dentistry.
            </div>
            <div class="text-subtitle-1 secondary--text font-weight-light">
              Porcelain Veneers offer an amazing solution for all kinds of smile
              imperfections. Veneers can repair chips, cracks, discoloration,
              and close gaps with one of the most natural looking dental
              procedures offered today. They offer a relatively noninvasive way
              to enhance your smile’s appearance tremendously. Completed in just
              2 visits, cosmetic veneers are often referred to as “instant
              orthodontics” because they can provide the look of a perfectly
              straightened smile without the long wait of braces.
            </div>
          </v-col>
          <v-col cols="12" sm="3">
            <v-row>
              <v-col cols="6">
                <span
                  class="text-h4 accent--text font-italic font-weight-light mx-2"
                >
                  Before
                </span>
              </v-col>
              <v-col cols="6">
                <span
                  class="text-h4 primary--text font-italic font-weight-light mx-2"
                >
                  After
                </span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-img class="mt-8" src="crowns-before-1.png" />
                <v-img class="mt-8" src="crowns-before-2.png" />
              </v-col>
              <v-col cols="6">
                <v-img class="mt-8" src="crowns-after-1.png" />
                <v-img class="mt-8" src="crowns-after-2.png" />
              </v-col>
            </v-row>
          </v-col>
          <v-col>
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
        <v-row justify="space-around" align="center" class="mt-12">
          <v-col cols="12" sm="6">
            <div class="text-subtitle-1 secondary--text font-weight-light">
              At Art of the Smile, we believe in using white composite fillings
              to stop harmful bacteria from spreading and damaging precious
              enamel.
            </div>
            <div class="text-subtitle-1 secondary--text font-weight-light">
              Dr. Tekin only offers white composite fillings for the treatment
              of cavities or to replace some older, outdated metal fillings.
              Because white fillings are chemically bonded to a tooth, they are
              sometimes referred to as “bonding”.
            </div>
          </v-col>
          <v-col cols="12" sm="5">
            <v-row>
              <v-col cols="6">
                <v-row justify="center"
                  class="text-h4 accent--text font-italic font-weight-light"
                >
                  Before
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-row justify="center"
                  class="text-h4 primary--text font-italic font-weight-light"
                >
                  After
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-img class="mt-8" src="filling-before.png" />
                <v-img class="mt-8" src="filling-before-2.png" />
              </v-col>
              <v-col cols="6">
                <v-img class="mt-8" src="filling-after.png" />
                <v-img class="mt-8" src="filling-after-2.png" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
export default {
  name: 'ProcedureTabs',
}
</script>

<style>
.line {
  width: 0.25rem;
  margin: 1rem;
  height: 15rem;
}
</style>