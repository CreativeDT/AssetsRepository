# Stage 1: Build Angular Application
FROM node:18.19.0 AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --force

# Copy the rest of the application source code
COPY . .

# Replace deprecated identifiers in TypeScript files
#RUN find src/ -type f -name "*.ts" -exec sed -i 's/standardlearningpathusercourses/standardlearningpathuserCourses/g' {} \;

# Build the Angular application
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:latest

# Copy custom NGINX configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy SSL certificates
COPY ssl/global-csg.com.pem /etc/ssl/global-csg.com.pem
COPY ssl/global-csg.com.key /etc/ssl/global-csg.com.key

# Copy the built Angular application from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose HTTP and HTTPS ports
EXPOSE 80 9000

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
