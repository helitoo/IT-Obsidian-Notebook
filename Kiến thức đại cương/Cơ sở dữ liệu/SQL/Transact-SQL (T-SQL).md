
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

1. Các cấu trúc logic đơn giản
    1. Biến
    2. Code block
    3. Cấu trúc rẽ nhánh
    4. Cấu trúc lặp
2. Cursor
3. Chương trình con
    1. Storage procedure
    2. Function
    3. Trigger
```


**T-SQL** là phần mở rộng SQL của SQL Server, cho phép thực hiện các chức năng lập trình bên cạnh truy vấn.

# Các cấu trúc logic đơn giản

## Biến

Cú pháp khai báo với giá trị mặc định (`val`, có thể không khai báo giá trị mặc định):
```sql
DECLARE @varName type = val
```

Biến trong T-SQL có thể lưu giá trị thông thường hoặc lưu một bảng (kết quả truy vấn).

```sql
SET @varName = val
```
Gán giá trị cho biến.

```sel
SELECT @varName = colName ... FROM ...
```
Gán một cột trong truy vấn cho biến.

```sql
PRINT val
```
Xuất ra giá trị đơn `val`, `val` không được là bảng.

>[!CAUTION]
>- Biến được sử dụng với cú pháp `@varName` (có dấu `@` phía trước tên).
>- Biến không được lưu trữ lâu dài mà **chỉ tồn tại tại thời điểm thực thi**.

## Code block

Một khối lệnh được bắt đầu bằng `BEGIN` và kết thúc bằng `END`.
```sql
BEGIN
	statements
END
```

## Cấu trúc rẽ nhánh

```sql
IF logicExp
	ifTrue
ELSE
	ifFalse
```

## Cấu trúc lặp

```sql
WHILE (logicExp)
BEGIN
	statements
END
```
Cấu trúc `WHILE`.

# Cursor

Cursor được dùng như một con trỏ duyệt bảng.

```sql
DECLARE csName CURSOR FOR SELECT ...
```
Khai báo cursor.

```sql
DEALLOCATE csName
```
Giải phóng bộ nhớ cursor. Cursor **không được lưu trữ lâu dài**, nhưng dữ liệu của cursor vẫn được lưu trong bộ nhớ cho đến khi SSMS tắt, nên phải deallocation.

Các thao tác với cursor phải nằm trong phạm vi `OPEN` và `CLOSE` như sau:
```sql
OPEN csName
	statements
CLOSE csName
```
Các lệnh sau đây được dùng trong cặp `OPEN`, `CLOSE`.

Giả sử cursor lưu bảng có 2 cột là COLA và COLB, bạn phải đưa 2 cột này vào 2 biến riêng để tượng trưng cho từng giá trị của 2 cột đó ở mỗi hàng.

```sql
DECLARE @colA...
DECLARE @colB...

FETCH NEXT FROM csName INTO @colA, @colB
```
`FETCH NEXT` là cú pháp để **đưa dữ liệu 1 hàng liền dưới hàng mà cursor đang trỏ đến vào các biến được chỉ định**. Ban đầu, cursor trỏ đến một hàng trống nằm liền trước hàng đầu tiên.

Duyệt dọc theo từng hàng:
```sql
WHILE @FETCH_STATUS = 0
BEGIN
	statements
	FETCH NEXT FROM csName INTO @colA, @colB
END
```
Ở mỗi lần lặp, bạn có thể dùng `@colA` và `@colB` để tượng trưng cho từng giá trị.

# Chương trình con

Thủ tục và hàm là những đoạn code **được lưu trữ lâu dài**, có thể sử dụng nhiều lần.

Cả thủ tục và hàm đều nhận **tham số**. Cú pháp khai báo tham số như sau:
```sql
@par1 type,
@par2 type,
...
```

Thủ tục không trả về giá trị, hàm thì không.

## Storage procedure

Cú pháp khai báo:
```sql
CREATE PROC proName
parameters
AS
BEGIN
	statements
END
```

Cú pháp thực thi:
```
EXEC proName @par1 = val1, @par2 = val2, ...
```
Nếu bạn không truyền đối số bằng cú pháp `@par = val`, bạn có thể truyền đối số chỉ bằng `val1, val2` nhưng phải đúng thứ tự khai báo tham số. Tương tự `INSERT INTO`.

## Function

Cú pháp khai báo:
```sql
CREATE FUNCTION funcName (parameters)
RETURNS type
AS
BEGIN
	statements
END
```
- Trong đó, `RETURNS type` là khai báo kiểu dữ liệu trả về. `TABLE` là một type đặc biệt là kết quả của truy vấn.
- Bên trong function, lệnh `RETURN value` sẽ trả về giá trị của function. Bên trong function bắt buộc phải `RETURN`.

Cú pháp thực thi: Function được coi như một giá trị:
```sql
dbo.funcName(par1, par2,...)
```

## Trigger

Trigger là một **storage procedure** được **gọi tự động** khi dữ liệu bị thay đổi (*thêm, sửa, xóa,...*).

Khi bảng được trigger theo dõi xảy ra các **sự kiện** được trigger theo dõi:
1. Nội dung của trigger sẽ được kích hoạt.
2. Sau đó, sự kiện có thể sẽ được xảy ra.

Cú pháp khai báo:
```sql
CREATE TRIGGER tgName
ON tbName
FOR event
AS
BEGIN
	statements
END
```
Trong đó:
- `tbName`: Là bảng được theo dõi.
- `event`: Là sự kiện được theo dõi, có 3 loại là `DELETE`, `INSERT`, `UPDATE`. Một trigger có thể theo dõi nhiều sự kiện.

Khi một trigger diễn ra, nó cung cấp 2 **bảng**:
1. `DELETED`: Chứa dữ liệu sắp bị xóa.
2. `INSERTED`: Chứa dữ liệu sắp được thêm vào `tbName`.

Lệnh ngăn sự kiện xảy ra:
```sql
ROLLBACK TRAN
```














