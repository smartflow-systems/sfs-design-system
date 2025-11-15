# ========================================
# Dockerfile for SFS Design System
# Stack: CSS/Tailwind Package
# Purpose: Build and serve design system documentation
# ========================================

# ----------------------------------------
# Stage 1: Build Documentation
# ----------------------------------------
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies
RUN npm install tailwindcss@^3.4.0 tailwindcss-animate@^1.0.7 @tailwindcss/typography@^0.5.10 && \
    npm cache clean --force

# Copy design system source files
COPY src ./src
COPY tailwind.config.js ./

# Create a simple documentation HTML
RUN mkdir -p dist && cat > dist/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SFS Design System</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            background: linear-gradient(135deg, #1a0f0a 0%, #2d1810 100%);
            color: #f5f5f5;
        }
        h1 {
            color: #d4af37;
            border-bottom: 2px solid #d4af37;
            padding-bottom: 0.5rem;
        }
        .card {
            background: rgba(45, 24, 16, 0.6);
            border: 1px solid #d4af37;
            border-radius: 8px;
            padding: 1.5rem;
            margin: 1rem 0;
        }
        code {
            background: rgba(0, 0, 0, 0.3);
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            color: #d4af37;
        }
        pre {
            background: rgba(0, 0, 0, 0.5);
            padding: 1rem;
            border-radius: 8px;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <h1>SmartFlow Systems Design System</h1>
    <div class="card">
        <h2>About</h2>
        <p>This is the SmartFlow Systems unified design system featuring a dark brown/black theme with metallic gold accents.</p>
    </div>
    <div class="card">
        <h2>Color Palette</h2>
        <ul>
            <li><strong>Primary:</strong> Dark Brown/Black (#1a0f0a)</li>
            <li><strong>Accent:</strong> Metallic Gold (#d4af37)</li>
            <li><strong>Secondary:</strong> Warm Brown (#2d1810)</li>
        </ul>
    </div>
    <div class="card">
        <h2>Installation</h2>
        <pre><code>npm install @smartflow/design-system</code></pre>
        <p>Then import in your tailwind.config.js:</p>
        <pre><code>module.exports = {
  presets: [require('@smartflow/design-system/tailwind.config.js')],
  // ... your config
}</code></pre>
    </div>
    <div class="card">
        <h2>Usage</h2>
        <p>Import the design system CSS in your main file:</p>
        <pre><code>import '@smartflow/design-system/src/index.js';</code></pre>
    </div>
</body>
</html>
EOF

# ----------------------------------------
# Stage 2: Production - NGINX Server
# ----------------------------------------
FROM nginx:1.25-alpine AS production

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Copy custom nginx configuration
COPY --chown=nginx:nginx <<EOF /etc/nginx/conf.d/default.conf
server {
    listen 8080;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Serve source files for reference
    location /src/ {
        alias /usr/share/nginx/html/src/;
        autoindex on;
        add_header Content-Type text/plain;
    }
}
EOF

# Copy documentation from builder stage
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html
COPY --from=builder --chown=nginx:nginx /app/src /usr/share/nginx/html/src
COPY --from=builder --chown=nginx:nginx /app/tailwind.config.js /usr/share/nginx/html/

# Use non-root nginx user
USER nginx

# Expose application port (using 8080 for non-root)
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
