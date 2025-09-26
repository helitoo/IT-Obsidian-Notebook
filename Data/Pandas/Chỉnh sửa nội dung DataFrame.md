
Các phương thức dưới đây đều:
- Dùng được cho [[Khởi tạo Serie và DataFrame#^877ed8|Serie]] và [[Khởi tạo Serie và DataFrame#^43f7fe|DataFrame]], gọi chung là `dtobj`.
- Có tham số `inplace=False` thể hiện rằng hàm sẽ sao chép lại `dtobj`, thực hiện làm sạch rồi trả về kết quả (tham trị).

# Thay đổi kiểu dữ liệu

```python
dtobj.astype(dtType)
```
Ép kiểu dữ liệu các cell của `dtobj` thành `dtType`.

```python
dtobj.convert_dtypes()
```
Tìm và ép dữ liệu các cell của `dtobj` sang kiểu phù hợp nhất.

# Thay đổi giá trị

## Thay vô điều kiện

```python
dtobj.replace()
```
Thay các cell có giá trị `old` thành `new` trong `dtobj`. Các kiểu truyền tham số cho hàm này:
- `old, new`: Thay 1 lần.
- `{ old1:new1, old2:new2, ... }`: Thay hàng loạt.

```python
dtobj.str.replace(..., regex=True)
```
Cũng giống hàm trên nhưng có áp dụng regex.

## Thay có điều kiện

```python
dtobj.mask(exp, new)
```
Thay các cell thỏa mãn điều kiện `exp` thành `new`. VD: `s.mask(s > 2, 999)`.

```python
dtobj.where(exp, new)
```
Giữ nguyên các cell thỏa mãn điều kiện `exp`, các cell khác thay đổi thành `new`.

```python
s.apply(lambda cell : exp)
```
Lần lượt đưa các cell vào lambda. Hàm này sẽ trả về giá trị mới và giá trị này được thay thế cho giá trị cũ. VD: `df[0] = df[0].apply(lambda x: 0 if x < 0 else x)`.



