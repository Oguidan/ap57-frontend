# Stage 1: Build the Angular application
FROM node:latest as build

# Add Maintainer Info
LABEL maintainer="Michael Oguidan <michaeloguidan@gmail.com>"

# Set the Current Working Directory inside the container
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve the application with Nginx
FROM nginx:1.19.2-alpine
COPY --from=build /app/dist/aq54_fontend /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf