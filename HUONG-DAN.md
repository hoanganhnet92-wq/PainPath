# Cài PainPath lên điện thoại

Bộ file giống cấu trúc AnesDose: index.html, manifest.webmanifest, sw.js và các icon.

## 1. Đưa lên GitHub Pages
Cách A (repo riêng): tạo repo mới tên `PainPath` trên tài khoản hoanganhnet92-wq, tải toàn bộ file trong thư mục này lên nhánh main, vào Settings > Pages > Source: main / root. Link sẽ là `https://hoanganhnet92-wq.github.io/PainPath/`.

Cách B (chung repo AnesDose): tạo thư mục `painpath/` trong repo Anesdose và tải các file vào đó. Link: `https://hoanganhnet92-wq.github.io/Anesdose/painpath/`. Service worker của PainPath chỉ quản lý thư mục `painpath/`, không ảnh hưởng AnesDose.

## 2. Cài lên điện thoại
iPhone (Safari): mở link > nút Chia sẻ > "Thêm vào MH chính".
Android (Chrome): mở link > menu ⋮ > "Cài đặt ứng dụng" hoặc "Thêm vào màn hình chính".

## 3. Cập nhật về sau
Thay index.html mới, rồi tăng `VERSION` trong sw.js (painpath-v1 → painpath-v2) để máy tải bản mới.

Lưu ý: tiến độ học lưu trong bộ nhớ của app trên từng máy. Bản PWA có địa chỉ khác bản artifact trên claude.ai, nên tiến độ hai bản không dùng chung.
