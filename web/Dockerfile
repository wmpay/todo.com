FROM node as websrc
WORKDIR /usr/src/web
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=websrc /usr/src/web/index.html /var/www/todo.com/
COPY --from=websrc /usr/src/web/dist/todo.bundle.js /var/www/todo.com/
COPY --from=websrc /usr/src/web/todo.conf /etc/nginx/conf.d
RUN rm /etc/nginx/conf.d/default.conf