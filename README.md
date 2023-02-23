# RentX - Backend

This file repo contains the backend for the mobile application. This project's mere purpose is for studies only.
It uses MVC architecture and SOLID principles.

## Stack used

- [NodeJS](https://nodejs.org/en/) with [express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Swagger](https://swagger.io/)
- [Docker](https://docs.docker.com/)
- [Postgres](https://www.postgresql.org)
- [Typeorm](https://typeorm.io)
- [TSynringe](https://www.npmjs.com/package/tsyringe#container)

## How do I start this project? 🤔

### With Docker 🐋 :

1. Create the containers: `docker-compose up -d`
2. To run the migrations: `npm run typeorm migrate:run -- -d ./src/database`

- **To check whether the container is up and running or not:**

1. `docker ps` _this will return some info about the container; make sure to copy its name under the **NAMES** column_
2. `docker exec -it <NAME> bash`

- **For linux users**
  To remove the mandatory sudo command prior to any docker command: https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user

### Without Docker

1. Download this repo: `git clone https://github.com/bbcvasconcellos/rentx-backend.git`
2. Make sure your node version is compatible (v14+), using nvm: `nvm use 14.xx`
3. Download the dependencies packages: `npm i`
4. Run the application: `npm run dev`

## More info about the routes? 📖

After starting the project, go to `localhost:3003/api-docs` to see the project's documentation
