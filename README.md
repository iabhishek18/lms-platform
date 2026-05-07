# Learning Management System (LMS)

> Udemy-style platform with video courses (Mux), quizzes, progress tracking, auto-certificates, instructor dashboard, and Stripe payments.

## 🚀 Overview

A complete Learning Management System built with Next.js 14 and Prisma, supporting course creation with video chapters (hosted on Mux), per-chapter quizzes, student progress tracking, auto-generated completion certificates, and Stripe-powered course purchases.

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎥 Video Hosting | Mux for HLS video streaming |
| 📚 Course Builder | Chapters with drag-and-drop ordering |
| ❓ Quizzes | Per-chapter assessments with scoring |
| 📊 Progress | Track completed chapters per student |
| 🎓 Certificates | Auto-generated on course completion |
| 💳 Payments | Stripe for course purchases |
| 👨‍🏫 Instructor Dashboard | Create/manage courses, view earnings |
| 🔍 Search & Filter | Find courses by category/keyword |

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 (App Router) |
| Database | PostgreSQL + Prisma |
| Video | Mux (HLS streaming) |
| Payments | Stripe |
| Upload | Uploadthing |
| Styling | Tailwind CSS |
| Auth | NextAuth.js |

## ⚡ Quick Start

```bash
npm install
cp .env.example .env.local
npx prisma db push
npm run dev
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection |
| `MUX_TOKEN_ID` | Mux API token |
| `MUX_TOKEN_SECRET` | Mux API secret |
| `STRIPE_SECRET_KEY` | Stripe secret |
| `UPLOADTHING_SECRET` | Uploadthing API |
| `NEXTAUTH_SECRET` | Auth encryption |

## 📄 License

MIT
