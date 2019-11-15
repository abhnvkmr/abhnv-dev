#
#####################
#
# Development stage
#
#####################
#

FROM node:13-buster as devenv-stage
RUN yarn global add gatsby-cli

WORKDIR /build-dir

# Install all packages
COPY package.json yarn.lock ./
RUN yarn install
ADD . /build-dir/
RUN gatsby build

#
#####################
#
# Deployment stage
#
#####################
#

# Install nginx-alpine image
FROM nginx:alpine

# copy nginx app conf to nginx
COPY configs/nginx /etc/nginx/conf.d/default.conf
WORKDIR /var/www/html
COPY --from=devenv-stage /build-dir/public/ .

CMD ["nginx", "-g",  "daemon off;"]
