FROM images.home.mtaylor.io/nodejs:0.0.1
RUN mkdir -p /usr/src/mtaylor.io
WORKDIR /usr/src/mtaylor.io
COPY package.json /usr/src/mtaylor.io/
RUN yarn install
COPY . /usr/src/mtaylor.io
EXPOSE 3000
ENTRYPOINT ["node", "--loader", "ts-node/esm", "server/index.ts"]
