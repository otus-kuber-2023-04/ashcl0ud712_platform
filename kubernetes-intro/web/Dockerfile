FROM node:18-alpine
ENV NODE_ENV=production

WORKDIR /src

COPY ["src/package.json", "src/package-lock.json*", "./"]

RUN npm install -g --production

COPY . .

CMD ["node", "src/index.js"]
