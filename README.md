# Auctara

Auctara is a React + Vite marketing site for a white-label auction platform. It includes a multi-step "Book a demo" popup with an embedded Calendly scheduler on the final step.

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file in the project root:

```env
VITE_CALENDLY_URL=https://calendly.com/techinn360-com
```

3. Start the development server:

```bash
npm run dev
```

## Environment Variables

- `VITE_CALENDLY_URL`: Calendly page embedded in the final step of the `Book a demo` modal.
- `VITE_SUPABASE_URL`: Supabase project URL used by the client app.
- `VITE_SUPABASE_PUBLISHABLE_KEY`: Supabase publishable key used by the client app.

## Supabase Email Notifications

The `Book a demo` flow saves the lead to Supabase before the Calendly step, then after a successful booking it:

- updates the same `demo_requests` row with Calendly booking details
- invokes the Supabase Edge Function at `supabase/functions/send-demo-notification`
- sends internal notification emails to `hamed@techinn360.com` and `imran@techinn360.com`

### Required Supabase secrets

Set these before deploying the function:

```bash
supabase secrets set RESEND_API_KEY=your_resend_api_key
supabase secrets set EMAIL_FROM=notifications@your-domain.com
supabase secrets set ADMIN_PANEL_PASSWORD='Techinn@360*'
```

### Deploy the function

```bash
supabase functions deploy send-demo-notification
supabase functions deploy admin-bookings
```

The function currently uses Resend's API and expects the `demo_requests` table to support the fields saved by the modal plus any booking-status columns you want to track.

## Admin Panel

A separate password-protected admin page is available at `/admin`.

- the page prompts for the admin password
- it invokes the Supabase Edge Function at `supabase/functions/admin-bookings`
- the function verifies `ADMIN_PANEL_PASSWORD`
- on success, it returns the latest rows from `demo_requests`

To use the admin panel, make sure the `admin-bookings` function is deployed and the `ADMIN_PANEL_PASSWORD` secret is set in Supabase to `Techinn@360*`.

## Available Scripts

- `npm run dev`: Starts the Vite dev server
- `npm run build`: Builds the project for production
- `npm run lint`: Runs ESLint
- `npm run preview`: Previews the production build locally
