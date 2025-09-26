
# Tổng quan

**React.js** là một thư viện [[Giới thiệu & Cài đặt JavaScript|JS]] mã nguồn mở, được phát triển và duy trì bởi Facebook.

Mục tiêu: Thiết kế các ứng dụng web có giao diện tương tác, hiệu suất cao, dễ bảo trì và mở rộng. Phù hợp với các dự án vừa và lớn.

React có thể chạy trực tiếp trong browser.

Tính năng nổi bậc:
- **Component-based**: Mỗi UI được xem như một component riêng, dễ sử dụng và bảo trì.
- **Virtual DOM**: Tăng hiệu suất load giao diện.
- **[[JSX]]**: Kết hợp giữa JS và HTML.

# Cài đặt

Sử dụng [[Vite]] và đặt package là `React`.

Ngoài ra, bạn cần cài thêm VSCode extension **ES7+ React/Redux/React-Native snippets** để thuận tiện sử dụng.

# Cấu trúc project React.js

Gồm các folder và file chuẩn do Vite xây dựng và các file sau:
- `index.css`: Khai báo các style toàn cục, áp dụng cho toàn bộ web.
- `App.jsx`: Component toàn cục, được dùng cho toàn bộ web.
- `App.css`: Khai báo các style riêng cho `App`.
- `main.jsx`: Điểm bắt đầu biên dịch của React. Thường thì không cần tinh chỉnh gì ở file này.

**Luồng hoạt động**:

Tại `main.jsx`, ta thường thấy cài đặt như sau:
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
-> React sẽ tự tạo một element có id `#root` nằm trong `index.html`, `main` sẽ tìm element đó và gắn nội dung JSX `App` lấy từ `./App.jsx` vào `#root`. Cho nên trong trường hợp này, nội dung của `App` cũng chính là nội dung của trang web.

Bản chất của `App` chính là một [[JSX#Function component|Function component]].

Cấu trúc HTML thật sự:
`index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root">
      <!-- App -->
    </div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```







