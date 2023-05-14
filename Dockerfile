FROM node:lts-alpine as builder
WORKDIR /app
COPY package.json package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx.default.conf /etc/nginx/conf.d/default.conf
