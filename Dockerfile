FROM docker.io/oven/bun:1
RUN mkdir -p /usr/src/mtaylor.io
WORKDIR /usr/src/mtaylor.io
COPY package.json /usr/src/mtaylor.io/
RUN bun install
COPY . /usr/src/mtaylor.io
RUN bun run build
EXPOSE 3000
ENV NODE_ENV=production
ENTRYPOINT ["bun", "server/index.ts"]
