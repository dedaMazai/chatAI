FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN ["npm", "i"]

COPY . .

EXPOSE 3000

RUN ["npm", "run", "build"]

CMD ["npm", "run", "start"]