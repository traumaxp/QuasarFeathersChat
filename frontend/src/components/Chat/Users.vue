<template>
<div>
      <h6>
        <span v-cloak>{{ users.length }}</span> {{plural}}
      </h6>
      <div v-for="user in users" v-bind:key="user.users" track-by="index">
          <h6>{{ user.email }}</h6>
      </div>
      <q-btn color="purple" label="Logout" @click="logout"/>
</div>
</template>

<script>
export default {
  name: 'user-list',
  data () {
    return {
    }
  },
  computed: {
    plural () {
      return this.users.length === 1 ? 'user' : 'users'
    }
  },
  props: {
    users: Array,
    logout: Function
  }
}
</script>
