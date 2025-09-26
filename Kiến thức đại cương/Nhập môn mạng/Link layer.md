
```insta-toc
---
title:
  name: Mục lục
  level: 1
  center: false
exclude: ""
style:
  listType: number
omit: []
levels:
  min: 1
  max: 6
---

# Mục lục

1. Các dịch vụ của Link layer
2. Cơ chế hoạt động
```

**[[Tổng quan về mạng máy tính#Phân tầng mạng|Link layer]]**: Chuyển tiếp dữ liệu giữa các phần tử lân cận trong mạng (Ethernet, Wifi,...).

Trong quá trình truyền dữ liệu, gói tin ở tầng network phải đi qua nhiều [[Tổng quan về mạng máy tính#Mạng truy cập (Access network)|liên kết]] khác nhau, đảm nhận ở tầng liên kết khác nhau.

Tầng liên kết được triển khai trong mỗi host, kết hợp giữa phần cứng và phần mềm.

# Các dịch vụ của Link layer

1. **Framing và truy cập kênh**:
	- Đóng gói gói tin, thêm header và trailer tạo thành **frame**.
	- Lựa chọn các host được quyền gửi gói tin (**phân quyền truy cập kênh truyền**).
	- Dùng **địa chỉ MAC** để định danh vật lý các host.

2. **Truyền tin cậy giữa các nút liền kề** (khác với truyền tin cậy ở tầng transport là xử lý lỗi trên toàn hành trình truyền tin):
    - Đảm bảo dữ liệu từ một nút gửi sang nút liền kề đến nơi chính xác.
    - Trên các liên kết có dây có tỷ lệ lỗi thấp -> Ít áp dụng.
    - Trên các liên kết không dây có tỷ lệ lỗi cao -> Thường áp dụng.

- **Kiểm soát lưu lượng (flow control)**:
    - Giúp đồng bộ tốc độ giữa **nút gửi** và **nút nhận liền kề** để tránh tình trạng nhận không kịp, gây mất dữ liệu.

- **Phát hiện lỗi (error detection)**:
    - Tầng liên kết sẽ thêm **bit kiểm tra lỗi (CRC, checksum, parity, ...)** để bên nhận kiểm tra.
    - Nếu phát hiện lỗi, dữ liệu sẽ bị bỏ hoặc yêu cầu truyền lại.

- **Sửa lỗi (error correction)**:
    - Bên nhận có thể tự động sửa một số lỗi bit nhỏ mà không cần yêu cầu truyền lại (Forward Error Correction).

- **Truyền bán song công (half-duplex) và song công (full-duplex)**:
    - **Half-duplex**: 2 nút đều có thể truyền, nhưng **không đồng thời** (VD: bộ đàm).
    - **Full-duplex**: 2 nút có thể truyền và nhận **cùng lúc** (VD: Ethernet hiện đại).

# Cơ chế hoạt động

**Ở bên gửi**:
- Gói tin từ tầng mạng được đưa xuống.
- Tầng liên kết sẽ:
    - Đóng gói vào frame,
    - Thêm các bit kiểm tra lỗi,
    - Thực hiện kiểm soát luồng,
    - Đảm bảo truyền dữ liệu tin cậy.

**Ở bên nhận**:
- Frame đến được xử lý:
    - Kiểm tra lỗi,
    - Đảm bảo dữ liệu tin cậy,
    - Kiểm soát luồng.
- **Trích xuất datagram** và chuyển lên **tầng mạng**.












