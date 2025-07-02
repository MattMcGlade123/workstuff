FROM node:20.9.0
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run compile
COPY src/schema.graphql dist/
CMD ["node", "dist/index.js"]