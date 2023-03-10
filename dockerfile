FROM node

WORKDIR /usr/app

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]

EXPOSE 3333
