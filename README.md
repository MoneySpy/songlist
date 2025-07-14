# Songlist (ระบบขอเพลงออนไลน์)

ระบบขอเพลงออนไลน์สำหรับพนักงาน พร้อมแจ้งเตือนผ่าน LINE

## คุณสมบัติ
- ฟอร์มขอเพลงออนไลน์ (HTML/CSS/JS)
- ส่งข้อมูลแจ้งเตือนผ่าน LINE (ผ่าน Google Apps Script)
- สามารถ deploy เป็น static web (เช่น GitHub Pages)

## วิธีใช้งาน

### 1. Clone หรือ Fork โปรเจกต์นี้
```sh
git clone https://github.com/your-username/songlist.git
cd songlist
```

### 2. ตั้งค่า Google Apps Script สำหรับแจ้งเตือน LINE
1. เปิด [Google Apps Script](https://script.google.com/)
2. วางโค้ดในไฟล์ `line_notify.gs` (ดูตัวอย่างใน repo นี้)
3. แก้ไขค่า `CHANNEL_ACCESS_TOKEN` และ `USER_ID` ให้ตรงกับของคุณ
4. Deploy เป็น Web App (เลือก Anyone access)
5. Copy URL ที่ได้มาใส่ในไฟล์ `index.html` (แทนที่ `YOUR_APPS_SCRIPT_URL`)

### 3. แก้ไขไฟล์ index.html
- ใส่ URL Apps Script ที่ deploy แล้วในฟังก์ชัน `submitSongRequest()`

### 4. ทดสอบใช้งาน
- เปิดเว็บผ่าน http://localhost หรือ deploy ขึ้น GitHub Pages
- กรอกฟอร์มขอเพลง ข้อมูลจะถูกส่งไป LINE

## Deploy ขึ้น GitHub Pages
1. Push โค้ดขึ้น GitHub
2. ไปที่ Settings > Pages > Source: เลือก branch `main` หรือ `master` และ root
3. รอระบบ build แล้วจะได้ลิงก์เว็บ

## หมายเหตุ
- **อย่าใส่ LINE TOKEN ใน repo สาธารณะ**
- ถ้าต้องการบันทึกข้อมูลลง Google Sheet ด้วย ให้ดูตัวอย่าง Apps Script ใน README นี้

---

## ตัวอย่าง Apps Script สำหรับแจ้งเตือน LINE
ดูไฟล์ `line_notify.gs` ใน repo นี้ 