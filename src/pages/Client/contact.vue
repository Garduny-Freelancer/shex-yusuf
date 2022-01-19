<template>
    <div>
        <navbar/>

        <v-app>

         
            
           <v-layout column class="my-16">
                <v-row class="d-flex justify-center">
                  <v-col cols="6" md="6">
    <form class="elevation-3 pt-10 pr-10 pl-10 radius-15">
        <h4>پەیوەندی</h4>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="ناو"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="ئیمەیڵ"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="هەڵبژێرە"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="ئایا تۆ ڕازیت ؟"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn
      class="ml-4 my-10 deep-purple text--white"
      @click="submit"
    >
      ناردن
    </v-btn>
    <v-btn @click="clear" class="warning">
      سڕینەوەی داتاکان
    </v-btn>
  </form>
                  </v-col>
                </v-row>
           </v-layout>
        </v-app>

    <clientFooter/>

    </div>
</template>

<script>
import navbar from '../../layouts/Client/nav.vue';
import clientFooter from '../../layouts/Client/footer.vue';

  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    components:{
        navbar,clientFooter
    },

    data: () => ({
      name: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>

<style  scoped>
@font-face {
  font-family: "rabar";
  src: local("rabar"),
   url(../../assets/fonts/Rabar_039.ttf) format("truetype");
}

.v-application{
  font-family: "rabar" !important;
}

.text--white{
    color:white !important;
}

</style>