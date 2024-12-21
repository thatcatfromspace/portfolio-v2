FROM alpine

WORKDIR /app

COPY . . 

RUN apk update && apk add nodejs npm

RUN npm i
 
CMD ["npm", "run", "dev"]