import { useRoute, useContext } from '@nuxtjs/composition-api'


export function useData() {
  const route = useRoute()
  const context = useContext()

  console.log(route.value.fullPath)
  const fullPath = route.value.fullPath
  if (fullPath === '/error') {
    context.error({ statusCode: 404, message: 'Page not found' })
  }
  return { fullPath }
}
