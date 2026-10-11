
**Tài liệu tham khảo**:
- [Cài đặt Ubuntu thông qua WSL trên Windows 11](https://viblo.asia/p/cai-dat-ubuntu-thong-qua-wsl-tren-window-11-gwd432ZjVX9).

# Giới thiệu

**WSL** là một tính năng của Microsoft cho phép bạn **chạy môi trường Linux trực tiếp trên Windows** mà không cần cài đặt máy ảo (VMware, VirtualBox,...) hay cấu hình chạy song song (Dual Boot).

Hiểu một cách đơn giản, WSL giúp bạn có được một cửa sổ dòng lệnh Linux (Terminal) ngay trên máy tính Windows để lập trình, chạy các công cụ dòng lệnh và sử dụng các ứng dụng Linux một cách mượt mà.

**Nguyên lý**: WSL hoạt động bằng một Linux kernel thật, chạy trên máy ảo Hyper-V của Windows.

# Cài đặt WSL

*Các lệnh sau được sử dụng trong Command Prompt, chế độ Run as administrator*.

**Bước 1**: Cập nhật WSL:

```sh
wsl --update
```

**Bước 2**: Xem các hướng dẫn trong tài liệu tham khảo.

# Một số tiện ích trên WSL

### Mounting

Mở Windows File Explorer:
```sh
cd ~
explorer.exe .
```

Đây là địa chỉ chứa toàn bộ dữ liệu của Linux.

Tạo cấu trúc folder mặc định:
```sh
sudo apt update && sudo apt install xdg-user-dirs -y
xdg-user-dirs-update
```

### Chuyển tiếp tự động (Auto-localhost forwarding)

**Auto-localhost forwarding** là một cơ chế mạng tích hợp sẵn trong WSL, giúp *tự động liên kết* các cổng (ports) đang lắng nghe bên trong máy ảo Linux với địa chỉ `localhost` (`127.0.0.1`) trên hệ điều hành Windows host với cùng số port.







