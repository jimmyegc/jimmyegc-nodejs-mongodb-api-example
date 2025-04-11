import Usuario from '../schemas/usuarios.js';
import Mascota from '../schemas/mascotas.js';

class UsuariosModel {
  
  async getAll() {
    return await Usuario.find();
  }

  async getOneById(id) {
    return await Usuario.findById(id);    
  }

  async getOne(filter) {
    return await Usuario.findOne(filter);    
  }

  async create(usuario) {
    return await Usuario.create(usuario);
  }

  async updateById(id, Usuario) {
    return await Usuario.findOneAndUpdate({ _id: id }, Usuario, { new: true });
  }

  async deleteById(id) {    
    return await Usuario.findOneAndDelete({ _id: id });
  }

  async getMisMascotas(id) {
    const filter = { adoptadoPor: id };
    const mascotas = await Mascota.find(filter);
    return mascotas;
  }

}

export default new UsuariosModel()