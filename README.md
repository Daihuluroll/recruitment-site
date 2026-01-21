🧑‍💻 Software Recruitment Landing Page

A modern, responsive recruitment landing page built with Next.js, React, and Tailwind CSS.
The project demonstrates clean UI design, component-based architecture, and mobile-first responsiveness suitable for real-world recruitment or SaaS platforms.

This project was built as a frontend showcase and can easily be extended with APIs, authentication, or CMS integrations.

✨ Features

⚡ Built with Next.js (App Router)

🎨 Styled using Tailwind CSS

🧩 UI components from shadcn/ui

📱 Fully mobile responsive

🌗 Dark-mode ready (theme tokens included)

🧠 Clean, readable, and scalable structure

🧪 Easy local testing on desktop & mobile

🛠 Tech Stack

-Next.js

-React

-Tailwind CSS (v4)

-TypeScript

-shadcn/ui

-PostCSS

📦 Prerequisites

Make sure you have the following installed:

Node.js (v18 or later)
👉 https://nodejs.org

Check installation:
node -v
npm -v

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/daihuluroll/recruitment-site.git
cd recruitment-site

2️⃣ Install Dependencies
npm install

3️⃣ Start the Development Server
npm run dev

The app will start on:

http://localhost:3000

💻 Accessing the Site on PC

Once the dev server is running, open your browser and visit:

http://localhost:3000

📱 Accessing the Site on Mobile (Without USB or PC Connection)
✅ Option 1: Same Wi-Fi Network (Recommended for Local Testing)

Ensure your PC and phone are on the same Wi-Fi

Find your PC’s local IP address:

Windows

ipconfig


Look for:

IPv4 Address: 192.168.x.x


On your phone’s browser, open:

http://192.168.x.x:3000

⚠️ If it doesn’t load

Run the dev server like this:

npm run dev -- -H 0.0.0.0


This allows access from other devices on the network.

📁 Project Structure
recruitment-site/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   └── ui/
├── public/
│   └── logos/
├── package.json
└── README.md

📄 License
This project is for assesment by SourceFlow.