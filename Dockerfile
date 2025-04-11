# Imagen base
FROM node:20-alpine

# Working directory
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["npm", "start"]