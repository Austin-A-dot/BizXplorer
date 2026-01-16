FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server && apk add --no-cache curl && adduser -D -u 5050 appUser

# make the 'app' folder the current working directory
WORKDIR /app

# copy dist folder to the current working directory (i.e. 'app' folder)
COPY ./dist ./dist

EXPOSE 8080
USER appUser
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 CMD curl -f http://localhost:8080 || exit 1
CMD [ "http-server", "dist", "--gzip", "--proxy", "http://localhost:8080?"]
