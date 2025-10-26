
DataFrame có thể được lọc có điều kiện bằng [[Khảo sát Serie và DataFrame|các phương pháp truy xuất Serie và DataFrame]]. Ngoài ra còn các phương pháp thêm / xóa vô điều kiện như sau:

# Thêm

```python
df['newFieldName'] = ...
```
Thêm một field mới có tên là `newFieldName`.

```python
pandas.concat([df, newDf], ignore_index=True);
```
Thêm DataFrame `newDf` vào cuối `df`.

# Xóa

```python
df.drop();
```
Hàm này khá đa năng, nó có một số tham số sau:
- `inplace=False`: Thể hiện rằng hàm sẽ sao chép lại `df`, thực hiện làm sạch rồi trả về kết quả (tham trị).
- `columns` (`str`|`[str]`): Tên của field cần xóa hoặc mảng các field cần xóa.
- `index` (`int`|`[int]`): Index cần xóa hoặc mảng các index cần xóa.
