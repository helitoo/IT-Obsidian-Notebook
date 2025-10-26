
Làm sạch dữ liệu là các thao tác loại bỏ các dữ liệu bị sai lệch với mong muốn của ta, có thể sử dụng phương pháp [[Chỉnh sửa cấu trúc DataFrame]], [[Chỉnh sửa nội dung DataFrame]].

Các phương thức dưới đây đều:
- Dùng được cho Serie và DataFrame, gọi chung là `dtobj`.
- Có tham số `inplace=False` thể hiện rằng hàm sẽ sao chép lại `dtobj`, thực hiện làm sạch rồi trả về kết quả (tham trị).

# Xóa bớt

```python
dtobj.dropna()
```
Loại bỏ các cell / record có giá trị `NaN`.

```python
dtobj.drop_duplicates()
```
Loại bỏ các cell / record bị trùng. Chỉ giữ lại 1 cell / record trong số các cell / record bị trùng.

# Chỉnh sửa nội dung

```python
dtobj.fillna(urVal)
```
Thay thế các cell có giá trị `NaN` thành `urVal`.
