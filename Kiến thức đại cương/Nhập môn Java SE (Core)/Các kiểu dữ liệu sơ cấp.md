
Nhìn chung, các cú pháp cơ bản của [[Giới thiệu & Cài đặt Java SE|Java]] đều giống C++. Riêng các cú pháp con trỏ, `goto`, `struct` và `union` bị loại bỏ. Các điểm sau đây khác với C++:

# Các kiểu primitive

Các kiểu giống C++: `byte`, `char`, `short`, `int`, `long`, `float`, `double`.
Các kiểu khác C++: `boolean`.

**Chú ý**:
- Mặc định, các giá trị số nguyên lớn hơn `byte`, `char`, `short` đều là `int`. Nếu bạn muốn chỉ thị rõ giá trị mình khai báo thuộc `long` thì phải thêm `l` sau giá trị.
- Giá trị kiểu `float` phải kết thúc bằng `f`.
- Giá trị kiểu `double` phải kết thúc bằng `d`.
- Kiểu `boolean` không được coi như số nguyên.

# Các kiểu object

## Chuỗi ký tự `String`

Được biểu diễn trong cặp dấu `"`. VD: `String s = "abc";`.
String có thể được cộng với String, các kiểu số học và `boolean`.

### Một số phương thức

```java
str.length()
```
Trả về độ dài `str`.

```java
str.charAt(idx)
```
Trả về ký tự ở index `idx`.

```java
str.indexOf("ptr")
```
Trả về index của ký tự đầu tiên của `"ptr"` xuất hiện trong `"str"`.

## Mảng (Array)

Cú pháp khai báo mảng 1 chiều:
```java
dataType[] urArr // = {a, b, c, ...};
```
Mảng 2 chiều:
```java
dataType[][] urArr // = {{a, b, ...}, {c, d, ...}, ...};
```

### Một số thuộc tính và phương thức

```java
arr.length
```
Trả về chiều dài của `arr`.

```java
arr[idx]
```
Trả về phần tử ở index `idx`.

```java
arr2d[idxr][idxc]
```
Trả về phần tử ở index `idxc` của `arr2d[idxr]` (mảng 2 chiều).

### Duyệt mảng

#### Dùng for

VD: Mảng 1 chiều.
```java
for (int i = 0; i < arr.length; i++)
	// Your code
```

VD: Mảng 2 chiều.
```java
for (int i = 0; i < arr.length; i++)
	for (int j = 0; j < arr[i].length; i++)
		// Your code
```
#### Dùng for-each

VD: Mảng 1 chiều.
```java
for (int cell : intArr)
	// Your code
```

VD: Mảng 2 chiều.
```java
for (int[] row : intArr2d)
	for (int cell : row)
		// Your code
```






