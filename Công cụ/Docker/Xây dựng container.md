
# Cấu trúc thư mục

Một folder container [[Giới thiệu & Cài đặt Docker#Container|container]] có thể như sau:

```shell
demo/
├── app/
├── Dockerfile
└── start.sh
```
Trong đó:
- `app/`: Là folder chứa mã nguồn của phần mềm. Khi mã nguồn được thay đổi, container sẽ tự động thay đổi theo.
- `start.sh`: Script chứa những câu lệnh được thực thi mỗi khi container khởi động.

VD `Dockerfile`:
```Dockerfile
# Base từ Ubuntu
FROM ubuntu:latest

# Làm việc trong thư mục /demo
WORKDIR /demo

# Cài thêm package
RUN apt-get update && apt-get install -y nginx vim nano

# Copy script start.sh vào container
COPY start.sh .
RUN chmod +x ./start.sh

# Khi container start thì chạy script
ENTRYPOINT ["./start.sh"]

# Mở port 80 (nginx)
EXPOSE 80
```

VD `start.sh`:
```sh
#!/bin/bash
service nginx start   # start nginx
exec "$@"             # chạy thêm lệnh khác nếu có
```

# Cách sử dụng `Dockerfile`

## Tạo image

VD:
```shell
docker build -t ubuntu-nginx .
```
Trong đó, `ubuntu-nginx` là tên image.

Để xem danh sách các image đã tạo, dùng:
```shell
docker images
```

## Tạo container

VD:
```shell
docker run -v $(pwd)/app:/var/www/html -p 9000:80 -it ubuntu-nginx /bin/bash
```
Trong đó:
- `-v $(pwd)/app:/var/www/html`: Đơn ánh `app/` trên máy thật với `/var/www/html` của container.
- `-p 9000:80`: Đơn ánh Port `9000` trên máy thật với port `80` của container.
- `-it`: Chạy container và mở terminal.
- `/bin/bash`: Path dẫn vào Shell.

# Chia sẻ `Dockerfile`

Bạn có thể chia sẻ qua nền tảng **Docker Hub**.



