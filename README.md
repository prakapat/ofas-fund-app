# 💰 Fund App — ระบบบัญชีกองทุนรวม

> เว็บแอปบันทึกรายรับ-รายจ่ายกองทุน พร้อมแนบสลิปโอนเงินและซิงก์ข้อมูลกับ Google Sheets แบบเรียลไทม์

![Node](https://img.shields.io/badge/Node.js-%3E%3D18-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-Railway-0B0D0E?logo=railway&logoColor=white)
![Backend](https://img.shields.io/badge/Backend-Google%20Apps%20Script-4285F4?logo=google&logoColor=white)

---

## ✨ ฟีเจอร์

| | รายละเอียด |
|---|---|
| 📊 **ดูข้อมูลกองทุน** | แสดงยอดเงินรับ / จ่าย / คงเหลือ พร้อมค้นหาและกรองตามชื่อ-ช่วงวันที่ |
| 💳 **ชำระเงินผ่าน QR Code** | แสดง QR สำหรับโอนเงินเข้ากองทุน |
| 📝 **บันทึกการชำระเงิน** | กรอกฟอร์ม + แนบสลิปโอนเงิน (รองรับกล้อง/แกลเลอรี่บนมือถือ) |
| ☁️ **ซิงก์กับ Google Sheets** | ข้อมูลทั้งหมดบันทึกและอ่านผ่าน Google Apps Script โดยตรง |

---

## 🗂️ โครงสร้างโปรเจกต์

```
fund-app/
├── public/
│   ├── index.html      # หน้าเว็บหลัก (UI + logic เชื่อม Apps Script)
│   └── images/
│       └── qr-payment.jpg   # รูป QR สำหรับโอนเงิน (ฝากไว้ในโปรเจกต์ ไม่พึ่ง external host)
├── server.js            # Express server เสิร์ฟไฟล์ static
├── package.json         # dependencies + start script
├── .gitignore
└── README.md
```

---

## 🚀 เริ่มต้นใช้งาน (Local)

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd fund-app
npm install
npm start
```

เปิดเบราว์เซอร์ไปที่ **http://localhost:3000**

---

## 📤 Push ขึ้น GitHub

```bash
cd fund-app
git init
git add .
git commit -m "Initial commit: fund tracking app"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

---

## ☁️ Deploy บน Railway

1. เข้า [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo** → เลือก repo นี้
2. Railway จะตรวจเจอ `package.json` แล้ว build/start ให้อัตโนมัติด้วย `npm start`
3. ไม่ต้องตั้งค่า environment variable เพิ่ม — `server.js` อ่านค่า `PORT` จาก Railway ให้เองอยู่แล้ว
4. รอ deploy เสร็จ แล้วกด **Generate Domain** เพื่อรับ URL สาธารณะ (`xxx.up.railway.app`)

---

## ⚙️ การตั้งค่า Google Apps Script

> **สำคัญ:** ต้องตั้งค่าให้ถูกต้อง ไม่งั้นแอปจะเชื่อมต่อไม่ได้เมื่อย้ายไป domain ใหม่

| ตั้งค่า | ค่าที่ต้องเลือก |
|---|---|
| Execute as | **Me** |
| Who has access | **Anyone** |

ตัวแปร URL ของ Apps Script อยู่ในไฟล์ `public/index.html`:

```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/XXXXXXXXXXXX/exec';
```

ถ้ามีการ deploy Apps Script เวอร์ชันใหม่ ให้แก้ค่านี้แล้ว commit + push — Railway จะ auto-redeploy ให้ (ถ้าเปิด auto-deploy ไว้)

---

## ✅ เช็กลิสต์ก่อน/หลัง Deploy

- [ ] Apps Script deploy แบบ `Execute as: Me`, `Access: Anyone`
- [ ] รูป QR Code (`public/images/qr-payment.jpg`) แสดงผลถูกต้องหลัง deploy
- [ ] ทดสอบบันทึกข้อมูล 1 รายการ แล้วเช็คว่าเข้า Google Sheet จริง
- [ ] ทดสอบเปิดจากมือถือ (ถ่ายรูปสลิปโดยตรง)

---

## 🛠️ Tech Stack

- **Frontend:** HTML + Tailwind CSS (CDN) + Vanilla JS
- **Server:** Node.js + Express (เสิร์ฟไฟล์ static)
- **Backend/Database:** Google Apps Script + Google Sheets
- **Hosting:** Railway
