# build stage
FROM node:10
LABEL maintainer=631824375@qq.com

# 创建一个工作目录了
WORKDIR /app
COPY . .
RUN yarn install --registry=https://registry.npm.taobao.org
RUN npm run build

# 暴露的端口号
EXPOSE 12005
VOLUME ["/app/public"]
CMD ["node", "dist/server.js"]
