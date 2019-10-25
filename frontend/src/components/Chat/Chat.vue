<template>
<q-page padding>
  <div class="row" v-if="user">
      <div class="col">
        <user-list :users="users"
        :logout="logout" />
      </div>
      <div class="col" style="margin-top:50px; height:120px">
        <message-list :messages="messages.data"
        :findMessages="findUsers"
        :createMessage="createMessage" />
    </div>
    </div>
</q-page>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import UserList from './Users'
import MessageList from './Messages'
export default {
  name: 'chat',
  computed: {
    ...mapState('auth', [
      'user'
    ]),
    ...mapGetters('messages', {
      findMessagesInStore: 'find'
    }),
    ...mapGetters('users', {
      users: 'list'
    }),
    messages () {
      return this.findMessagesInStore({ query: { $sort: { createdAt: 1 } } })
    }
  },
  methods: {
    ...mapActions('messages', {
      findMessages: 'find',
      createMessage: 'create'
    }),
    ...mapActions('users', {
      findUsers: 'find'
    }),
    ...mapActions('auth', [
      'logout'
    ])
  },
  created () {
    if (!this.user) {
      return this.$router.replace({ name: 'login' })
    }
    // Query users from Feathers
    this.findUsers({
      query: {
        $sort: { email: 1 },
        $limit: 5
      }
    })
    // Query messages from Feathers
    this.findMessages({
      query: {
        $sort: { createdAt: -1 },
        $limit: 5
      }
    })
  },
  components: {
    'user-list': UserList,
    'message-list': MessageList
  }
}
</script>
