FROM node:20.9.0
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
CMD ["yarn", "start"]