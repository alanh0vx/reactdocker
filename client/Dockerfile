FROM node:17-alpine
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install -g react-scripts
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . .
EXPOSE 3000
CMD [ "sh", "-c", "npm install && npm run start" ]