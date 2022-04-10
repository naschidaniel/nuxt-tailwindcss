<template>
  <div>
    <h1 class="text-3xl text-bold text-bold font-bold underline">
      Hello world!
    </h1>
    <nuxt-link to="/error">error</nuxt-link>
    <nuxt-link to="/123">123</nuxt-link>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    console.log('123')
  },
})
</script>

