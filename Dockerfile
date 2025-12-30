FROM node:25.2.1-alpine

WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Copy Prisma schema
COPY prisma ./prisma

# Copy ENV so Prisma can connect
COPY .env .env

# Generate Prisma client (needs DATABASE_URL)
RUN npx prisma generate

# Copy rest of app
COPY . .

# Build app
RUN npm run build

EXPOSE 3000

# Run migrations THEN start app
CMD npx prisma migrate deploy && npm run start
