import Mascota from '../schemas/mascotas.js';

class mascostasModel {
  
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

}

export default new mascostasModel();