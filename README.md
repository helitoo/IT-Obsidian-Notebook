# Giới thiệu

**IT Obsidian Notebook** là bộ tài liệu học tập về IT được viết theo định dạng `.md` trên nền tảng Obsidian.

# Nội dung

Các kiến thức đại cương và chuyên ngành về Công nghệ thông tin.
Gồm có 1 số nội dung sau:

- **Kiến thức đại cương**:
  - Cấu trúc dữ liệu và Giải thuật.
  - Lập trình hướng đối tượng.
  - Nhập môn mạng.
  - Hệ điều hành.
  - Nhập môn C++, Python, JavaScript,...
  - ...
- **Lập trình web**:

  - Front-end: _HTML, CSS, JavaScript,_ các framework như _Bootstrap, TailwindCSS, TypeScript, ReactJS,..._
  - Back-end: _Node JS, Express JS, Spring Boot,..._
  - ...

- **Khoa học dữ liệu và Trí tuệ nhân tạo**:

  - Cơ sở dữ liệu.
  - Phân tích dữ liệu.
  - Nhập môn các thư viện _Pandas, Numpy, Selenium, Matplotlib,..._
  - Cơ sở Toán học của Machine learning: _Đại số tuyến tính và Pandas, Giải tích, Xác suất và thống kê,..._
  - Machine learning, Deep learning.
  - ...

- **Công cụ**:
  - _Git, Github._
  - _Latex, Overleaf._
  - _n8n._
  - _Docker._
  - _Selenium._
  - ...

# Cách đánh số thứ tự nội dung

Các file / folder của Notebook đều được đánh số thứ tự để xác định thứ tự đọc cho dễ dàng.

1. Thứ tự `0.`: Hình ảnh đính kèm, tài liệu tham khảo.
2. Thứ tự `1.` -> `2.` -> `3.` ...: Đọc theo thứ tự được cho.
3. Thứ tự `1.` -> `1.` -> `1.` ...: Đọc cái nào trước cũng được.
4. Thứ tự `1.` -> `1.1.` -> `1.2.` ...: Đọc theo thứ tự được cho.

# Tài liệu tham khảo

- Giáo trình _trường Đại học công nghệ thông tin (ĐHQG-HCM)_, các blog trên _Viblo_ và các tài liệu khác.
- Hình ảnh được đính kèm trong thư mục `0. Assets`.
- Các tài liệu tham khảo được đính kèm trong thư mục `0. Refferences`.
- Trong repository cũng bao gồm các file cấu hình cần thiết cho Obsidian.

**Giải thích**:
- Mỗi type có thể tương ứng với 1 database table (in hoa toàn bộ). Nếu không tương ứng thì sẽ liệt kê từng thuộc tính (camelcase).
- Nếu type là "-" tức là chỉ trả về HTTP code / message tương ứng.
- List for selecting: Kiểu dữ liệu hiển thị dưới dạng danh sách cho người dùng click vào từng item cụ thể trong danh sách đó. Sự kiện click vào từng item này mới kích hoạt controller.

