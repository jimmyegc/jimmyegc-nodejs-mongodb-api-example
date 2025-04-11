import usuariosModel from "../models/usuarios.js";
import bcrypt from 'bcryptjs';
import { generarToken } from '../helpers/autenticacion.js';

class UsuariosController {
  
  async register(req, res) {
    try {
      const { email, nombre, telefono, clave } = req.body;
      const usuarioExiste = await usuariosModel.getOne({ email })
      if(usuarioExiste) {
        return res.status(400).json({ status: "error", message: 'Usuario ya existe' });
      }
      const claveEncriptada = await bcrypt.hash(clave, 10);
      const data = await usuariosModel.create({ email, nombre, telefono, clave: claveEncriptada })
      res.status(201).json({ status: "ok", message: 'Usuario creado', data });
    } catch (e) {      
      res.status(500).send(e);
    }

  }


  async login(req, res) {
    try {
      const { email, password } = req.body; 
      const usuarioExiste = await usuariosModel.getOne({ email });
      if(!usuarioExiste) {
        return res.status(400).json({ status: "error", message: 'Usuario no existe' });
      }
      const claveValida = await bcrypt.compare(password, usuarioExiste.clave);
      if(!claveValida) {
        return res.status(400).json({ status: "error", message: 'Clave incorrecta' });
      }
      const token = generarToken(email);
      res.status(200).json({ status: "ok", message: 'Usuario logueado', token });
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async profile(req, res) {
    try {            
      const usuario = await usuariosModel.getOne({ email: req.emailConectado })
      res.status(200).json({ status: "ok", message: 'Usuario logueado', usuario });
    } catch (e) {
      res.status(500).send (e);
    }
  }

  async misMascotas(req, res) {
    try {
      const { id } = req.params
      const usuarioExiste = await usuariosModel.getOneById(id); 
      if(!usuarioExiste) {
        return res.status(400).json({ status: "error", message: 'Usuario no existe' }); 
      }
      const data = await usuariosModel.getMisMascotas(id);
      res.status(200).json({ status: "ok", message: 'Mascotas adoptadas por el usuario', data });
    } catch (e) {
      res.status(500).send(e);
    }
  }

}


export default new UsuariosController();