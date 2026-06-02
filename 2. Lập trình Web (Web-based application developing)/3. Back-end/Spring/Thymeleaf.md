
# Giới thiệu

**Thymeleaf** là một Java Template Engine. Có nhiệm vụ xử lý và generate ra các file HTML, XML,... Việc của bạn là cung cấp dữ liệu và quy định template như nào, còn việc dùng các thông tin đó để render ra [[HTML]] sẽ do Thymeleaf giải quyết.

# Luồng hoạt động

1. Đầu tiên, Thymeleaf đọc và render ra `resources/templates/index.html` trước tiên.
2. Sau đó, Thymeleaf sẽ render ra các HTML được [[Kiến trúc Spring Boot#Lớp Controller|controller]] gọi và render ra.

# Cú pháp

## `th` attributes

Các thẻ của Thymleaf cũng giống như HTML. Các thuộc tính của nó có dạng `th:urAttName="urExprs"`.

VD:

Để truyền dữ liệu từ biến `name` trong Java vào một thẻ `h1` của HTML.
```html
<h1 th:text="${name}"></h1>
```

Ta viết thẻ h1 như thường, nhưng không chứa bất cứ text nào trong thẻ. Mà sử dụng cú pháp `th:text="${name}"` để Thymeleaf lấy thông tin từ biến `name` và đưa vào thẻ `h1`. Khi render ra, thuộc tính `th:text` biến mất và giá trị biến name được đưa vào trong thẻ `h1`.

## Model

**Model** là đối tượng lưu giữ thông tin và được sử dụng bởi Template Engine để generate ra webpage. Có thể hiểu nó là [[Tổng quan về flow của Spring Boot#@SpringBootApplication|Spring Boot context]] của Thymeleaf.

## Standard expression

Model lưu giữ thông tin dưới dạng key-value. Trong template Thymeleaf, để lấy các thông tin trong Model. bạn sẽ sử dụng **Thymeleaf Standard Expression**.
1. **Variables expression** `${urVal}`: Giá trị của một biến.
2. **Variables expression on selections** `*{urVal}`: Giá trị của một biến được chỉ định.

Ngoài ra, để lấy thông tin đặc biệt hơn:
1. `#{...}`: Lấy message.
2. `@{...}`: Lấy đường dẫn URL dựa theo context của server

### Variables expression `${urVar}`

Dùng để lấy giá trị của một biến.

### Variables expression on selections `*{urVal}`

Dùng để lấy giá trị của các trường trong một biến tồn tại trong scope đó. `*` là một cách viết tắt của `$`.

VD:

```html
<div th:object="${session.user}">
    <p>Name: <span th:text="*{firstName}"></span>.</p> 
    <p>Surname: <span th:text="*{lastName}"></span>.</p>
</div>
```

Đoạn code trên tương đương với:
```html
<div th:object="${session.user}">
    <p>Name: <span th:text="${session.user.firstName}"></span>.</p> 
    <p>Surname: <span th:text="${session.user.lastName}"></span>.</p>
</div>
```

### Message expression `#{urVal}`

Dùng để lấy các message trong `resources/messages.properties`.

VD1:
`resources/messages.properties`
```properties
home.welcome=¡Bienvenido a nuestra tienda de comestibles!
```

Dùng message expression:
```html
<p th:utext="#{home.welcome}">Xin chào các bạn!</p>
```

### URL expression `@{urURL}`

Dùng để lấy đường dẫn URL dựa theo context của server. Khi Thymeleaf render, giá trị của URL expression sẽ ghi đè giá trị của thuộc tính `href` vốn có của thẻ `a`.

VD1: *Tham số hóa URL*:
```html
<!-- 'http://localhost:8080/order/details?orderId=3' -->
<a
	href="details.html"
	th:href="@{http://localhost:8080/order/details(orderId=${o.id})}"
>view</a>
```

VD2: *URL có tham số*:
```html
<!-- '/order/details?orderId=3' -->
<a
	href="details.html"
	th:href="@{/order/details(orderId=${o.id})}"
>view</a>
```

VD3: *Kết hợp URL có tham số và tham số hóa URL*:
```html
<!-- '/gtvg/order/3/details' -->
<a
	href="details.html"
	th:href="@{/order/{orderId}/details(orderId=${o.id})}"
>view</a>
```

**VD tổng hợp**: Trên thực tế, người ta thường dùng message expression để trang web hiển thị đa ngôn ngữ trên từng khu vực địa lý khác nhau. Thymeleaf sẽ tự động làm điều này cho ta.

Cấu trúc thư mục:
```shell
main/
└── resources/
    ├── application.properties
    └── i18n/Resource bundle 'messages'
	    ├── messages.properties
	    ├── messages_vi.properties
	    └── messages_en.properties
```

`messages_vi.properties`
```properties
loda.hello=Xin chào tất cả các bạn tới với Loda Website
```

`messages_en.properties`
```properties
loda.hello=Welcome to Loda Website
```

`/application.properties`
```properties
#Chạy ứng dụng trên port 8085
server.port=8085

# Bỏ tính năng cache của thymeleaf để lập trình cho nhanh
spring.thymeleaf.cache=false

# Các message tĩnh sẽ được lưu tại thư mục i18n
spring.messages.basename=i18n/messages

# Bỏ properties này đi khi deploy
# Nó có tác dụng cố định ngôn ngữ hiện tại chỉ là Tiếng Việt
spring.mvc.locale-resolver=fixed

# Mặc định ngôn ngữ là tiếng việt
spring.mvc.locale=vi_VN
# Đổi thành tiếng anh bằng cách bỏ comment ở dứoi
# spring.mvc.locale=en_US
```

Model:
`info.java`
```java
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Info {
    String key;
    String value;
}
```

Controller:
`WebController.java`
```java
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {
    @GetMapping("/profile")
    public String profile(Model model){
        // Tạo ra thông tin
        List<Info> profile = new ArrayList<>();
        
        profile.add(new Info("fullname", "Nguyễn Hoàng Nam"));
        profile.add(new Info("gmail", "loda.namnh@gmail.com"));
        profile.add(new Info("website", "https://loda.me"));
        
        // Đưa thông tin vào Model
        model.addAttribute("lodaProfile", profile);
        
        // TRả về template profile.html
        return "profile";
    }
}
```

Template:
`profile.html`
```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
  <head>
    <meta charset="UTF-8" />
    <title>Loda</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link th:href="@{/css/bootstrap.css}" rel="stylesheet" />
    <script th:src="@{/js/bootstrap.js}"></script>
  </head>
  <body>
    <h1 th:utext="#{loda.hello}"></h1>
    <h2>Loda Profile</h2>
    <ul>
      <!--Duyệt qua toàn bộ phần tử trong biến "lodaProfile"-->
      <li th:each="info : ${lodaProfile}"> 
        <!--Với mỗi phần tử, lấy ra key và value-->
        <span th:text="*{info.key}"></span> :
        <span th:text="*{info.value}"></span>
      </li>
    </ul>
  </body>

</html>
```

`index.html`
```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
  <meta charset="UTF-8" />
  <title>Loda</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

  <!--css-->
  <link th:href="@{/css/bootstrap.css}" rel="stylesheet" />

  <!--js-->
  <script th:src="@{/js/bootstrap.js}"></script>

</head>
<body>
  <h1 th:utext="#{loda.hello}"></h1>
  
  <a th:href="@{/profile}" class="btn btn-primary">OK!</a>
</body>

</html>
```

Sơ đồ:
```mermaid
graph TD

subgraph groupA[WebController]
	A1[@GetMapping]
	A2[Tạo ra thông tin]
	A3[Model]
end

subgraph groupB[View]
	B1[profile.html]
	B2[HTML code]
end

subgraph groupC[User]
	D1[User]
end

D1 -- Yêu cầu --> A1

A1 --> A2
A2 -- .getAttributes() --> A3

A3 -- Truyền vào --> B1
B1 -- Expression --> B2

B2 -- Trả về --> D1
```
