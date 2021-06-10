# FROM node:latest 
# FROM mysql:latest 
# RUN mkdir -p /app/src 
# WORKDIR /app/src 
# COPY package.json . 
# RUN npm install 
# COPY . . 
# EXPOSE 3000 
# CMD ["npm", "start"]

FROM node:16
WORKDIR /api
COPY package.json /api
RUN npm install
COPY . /api
CMD ["npm","start"]
EXPOSE 3000
