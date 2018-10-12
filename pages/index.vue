<template>
  <section>
    <div>
      <logo/>
      <h1 class="title">NUXT</h1>
      <h2 class="subtitle">Starter for CodeSandBox</h2>
      <h3>with Typescript</h3>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation <icon-link/></a>
        <nuxt-link
          to="/about"
          class="button--grey">About</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
import IconLink from '~/components/IconLink.vue'

@Component({
  components: {
    Logo,
    IconLink
  }
})
export default class extends Vue {}
</script>



<style scoped>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #526488;
  letter-spacing: 1px;
  font-size: 6em;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
