FROM node
WORKDIR /usr/src/mocha
COPY package*.json ./
RUN npm install
COPY . ./test
CMD ["npm", "test"]