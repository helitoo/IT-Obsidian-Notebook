
# Spring, Spring Boot

**Spring** là một [[4. OOP nâng cao#Inversion of control|Java framework]] mã nguồn mở chuyên dùng để xây dựng các ứng dụng Java một cách dễ dàng hơn so với SE. Tuy nhiên, cách cài đặt Spring khá phức tạp. Cho nên, người ta đã cho ra đời **Spring Boot** nhằm đơn giản hóa việc sử dụng Spring.

# Spring initializr

Bạn có thể cài đặt Spring Boot trên [[7. Giới thiệu & Cài đặt Apache Maven#Thêm dependency|Maven remote repository]], nhưng mà kèm theo đó phải tự set up một vài công đoạn khá rườm rà. Thay vào đó, bạn có thể dùng **Spring initializr**, là một ứng dụng web cho phép cài đặt và set up các bước trung gian.
1. Vào trang web [Spring initializr](https://start.spring.io/).
2. Chọn phiên bản phù hợp và chọn **Generate** để tải về file `demo.zip`. Đây là file nén folder cấu trúc chuẩn của Spring Boot project, chỉ cần giải nén và mở bằng Itellij là được.

# Cấu trúc project Spring Boot

Cấu trúc của project Spring Boot được quản lý bởi Maven vẫn có cấu trúc như Maven project, chỉ có điều thêm một số điểm khác:

```shell
demo/
├── .idea/
├── demo/
│   ├── .mvn/
│   │   └── wrapper/
│   │       └── maven-wrapper.properties
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/example/demo/
│   │   │   │       └── DemoApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   ├── .gitattributes
│   ├── .gitignore
│   ├── HELP.md
│   ├── mvnw
│   ├── mvnw.cmd
│   └── pom.xml
├── External Libraries/
└── Scratches and Consoles/

```

Trong đó:
- `demo/`: Chứa project thật sự:
	- `wrapper/maven-wrapper.properties`: Cấu hình phiên bản Maven.
	- `src/`: Chứa mã nguồn gốc.
		- `main/`: Chứa mã nguồn chính.
			- `java/com/example/demo/`: Package chứa mã nguồn chính.
			- `../DemoApplication.java`: Class chính, chứa `main()`.
			- `resources/application.properties`: Chứa cấu hình Spring Boot.
			- `resources/`: Chứa các [[BE1 Thymeleaf|template/]] và `static/` (chứa `css` và `js`).
		- `test/`: Chứa bản thử nghiệm.
- `External Libraries/`: Chứa các dependency local.
