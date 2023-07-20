# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:16.19-alpine as build-stage

COPY package*.json /app/
COPY ./ /app/

WORKDIR /app
RUN npm install
RUN npm run build -- --output-path=./dist/out

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]