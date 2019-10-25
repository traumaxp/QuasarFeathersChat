<template>
<q-page class="flex flex-center">
  <div class="q-pa-md" style="max-width: 400px">
    <q-form
      v-model="valid"
      @submit.prevent="login"
      class="q-gutter-md"
    >
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
import { mapState, mapActions } from 'vuex'
export default {
  name: 'login',
  data: (vm) => ({
    valid: false,
    user: {
      email: '',
      password: '' // No confirmation
    }
  }),
  computed: {
    ...mapState('users', { loading: 'isAuthenticatePending' })
  },
  methods: {
    ...mapActions('auth', ['authenticate']),
    login () {
      if (this.valid) {
        this.authenticate({
          strategy: 'local',
          email: this.user.email,
          password: this.user.password
        }).catch(e => {
          console.log('auth error: ', e)
          this.$router.push('/signUp')
        }).then(response => {
          console.log(response)
          console.log(response.body)
          this.$store.dispatch('postLogin', response.body)
        })
      }
    }
  }
}
</script>
