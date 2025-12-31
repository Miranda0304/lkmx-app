# Technical Test NextJs

## 🧱 Tech Stack

- Next.js 16
- Node.js 25.2.1
- PostgreSQL 16
- Prisma ORM 7.2
- Docker & Docker Compose


## 🧱 Run with docker
1. Open a terminal in folder project.
2. Copy the file .env to root of project.
3. Generate image and DB with migrations:
    - docker compose up -d --build
4. Run docker
    - docker compose up

## 🧱 Run local
1. Install dependencies
    - npm run dev
2. Generate prisma
    - npx prisma generate
3. Run migrations
    - npx prisma migrate deploy
4. Run:
    - npm run dev
