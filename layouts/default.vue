<template>
  <div>
    <div class="flex min-h-screen flex-col">
      <SiteHeader class="py-6" />
      <Nuxt class="text-brand pb-6 flex-grow" />
      <SiteFooter />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import SiteFooter from '~/components/SiteFooter'
import SiteHeader from '~/components/SiteHeader'


export default defineComponent({
  components: { SiteFooter, SiteHeader },
  setup() {
    
  },
})
</script>
