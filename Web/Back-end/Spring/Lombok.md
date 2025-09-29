
# Giới thiệu

**Lombok** là một thư viện Java ngoài giúp bạn giảm code lặp (boilerplate code) bằng cách sử dụng [[6.1. Annotation|annotations]].

# Cài đặt

1. Cài đặt trên [trang chủ]([https://projectlombok.org/](https://projectlombok.org/).
2. Sử dụng [[7. Giới thiệu & Cài đặt Apache Maven|Maven]].

```xml
<!-- https://mvnrepository.com/artifact/org.projectlombok/lombok -->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.38</version>
</dependency>
```

# Cú pháp

Có một vài annotation sau:

| Annotation            | Thay thế cho việc khai báo                                              |
| --------------------- | ----------------------------------------------------------------------- |
| `@Getter`             | Getter.                                                                 |
| `@Setter`             | Setter.                                                                 |
| `@NoArgsConstructor`  | Default constructor.                                                    |
| `@AllArgsConstructor` | Contructor với tất cả các thuộc tính được truyền vào dưới dạng tham số. |
| `@ToString`           | `.toString()`                                                           |
| `@Data`               | Getter, setter, toString, equals, hashCode                              |

VD:

```java
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data 
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private String name;
    private int age;
}
```
