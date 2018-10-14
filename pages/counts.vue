<template>
  <div class="container">
    <div>

      <h1 class="title">Store Test</h1>
      <p></p>
      <h2>Clicked: {{ $store.state.count }}</h2>
      <p></p>
      <button class="button--grey" @click="$store.commit('increment')">increment</button>
      <button class="button--grey"  @click="$store.commit('decrement')">decrement</button>
      <button class="button--grey"  @click="$store.commit('reset')">reset</button>
      <p><nuxt-link to="/" class="button--grey">Back home</nuxt-link></p>
    </div>
    <div>

    </div>
  </div>
</template>

<script lang="ts">
export default {}
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

p {
  margin-top: 20px;
}
</style>