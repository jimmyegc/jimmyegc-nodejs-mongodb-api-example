import Mascota from '../schemas/mascotas.js';
import Usuario from '../schemas/usuarios.js';

class MascostasModel {
  
  async getAll() {
    return await Mascota.find();
  }

  async getOne(id) {
    return await Mascota.findById(id);    
  }

  async create(mascota) {
    return await Mascota.create(mascota);
  }

  async updateById(id, mascota) {
    return await Mascota.findOneAndUpdate({ _id: id }, mascota, { new: true });
  }

  async deleteById(id) {    
    return await Mascota.findOneAndDelete({ _id: id });
  }

  async adoptar(mascotaId, usuarioId) {
    const mascota = await Mascota.findById(mascotaId);  
    if (!mascota) throw new Error('Mascota a adoptar no encontrada');
    if (mascota.adoptado) throw new Error('Mascota adoptada anteriormente');

    const usuario = await Usuario.findById(usuarioId);    
    if (!usuario) throw new Error('Usuario adoptante no encontrado');        

    const mascotaAdoptada = await Mascota.findOneAndUpdate(
      { _id: mascotaId }, 
      { adoptado: true, adoptadoPor: usuarioId }      
    )        
    return mascotaAdoptada;
  }

}

export default new MascostasModel()