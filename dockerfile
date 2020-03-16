FROM node:13.3.0-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

RUN mkdir /app
WORKDIR /app
COPY . .

RUN npm install -g nodemon
RUN npm install

CMD ["npm", "run", "start"]