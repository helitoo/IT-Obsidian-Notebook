
Docker compose là công cụ xây dựng liên kết giữa các [[Xây dựng container|container]] với nhau. Trong một dự án có thể chỉ có một container.

# Cài đặt

Docker compose đã được đính kèm theo Docker Desktop. Bạn có thể kiểm tra bằng lệnh:
```shell
docker compose version
```

# Cấu trúc thư mục

Cũng tương tự như thư mục container bình thường, nhưng bổ sung một số file:
```shell
demo/
├── app/
├── Dockerfile
├── docker-compose.yml
└── start.sh
```

Trong đó, `docker-compose.yml` dùng để khai báo và điều phối hoạt động của các container trong project.




