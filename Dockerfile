FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD ["node", "index.js"]