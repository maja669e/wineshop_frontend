# Fetching the latest node image on alpine linux
#FROM node:alpine AS development

# Declaring env
#ENV NODE_ENV development

# Setting up the work directory
#WORKDIR /react-app

# Installing dependencies
#COPY ./package.json /react-app
#RUN npm install --force

# Copying all the files in our project
#COPY . .

# Starting our application
#CMD npm start

# Stage 1: Build the React application
FROM node:14 as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --silent
COPY . ./
RUN npm run build

# Stage 2: Serve the static files using a lightweight web server
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]