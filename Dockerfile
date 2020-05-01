#
#####################
#
# Development stage
#
#####################
#

FROM node:14-buster as devenv-stage

WORKDIR /build-dir

# Install all packages
COPY package.json yarn.lock ./
RUN yarn install --prod --pure-lockfile
ADD . /build-dir/
RUN yarn run build

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
