# 💳 Nepalgunj Skin Center — Fonepay Dynamic QR Generator

A React + Tailwind CSS web app that generates **Fonepay-compatible EMVCo QR codes** with dynamic (auto-fill) payment amounts for **Nepalgunj Skin Center**.

When scanned with any Nepali banking app, the QR auto-populates the exact payment amount — no manual entry needed by the payer.

---

## ✨ Features

- **Dynamic Amount QR** — Tag `010212` (Dynamic) with Tag `54` for auto-fill
- **CRC16-CCITT Checksum** — Accurate EMVCo-compliant checksum (Tag `63`)
- **Instant Preview** — QR code renders live with `qrcode.react`
- **Raw Payload Inspector** — View the full QR string and tag breakdown
- **Custom Remarks** — Optional transaction reference/note
- **Modern UI** — Gradient backgrounds, rounded cards, smooth animations
- **Responsive** — Mobile-first, works on all screen sizes

---

## 🏗️ Tech Stack

| Layer       | Technology                        |
| ----------- | --------------------------------- |
| Framework   | React 19 (Vite 8)                 |
| Styling     | Tailwind CSS v4                   |
| QR Renderer | `qrcode.react` (QRCodeCanvas)     |
| Font        | Inter (Google Fonts)              |
| Build Tool  | Vite                              |

---

## 📂 Project Structure

```
final/
├── index.html                    # Vite HTML entry
├── package.json
├── vite.config.js                # Vite + Tailwind plugin
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                  # React entry point
    ├── index.css                 # Tailwind imports + custom animation
    ├── App.jsx                   # Root component (state management)
    ├── utils/
    │   ├── crc16.js              # CRC16-CCITT checksum function
    │   └── generateQRString.js   # EMVCo QR payload builder
    └── components/
        ├── Header.jsx            # Fonepay branded header
        ├── MerchantCard.jsx      # Merchant info card
        ├── QRForm.jsx            # Amount & remarks form
        └── QRDisplay.jsx         # QR image + raw data display
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone / navigate to the project
cd final

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Production Build

```bash
npm run build    # Outputs to dist/
npm run preview  # Preview the production build locally
```

---

## 🔧 How It Works

### QR Payload Structure (EMVCo)

The app builds an EMVCo-compliant string with these tags:

| Tag  | Field                    | Value                          |
| ---- | ------------------------ | ------------------------------ |
| `00` | Payload Format Indicator | `01` (version 1)              |
| `01` | Point of Initiation      | `12` (Dynamic)                |
| `37` | Merchant Identifier      | `9105240052044`               |
| `26` | FonePay Merchant Data    | Merchant code + Terminal ID   |
| `52` | Merchant Category Code   | `8012`                        |
| `53` | Currency Code            | `524` (NPR)                   |
| `54` | Transaction Amount       | *(user input)*                |
| `58` | Country Code             | `NP`                          |
| `59` | Merchant Name            | `NEPALGUNJ SKIN CENTER`       |
| `60` | Merchant City            | `Banke`                       |
| `62` | Additional Data          | Terminal ID + TxnID + Remarks |
| `63` | CRC Checksum             | CRC16-CCITT                   |

### CRC16-CCITT

The checksum is calculated over the entire QR string (including the `6304` tag prefix) using the CRC-CCITT polynomial `0x1021` with initial value `0xFFFF`.

---

## 🏪 Merchant Details

| Field           | Value                  |
| --------------- | ---------------------- |
| Merchant Name   | NEPALGUNJ SKIN CENTER  |
| Merchant Code   | `2109020664`           |
| Terminal ID     | `497140`               |
| Category Code   | `8012`                 |
| Currency        | NPR (524)              |
| Country         | NP                     |

---

## 📜 Scripts

| Command           | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start Vite dev server (hot reload)   |
| `npm run build`    | Production build → `dist/`           |
| `npm run preview`  | Preview production build locally     |
| `npm run lint`     | Run ESLint                           |

---

## 📝 License

This project is private and intended for use by **Nepalgunj Skin Center**.
