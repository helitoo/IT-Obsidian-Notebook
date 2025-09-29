
# Tổng quan

**Vite** (Next Generation Frontend Tooling) là một công cụ hiện đại dùng để tối ưu hóa quá trình phát triển ứng dụng web, đặc biệt là với các framework như Vue, React, Svelte, Lit,… Nó được tạo bởi Evan You (tác giả của Vue.js).

Vite chạy trên môi trường [[Node.js]].

# Ý nghĩa

Bạn có thể tự thiết lập môi trường phát triển các thư viện từ đầu, nhưng sẽ đối mặt với các khó khăn:
- Phải cài đặt và cấu hình thủ công các công cụ như: Babel (biên dịch JSX, ES6+), Bundler (Rollup, Parcel, hoặc Webpack nếu muốn), Dev server (serve file, hot reload), ESLint, Prettier, TypeScript, CSS loader...
- Yêu cầu kiến thức vững về build tools.
- Mất nhiều thời gian để thiết lập một môi trường hoạt động trơn tru.
- Dễ mắc lỗi hoặc bỏ sót nếu không quen với quy trình frontend hiện đại.

Vì vậy, Vite đóng vai trò như một công cụ khởi tạo sẵn sàng sử dụng, loại bỏ các bước lặp lại và phức tạp khi bắt đầu với React.

# Quy trình hoạt động

Vite có 2 giai đoạn chính:
- **Dev mode**:
	- Tạo Dev Server chạy trên localhost.
	- Dùng native ES Modules (không bundle trước).
	- Biên dịch theo yêu cầu (on-demand) bằng esbuild.
	- Hỗ trợ Hot Module Replacement (HMR) nhanh, giữ nguyên trạng thái khi thay đổi code.
- **Build mode**:
	- Dùng Rollup để bundle toàn bộ project.
	- Tối ưu như: tree-shaking, code splitting, minify.
	- Tạo thư mục dist/ sẵn sàng để deploy.

# Tạo project có dùng Vite

## Khởi tạo project

Mở CLI tại nơi bạn muốn tạo project và nhập:

```bash
npx create-vite@latest project-name
```

Sau khi bạn nhập lệnh trên, Vite sẽ tạo một folder có tên là `project-name`, đồng thời cho bạn lựa chọn:
- `Package name`: Tên của dự án, mặc định là `project-name`. Nhưng nếu tên project được đặt không theo quy tắc của Vite thì bạn cần đặt lại, chẳng hạn như tên project không được in hoa. 
- `Select a framework`: Chọn framework và thư viện.
- `Select a variant`: Chọn ngôn ngữ cho framework và thư viện đã chọn ở bước trên.

Di chuyển vào trong `project-name`:
```bash
cd project-name
```

Cài đặt các package cần thiết:
```bash
npm install
```

Chạy server do Vite cung cấp:
```bash
npm run dev
```

Để hủy chạy server, nhấn tổ hợp phím sau tạo Shelll:
```bash
Ctrl C
```

## Cấu trúc project

Một project do Vite chuẩn bị thường có dạng:
```
my-project/
├── public/
├── src/
│   ├── assets/
├── .gitignore
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md
```

Trong đó:
- `public/`: Chứa các tài nguyên tĩnh (static assets): ảnh, favicon, file không cần xử lý bởi Vite.
- `src/`: Chứa mã chính của ứng dụng.
- `assets/`: Chứa các hình ảnh, biểu tượng, tài nguyên dùng trong mã nguồn.
- `index.html`: Trang chủ.
- `vite.config.js`: Cấu hình Vite.
- `package.json`: Thông tin các package.
- `README.md`: Ghi chú, mô tả dự án

Tùy thuộc vào loại framework và thư viện được chọn, Vite sẽ tự có cài đặt thích hợp.
