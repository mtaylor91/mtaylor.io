FROM images.home.mtaylor.io/nodejs:0.0.2
RUN mkdir -p /usr/src/mtaylor.io
WORKDIR /usr/src/mtaylor.io
COPY package.json /usr/src/mtaylor.io/
RUN yarn install
COPY . /usr/src/mtaylor.io
RUN yarn build
EXPOSE 3000
ENV NODE_ENV=production
ENTRYPOINT ["node", "--loader", "ts-node/esm", "server/index.ts"]
