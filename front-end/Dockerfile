FROM node:latest

WORKDIR /app

COPY ./React_Djagno_Dschinni_Project/front-end/ /app/
RUN npm install
RUN npm run build
RUN npm install -g serve