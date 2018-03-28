FROM node
WORKDIR /usr/src/api
COPY . .
RUN npm install --only=prod
CMD ["npm", "start"]
