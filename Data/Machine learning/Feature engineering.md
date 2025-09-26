
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

1. Vector hóa (Vectorization)
2. Bag of Words (BoW)
3. Hiệu chỉnh vector
    1. Giảm chiều dữ liệu (Dimensionality reduction)
    2. Chuẩn hóa vector
```

**Trích xuất đặc trưng (Feature engineer, Feature extraction)** là quá trình biến đổi từ dữ liệu thô ban đầu (raw data) thành các [[Các khái niệm cơ bản trong machine learning#Nhiệm vụ|vector đặc trưng (Feature vector)]] có kích thước giống nhau.

# Vector hóa (Vectorization)

**Vector hóa** là quy ước chuyển đổi từng đơn vị dữ liệu thành từng đơn vị vector tương ứng.

Ta có thể vector hóa toàn bộ dữ liệu vào hoặc chỉ vector hóa một số thông tin quan trọng, cần thiết của dữ liệu vào.

# Bag of Words (BoW)

BoW là một kỹ thuật xử lý dữ liệu đầu vào ở dạng văn bản. Với một chuỗi văn bản đầu vào:
1. Xây dựng một **từ điển (Dictionary, Codebook)** là danh sách các từ được dùng. Từ điển này có $D$ từ.
2. Chuỗi văn bản đầu vào có thể được vector hóa thành vector $x = [x_1, x_2, ..., x_D]$, với $x_i$ là số lần xuất hiện từ thứ $i$ trong chuỗi đầu vào.
3. 2 từ được cho là có nghĩa giống nhau khi **khoảng cách Euclid** của nó khá nhỏ.

Lưu ý: Trên thực tế.
- Vector này sẽ rất dài. Các từ không xuất hiện trong chuỗi đầu vào thì sẽ tạo ra phần tử bằng 0. Nếu có nhiều từ như thế, vector tạo được sẽ **thưa (sparce vector)**. Để việc lưu trữ được hiệu quả hơn, ta không lưu cả vector đó mà *chỉ lưu vị trí của các phần tử khác 0 và từ tương ứng*.

- Nếu có từ đầu vào không có trong từ điển, thì ta có thể thêm một phần tử `<Unknown>` vào cuối từ điển. Những từ không có trong từ điển thì được xem là Unknown.

- **Term frequency-inverse document frequency (TFIDF)** là kỹ thuật xác định độ quan trọng của từ. Có những từ tuy hiếm nhưng lại thể hiện ý nghĩa chính trong văn bản.

- BoW không thể hiện được thứ tự và ngữ nghĩa của các từ. Có những chuỗi có vector giống nhau nhưng ý nghĩa thì khác nhau.

BoW còn có thể được mở rộng sang mã hóa các loại dữ liệu khác.

VD: Có một bài toán cần phân loại đâu là ảnh rừng, đâu là ảnh sa mạc. Giả sử dữ liệu vào chỉ có thể là ảnh rừng hoặc sa mạc.
- Bằng một cách trực quan, ta thấy những tấm ảnh rừng thì thường có màu xanh lá, còn sa mạc thì có màu đỏ hoặc vàng. Xanh, đỏ, vàng có thể coi là từ điển.
- Với mỗi bức ảnh, ta xây dựng một vector dựa trên từ điển trên. Với mỗi điểm ảnh, ta đếm xem nó gần với loại màu sắc nào. Vector này còn được gọi là **histogram vector**.

Tuy nhiên, nếu gặp phải những bức ảnh không màu thì phương pháp trên vô dụng. Một giải pháp được đưa ra là dùng patch.
- **Patch** là một vùng chữ nhật trên ảnh.
- Từ điển sẽ chứa các path, mỗi path thể hiện các đặc trưng như cồn cát, thân cây, lá cây,...

# Hiệu chỉnh vector

## Giảm chiều dữ liệu (Dimensionality reduction)

Trong trường hợp kết quả vector hóa quá lớn (ma trận nhiều chiều), ta có thể giảm số chiều của nó bằng cách chiếu vector đó xuống một không gian vector nhỏ hơn.
- Ưu: Thuận tiện cho tính toán.
- Nhược: Làm mất một số thông tin.

Phương pháp giảm chiều đơn giản nhất là dùng **chiếu ngẫu nhiên (Random projection)**.

Công thức:
$$x_1 = P.x_0 \in \mathbb{R}^d$$

Trong đó:
- $x_0 \in \mathbb{R}^D$ là vector ban đầu có $D$ chiều.
- $d$ là số chiều kỳ vọng sau khi giảm xuống, $d < D$.
- $P \in \mathbb{R}^{d \times D}$ là **ma trận chiếu (Projection matrix)**. Các phần tử trong ma trận này là ngẫu nhiên, nên được gọi là chiếu ngẫu nhiên.

## Chuẩn hóa vector

Nếu vector được vector hóa từ dữ liệu ở các đơn vị đo khác nhau, hoặc giá trị của các chiều trong vector quá chênh lệch nhau, thì ta cần chuẩn hóa vector để phục vụ cho tính toán.

Một vài phương pháp chuẩn hóa thường dùng:
Xét vector $x = [x_1, x_2,..., x_D]$:
1. **Rescaling**: Đưa tất cả các chiều $x_i$ về cùng một khoảng giá trị, thường là $[0; 1], [-1; 1]$.
$$x_i' = \frac{x_i - \min{x}}{\max{x} - \min{x}}; \quad x_i' \in [0; 1]$$

2. **Standardization**: Giả sử $x$ có phân phối chuẩn với $\overline{x}=0$ và $\sigma^2 = 1$.
$$x_i' = \frac{x_i - \overline{x}}{\sigma}$$

3. **Scaling to unit length**: Chuẩn hóa sao cho độ dài của $x$ là 1.
$$x' = \frac{x}{\|x\|_2}$$
