# Bangladeshist Full Magazine CMS

## Setup
1. Copy `.env.example` to `.env.local`
2. Replace MongoDB password
3. Run:

```bash
npm install
npm run seed
npm run dev
```

## Logins
Admin: `admin@example.com` / `12345678`
Writer: `writer@example.com` / `12345678`
Reader: `reader@example.com` / `12345678`

## Pages
- `/` homepage
- `/login` reader/writer login
- `/admin-login` admin login
- `/register` reader registration
- `/forgot-password` password reset request
- `/reset-password?token=TOKEN` reset password
- `/dashboard`
- `/dashboard/articles`
- `/dashboard/articles/new`
- `/dashboard/users`
- `/dashboard/comments`
