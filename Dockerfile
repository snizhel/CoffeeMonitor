### STAGE 1: Build the app
FROM node:10-alpine as builder

# Build argument for the base url
ARG BASE_HREF=/

# Prepare the build (if no changes in package.json, the cache will used)
WORKDIR /ng-app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm i

# Building the app
COPY . .
RUN echo "Set base-href to ${BASE_HREF}"
RUN $(npm bin)/ng build --configuration=production --base-href ${BASE_HREF}

### STAGE 2: Setup the image
FROM nginx:alpine

# Environment variable to change the base url
ENV BASE_HREF=

# Copy the configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Remove default nginx site
RUN rm -rf /usr/share/nginx/html/*

# Copy the files from builder
COPY --from=builder /ng-app/dist/coffeeapp /usr/share/nginx/html

# Copy run script
COPY docker_entrypoint.sh /entrypoint.sh

# Run initialisation
ENTRYPOINT [ "/entrypoint.sh" ]

# Run nginx
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
