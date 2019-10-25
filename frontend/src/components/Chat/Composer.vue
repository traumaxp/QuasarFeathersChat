<template>
  <form class="flex flex-row flex-space-between" id="send-message" v-on:submit.prevent>
    <q-input square standout v-model="newMessage" label="Your message" name="text" />
    <button class="button-primary" type="submit" @click="addMessage">Send</button>
  </form>
</template>

<script>
export default {
  name: 'CreateMessage',
  data () {
    return {
      newMessage: ''
    }
  },
  props: {
    createMessage: Function
  },
  methods: {
    addMessage () {
      // Create a new message and then clear the input field
      this.createMessage({ text: this.newMessage }).then(this.clearMessage)
    },
    clearMessage () {
      this.newMessage = ''
    }
  }
}
</script>
