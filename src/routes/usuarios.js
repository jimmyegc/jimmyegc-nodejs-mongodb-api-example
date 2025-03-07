import express from "express"
import usuariosController from '../controllers/usuarios.js'
const route = express.Router()

route.post("/register", usuariosController.register)
route.post("/login", usuariosController.login)

export default route