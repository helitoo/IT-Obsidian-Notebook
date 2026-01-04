
**Tài liệu tham khảo**: [Kaggle Learn / Data visualization](https://www.kaggle.com/learn/data-visualization).

**Seaborn** là một Python module trực quan hóa dữ liệu được xây dựng *dựa trên Matplotlib* với cú pháp *ngắn gọn, trong sáng*, giúp tập trung vào dữ liệu. Seaborn có thể được sử dụng cùng lúc với Matplotlib.

```python
import seaborn as sns
```

Seaborn hỗ trợ một số plot sau:

| Biểu đồ                                 | Cú pháp                | Ghi chú                                                                                          |
| --------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------ |
| **Line chart**                          | `sns.lineplot(...)`    |                                                                                                  |
| **Scatter chart**                       | `sns.scatterplot(...)` |                                                                                                  |
| **Categorical scatter plot**            | `sns.swarmplot(...)`   | Là một dạng scatter plot nhưng dữ liệu của các nhóm được vẽ riêng chứ không chồng chéo lên nhóm. |
| **Regression line chart**               | `sns.regplot(...)`     | Là `scatterplot` kết hợp với đường hồi quy tuyến tính.                                           |
| **Linear model chart**                  | `sns.lmplot(...)`      | Là wrapper của `scatterplot`, `regplot` (cho mỗi nhóm) và `hue`.                                 |
| **Bar chart**                           | `sns.barplot(...)`     |                                                                                                  |
| **Heatmap**                             | `sns.heatmap(...)`     |                                                                                                  |
| **Histogram**                           | `sns.histplot(data)`   | Chỉ nhận 1 tham số là `data`: `Series`.                                                          |
| **Kernel density estimate (KDE) chart** | `sns.kdeplot(data)`    |                                                                                                  |
| **Joint chart**                         | `sns.jointplot()`      | Biểu đồ kết hợp.                                                                                 |

Các kiểu kết hợp của joint chart (tùy thuộc vào tham số `kind`):

| `kind`      | Biểu đồ ở giữa       | Biểu đồ ở biên |
| ----------- | -------------------- | -------------- |
| `"scatter"` | scatter              | histogram      |
| `"kde"`     | KDE 2D               | KDE 1D         |
| `"hex"`     | hexbin               | histogram      |
| `"reg"`     | scatter + regression | histogram      |
| `"hist"`    | 2D hist              | histogram      |

Các plot trên đều có một số tham số sau:

| Tham số             | Mô tả                                                              |
| ------------------- | ------------------------------------------------------------------ |
| `x`: `Series\|str`  | Dữ liệu trục x.                                                    |
| `y`: `Series\|str`  | Dữ liệu trục y.                                                    |
| `data`: `DataFrame` | Dữ liệu đầu vào.<br>Trục x là index.<br>Bắt buộc dùng với heatmap. |
| `label`: `str`      | Tên chart.                                                         |
|                     |                                                                    |

Một số tham số riêng biệt:

| Chart                                     | Tham số                  | Mô tả                                                                         |
| ----------------------------------------- | ------------------------ | ----------------------------------------------------------------------------- |
| `scatterplot`,<br>`lmplot`,<br>`histplot` | `hue=None`:`Series\|str` | Thay đổi màu trên mỗi giá trị của Series `hue`.<br>Bắt buộc đối với `lmplot`. |
| `heatmap`                                 | `annot=True`             | Hiển thị giá trị trên các ô.                                                  |
| `kdeplot`                                 | `shade=True`             | Tô màu miền phân phối xác suất.                                               |
| `jointplot`                               | `kind=None`              | Loại biểu đồ kết hợp.                                                         |
| `histplot`                                | `bin=20`                 | Số lượng cột.                                                                 |


>[!note] Một số combo truyền `data` vào plot
>- **Đối với `lineplot`, `barplot`, `scatterplot`, `lmplot`**:
>	- *Combo 1*: Dùng DataFrame (đã lọc ra các thuộc tính cần thiết) với trục x là index.
>	- *Combo 2*: Dùng toàn bộ DataFrame gốc và chỉ định các trường `x`, `y` bằng `str`.
>- **Đối với heatmap**: Chỉ được dùng toàn bộ DataFrame.
>- **Đối với `histplot` và `kdeplot`**: Dùng toàn bộ DataFrame với `hue` để phân biệt giá trị.









