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

    <form @submit.prevent="sendEmail" class="pa-12">
      <v-row
        ><p class="secondary--text">We don't share your information</p></v-row
      >
      <v-row>
        <v-col>
          <v-row>
            <v-icon class="mx-2">mdi-account</v-icon>
            <v-text-field
              required
              type="text"
              v-model="name"
              name="name"
              placeholder="Your Name"
            ></v-text-field>
          </v-row>

          <v-row>
            <v-icon class="mx-2">mdi-email</v-icon>
            <v-text-field
              required
              type="email"
              v-model="email"
              name="email"
              placeholder="Your Email"
            ></v-text-field>
          </v-row>

          <v-row>
            <v-icon class="mx-2">mdi-phone</v-icon>
            <v-text-field
              type="text"
              required
              v-model="phone"
              name="phone"
              v-mask="['(###) ###-####']"
              placeholder="Your Phone Number"
            ></v-text-field>
          </v-row>

          <v-row>
            <v-icon class="mx-2">mdi-badge-account-outline</v-icon>
            <v-text-field
              required
              type="text"
              v-model="patientName"
              name="patientName"
              placeholder="Patient Name"
            ></v-text-field>
          </v-row>

          <v-row>
            <v-icon class="mx-2">mdi-account-supervisor-circle</v-icon>
            <v-text-field
              required
              type="text"
              v-model="relationship"
              name="relationship"
              placeholder="Relationship to patient"
            ></v-text-field>
          </v-row>
        </v-col>

        <v-col>
          <v-menu
            ref="dateMenu"
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
                label="Appointment Date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
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
          <v-menu
            ref="timeMenu"
            v-model="timeMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="time"
                label="Time"
                prepend-icon="mdi-clock-time-four-outline"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="timeMenu"
              v-model="time"
              ampm-in-title
              full-width
              @click:minute="$refs.timeMenu.save(time)"
            ></v-time-picker>
          </v-menu>

          <v-row>
            <v-icon class="mx-2">mdi-reproduction</v-icon>
            <v-select
              v-model="procedureSelected"
              :items="procedures"
              label="procedure"
              required
            ></v-select>
          </v-row>

            <v-col>
              <p class="secondary--text mx-2">New Patient?</p>
              <v-radio-group row v-model="newPatient" class="ml-4">
                <v-radio label="No" name="no" value="no"></v-radio>
                <v-radio label="Yes" name="yes" value="yes"></v-radio>
              </v-radio-group>

              <p
                :style="{visibility: newPatient == 'yes' ? 'visible' : 'hidden'}"                
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
        </v-col>
      </v-row>
      <v-row class="pt-4">
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
// import moment from 'moment'

export default {
  directives: { mask },
  name: 'BookForm',

  data() {
    return {
      procedureSelected: null,
      procedures: ['Invisalign', 'Cosmetic', 'Cleaning', 'Other'],
      dateMenu: false,
      time: null,
      timeMenu: false,
      name: '',
      email: '',
      phone: '',
      message: '',
      patientName: '',
      relationship: '',
      newPatient: 'no',
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
    }
  },

  methods: {
    sendEmail(e) {
      emailjs.sendForm(
        'service_2k51y6n',
        'template_tihwmkp',
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
      this.name = ''
      this.email = ''
      this.phone = ''
      this.message = ''
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