
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

1. Tổng quan về SQL
2. Định nghĩa dữ liệu
    1. Sơ đồ các lệnh định nghĩa dữ liệu
    2. Các kiểu dữ liệu
    3. Các hàm đa dụng
    4. Biểu thức
3. Thao tác dữ liệu
    1. Thêm dữ liệu
    2. Sửa dữ liệu
    3. Xóa dữ liệu
4. Truy vấn dữ liệu
    1. Object
    2. Các phép toán quan hệ
```

# Tổng quan về SQL

**SQL (Structured query language)** là [[Tổng quan về Dữ liệu & Cơ sở dữ liệu#Hệ quản trị cơ sở dữ liệu (DBMS, Database management system)|ngôn ngữ truy vấn]] [[Mô hình dữ liệu#Mô hình dữ liệu quan hệ (Relationship model)|mô hình quan hệ]]. Trong đó:
- Mỗi quan hệ là 1 bảng.
- Mỗi thuộc tính là 1 cột.
- Mỗi bộ là 1 hàng.

Một số quy tắc hoạt động:
- Không cần dấu `;` cuối câu, ngoại trừ một số lệnh đặc biệt.
- Không phân biệt chữ hoa, chữ thường.
- Các lệnh có thể được chạy đồng thời. Để phân biệt 1 lệnh trước chạy trước lệnh sau, gần thêm `GO` vào cuối lệnh trước.

# Định nghĩa dữ liệu

## Sơ đồ các lệnh định nghĩa dữ liệu

- `CREATE`:
	- `DATABASE dbName`.
	- `TABLE tbName (tbDeclairation)`.

- `ALTER`:
	- `TABLE tbName`:
		- `ADD CONSTRAINT ctName ctDeclairation...` (Đối với `UNIQUE`, `PRIMARY KEY`, `FOREIGN KEY`, `CHECK`).
		- `DROP CONSTRAINT ctName`.
		- `ADD colDeclairation`.
		- `ALTER COLUMN colName colType` (có thể áp dụng để đổi kiểu dữ liệu).
		- `DROP COLUMN colName`.

- `DROP`:
	- `DATABSE dbName`.
	- `TABLE tbName`.

Trong đó:
- `tbDeclairation` có dạng `colDeclairation1, colDeclairation2, ...`.
- `colDeclairation` có dạng `colName type ct`.
- `ctDeclairation` là cú pháp khai báo constraints column-level.

Riêng đối với:
- `USE dbName`: Truy cập vào database. Chú ý lệnh này phải được chạy riêng với `CREATE DATABASE`.

- **Khai báo constraints ngay trong khai báo cột (Column-level)**:
	- `NULL`: Cho phép dữ liệu trong 1 cột chứa `NULL`.
	- `NOT NULL`: Không cho phép dữ liệu trong 1 cột chứa `NULL`.
	- `UNIQUE`: Không cho phép dữ liệu trong 1 cột được trùng nhau.
	- `DEFAULT val`: Đặt `val` là giá trị mặc định trong cột này.
	- `CHECK (logicExp)`: Chỉ cho phép dữ liệu các cột thỏa mãn điều kiện `logicExp`.
	- `PRIMARY KEY`: Chỉ định trường này là primary key (*không khuyến khích dùng*).

- **Khai báo constrains ngay dưới khai báo bảng (Table-level)**:
	- Đối với `UNIQUE`, `PRIMARY KEY`, `CHECK`: `CONSTRAINT ctName ctType (cols)`.
	- Đối với `FOREIGN KEY`: `CONSTRAINT ctName FOREIGN KEY (cols) REFERENCES tb(pcols)`.

## Các kiểu dữ liệu

**Kiểu ký tự**:
1. `CHAR(n)`: Chuỗi không Unicode cố định `n` ký tự. Nếu dữ liệu đưa vào cột có kiểu `CHAR(n)` có độ dài không đủ `n` thì tự chèn thêm các khoảng trắng phía sau để bù vào.
2. `VARCHAR(n)`: Chuỗi không Unicode tối đa `n` ký tự.
3. `VARCHAR(TEXT)`: Chuỗi không Unicode dài tối đa 2GB.

Để lưu trữ ký tự Unicode, thêm tiền tố `N` phía trước tên kiểu dữ liệu.

**Kiểu số**:
1. **Exact numeric**: Số nguyên.
	1. `INT`: -2 tỷ -> 2 tỷ.
	2. `SMALLINT`: -32000 -> 32000.
	3. `TINYINT`: 0 -> 255.
	4. `BIT`: 0 - 1.
2. **Approxiate numeric**: Số thực.
	1. `DECIMAL(a,b)` hoặc `NUMERIC(a,b)`: Có tổng cộng `a` chữ số và có `b` chữ số phần thập phân.
	2. `FLOAT(n)`: Độ chính xác `n` chữ số phần thập phân.
	3. `REAL`: Là `FLOAT(24)`.

**Kiểu thời gian**:
1. `DATE`: `'yyyy-mm-dd'`.
2. `TIME`: `'hh:mm:ss.fffffff'`.
3. `DATETIME`: `'yyyy-mm-dd hh:mm:ss.fffffff'`.

## Các hàm đa dụng

**Xử lý chuỗi**:
1. `LEN(s)`: Độ dài chuỗi.
2. `TRIM(s)`: Xóa khoảng trắng ở 2 đầu chuỗi.
3. `LEFT(s, n)`: Lấy `n` ký tự bên trái chuỗi.
4. `RIGHT(s, n)`: Lấy `n` ký tự bên phải chuỗi.
5. 

## Biểu thức

**Toán tử số học**: `+`, `-`, `*`, `/`, `%`.

**Toán tử so sánh**: `AND`, `OR`, `NOT`, `=`, `<>`, `>`, `>=`, `<`, `<=`.

**Toán tử `LIKE`**: Dùng đo so sánh gần chính xác chuỗi dựa trên một mẫu (pattern). Pattern cũng là 1 chuỗi, có 2 ký tự đặc biệt:
1. `_`: Tượng trưng cho 1 ký tự.
2. `%`: Tượng trưng nhiều ký tự hoặc không có ký tự.

VD: `s LIKE '_a__'` trả về `TRUE` nếu `s` bắt đầu bằng 1 ký tự, sau đó là ký tự `a` và kết thúc bằng 2 ký tự.

**Toán tử `IN`**:
```sql
colName IN (value1, value2,...)
```
Trả về true nếu `colName` có giá trị thuộc `value1` hoặc `value2` hoặc ...

**Toán tử `EXISTS`**:
```sql
EXISTS tb
```
Trả về true nếu `tb` có nhiều hơn 1 cột, 1 hàng. `tb` ở đây thường dùng `SELECT 1` nếu là truy vấn.

**Toán tử `CASE`**:
```sql
CASE colName
    WHEN value1 THEN result1
    ...
    ELSE result_default
