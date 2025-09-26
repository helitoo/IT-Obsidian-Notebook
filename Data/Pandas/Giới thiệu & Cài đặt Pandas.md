
Bài đọc liền trước: [[Giới thiệu|Nhập môn Python]].

# Tổng quan

**Pandas** (Panel data – `pd`) là một [[Giới thiệu|Python]] module mã nguồn mở, miễn phí, được sáng tạo bởi Wes McKinney vào năm 2008, chuyên dùng để xử lý các tập dữ liệu (Data set):
- Phân tích dữ liệu (Analyzing).
- Làm sạch dữ liệu (Cleaning).
- Khai phá dữ liệu (Exploring).
- Biến đổi dữ liệu (Manipulating).

# Cài đặt

Module Pandas có thể được cài đặt dễ dàng chỉ thông qua `pip`:
```bash
pip install pandas
```

# Các khái niệm quan trọng

Pandas tập trung xử lý 2 đối tượng:
- **Series**: Là một danh sách tuyến tính, mỗi phần tử của mảng này đều được đặt một label để phân biệt.
- **DataFrames**: Là một mảng 2 chiều mà mỗi field đều là 1 series. Trong nhiều trường hợp, các series là cột nên tên cột là label, tên hàng được đặt là name để phân biệt.
Trong đó, DataFrames là đối tượng nghiên cứu chính.

Các thành phần của **Serie** và **DataFrame**:
- **Index**: Là vị trí của phần tử trong Serie, tức là tên của record. Nếu Index là `str` thì còn được gọi là **Label**.
- **Column**: Là tên của field.
