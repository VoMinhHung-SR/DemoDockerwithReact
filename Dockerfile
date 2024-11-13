# Stage 1: Build the React app
# Use an official Node.js image as a parent image
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Serve the React app using Nginx
FROM nginx:alpine

# Copy the build output from the first stage to the Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
