export function useData() {
  const route = useRoute()

  const fullPath = route.fullPath
  if (fullPath === '/error') {
    throw Error ('Page not found')
  }
  return { fullPath }
}