END
```
- Trả về từng `result` tương ứng với từng `value` của `colName`.
- Nếu khai báo `colName`, `value` là 1 hằng số, tức là so sánh từng giá trị của cột `colName` với `value`.
- Nếu không khai báo `colName`, `value` là 1 biểu thức logic bất kỳ.

# Thao tác dữ liệu

## Thêm dữ liệu

**Dạng 1**:
```sql
INSERT INTO tbName (colNames)
VALUES
	(values1),
	(...)
```

>[!CAUTION]
>Nếu không khai báo `colNames`, mặc định các dữ liệu được thêm theo thứ tự cột khi khai báo bảng.

**Dạng 2**:
```sql
INSERT INTO tbName1 SELECT * FROM tbName2
SELECT * INTO tbName1 FROM tbName2
```
Chèn dữ liệu bảng `tbName2` vào bảng `tbName1`.

>[!CAUTION]
>Các cột giữa 2 bảng phải giống nhau.

## Sửa dữ liệu

```sql
UPDATE tbName
SET col1 = val1,...
WHERE logicExp
```
Chú ý: `WHERE logicExp` có thể không khai báo nếu vô điều kiện sửa dữ liệu.

```sql
UPDATE tbName
SET col1 = val1,...
SELECT...
```
Cập nhật dữ liệu từ bản tạm thu được từ `SELECT`.

```sql
UPDATE tbA
SET
	tbA.colA = tbB.colB,
	tbA.colB = tbB.colA
