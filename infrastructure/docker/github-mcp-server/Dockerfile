# syntax=docker/dockerfile:1
FROM node:20-alpine

ENV NODE_ENV=production

RUN npm install -g github-mcp-server@latest

ENTRYPOINT ["github-mcp-server", "--stdio"]
