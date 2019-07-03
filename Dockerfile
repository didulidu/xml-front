FROM node:9.8.0-onbuild as builder
COPY . .
RUN npm i
ENV NODE_ENV=production
RUN npm run build:dll
RUN npm run build

FROM nginx:1.13-alpine
COPY .config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/src/app