FROM (
	SELECT *
	FROM tbA
) AS tbB
WHERE tbA.id = tbB.id
```
Hoán đổi dữ liệu 2 cột.

## Xóa dữ liệu

```sql
DELETE FROM tbName
WHERE logicExpt
```
Chú ý: `WHERE logicExp` có thể không khai báo nếu vô điều kiện sửa dữ liệu.

# Truy vấn dữ liệu

**Chú ý**: Lệnh này có thể được **_thực thi nhiều lần_** và không nên xóa sau khi thực thi nếu có nhu cầu tái sử dụng.

Cấu trúc chung:
```sql
SELECT object AS name
DISTINCT
FROM table1
JOIN table2
ON logicExp
WHERE logicExp
GROUP BY column
HAVING logicExp
ORDER BY DESC/ASC
LIMIT n
```

Kết quả của SELECT có 2 loại:

| Bảng $n \times m$    | Bảng $1 \times 1$                 |
| -------------------- | --------------------------------- |
| Có $n \times m$ ô.   | Có 1 ô.                           |
| Được coi như 1 bảng. | Được coi như một dữ liệu (value). |

## Object

Là những gì bạn mong muốn trích xuất ra từ table.
- Object có thể là cột, hàm hoặc một giá trị cụ thể.
- Khi object là `*`, SELECT sẽ lấy hết dữ liệu có thể.

## Các phép toán quan hệ

**Chọn**: Chọn ra các bộ thỏa mãn điều kiện `logicExp`:
```sql
WHERE logicExp
```

**Chiếu**: Lấy ra các cột `col1`, `col2`,... trong bảng `tb`:
```sql
tb.col1, tb.col2,...
```

**Đổi tên**:
- Đối với bảng: `tb AS newTb`.
- Đối với cột: `col AS newCol`.

**Gộp nhóm**: Gộp các hàng có chung giá trị ở các cột `cols`, sau đó lọc giữ các nhóm thỏa điều kiện `HAVING`:
```sql
GROUP BY cols
HAVING logicExp
```

**Equi-join (Inner-join)**: Dựa trên cột `tbA.colA` và `tbB.colB`:
```sql
INNER JOIN tbB
ON tbA.colA = tbB.colB
```

**Natural-join**: Dựa trên cột `tbA.col = tbB.col`:
```sql
NATURAL JOIN tbB
```

**Left/Right/Full-Outer-Join**: Dựa trên cột `tbA.colA` và `tbB.colB`:
```sql
LEFT OUTER JOIN tb2
ON tbA.colA = tbB.colB
```

**Hội**: Ghép `tbA` với `tbB`:
```sql
tbA
UNION
tbB
```

**Giao**: Lấy ra những hàng xuất hiện ở cả `tbA` và `tbB`:
```sql
tbA
INTERSECT
tbB
```

**Trừ**: Lấy ra những hàng chỉ có ở `tbA` mà không có ở `tbB`:
```sql
tbA
EXCEPT
tbB
```

**Chia**: Lấy các hàng mà giá trị trong `colA` của `tbA` mà ứng với toàn bộ các giá trị trong `colB` của `tbB`.
```sql
SELECT tbA.colA
FROM tbA
WHERE tbA.colB IN (SELECT colB FROM tbB)
GROUP BY tbA.colA
HAVING COUNT(DISTINCT tbA.colB) = (SELECT COUNT(*) FROM tbB);
```
- Đầu tiên, gộp nhóm và đếm số lượng các `tbA.colB`.
























