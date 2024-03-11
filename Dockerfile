FROM node:21.6.0-alpine3.19 AS builder

WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build

FROM node:21.6.0-alpine3.19

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 reactjs

RUN npm install -g serve

COPY --from=builder --chown=reactjs:nodejs /app/dist /app

USER reactjs

EXPOSE 3000
CMD ["serve", "-s", "/app"]
