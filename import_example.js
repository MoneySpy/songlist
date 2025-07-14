// ตัวอย่างโค้ด import ข้อมูล mockSongs จากไฟล์ .json
// ใช้ร่วมกับ input[type=file] ที่มี id="importJsonInput"

document.getElementById('importJsonInput').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const data = JSON.parse(evt.target.result);
      if (Array.isArray(data)) {
        // สมมติว่ามีตัวแปร global mockSongs
        window.mockSongs = data;
        // เรียกฟังก์ชันอัปเดต UI ตามต้องการ
        if (typeof loadSongList === 'function') loadSongList();
        if (typeof loadStatistics === 'function') loadStatistics();
        if (typeof loadTopRequesters === 'function') loadTopRequesters();
        alert('นำเข้าข้อมูลสำเร็จ');
      } else {
        alert('ไฟล์ไม่ถูกต้อง');
      }
    } catch (err) {
      alert('เกิดข้อผิดพลาดในการนำเข้า');
    }
  };
  reader.readAsText(file);
}); 