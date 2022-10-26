FROM node:14.15.1

WORKDIR /usr/app


COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm","start"]