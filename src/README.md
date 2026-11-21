# PainPath — nguồn build

App là một file `index.html` duy nhất (CSS + JS nhúng trong), chạy như PWA trên GitHub Pages.
`index.html` ở gốc repo **được sinh ra tự động** từ các file trong thư mục `src/` này, nên đừng
sửa thẳng `index.html` ở gốc — sửa file nguồn tương ứng rồi build lại, nếu không lần build sau sẽ ghi đè.

## Build

Chỉ cần Python 3 (không cần cài gói). Có Node thì tốt hơn, build sẽ tự `node --check` để bắt lỗi cú pháp JS.

```bash
python3 src/build.py          # sinh lại index.html ở gốc repo
python3 src/build.py bump      # sinh lại + tăng phiên bản service worker (sw.js)
```

Chạy `bump` **mỗi khi đổi nội dung**, để điện thoại đã cài PWA tải bản mới (service worker so sánh
số `painpath-v…` trong `sw.js`).

Xem thử tại chỗ trước khi đẩy:

```bash
python3 -m http.server 8000   # rồi mở http://localhost:8000
```

Đẩy lên GitHub là GitHub Pages tự cập nhật `https://hoanganhnet92-wq.github.io/PainPath/`.

## Các file nguồn trong `src/`

| File | Vai trò |
|------|---------|
| `build.py` | Script ghép tất cả thành `../index.html` |
| `index.html.tmp` | Khung giao diện: toàn bộ CSS và JS của app, với 2 chỗ chèn `/*DATA*/` và `/*LESSONS*/` |
| `srcbase.html` | Chứa khối `const SRC = {…}` — metadata các nguồn/tài liệu (DOI, tên bài). build.py cắt khối này ra |
| `newdata.js` | Bổ sung vào `SRC` vài nguồn (Finnerup, Wolfe, ICHD-3, ICOP, Bennett) |
| `plan39.js` | `SRC.EDPM`, các giai đoạn `PHASES`, và toàn bộ lộ trình 39 tuần `W` (chẩn đoán tuần 1–8 trước) |
| `free.js` | Thay các chương sách trả phí bằng link StatPearls/IASP miễn phí; nhãn "Bắt buộc"/"Nên đọc" |
| `benzon.js` | Gắn số chương sách Benzon (Practical Management of Pain, 6e) vào từng buổi |
| `w1.js` | Thẻ ghi nhớ + câu hỏi tuần 1 |
| `lessons.js` | Bài tóm tắt tuần 1 (6 buổi) |
| `week2.js` | Bài + thẻ + câu hỏi tuần 2 |

## Thêm nội dung tuần mới

Tạo file `weekN.js` trong `src/` theo mẫu `week2.js`:

- `Object.assign(SRC, { … })` — thêm nguồn mới (kèm `doi`).
- `Object.assign(LESSONS, { "W-D": { t, min, src:[...], h:`…html…` }, … })` — bài học, khóa `"tuần-buổi"` (tuần 2 = chỉ số `1`, buổi đầu = `0`).
- `CARDS[N] = [ [mặt trước, mặt sau, mã nguồn], … ]` — thẻ ghi nhớ.
- `QUIZ[N] = [ [câu hỏi, [đáp án…], chỉ_số_đúng, giải_thích, mã nguồn], … ]`.

Rồi thêm một dòng đọc file đó trong `build.py` (chỗ ghép `/*LESSONS*/`, cạnh `week2.js`), và `python3 src/build.py bump`.

## Lưu ý

- Mọi khẳng định lâm sàng nên có DOI trong `SRC`; phân biệt rõ bằng chứng trực tiếp với ngoại suy.
- Tiến độ học lưu ở `localStorage` trình duyệt của từng máy, không đồng bộ giữa các thiết bị.
- `_check.js` trong `src/` là file tạm của bước kiểm JS, đã bị `.gitignore` bỏ qua.
