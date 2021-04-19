# build stage
FROM node:10
LABEL maintainer=631824375@qq.com

# 创建一个工作目录
WORKDIR /app
COPY . .
RUN yarn install --registry=https://registry.npm.taobao.org
RUN npm run build

EXPOSE 12005
VOLUME ["/app/public"]
CMD ["node", "dist/server.bundle.js"]

