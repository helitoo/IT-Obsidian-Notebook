
Bên cạnh các phương pháp tìm các đặc trưng số thông qua [[Tính toán trên Serie và DataFrame#Phương thức phổ dụng (Universal function)|các phương thức phổ dụng]] và [[Khảo sát Serie và DataFrame|các phương pháp khảo sát]] Serie và DataFrame, Pandas còn hỗ trợ một số hàm chuyên dụng như sau.

```python
dtobj.describe()
```
Thực hiện tính `.min()`, `.meadian()`, `.mode()`, `.std()`, `.var()`, `.min()`, `.max()`, `.sum()` trên các field có kiểu dữ liệu số của `dtobj`. Tham số `include='all'` sẽ thực hiện tính toán trên các field có kiểu dữ liệu không phải số. 

```python
dtobj.value_counts()
```
Đếm tần suất của mỗi giá trị. Tham số `normalize=True` sẽ chuẩn hóa kết quả theo phân phối chuẩn.

```python
dtobj.quantile(val)
```
Trả về phân vị của `val` hoặc của các giá trị trong mảng `val`.

```python
dtobj.coor(method='pearson')
```
Trả về ma trận thể hiện độ tương quan giữa các field trong `dtobj` theo phương pháp Pearson.
