const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// เสิร์ฟไฟล์ static ทั้งหมดจากโฟลเดอร์ public (index.html, รูป, ฯลฯ)
app.use(express.static(path.join(__dirname, 'public')));

// health check เผื่อ Railway ใช้ตรวจสถานะ
app.get('/health', (req, res) => res.status(200).send('ok'));

// เส้นทางอื่นๆ ที่ไม่ตรงกับไฟล์ static ให้ fallback ไปที่ index.html (SPA-style)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
