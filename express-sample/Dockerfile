FROM node:10.5.0-alpine
ENV APP_ROOT /usr/src/sample-express

# Create app directory
WORKDIR $APP_ROOT

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json $APP_ROOT
COPY yarn.lock $APP_ROOT

RUN npm install -g yarn && yarn install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . $APP_ROOT

EXPOSE 3000
CMD [ "node", "app/app.js" ]