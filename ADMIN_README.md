# Admin System Documentation

## Overview
The Innovire Events website now includes a secure admin system to view and manage form registrations.

## How to Access

### For Admins:
1. Look for the small **lightbulb icon** in the top-left corner of the footer on any page
2. Click the lightbulb to access the admin login page
3. Enter the password: `innovire2025team`
4. You'll be redirected to the responses dashboard

### Admin Dashboard Features:
- View all form submissions with full details
- See timestamps for each registration
- Export all responses to CSV for easy data management
- Refresh to get latest submissions
- Secure logout functionality

## Technical Details

### Password
- Current password: `innovire2025team`
- To change: Edit `ADMIN_PASSWORD` in `/src/app/api/auth/login/route.ts`

### Data Storage
- Currently uses **in-memory storage** (resets on server restart)
- For production: Replace with a database (MongoDB, PostgreSQL, etc.)
- Responses include: parent info, student info, emergency contacts, allergies

### API Routes
- `/api/auth/login` - Admin login with password
- `/api/auth/verify` - Verify admin session
- `/api/auth/logout` - Clear admin session
- `/api/responses` - GET (protected) and POST form responses

### Security
- JWT authentication with HTTP-only cookies
- Protected routes verify token before accessing data
- 7-day session expiration

## Form Submission Flow
1. User fills out registration form at `/form`
2. Data is saved to in-memory API storage
3. Confirmation email sent via FormSubmit
4. User redirected to thank you page
5. Admin can view submission in dashboard instantly

## Future Enhancements
- [ ] Connect to database for persistent storage
- [ ] Add individual response delete functionality
- [ ] Email notifications for new submissions
- [ ] Search/filter capabilities in dashboard
- [ ] Export to PDF option
