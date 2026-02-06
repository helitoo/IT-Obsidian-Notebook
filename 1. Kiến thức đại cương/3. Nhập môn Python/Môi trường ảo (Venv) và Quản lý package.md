
**Môi trường ảo (Virtual environment)** là một **folder** đặc biệt. Trong đó, các package được cô lập với môi trường bên ngoài.

```sh
python -m venv .venv
```
Tạo môi trường ảo tại folder hiện tại, cấu hình tại folder `.venv`.

```sh
.venv\Scripts\activate.bat
```
Kích hoạt môi trường ảo.

Nếu thấy chữ `(.venv)` ở bên trái Terminal thì đã tạo thành công.

Người ta thường liệt kê tất cả package vào file `requirements.txt`, sau đó thực thi:
```sh
pip install -r requirements.txt
```
để tải các package vào môi trường ảo.




