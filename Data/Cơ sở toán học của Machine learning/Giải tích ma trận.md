
Bài đọc trước: [[Đại số tuyến tính (Linear algebra)]].

```insta-toc
```


# Đạo hàm riêng (Partial derivative) , Vector đạo hàm riêng (Gradient)

Cho hàm số nhiều biến $f(x) : \mathbb{R}^n \rightarrow \mathbb{R}$, đạo hàm theo theo biến thứ $i$ của hàm này gọi là **đạo hàm riêng theo biến thứ $i$**, ký hiệu: $\frac{\partial f(x)}{\partial x_i}$.

Gradient là một vector chứa các đạo hàm riêng. Trong bài viết này, từ "đạo hàm" được dùng với nghĩa gradient.

## Đạo hàm của hàm trả về một số vô hướng

Cho hàm số $f(x) : \mathbb{R}^n \rightarrow \mathbb{R}$. Đạo hàm của hàm này là một vector **theo với chiều của hàm ban đầu**. Nếu hàm ban đầu là vector cột thì đạo hàm cũng là vector cột, và ngược lại.

Đạo hàm bậc nhất của hàm số trên là:
$$\nabla f(x) =
\begin{bmatrix}
	\frac{\partial f(x)}{\partial x_1} \\
	\frac{\partial f(x)}{\partial x_2} \\
	... \\
	\frac{\partial f(x)}{\partial x_n}
\end{bmatrix}
\in \mathbb{R}^n
$$

Đạo hàm bậc hai (**H**) của hàm số trên là:
$$
\nabla^2 f(\mathbf{x})
=
\begin{bmatrix}
\frac{\partial^2 f(\mathbf{x})}{\partial x_1^2} & 
\frac{\partial^2 f(\mathbf{x})}{\partial x_1 \partial x_2} & 
\cdots & 
\frac{\partial^2 f(\mathbf{x})}{\partial x_1 \partial x_n} \\[1.2ex]
\frac{\partial^2 f(\mathbf{x})}{\partial x_2 \partial x_1} & 
\frac{\partial^2 f(\mathbf{x})}{\partial x_2^2} & 
\cdots & 
\frac{\partial^2 f(\mathbf{x})}{\partial x_2 \partial x_n} \\[1.2ex]
\vdots & \vdots & \ddots & \vdots \\[1.2ex]
\frac{\partial^2 f(\mathbf{x})}{\partial x_n \partial x_1} & 
\frac{\partial^2 f(\mathbf{x})}{\partial x_n \partial x_2} & 
\cdots & 
\frac{\partial^2 f(\mathbf{x})}{\partial x_n^2}
\end{bmatrix}
\in \mathbb{S}^n
$$

Cho hàm số $f(X) : \mathbb{R}^{m \times n} \rightarrow \mathbb{R}$, đạo hàm bậc nhất của hàm này cũng tương tự đạo hàm bậc nhất của $f(x)$
$$
\nabla^2 f(\mathbf{x})
=
\begin{bmatrix}
\frac{\partial f(X)}{\partial x_{11}} & 
\frac{\partial f(X)}{\partial x_{12}} & 
\cdots & 
\frac{\partial f(X)}{\partial x_{1n}} \\
\frac{\partial f(X)}{\partial x_{21}} & 
\frac{\partial f(X)}{\partial x_{22}} & 
\cdots & 
\frac{\partial f(X)}{\partial x_{2n}} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial f(X)}{\partial x_{m1}} & 
\frac{\partial f(X)}{\partial x_{m2}} & 
\cdots & 
\frac{\partial f(X)}{\partial x_{mn}}
\end{bmatrix}
$$

## Đạo hàm của hàm trả về một ma trận

Cho hàm số $f(x): \mathbb{R}^m \rightarrow \mathbb{R}^n$.

Đạo hàm bậc nhất của hàm trên là một vector hàng:
$$
\nabla f(x) =
\begin{bmatrix}
	\nabla f_1(x) &
	\nabla f_2(x) &
	...&
	\nabla f_n(x)
\end{bmatrix}
\in \mathbb{R}^{m \times n}
$$

## Xấp xỉ đạo hàm (Numerical gradient)

$$f'(x) = \lim_{\varepsilon \rightarrow 0} \frac{f(x + \varepsilon) - f(x)}{\varepsilon} \approx \frac{f(x + \varepsilon) - f(x - \varepsilon)}{2\varepsilon}$$
Với $\varepsilon \approx 10^{-6}$.

Với hàm nhiều biến, công thức trên được áp dụng cho từng biến khi các biến khác cố định.

Cách tính xấp xỉ đạo hàm theo phương pháp numerical thường cho giá trị khá chính xác. Tuy nhiên, cách này **không được sử dụng để tính đạo hàm** vì độ phức tạp quá cao so với cách tính trực tiếp. Tại mỗi thành phần, ta cần tính giá trị của hàm số tại phía trái và phía phải, như vậy sẽ không khả thi với các ma trận lớn. Khi so sánh đạo hàm numerical này với đạo hàm tính theo công thức, người ta thường giảm số chiều dữ liệu và giảm số điểm dữ liệu để thuận tiện cho tính toán.


























