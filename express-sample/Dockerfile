FROM node:10.5.0-alpine
ENV APP_ROOT /usr/src/sample-express

# Create app directory
WORKDIR $APP_ROOT

# Copy app
COPY . $APP_ROOT

# Install dependencies
RUN npm install -g yarn && yarn install

CMD [ "node", "app/app.js" ]