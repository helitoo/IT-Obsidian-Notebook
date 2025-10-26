
Ngoài cách truy vấn sơ khai sử dụng [[Khảo sát Serie và DataFrame#^adb6a8|Boolean indexing]], bạn còn có thể thực các truy vấn nâng cao như sau:

```python
df.query("sqlStm")
```
VD:
- `"age > 25 and gender == 'Male'"`.
- `"score >= 80 or passed == True"`.
- `` `full name` == `Nguyễn Văn A` ``: Dùng \` do tên field có dấu cách.

```python
df.sort_values()
```
Trả về một DataFrame sau khi sắp xếp. Có các tham số như:
- `by` (`str`|`list`): Tên của 1 field hoặc 1 danh sách các field cần sắp xếp, thứ tự ưu tiên sắp xếp giảm dần.
- `ascending` (`bool`|`list`): Nhận `True` thì sắp xếp tăng dần, hoặc cũng có thể nhập một danh sách các `bool` ứng với `by` chỉ thị cột nào sắp xếp tăng dần, cột nào sắp xếp giảm dần.
- `na_position` (`first`|`last`): Nhận `first`, khi sort sẽ đưa các giá trị `NaN` lên đầu DataFrame.

```python
df.group_by('fieldName')
```

^5582f8

- Trả về một DataFrame được gôm nhóm theo field `'fieldName'`.
