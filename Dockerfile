FROM node:22-alpine AS base

# Run as non-root user
RUN addgroup -S sfs && adduser -S sfs -G sfs

WORKDIR /app

# Install dependencies first (cache layer)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy application source
COPY --chown=sfs:sfs . .

# Remove files that must not be in the image
RUN rm -f .env

USER sfs

ENV NODE_ENV=production \
    PORT=5000

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:5000/health || exit 1

CMD ["node", "server.js"]
