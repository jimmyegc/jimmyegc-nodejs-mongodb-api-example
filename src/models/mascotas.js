import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";
export class mascostasModel {
  constructor() {
    this.mascotas = [];
  }

  async getAll() {
    const colMascotas = dbClient.db.collection("mascotas");
    return await colMascotas.find({}).toArray();  
  }

  async getOne(id) {
    const colMascotas = dbClient.db.collection("mascotas")
    return await colMascotas.findOne({ _id: new ObjectId(id) });
  }

  async create(mascota) {
    const colMascotas = dbClient.db.collection("mascotas")
    return await colMascotas.insertOne(mascota);
  }

  async updateById(id, mascota) {
    const colMascotas = dbClient.db.collection("mascotas")
    return await colMascotas.updateOne({ _id: new ObjectId(id) }, { $set: mascota });
  }

  async deleteById(id) {
    const colMascotas = dbClient.db.collection("mascotas")
    return await colMascotas.deleteOne({ _id: new ObjectId(id) });
  }
}

export default new mascostasModel();