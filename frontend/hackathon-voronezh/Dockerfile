FROM node:latest

WORKDIR /app

RUN rm -rf ./app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
