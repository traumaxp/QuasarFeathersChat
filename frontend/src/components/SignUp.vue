<template>
<q-page class="flex flex-center">
  <div class="q-pa-md" style="max-width: 400px">
    <q-form
      v-model="valid"
      @submit.prevent="signUp"
      class="q-gutter-md"
    >
      <q-input
        v-model="user.firstName"
        label="firstName"
        :rules="[ val => val && val.length > 0 || 'Please type an firstName']"
        required
      />

      <q-input
        v-model="user.lastName"
        label="lastName"
        :rules="[ val => val && val.length > 0 || 'Please type a lastName']"
        required
      />

      <q-input
        v-model="user.email"
        label="email"
        type="email"
        :rules="[ val => val && val.length > 0 || 'Please type an email']"
        required
      />

      <q-input
        type="password"
        v-model="user.password"
        label="password"
        :rules="[ val => val && val.length > 0 || 'Please type a Password']"
        required
      />
      <div>
        <q-btn label="Submit" type="submit" :disabled="!valid" color="primary"/>
      </div>
    </q-form>
  </div>
</q-page>
</template>
<script>
export default {
  name: 'signUp',
  data: (vm) => ({
    valid: false,
    user: {
      firstName: '',
      lastName: '',
      email: '',
      password: '' // No confirmation
    }
  }),
  methods: {
    signUp () {
      if (this.valid) {
        const { User } = this.$FeathersVuex.api
        const user = new User(this.user)
        user.save()
          .then(user => {
            console.log(user)
            this.$router.push({ name: 'login' })
          })
      }
    }
  }
}
</script>