| Khu vực Dashboard    | Tên                          | Loại                    | Ý nghĩa                                       | Trục X               | Trục Y / Value                           | Bảng nguồn                          |
| -------------------- | ---------------------------- | ----------------------- | --------------------------------------------- | -------------------- | ---------------------------------------- | ----------------------------------- |
| Tổng quan            | Tổng doanh thu               | KPI Card                | Tổng doanh thu trong ngày                     | —                    | `SUM(INVOICE.FinalAmount)`               | INVOICE                             |
| Tổng quan            | Số hóa đơn                   | KPI Card                | Tổng số đơn hàng                              | —                    | `COUNT(InvoiceID)`                       | INVOICE                             |
| Tổng quan            | Giá trị đơn trung bình       | KPI Card                | Trung bình tiền mỗi hóa đơn trong tuần này    | —                    | `AVG(FinalAmount)`                       | INVOICE                             |
| Tổng quan            | Sản phẩm bán ra              | KPI Card                | Tổng số lượng sản phẩm đã bán trong tháng này | —                    | `SUM(INVOICEDETAIL.Quantity)`            | INVOICEDETAIL, INVOICE              |
| Tổng quan            | Cảnh báo tồn kho             | KPI Card                | Tổng số cảnh báo kho hôm nay                  | —                    | `COUNT(*)`                               | DETAILINVENTORY                     |
| Phân tích bán hàng   | Revenue Line Chart           | Line Chart              | Xu hướng doanh thu trong tháng này            | `InvoiceDate`        | `SUM(FinalAmount)`                       | INVOICE                             |
| Phân tích bán hàng   | Revenue Pie Chart            | Bar Chart               | Tỷ lệ doanh thu theo danh mục                 | `CategoryName`       | `SUM(TotalAmount)`                       | INVOICEDETAIL, PRODUCT, CATEGORY    |
| Phân tích bán hàng   | Top Products                 | Horizontal Bar Chart    | Top sản phẩm bán chạy                         | `SUM(Quantity)`      | `ProductName`                            | INVOICEDETAIL, PRODUCT              |
| Phân tích bán hàng   | Average Order Trend          | Area / Line Chart       | Xu hướng giá trị đơn hàng trung bình          | `InvoiceDate`        | `AVG(FinalAmount)`                       | INVOICE                             |
| Phân tích bán hàng   | Sales Quantity Trend         | Area Chart              | Xu hướng số lượng bán                         | `InvoiceDate`        | `SUM(Quantity)`                          | INVOICEDETAIL, INVOICE              |
| Quản lý tồn kho      | Inventory Status             | Stacked Bar Chart       | So sánh tồn kho giữa các kho                  | `WarehouseName`      | `AvailableStock`, `RealStock`            | DETAILINVENTORY, WAREHOUSE          |
| Quản lý tồn kho      | Warehouse Capacity           | Progress / Radial Chart | Mức sử dụng sức chứa kho                      | `WarehouseName`      | `% Capacity Used`                        | DETAILINVENTORY, WAREHOUSE          |
| Quản lý tồn kho      | Low Stock Products           | Bar Chart               | Sản phẩm sắp hết hàng                         | `ProductName`        | `AvailableStock`                         | DETAILINVENTORY, PRODUCT            |
| Quản lý tồn kho      | Overstock Products           | Bar Chart               | Sản phẩm vượt tồn kho tối đa                  | `ProductName`        | `AvailableStock - MaxStock`              | DETAILINVENTORY, PRODUCT            |
| Quản lý tồn kho      | Inventory Heatmap            | Heatmap                 | Mật độ tồn kho theo kho và sản phẩm           | `WarehouseName`      | `ProductName`                            | DETAILINVENTORY, PRODUCT, WAREHOUSE |
| Nhập/Xuất kho        | Export Quantity Trend        | Area Chart              | Xu hướng xuất kho theo thời gian              | `InvoiceDate`        | `SUM(Quantity)`                          | INVOICEDETAIL, INVOICE              |
| Nhập/Xuất kho        | Product Export Ranking       | Bar Chart               | Top sản phẩm xuất kho                         | `ProductName`        | `SUM(Quantity)`                          | INVOICEDETAIL, PRODUCT              |
| Nhập/Xuất kho        | Warehouse Flow               | Sankey Diagram          | Luồng hàng hóa giữa kho → danh mục → sản phẩm | Warehouse / Category | Product Flow                             | DETAILINVENTORY, PRODUCT, CATEGORY  |
| Phân tích khách hàng | Customer Type Distribution   | Donut Chart             | Phân bố khách hàng theo hạng                  | `CustomerTypeName`   | `COUNT(CustomerID)`                      | CUSTOMER, CUSTOMERTYPE              |
| Phân tích khách hàng | Top Customer Spending        | Bar Chart               | Top khách hàng chi tiêu cao                   | `CustomerName`       | `SUM(FinalAmount)`                       | CUSTOMER, INVOICE                   |
| Phân tích khách hàng | Customer Revenue Trend       | Line Chart              | Doanh thu theo khách hàng theo thời gian      | `InvoiceDate`        | `SUM(FinalAmount)`                       | CUSTOMER, INVOICE                   |
| Phân tích khách hàng | Customer Segment Radar       | Radar Chart             | So sánh hành vi các nhóm khách hàng           | `CustomerTypeName`   | Spending / Orders / Avg Order / Quantity | CUSTOMER, CUSTOMERTYPE, INVOICE     |
| Kiểm kê              | Stock Difference             | Bar Chart               | Chênh lệch tồn kho thực tế và hệ thống        | `ProductName`        | `RealStock - CurrentQuantity`            | DETAILINVENTORY, PRODUCT            |
| Kiểm kê              | Warehouse Difference Heatmap | Heatmap                 | Chênh lệch kho theo từng sản phẩm             | `WarehouseName`      | `ProductName`                            | DETAILINVENTORY, PRODUCT, WAREHOUSE |
| Kiểm kê              | Inventory Accuracy           | Gauge / Radial Chart    | Tỷ lệ chính xác tồn kho                       | —                    | `% Accuracy`                             | DETAILINVENTORY                     |
| Kiểm kê              | Warehouse Alerts             | Alert Table             | Danh sách cảnh báo kho                        | —                    | Low Stock / Overstock / Difference       | DETAILINVENTORY, PRODUCT, WAREHOUSE |
