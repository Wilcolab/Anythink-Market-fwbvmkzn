FROM node:16-alpine

WORKDIR /app

# copy package files first for caching
COPY package.json ./

# install dependencies (includes nodemon so `yarn start` works)
RUN yarn install --frozen-lockfile || yarn install

COPY . .

EXPOSE 8001

CMD ["yarn", "start"]