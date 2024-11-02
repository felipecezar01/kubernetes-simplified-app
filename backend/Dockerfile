# Dockerfile para o backend com Nest.js
FROM node:16-alpine

# Configuração do diretório de trabalho
WORKDIR /app

# Instalação do Nest CLI e das dependências
RUN npm install -g @nestjs/cli
COPY package*.json ./
RUN npm install

# Copia o código fonte
COPY . .

# Compilação do TypeScript
RUN npm run build

# Exposição da porta
EXPOSE 3000

# Comando para iniciar a aplicação em modo de produção
CMD ["npm", "run", "start:prod"]
