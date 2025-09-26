
**Java reflecion** cho phép bạn:
- Đánh giá, sửa đổi cấu trúc và hành vi của một [[OOP cơ bản#Lớp & Đối tượng|object]] trong runtime.
- Truy cập vào các thành phần private tại mọi nơi trong chương trình.

# Lớp `Class`

Mỗi class khi load lên sẽ có một đối tượng kiểu `java.lang.Class` để biểu diễn metadata của class đó.

Có 2 cách để lấy đối tượng `Class`:
1. Dùng class literal: `urClass.class`.
2. Dùng object: `clsObj`

Cú pháp khai báo `Class`: VD:
```java
Person person = new Person(); // Object thường

Class<Person> c1 = Person.class;
Class<Person> c2 = person.getClass();
```

# Một số phương thức đơn thuần của lớp `Class`

1. `.classSimpleName()`: Trả về tên class.
2. `.className()`: Trả về tên class kèm theo package.

# Một số đối tượng suy ra từ `Class`

## Lớp `Field`

```java
clsObj.getDeclaredFields("fieldName")
```
Method trên trả về một đối tượng `Field` tượng trưng cho field `fieldName`. Nếu không tìm thấy sẽ quăng ra `NoSuchFieldException`.

```java
clsObj.getDeclaredField()
```
Trả về một iterable các đối tượng thuộc lớp `Field`.

Đối tượng `Field` có các phương thức như:

```java
urField.setAccessible(true);
```
Cho phép tạm thời truy cập field trong scope.

```java
urField.set(urObject, urVal);
```
Sửa lại giá trị field `urField` của `urObject` thành `urVal`.

## Lớp `Method`

Để lấy method thì cũng tương tự như lấy field với các method như `.getClass().getDeclaredMethods(...)` và đối tượng thuộc lớp `Method`.

```java
clsObj.getMethod("methodName", String.class)
```
Trả về một đối tượng `Method` tượng trưng cho method `methodName` có một tham số thuộc `String`.

```java
urMethod.invoke(urObject, urPar)
```
Kích hoạt method `urMethod`.

## Lớp `Constructor`

Constructor cũng có các phương thức là `clsObj.getConstructors()` và `clsObj.getConstructor(par...)` trả về đối tượng thuộc lớp `Constructor<urClass>`.

Đối tượng này có một phương thức là `.newInstance(...)` trả về một đối tượng `urClass`.

## Lớp [[Annotation]]

Annotation cũng có các phương thức là `clsObj.getDeclaredAnnotations()` trả về đối tượng thuộc lớp `Annotation`.

Đối tượng này có phương thức `.annotationType()` trả về tên annotation.


