import mascotasModel from "../models/mascotas.js";

class MascotasController  {
  
  async create(req, res) {
    try {
      const data = await mascotasModel.create(req.body)
      res.status(201).json({ status: "ok", message: 'Mascota creada', data });
    } catch (error) {
      res.status(500).json({ status: "error", message: 'Error al crear mascota ' + error });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params      
      const data = await mascotasModel.updateById(id, req.body)
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params
      const data = await mascotasModel.deleteById(id)
      res.status(206).json(data);
    } catch (error) {
      res.status(500).json({ status: "error", message: 'Error al eliminar mascota', error });
    }
  }

  async getAll(req, res) {
    try {
      const data = await mascotasModel.getAll();
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }

  async getOne(req, res) {
    try {      
      const { id } = req.params
      const data = await mascotasModel.getOne(id)
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ status: "error", message: 'Error al crear mascota' });
    }    
  }

  async adoptar(req, res) {
    try {
      const { mascotaId } = req.params      
      const { usuarioId } = req.body      
      if(!usuarioId) {
        return res.status(400).json({ status: "error", message: 'Se require el Id del usuario adoptante' });
      }
      const data = await mascotasModel.adoptar(mascotaId, usuarioId)
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message })};
  }

}

export default new MascotasController();