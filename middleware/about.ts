// middleware

// import { NuxtContext } from 'vue/types/options'
import { NuxtContext } from 'nuxt'
export default function(context: NuxtContext) {
  const { route, isServer, isClient } = context
  // console.log('about middleware called')
}
