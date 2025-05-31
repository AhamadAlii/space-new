# Space Explorer - A Real-Time Space News Website

## 🚀 Project Overview

Space Explorer is a modern, visually stunning web app that delivers real-time space news and daily astronomy images. Perfect for space enthusiasts, it features a beautiful cosmic-themed design and smooth animations, while fetching live data from NASA and Spaceflight News APIs.

**Live Demo:** [Insert your live demo URL here]

---

## ✨ Features Developed

### Main Components

- **Beautiful Space-Themed Design**
  - Dark gradient background (slate-900 to purple-900 to slate-800)
  - Cosmic purple and blue color palette
  - Subtle star pattern overlay in the header
  - Smooth animations and hover effects throughout the UI

- **Header Section**
  - "Space Explorer" branding with rocket icon
  - Gradient text effects for a cosmic vibe
  - "Live Space Data" indicator featuring a star icon

- **Hero Section: NASA Astronomy Picture of the Day (APOD)**
  - Fetches and displays NASA's daily astronomy image with descriptions
  - Two-column layout showcasing image alongside content
  - Engaging "Learn More" button linking to detailed info

- **Latest Space News Section**
  - Real-time space news fetched from the Spaceflight News API
  - Grid layout displaying 12 latest articles
  - Each news card includes:
    - High-quality images with zoom-on-hover effect
    - Article title and brief summary
    - Publication date with calendar icon
    - News source badge
    - "Read More" button opening original article in a new tab

- **Loading State**
  - Animated rocket icon while fetching data
  - Informative message: "Connecting to mission control"

- **Footer**
  - Credits to data sources: NASA, SpaceX, Spaceflight News API
  - Copyright information

---

## 🛠️ Technologies Used

- React with TypeScript — for robust component structure and typing
- Tailwind CSS — for utility-first styling and responsive design
- Shadcn UI — consistent and reusable component system
- Lucide React — sleek iconography
- Real-time APIs:
  - Spaceflight News API — for latest space news articles
  - NASA APOD API — for daily astronomy pictures

---

## 📱 Responsive Design

- Mobile-first approach ensuring seamless usability on all devices
- Responsive grid layouts:
  - 1 column on mobile
  - 2 columns on tablets
  - 3 columns on desktops
- Adaptive image sizing and text layouts for readability and aesthetics

---

## ⚡ Performance & UX Features

- Error handling with toast notifications to inform users gracefully
- Loading states with animated visuals for better user experience
- Optimized API calls with proper error boundaries to avoid crashes

---

## 🎨 Visual Effects & UI Enhancements

- Gradient backgrounds and borders enhancing the cosmic theme
- Hover animations on news cards for interactive feel
- Image zoom effects on news thumbnails
- Backdrop blur effects for depth
- Smooth transitions throughout UI elements

---

## How to Run This Project Locally

1. Clone the repo:

```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_DIRECTORY>
```
2. Install dependencies:

```bash
npm install
```
3. Run the project
```bash
npm run
```
## Credits

- NASA APOD API: https://api.nasa.gov/
- Spaceflight News API: https://spaceflightnewsapi.net/
- SpaceX (data credits)

Thank you for exploring the cosmos with Space Explorer! 🌌🚀
