FROM node:current-alpine3.10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose the app on port 80
EXPOSE 80
ENV PORT=80

# Start the application through node command-line
CMD [ "node", "index.js" ]
