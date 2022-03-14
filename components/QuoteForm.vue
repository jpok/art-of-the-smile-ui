<template>
<v-card>     
      <v-toolbar
      class="text-h5 white--text"
        color="primary"      
      >
      Request a quote
    </v-toolbar>
    <v-row>
    <v-spacer></v-spacer>
      <v-btn v-if="$vuetify.breakpoint.mobile"        
        icon
        class="ma-4 dark-gray"        
        @click="close"               
      >
        <v-icon>mdi-close</v-icon>
      
      </v-btn>
      </v-row>
  <form @submit.prevent="sendEmail" class="pa-12">              
    <label>Name</label>
    <v-text-field 
      required      
      type="text" 
      v-model="name"
      name="name"
      placeholder="Your Name"
    ></v-text-field>

    <label>Email</label>
    <v-text-field 
      required            
      type="email" 
      v-model="email"
      name="email"
      placeholder="Your Email"
    ></v-text-field>

    <label>Phone Number</label>
    <v-text-field 
      type="text" 
      required      
      v-model="phone"
      name="phone"
      v-mask="['(###) ###-####']"                    
      placeholder="Your Phone Number"
    ></v-text-field>          
    
    <v-radio-group row v-model="contactMethod">
      <v-radio               
        label="Phone"
        name="contact method"
        value="phone"
      ></v-radio>

      <v-radio               
        label="Email"
        name="contact method"
        value="email"
      ></v-radio>

    </v-radio-group>

    <label>Message</label>
    <v-textarea
      name="message"
      v-model="message"
      cols="30" rows="5"
      >
    </v-textarea>

    <v-row class="pt-4">
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        class="mr-4"        
        type="submit" value="Send"        
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
      
      </v-row>
  </form>
</v-card>
</template>

<script>  
  import {mask} from 'vue-the-mask'
  import emailjs from '@emailjs/browser';

  export default {
    directives:{mask},    
    name: 'QuoteForm',

    data() {
      return {
        name: '',
        email: '',      
        phone: '',
        message: '',    
        contactMethod: 'phone'
      }
    },

methods: {
      sendEmail(e) {              
        emailjs.sendForm('service_2k51y6n', 'template_tihwmkp', e.target,
        'user_2BbvsyWgj5hfnIXahvEpw');        
        this.clear()
        this.$emit('close-dialog')        
      },    
      
      close() {
        this.$emit('close-dialog')        
      },
      
      clear () {        
        this.name = ''
        this.email = ''
        this.phone = ''
        this.message = ''
      },
    },
  }
</script>
