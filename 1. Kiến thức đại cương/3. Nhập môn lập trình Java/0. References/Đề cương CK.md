
# COMMON COMPONENTS

### Một số JComponent

| JComponent     | Review                                                                                                 | Basic constructor parameters      | Getter                                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `JLabel`       | Chữ hiển thị.                                                                                          | `String text`                     | --                                                                                                                                                                                                                                               |
| `JTextField`   | Ô nhập liệu trên 1 dòng.                                                                               | `String text`                     | - `getText()`: Lấy nội dung.                                                                                                                                                                                                                     |
| `JTextArea`    | Ô nhập liệu trên nhiều dòng.                                                                           | `String text`                     | - `getText()`: Lấy nội dung.<br><br>- `getLineCount()`: Số dòng.<br><br>- `insert(String str, int pos)`: Đặt `str` vào `pos`.<br><br>- `append(String str)`: Thêm `str` vào cuối textarea.<br><br>- `paramString()`: Lấy văn bản trong textarea. |
| `JButton`      | ![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjkhPAlEfRzv8dUwLnB65OP7oDEApIMmVKtA&s)      | `String text`                     | --                                                                                                                                                                                                                                               |
| `JCheckBox`    | ![](https://docs.oracle.com/javase/tutorial/figures/uiswing/components/CheckBoxDemoMetal.png)          | `String text`, `boolean selected` | - `isSelected()`: Boolean.                                                                                                                                                                                                                       |
| `JRadioButton` | ![](https://docs.oracle.com/javase/tutorial/figures/uiswing/components/RadioButtonDemoMetal.png)       | `String text`, `boolean selected` | - `isSelected()`: Boolean.                                                                                                                                                                                                                       |
| `JList`        | ![](https://docs.oracle.com/javase/tutorial/figures/uiswing/components/ListDemo.png)                   | `Object []item`                   | - `getSelectedValue()`.<br>-`.getSelectedValuesList()`.<br>                                                                                                                                                                                      |
| `JComboBox`    | ![](https://docs.oracle.com/javase/tutorial/figures/uiswing/components/EditableComboBoxMenuMetal2.png) | `Object []item`                   | - `getSelectedItem()`.<br><br>- `addITem(Object item)`.<br>- `removeITem(Object item)`.<br>- `removeAllItems().                                                                                                                                  |
| `JTable`       | ![](https://docs.oracle.com/javase/tutorial/figures/uiswing/misc/TablePrintDemo1.png)                  |                                   | - `getSelectedRow()`.<br>- `getSelectedRows()`.<br>(Tương tự với `Column`).<br><br>- `setAutoCreateRowSorter(true)`: Sắp xếp tăng giảm khi click vào header.                                                                                     |

### Các method lấy và sửa giá trị của component

| JComponent                     | Lấy                                                                                                                                                      | Sửa                                                                                 |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `JTextField`                   | `getText()`                                                                                                                                              | `setText("abc")`                                                                    |
| `JTextArea`                    | `getText()`                                                                                                                                              | `setText("abc")`                                                                    |
| `JButton`                      | `getText()`                                                                                                                                              | `setText("abc")`                                                                    |
| `JCheckBox`                    | `isSelected()`                                                                                                                                           | `setSelected(true/false)`                                                           |
| `JRadioButton`                 | `isSelected()`                                                                                                                                           | `setSelected(true/false)`                                                           |
| `JComboBox`                    | `getSelectedItem()`<br><br>`getSelectedIndex()`                                                                                                          | `setSelectedItem(obj)`<br><br>`setSelectedIndex(i)`                                 |
| `JList`                        | `getSelectedValue()`<br><br>`getSelectedValuesList()`<br><br>`getSelectedIndex()`                                                                        | `setSelectedIndex(i)`<br><br>`setSelectedValue(obj, true)`                          |
| `JTable` (`DefaultTableModel`) | `tbModel.getValueAt(row, col)`<br><br>`tbModel.getSelectedRow()` (index của row được chọn)<br><br>`table.setRowSelectionInterval(row, row)` (chọn 1 row) | `tbModel.setValueAt(value, row, col)`<br><br>`table.clearSelection()` (bỏ chọn row) |

Đối với `JComboBox`, `JList`, `JTable`, các getter của nó trả về object nên cần ép về kiểu dữ liệu đúng, ví dụ như `(String)`, `(Integer)`, `(Double)`,...

### Các method thay đổi cấu trúc option / row của component

| JComponent                     | Thêm option / row                                              | Xóa option / row                                                                         |
| ------------------------------ | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `JComboBox`                    | `addItem(item)`                                                | `removeItem(item)`<br><br>`removeItemAt(index)`<br><br>`removeAllItems()`                |
| `JList` (`DefaultListModel`)   | `lstModel.addElement(item)`<br><br>`lstModel.add(index, item)` | `lstModel.remove(index)`<br><br>`lstModel.removeElement(item)`<br><br>`lstModel.clear()` |
| `JTable` (`DefaultTableModel`) | `model.addRow(rowData)`<br><br>`model.addColumn(name)`         | `model.removeRow(row)`<br><br>`model.setRowCount(0)` (xóa tất cả row)                    |

### Một số method chung

| Method                                  | Ý nghĩa                                                   |
| --------------------------------------- | --------------------------------------------------------- |
| `setEnabled(boolean)` / `isEnabled()`   | Bật / tắt tương tác                                       |
| `setEditable(boolean)` / `isEditable()` | Bật / tắt chỉnh sửa nội dung (`JTextField`, `JTextArea`). |
| `setVisible(boolean)` / `isVisible()`   | Hiện / ẩn                                                 |
| `setToolTipText(String)`                | Tooltip khi hover                                         |

### `JTable` (`DefaultTableModel`)

| Method                               | Ý nghĩa                |
| ------------------------------------ | ---------------------- |
| `table.setAutoCreateRowSorter(true)` | Bật sort cột.          |
| `tbModel.getRowCount()`              | Số dòng                |
| `tbModel.getColumnCount()`           | Số cột                 |
| `tbModel.getColumnName(i)`           | Tên cột                |
| `tbModel.isCellEditable(row,col)`    | Cho sửa cell hay không |

### `DefaultListModel`

| Method            | Ý nghĩa           |
| ----------------- | ----------------- |
| `getSize()`       | Số phần tử.       |
| `contains("abc")` | Kiểm tra tồn tại. |
| `indexOf("abc")`  | Tìm vị trí.       |
| `clear()`         | Xóa toàn bộ.      |
| `toArray()`       | Chuyển sang mảng. |

### `JComboBox`

| Method             | Ý nghĩa          |
| ------------------ | ---------------- |
| `getItemCount()`   | Số item.         |
| `removeAllItems()` | Xóa tất cả item. |

### Listener


**Các listener dùng được cho hầu hết mọi component**:

| Listener                       | Mục đích                               |
| ------------------------------ | -------------------------------------- |
| `.addMouseListener()`          | Click chuột, double click, enter, exit |
| `.addMouseMotionListener()`    | Di chuyển, kéo chuột                   |
| `.addMouseWheelListener()`     | Lăn chuột                              |
| `.addKeyListener()`            | Nhấn/thả phím                          |
| `.addFocusListener()`          | Nhận/mất focus                         |
| `.addComponentListener()`      | Resize, di chuyển, ẩn/hiện component   |
| `.addPropertyChangeListener()` | Giá trị property thay đổi              |

**Một số event thường dùng phân loại theo component**:

| JComponent     | Event listener                         | Xảy ra khi                 |
| -------------- | -------------------------------------- | -------------------------- |
| `JTextField`   | `.addActionListener()`                 | Nhấn Enter trong ô nhập    |
| `JTextField`   | `.getDocument().addDocumentListener()` | Thay đổi giá trị khi nhập. |
| `JTextArea`    | `.getDocument().addDocumentListener()` | Thay đổi giá trị khi nhập. |
| `JButton`      | `.addActionListener()`                 | Nhấn nút                   |
| `JCheckBox`    | `.addActionListener()`                 | Tick/Bỏ tick               |
| `JRadioButton` | `.addActionListener()`                 | Chọn radio button          |
| `JList`        | `.addListSelectionListener()`          | Chọn item mới.             |
| `JComboBox`    | `.addActionListener()`                 | Chọn item mới              |

**Riêng đối với `JTable`**:
```java
// Theo dõi row
table.getSelectionModel().addListSelectionListener(e -> {
    int row = table.getSelectedRow(); // Lấy index của row được chọn
    if (row != -1)
        System.out.println("Đã chọn row: " + row);
});

// Theo dõi cell
// getModel() tương đương model
table.getModel().addTableModelListener(e -> {
    int row = e.getFirstRow();
    int col = e.getColumn();
    System.out.println("Cell thay đổi: " + row + ", " + col);
});
```

# SPECIAL COMPONENTS

### `JRadioButton` và `ButtonGroup`

**VD1**: Khai báo các `JRadioButton` độc lập -> Người dùng có thể tùy ý chọn như `JCheckBox`.
```java
JRadioButton radNam = new JRadioButton("Nam");
JRadioButton radNu = new JRadioButton("Nữ");
```

**VD2**: Sử dụng `ButtonGroup` -> Người dùng **chỉ được chọn một** lựa chọn.
```java
ButtonGroup groupGioiTinh = new ButtonGroup();

groupGioiTinh.add(radNam);
groupGioiTinh.add(radNu);
```

### `JList`

#### `SINGLE_SELECTION` và `MULTIPLE_INTERVAL_SELECTION`

**VD1**: Chỉ cho phép chọn 1 item.
```java
String[] dsTinhThanh = { "Hà Nội", "Đà Nẵng" };

JList lstTinhThanh = new JList(dsTinhThanh);

lstTinhThanh.setSelectionMode(
    ListSelectionModel.SINGLE_SELECTION
);

// Sử dụng getSelectedIndex để lấy item được chọn
```

**VD2**: Chỉ cho phép chọn nhiều item.
```java
lstTinhThanh.setSelectionMode(
    ListSelectionModel.MULTIPLE_INTERVAL_SELECTION
);

// Sử dụng getSelectedValuesList để lấy danh sách item được chọn
```

### `JList`

#### `DefaultListModel`

Khác với `JComboBox` có thể tùy ý thêm xóa item, `JList` phải thông qua model của nó.
```java
DefaultListModel lstModel = new DefaultListModel<>();

JList list = new JList<>(lstModel);

// Thêm item
lstModel.addElement("Java");

// Xóa item
lstModel.removeElement("Python");

// Xóa hết
lstModel.clear();
```

### `JComboBox`

Tối ưu hơn cho trường hợp `SINGLE_SELECTION` của `JList`.

```java
String[] dsLoaiTour = { "Trong nước", "Nước ngoài", "Cao cấp" };

JComboBo cboLoaiTour = new JComboBox(dsLoaiTour);
```

### `JTable`

#### `DefaultTableModel`

Trên thực tế, `JTable` được dùng giống `JList` cho các trường hợp CRUD chuyên sâu.

**Khởi tạo `JTable` không có dữ liệu**:
```java
String[] columns = { "Mã SV", "Họ tên", "Điểm" };

DefaultTableModel tbModel = new DefaultTableModel(columns, 0);
// 0 nghĩa là chưa có row

JTable table = new JTable(tbModel);
```

**Khởi tạo `JTable` có dữ liệu**:
```java
Object[][] data = { {"SV01", "An", 8.5}, {"SV02", "Bình", 9.0} };

String[] columns = { "Mã SV", "Họ tên", "Điểm" };

DefaultTableModel tbModel = new DefaultTableModel(data, columns);

JTable table = new JTable(tbModel);
```

**Một số phương thức quan trọng của `DefaultTableModel`**:
```java
// Thêm dòng
tbModel.addRow(new Object[]{ "SV03", "Cường", 7.5 });

// Chèn dòng tại row có index 1 (0-based)
tbModel.insertRow( 1, new Object[]{ "SV03", "Cường", 7.5 });

// Xóa dòng
tbModel.removeRow(row);

// Xóa hết dòng
tbModel.setRowCount(0);

// Đếm số dòng / cột
tbModel.getRowCount(); // getColumnCount();

// Lấy dữ liệu
tbModel.getValueAt(row, col); // Cần ép kiểu, vd (String), (Integer), (Double), (Boolean) 

// Gán dữ liệu
tbModel.setValueAt( "Nguyễn Văn A", 0, 1 );
```

#### Các loại cell đặc biệt của `JTable`

**Checkbox**: Nếu cột có kiểu dữ liệu `Boolean`, `JTable` tự động hiển thị thành `JCheckBox`.
```java
DefaultTableModel tbModel = new DefaultTableModel(
    new Object[][]{ {"SV01", "An", true}, {"SV02", "Bình", false} },
    new String[]{"Mã", "Tên", "Đã đóng học phí"}
) {
    @Override
    public Class<?> getColumnClass(int column) {
        if (column == 2) return Boolean.class;
        return String.class;
    }
};

JTable table = new JTable(tbModel);
```

**Điều khiển khả năng chỉnh sửa nội dung cell**: Ghi đè phương thức `isCellEditable`.
```java
DefaultTableModel tbModel = new DefaultTableModel(columns, 0) {
    public boolean isCellEditable(int row, int column) {
        return column == 0; // Chỉ sửa được các cột 0
    }
};
```

# JDBC

| Method            | Dùng cho                                | Giá trị trả về |
| ----------------- | --------------------------------------- | -------------- |
| `executeQuery()`  | `SELECT`                                | `ResultSet`    |
| `executeUpdate()` | `INSERT`, `UPDATE`, `DELETE`, DDL       | `int`          |
| `execute()`       | Không biết trước loại SQL hoặc SQL động | `boolean`      |

Some snipped code:

**Max id**:
```sql
SELECT MAX(id) AS max_id FROM ten_bang;
```

**Insert data**:
```sql
INSERT INTO ten_bang (cot1, cot2, cot3)  
VALUES (gia_tri1, gia_tri2, gia_tri3);
```

**Delete data**:
```sql
DELETE FROM ten_bang
WHERE id = 5;

-- Delete all
DELETE FROM ten_bang;
```

**Update data**:
```sql
UPDATE ten_bang
SET cot1 = gia_tri_moi,
    cot2 = gia_tri_moi
WHERE id = 1;
```
