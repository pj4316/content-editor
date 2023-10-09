FROM node:18

LABEL org.opencontainers.image.authors="pj4316@naver.com"
# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Bundle app source
COPY . .

# Install app dependencies
RUN npm ci

# Creates a "dist" folder with the production build
RUN npm run build

EXPOSE 3000
# Start the server using the production build
CMD [ "node", "dist/main.js" ]