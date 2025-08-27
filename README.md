🎯 TUTORACE – Online Tutor Booking Platform

A modern web application where users can sign up, log in, book tutors, and pay securely online.
Built with React (TypeScript + TSX), Supabase (auth + database), and Stripe (payment gateway).

✨ Features

🔐 Authentication – Secure user login & signup with Supabase

📅 Service Booking – Browse and book available services

💳 Payments – Stripe Checkout integration for secure payments

📊 User Dashboard – Track bookings and payment history

⚡ Tech Stack – React + TypeScript + TailwindCSS + Supabase + Stripe

🚀 Setup & Installation
1. Clone the Repository
git clone https://github.com/Adi-tya16/tutorace.git
cd tutorace

2. Install Dependencies
npm install



3. Start the Development Server
npm run dev


Now open http://localhost:3000
.

6. Stripe Webhooks (for local testing)
stripe listen --forward-to localhost:3000/api/webhooks/stripe

7. Build & Run Production Build
npm run build
npm start

🛠 Tech Stack

Frontend: React (TypeScript + TSX), TailwindCSS

Backend / Auth / DB: Supabase

Payments: Stripe Checkout + Webhooks

Deployment: lovable

📸 Screenshots 

<img width="1591" height="839" alt="image" src="https://github.com/user-attachments/assets/4f646339-03b3-4fa6-aced-74a3bc1db1bd" />
<img width="1791" height="858" alt="Screenshot 2025-08-27 162900" src="https://github.com/user-attachments/assets/6b510b25-2b57-42b2-8aef-126cd36394be" />
<img width="1868" height="724" alt="Screenshot 2025-08-27 162845" src="https://github.com/user-attachments/assets/8445a412-1c25-4194-8eea-a049d8bd8a75" />


📌 Future Enhancements

Add Razorpay support for Indian users

Service provider dashboard for managing bookings

Notifications (email / SMS)



Built with ❤️ by Aditya Sharma

