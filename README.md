<div align="center">

# ⏱️ Clock App

A minimalist **Timer** and **Stopwatch** built with React, featuring an animated analog clock, iOS-style scroll pickers, and a dark/light theme.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-6366f1?style=for-the-badge)](https://clock-nu-puce.vercel.app/)

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Canvas](https://img.shields.io/badge/HTML5-Canvas-E34F26?style=flat-square&logo=html5&logoColor=white)

</div>

---

## ✨ Features

- **Timer** with an iOS-style scroll-wheel picker (hh : mm : ss)
- **Stopwatch** with a seconds-hand clock that completes one rotation per minute
- **Animated analog clock** drawn on canvas with a smooth ghost trail
- **Dark / light theme** toggle
- **Sharp on HiDPI screens** via 2× canvas rendering

---

## 🧠 How It Works

**Single source of truth.** Each mode tracks one number: `remaining` seconds (timer) or `elapsed` seconds (stopwatch). The progress angle, formatted time, and button labels are all derived from it on every render.

**Guardrails.**
- Start is disabled while the timer is `00:00:00`.
- When the timer hits zero it moves to a `done` state and Pause is replaced by Restart.

**Completion without extra state.** The `setInterval` callback sets `status` to `'done'` the moment `remaining` reaches zero, and the `useEffect` cleanup clears the interval.

**Clock angle.**

| Mode | Formula | Behavior |
| --- | --- | --- |
| Timer | `(elapsed / total) × 360` | Sweeps 0 → 360° over the full duration |
| Stopwatch | `(elapsed % 60) / 60 × 360` | One rotation every 60 seconds |

**Animation.** A `requestAnimationFrame` loop runs independently of React renders. It eases the displayed angle toward the target (~110 ms), extends the trail when the hand moves more than 1.1°, and clears it cleanly on wrap-around.

---

## 🛠️ Tech Stack

- **React** (functional components, `useState` / `useEffect` / `useRef`)
- **JavaScript (ES2022)** with the Canvas 2D API
- **CSS** with scroll-snap for the picker and gradient fades
- **Vite** for dev server and builds

---

## 🌐 Live Demo

Try it here: **[YOUR_WEBSITE_URL](YOUR_WEBSITE_URL)**

---

## 💻 Getting Started

```bash
npm install
npm run dev
```

Build for production with `npm run build`.

---

## 📂 Project Structure

```text
clock-app/
├── index.html
└── src/
    ├── main.jsx                # Entry point
    ├── index.css               # Reset and button styles
    ├── theme.js                # Dark/light design tokens
    ├── App.jsx                 # Tabs and theme toggle
    ├── components/
    │   ├── ClockCanvas.jsx     # Canvas, rAF loop, ghost trail
    │   ├── PickerCol.jsx       # Scroll-snap picker column
    │   ├── Btn.jsx             # Pill button
    │   ├── TimerView.jsx       # Timer tab
    │   └── StopwatchView.jsx   # Stopwatch tab
    ├── hooks/
    │   └── useInterval.js      # Interval hook (always uses latest callback)
    └── utils/
        ├── clockDraw.js        # Pure canvas drawing functions
        └── format.js           # seconds → "hh:mm:ss"
```
