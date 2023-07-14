FROM node:19.8.1-alpine3.17

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 3000

EXPOSE 3000

CMD npm run dev