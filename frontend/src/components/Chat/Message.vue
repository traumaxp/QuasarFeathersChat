<template>
<div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        sent
      ><span>{{ message.user }}</span>
      <p>{{ DateMessage }}</p>
      <p>{{ message.text }}</p></q-chat-message>
      <q-chat-message
      :text="['Received message']"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['message', 'index'],
  computed: {
    DateMessage () {
      return this.message.createdAt
    }
  }
}
</script>
