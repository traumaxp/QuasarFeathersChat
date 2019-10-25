<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    // The user is automatically set by the feathers-vuex auth module upon login.
    user () {
      return this.$store.state.auth.user
    }
  },
  watch: {
    // When the user is set, redirect to the Chat page.
    user (newVal) {
      if (newVal === undefined) {
        this.$router.replace({ name: 'login' })
      } else {
        this.$router.replace({ name: 'home' })
      }
    }
  },
  mounted () {
    this.$store.dispatch('auth/authenticate').then(response => {
      console.log(response)
      this.$store.dispatch('postLogin', response.body)
    }).catch(error => {
      if (error.message.includes('Could not find stored JWT')) {
        return console.log('app ready: no token found, please login')
      }
      console.error(error)
    })
  }
}
</script>
