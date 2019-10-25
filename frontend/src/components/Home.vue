<template>
<q-page class="flex flex-center">
 <div style="margin: 20%">
    <q-btn @click="$router.push({name: 'login'})">Login</q-btn>
  </div>
  <div style="margin: 20%">
    <q-btn @click="$router.push({name: 'signUp'})">SignUp</q-btn>
  </div>
</q-page>
</template>
<script>
export default {
  name: 'home'
}
</script>
