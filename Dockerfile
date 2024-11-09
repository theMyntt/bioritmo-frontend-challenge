FROM node:22.7.0

WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .
RUN npm run build
EXPOSE 4000

CMD ["npm", "run", "serve:ssr:bioritmo-frontend-challenge"]