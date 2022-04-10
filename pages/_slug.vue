<template>
  <div>{{ fullPath }}</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useData } from '~/composable/useData'

export default defineComponent({
  setup() {
    const { fullPath } = useData()
    return { fullPath }
  },
})
</script>
