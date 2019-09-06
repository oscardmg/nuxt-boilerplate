import Service from './service'

class UsuarioService {
  constructor () {
    this.resource = '/usuario'
  }

  getList (desde = 0) {
    return Service.get(`${this.resource}?desde=${desde}`)
  }

  get (id) {
    return Service.get(`${this.resource}/${id}`)
  }

  save (usuario) {
    return Service.post(`${this.resource}`, usuario)
  }

  update (usuario) {
    return Service.post(`${this.resource}/${usuario._id}`, usuario)
  }

  delete (usuario) {
    return Service.delete(`${this.resource}/${usuario._id}`)
  }
}

export default new UsuarioService()
