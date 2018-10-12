// import Vue from 'vue'
// import VueRouter, { Route } from 'vue-router'
// import { Store } from 'vuex'

import { Vue, Store, Route } from 'nuxt'

// declare module '*.vue' {
//   const _default: Vue
//   export default _default
// }

declare module '*.vue' {
  const _default: Vue
  export default _default
}

import { AxiosStatic } from 'axios'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic
  }
}

declare module 'vue/types/options' {
  interface ExtendedVue extends Vue {
    // Some other code
  }

  interface NuxtContext {
    app: ExtendedVue
    isStatic: boolean
    isDev: boolean
    isHMR: boolean
    route: Route
    store: Store<any>
    env: any
    params: any
    query: any
    req: any
    res: any
    redirect: (to: string) => void
    error: (err: Error) => void
    nuxtState: any
    beforeNuxtRender: any
  }
  interface ComponentOptions<V extends Vue> {
    head?: any
    layout?: string
    middleware?: string
    asyncData?: (context: NuxtContext) => any
  }
}
