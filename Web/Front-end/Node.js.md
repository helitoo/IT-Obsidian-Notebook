
# Tổng quan

Node.js là một môi trường chạy [[1. Giới thiệu & Cài đặt JavaScript|JS]] trên server. Có các chức năng:
- Quản lý dự án.
- Quản lý các thư viện mở rộng.
- Build và Bundle: Tăng hiệu năng biên dịch.
- Hot reload: Tự động cập nhật ứng dụng khi thay đổi mã nguồn, mà không cần khởi động lại toàn bộ chương trình.

# Tải Node.js

Chỉ cần cài đặt file trên [trang web chính thức của nhà phát triển](https://nodejs.org/en/download).

# npm và npx

**npm** (Node package manager) là trình quản lý gói (package manager) mặc định cho Node.js. Nó cho phép bạn cài đặt, chia sẻ, cập nhật và quản lý các thư viện hoặc công cụ được viết bằng JS.

**npx** là một công cụ đi kèm với npm, có chức năng chạy các gói được tải với npm.

# Sử dụng Node.js

Bạn có thể dùng:
```bash
node -v
```

Hoặc:
```bash
npm -v
```

Thông thường, quá trình cài đặt một project, bao gồm các package, khá phức tạp. Quá trình này thường được đơn giản hóa qua [[Vite]].
