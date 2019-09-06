import Service from '@/services/service'

/**
 * configurar axios module en un helper o util
 */
export default ({ $axios }) => {
  Service.set($axios)
}
