import mongoose from 'mongoose'

const mascotaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  description: { type: String },  
  tipo: { 
    type: String, 
    required: true,
    enum: ['Perro', 'Gato', 'Otro']
  },
  edad: { 
    type: Number, 
    required: true,
    min: [0, 'La edad mínima es 0'],
    max: [25, 'La edad máxima es 25']
  },
  raza: { type: String, required: true },
  sexo: { type: String, required: true },
  adoptado: { 
    type: Boolean,
    default: false
  },  
}, { timestamps: true });

export default mongoose.model('mascotas', mascotaSchema);