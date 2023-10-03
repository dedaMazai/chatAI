FROM node

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

EXPOSE 3000

RUN ["npm", "i"]

RUN ["npm", "run", "build"]

CMD ["npm", "run", "start"]