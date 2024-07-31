FROM node:lts-buster

COPY package.json .

RUN apt-get install -y ffmpeg

RUN npm install

COPY . .

CMD ["npm", "start"]
