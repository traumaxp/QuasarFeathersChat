<template>
  <div class="flex flex-column col col-9">
    <main class="chat flex flex-column flex-1 clear" style="max-width:300px">
      <single-message v-for="message in messages" v-bind:key="message._id" :message="message" v-cloak />
    <ComposeMessage :createMessage="createMessage" />
        </main>
  </div>
</template>

<script>
import ComposeMessage from './Composer.vue'
import SingleMessage from './Message.vue'
export default {
  name: 'message-list',
  data () {
    return {
    }
  },
  props: {
    messages: Array,
    findMessages: Function,
    createMessage: Function
  },
  methods: {
    scrollToBottom () {
      this.$nextTick(() => {
        const node = this.$el.getElementsByClassName('chat')[0]
        node.scrollTop = node.scrollHeight
      })
    }
  },
  watch: {
    messages () {
      this.messages.length && this.scrollToBottom()
    }
  },
  components: {
    ComposeMessage,
    SingleMessage
  }
}
</script>
