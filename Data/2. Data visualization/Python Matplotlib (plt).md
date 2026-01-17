
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

1. Các thành phần của biểu đồ (Chart)
2. Một số phương thức cơ bản
```


**Matplotlib** là một Python module trực quan hóa dữ liệu, và là nền tảng xây dựng các module khác trong Python.

```python
import matplotlib.pyplot as plt
```

# Các thành phần của biểu đồ (Chart)

1. **Figure / Canvas**: Là toàn bộ khung trống, có thể chứa một hoặc nhiều chart.
2. **Axis**: Là các trục trên canvas.
3. **Axes**: Là vùng vẽ tạo bởi các axis.
4. **Plot**: Là các hàm vẽ chart, mỗi plotter chỉ vẽ 1 chart và trên 1 axes có thể dùng nhiều plotter. Các hàm này nhận tập hợp các điểm, sau đó chấm các điểm này lên axes, nên mới gọi là *plot*.

# Một số phương thức cơ bản


| Phương thức       | Mô tả           |
| ----------------- | --------------- |
| `plt.title('x')`  | Đặt tên figure. |
| `plt.xlabel('x')` | Đặt tên trục x. |
| `plt.ylabel('x')` | Đặt tên trục y. |
|                   |                 |
|                   |                 |
















