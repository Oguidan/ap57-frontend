# Use an official Node.js image as the base image
FROM node:latest as build

# Add Maintainer Info
LABEL maintainer="Michael Oguidan <michaeloguidan@gmail.com>"

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install

RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points

# Build the app
RUN npm run build

# Use an apache image as the base image
FROM nginx:stable

COPY --from=build /app/dist/aq54_fontend/browser /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80