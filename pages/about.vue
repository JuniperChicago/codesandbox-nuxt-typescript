<template>
  <div class="container">
    <div>
      <h1>Hello from <span class="name">{{ name }}</span>.</h1>
      <p><nuxt-link to="/" class="button--grey">Back home</nuxt-link></p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  asyncData(context) {
    if (process['server']) {
      // console.log('rendered on server')
    }
    return {
      name: process['server'] ? 'server' : 'client'
    }
  },
  middleware: 'about'
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h1 {
  font-weight: 400;
}
.name {
  color: #3b8070;
}
p {
  margin-top: 20px;
}
</style>