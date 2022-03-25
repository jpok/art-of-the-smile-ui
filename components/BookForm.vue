<template>
  <v-card>
    <v-toolbar class="text-h5 white--text" color="primary">
      Fill in your information
    </v-toolbar>
    <v-row>
      <v-spacer></v-spacer>
      <v-btn
        v-if="$vuetify.breakpoint.xs"
        icon
        class="ma-4 dark-gray"
        @click="close"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-row>

    <form @submit.prevent="sendEmail" class="pa-10" ref="BookForm">
      <v-row
        ><p class="secondary--text">We don't share your information</p></v-row
      >
      <v-row>
        <v-col cols="6">
          <v-row>
            <v-text-field
              prepend-icon="mdi-account"
              required
              type="text"
              v-model="name"
              name="name"
              placeholder="Name"
            ></v-text-field>
          </v-row>

          <v-row>
            <v-text-field
              prepend-icon="mdi-email"
              required
              type="email"
              v-model="email"
              name="email"
              placeholder="Email"
            ></v-text-field>
          </v-row>

          <v-row>
            <v-text-field
              type="text"
              required
              prepend-icon="mdi-phone"
              v-model="phone"
              name="phone"
              v-mask="['(###) ###-####']"
              placeholder="Phone"
            ></v-text-field>
          </v-row>

          <v-row>
            <v-text-field
              prepend-icon="mdi-badge-account-outline"
              required
              type="text"
              v-model="patientName"
              name="patientName"
              placeholder="Patient Name"
            ></v-text-field>
          </v-row>

          <v-row>
            <v-text-field
              required
              type="text"
              prepend-icon="mdi-account-supervisor-circle"
              v-model="relationship"
              name="relationship"
              placeholder="Relation to patient"
            ></v-text-field>
          </v-row>
        </v-col>

        <v-col cols="6" class="pl-2">
          <v-menu
            ref="dateMenu"
            nudge-left="120px"
            v-model="dateMenu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                class="primary--text"
                v-model="date"
                name="date"
                label="Date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                :value="computedDateFormattedMomentjs"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.dateMenu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
          <v-text-field
            prepend-icon="mdi-clock"
            type="time"
            name="apptTime"
            v-model="apptTime"
            min="09:00"
            max="18:00"
            required
          >
          </v-text-field>

          <v-row>
            <v-select
              class="px-2 pr-3"
              v-model="procedureSelected"
              :items="procedures"
              label="procedure"
              prepend-icon="mdi-reproduction"
              name="procedure selected"
              required
            ></v-select>
          </v-row>
          <v-row class="pl-10 pr-3">
            <v-textarea
              v-if="procedureSelected === 'Other'"
              name="other"
              label="Other Procedure Needed"
              v-model="other"
              rows="2"
            >
            </v-textarea>
          </v-row>
          <v-row>
            <v-col>
              <p class="secondary--text mx-2">New Patient?</p>
              <v-radio-group
                row
                v-model="newPatient"
                name="newPatient"
                class="ml-4"
              >
                <v-radio label="No" name="new patient" value="no"></v-radio>
                <v-radio label="Yes" name="new patient" value="yes"></v-radio>
              </v-radio-group>

              <p
                v-if="!$vuetify.breakpoint.xs"
                :style="{
                  visibility: newPatient == 'yes' ? 'visible' : 'hidden',
                }"
                class="accent--text pa-2 text-body-2 font-weight-light"
              >
                As a first time patient, please print and fill out our “New
                Patient” forms and bring them to your appointment. If you can't,
                no worries, you can fill them in when you come in.
                <br />
                <br />
                <a class="pdf-link" href="new-patient-form.pdf" target="_blank"
                  >New Patient Form</a
                >
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <p
          v-if="$vuetify.breakpoint.xs"
          :style="{
            visibility: newPatient == 'yes' ? 'visible' : 'hidden',
          }"
          class="accent--text text-body-2 font-weight-light"
        >
          <span class="accent--text text-body-2 font-weight-light">Please fill out</span>
          <a class="pdf-link" href="new-patient-form.pdf" target="_blank"
            >New Patient Form</a
          >
        </p>
      </v-row>
      <v-row>
        <p v-if="$vuetify.breakpoint.xs"><span class="secondary--text text-body-2 text-sm-h6 mb-2 mr-1 font-weight-light">Now offering</span><a style="text-decoration: underline" class="font-weight-light primary--text mb-2 text-body-2 text-sm-h6" href="https://pay.balancecollect.com/m/artofsmile">online payment</a></p>
      </v-row>
      <v-row class="">        

        <p v-if="!$vuetify.breakpoint.xs"><span class="secondary--text text-body-2 text-sm-h6 mb-2 mr-1 font-weight-light">Now offering</span><a style="text-decoration: underline" class="font-weight-light primary--text mb-2 text-body-2 text-sm-h6" href="https://pay.balancecollect.com/m/artofsmile">online payment</a></p>
        <v-spacer></v-spacer>
        <v-btn color="primary" class="mr-4" type="submit" value="Send">
          submit
        </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </v-row>
    </form>
  </v-card>
</template>


<script>
import { mask } from 'vue-the-mask'
import emailjs from '@emailjs/browser'
import moment from 'moment'

export default {
  directives: { mask },
  name: 'BookForm',

  data() {
    return {
      procedureSelected: null,
      procedures: ['Invisalign', 'Cosmetic', 'Cleaning', 'Other'],
      dateMenu: false,
      time: null,
      apptTime: null,
      timeMenu: false,
      name: '',
      email: '',
      phone: '',
      patientName: '',
      relationship: '',
      newPatient: 'no',
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      other: '',
    }
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
    },
  },
  methods: {
    sendEmail(e) {
      emailjs.sendForm(
        'service_m706kjo',
        'template_14m64ey',
        e.target,
        'user_2BbvsyWgj5hfnIXahvEpw'
      )
      this.clear()
      this.$emit('close-dialog')
    },

    close() {
      this.$emit('close-dialog')
    },

    clear() {
      this.procedureSelected = null
      this.$refs['BookForm'].reset()
    },
  },
}
</script>

<style scoped>
.pdf-link {
  color: var(--v-primary-base) !important;
  text-decoration: underline !important;
}
</style>