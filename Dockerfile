FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN ["npm", "i"]

COPY . .

EXPOSE 3000

RUN ["npm", "run", "build"]

RUN ["npm", "install", "-g", "serve"]

CMD ["serve", "build"]
