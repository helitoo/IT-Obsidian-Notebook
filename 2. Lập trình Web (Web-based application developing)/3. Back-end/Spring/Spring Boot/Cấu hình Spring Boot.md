
# `applications.properties`

Trong Spring Boot, các thông tin cấu hình mặc định được lấy từ file `resources/applications.properties`. Mỗi cấu hình có dạng *key=value*.

Có 1 số loại cấu hình như:
- `server.port=8081`: Đổi port.
- `server.address=127.0.0.1`: Đổi API.
- `logging.file.name=logs/app.log`: Ghi log.
- `spring.datasource.url=jdbc:mysql://localhost:3306/mydb`: URL database.
- `spring.datasource.username=root`: Username database.
- `spring.datasource.password=123456`: Username password.
- ...

# `@Value`

`@Value` được sử dụng trên thuộc tính của class, có nhiệm vụ lấy thông tin từ file properties và gán vào biến.

VD:
```java
public class AppConfig {
    @Value("${spring.datasource.url}")
    String myDBUrl;
}
```
Lúc này, Spring Boot sẽ lấy giá trị từ trường `spring.datasource.url` trong file `resources/applications.properties` để gán vào `myDBUrl`.







