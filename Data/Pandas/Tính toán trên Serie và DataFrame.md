
# Serie

Đối với [[Khởi tạo Serie và DataFrame#^877ed8|Serie]], bạn có thể dùng các toán tử `+`, `-`, `*`, ... thông thường để tính toán trên các toán hạng là Serie. Phép tính sẽ được thực hiện theo tuần tự từng phần tử và kết quả trả về cũng là một Serie.

# Phương thức phổ dụng (Universal function)

**Hàm phổ dụng** là các hàm thực hiện phép tính chuyên sâu trên Serie. Một số hàm thường dùng:
- `.sum()`: Tổng.
- `.mean()`: Trung bình.
- `.median()`: Trung vị.
- `.std()`: Độ lệch chuẩn.
- `.min()`: Giá trị nhỏ nhất.
- `.max()`: Giá trị lớn nhất.
- `.count()`: Số lượng phần tử khác `NaN`.
- `.size()`: Số lượng phần tử.

# Agreeate function

Aggreate là áp dụng nhiều phương thức phổ dụng cùng lúc.

Giả sử có DataFrame:
```python
df = pd.DataFrame({
    'class'  : ['A', 'A', 'B', 'B'],
    'math'   : [80 , 90 , 85 , 95 ],
    'english': [70 , 75 , 80 , 85 ],
    'score'  : [150, 165, 165, 180]
})
```

*VD1*: Áp dụng cho toàn bộ field:
```python
df['score'].agg(['sum', 'mean', 'max'])
```

|       | `score` |
| ----- | ------- |
| `sum` | `660.0` |
| `min` | `165.0` |
| `max` | `180.0` |

*VD2*: Áp dụng riêng cho từng field:
```python
df.agg({ 
    'math'   : ['mean', 'max'],
    'english': ['sum']
})
```

|        | `math` | `english` |
| ------ | ------ | --------- |
| `mean` | `87.5` | `NaN`     |
| `max`  | `95.0` | `NaN`     |
| `sum`  | `NaN`  | `310`     |

*VD3*: Kết hợp với [[Truy vấn trên Serie và DataFrame#^5582f8|group_by]]:
```python
df.groupby('class').agg({
    'math'   : 'mean',
    'english': ['min', 'max']
})
```
Có 2 nhóm theo `'class'` là `'A'` và `'B'`, `.agg` sẽ tính toán trên từng nhóm.

|        | `math`                 | `english`          |
| ------ | ---------------------- | ------------------ |
| `mean` | `A: 85.0`<br>`B: 90.0` | `NaN`              |
| `min`  | `NaN`                  | A`: 70`<br>`B: 80` |
| `max`  | `NaN`                  | `A: 75`<br>`B: 85` |
