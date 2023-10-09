FROM node:17-alpine
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install -g react-scripts
COPY . .
EXPOSE 3000
CMD [ "sh", "-c", "npm install && npm run start" ]