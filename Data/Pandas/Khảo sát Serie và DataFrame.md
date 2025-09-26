
Bài đọc liền trước: [[Khởi tạo Serie và DataFrame]].

# Truy xuất

## Truy xuất Serie

### Truy xuất một cell

*Cách 1*:
```python
s[exp]
```
Ở đây, `exp` có thể là:
- Index. VD: `0`, `1`,...
- Label. VD: `'a'`, `'b'`,...
- Boolean indexing (Trả về Serie). VD: ^adb6a8
	- `s > 5`.
	- `(s > 5) & (s < 10)`.
	- `(s == 5) | (s == 10)`,...
	- Bất kỳ biểu thức nào với Serie đều trả về một mảng các `bool` ứng với giá trị trả về của biểu thức Boolean. Nếu tại vị trí `i` mà mảng này là `True` thì cell có vị trí tương ứng sẽ được giữ lại. 

VD:
```python
s = pd.Series([10, 20, 30, 40])
mask = s > 20               # [False, False, True, True]

filtered = s[mask]          # [30, 40]
```

*Cách 2*: Integer location:
```python
s.iloc[index]
```

*Cách 3*: Location:
```python
s.loc['label']
```

### Truy xuất nhiều cell

Truy xuất nhiều cell liên tiếp:
```python
s[[điểm bắt đầu, điểm kết thúc]]
```
Truy xuất nhiều cell không liên tiếp:
```python
s[[điểm1, điểm2, điểm3, ...]]
```
Có thể áp dụng cho cả `.loc` và `.iloc`.

VD:
- `s[[0, 2]]`: Trả về một Serie từ index `0` đến `2`.
- `s.loc[['a', 'b']]`: Trả về một Serie từ label `'a'` đến `'b'`.
- Tương tự với các cách khác.

## Truy xuất DataFrame

### Truy xuất lấy record

Để truy xuất 1 hay nhiều record của DataFrame, dùng 3 cách tương tự như trên. Riêng Boolean indexing thì có hơi khác. VD:
- `df[df[0] > 20]`: Lấy các record có field `0` > 10.
- `df[df[0] == a]`: Lấy các record của field `0` = a.

### Truy xuất lấy cell

#### Lấy 1 cell

Có cú pháp chung là:
```python
df[recordName, fieldName]
```
Có thể áp dụng cho cả `.loc` và `.iloc`.

#### Lấy nhiều cell

Có cú pháp chung là:
```python
df[[rName1, fName1], [rName2, fName2], ...]
```
Hoặc:
```python
df[rName1:fName1, rName2:fName2, ...]
```

Có thể áp dụng cho cả `.loc` và `.iloc`.

# Duyệt DataFrame

## Duyệt theo record

*Cách 1*: Duyệt bằng namedtuple:
```python
df.itertuples()
```
Trả về iterable của các namedtuple có dạng `Pandas(Index=index, field1=..., field2=..., ...)`. Có nghĩa là, bạn sẽ truy xuất các phần tử của `itertuples` theo kiểu `.fieldName`.

*Cách 2*: Duyệt bằng Serie:
```python
df.iterrows()
```
Trả về một iterable của các tuple có dạng `(index, data)`. Với:
- `index`: Chỉ số index của `data`.
- `data`: Là một Serie tương ứng với từng hàng của DataFrame.

## Duyệt qua field

```python
df.items()
```
Trả về iterable của các tuple có dạng `(fieldName, data)`. Với:
- `fieldName`: Tên của field.
- `data`: Là một Serie chứa dữ liệu của field `fieldName`.

# Tìm kiếm giá trị

```python
dtobj.isin(vals)
```
`vals` nhận 1 giá trị hoặc 1 mảng. Hàm trả về `True` nếu giá trị này / các giá trị trong mảng này (đều) thuộc `dtobj`.

```python
arr.any()
```
Trả về `True` nếu có cell trong `arr` là `True`.

```python
arr.all()
```
Trả về `True` nếu toàn bộ cell trong `arr` là `True`.
