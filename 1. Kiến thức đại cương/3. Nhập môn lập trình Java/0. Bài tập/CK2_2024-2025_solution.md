>[!note] Một số quy ước trước khi làm bài
>- Luôn khai báo model cho `JList` và `JTable`.
>- Đối với component `JList` thì luôn đặt tên là `list`, `JTable` thì luôn đặt tên là `table`.
>- `PreparedStatement` được sử dụng có tên `ps` và chỉ khai báo 1 lần duy nhất tại mỗi handler, sau đó tái sử dụng lại tên biến. Mã SQL được chèn thẳng vào constructor.
>- `ResultSet` được sử dụng có tên `rs` và có quy tắc giống `ps`.

# Câu 1

```java
JTextField txtMaSP = new JTextField();
JTextField txtTenSP = new JTextField();
JComboBox cbTenLoai = new JComboBox();
JTextField txtDVT = new JTextField();
JButton btnThem = new JButton();
```

```java
public void loadTenLoai() {
	PreparedStatement ps = conn.prepareStatement("SELECT TenLoai FROM LOAISANPHAM");
	ResultSet rs = ps.executeQuery();
	while (rs.next())
		cbTenLoai.addItem(rs.getString("TenLoai"));
}
```

```java
btnThem.addActionListener(e -> {
	String maSP = txtMaSP.getText();
	String tenSP = txtTenSP.getText();
	String tenLoai = (String)cbTenLoai.getSelectedItem();
	String DVT = txtDVT.getText();
	
	// Tim MaLoai
	
	String maLoai = "";
	
	PreparedStatement ps = conn.prepareStatement("SELECT MaLoai FROM LOAISANPHAM WHERE TenLoai = ?");
	
	ps.setString(1, tenLoai);
	
	ResultSet rs = ps.executeQuery();
	
	while (rs.next())
		maLoai = rs.getString("MaLoai");
	
	// Them san pham
	
	ps = conn.prepareStatement("INSERT INTO SANPHAM (MaSanPham, TenSanPham, MaLoai, DonViTinh, SoLuongTonKho) VALUES (?, ?, ?, ?, 0)");
	
	ps.setString(1, maSP);
	ps.setString(2, tenSP);
	ps.setString(3, maLoai);
	ps.setString(4, DVT);
	
	ps.executeUpdate();
});
```

# Câu 2

```java
DefaultTableModel model = new DefaultTableModel(new String[] {"Mã nhà cung cấp", "Tên nhà cung cấp", "Số điện thoại", "Địa chỉ"}, 0);
JTable table = new JTable(model);

JTextField txtMaNCC = new JTextField();
txtMaNCC.setEditable(false);
JTextField txtTenNCC = new JTextField();
JTextField txtSDT = new JTextField();
JTextField txtDiaChi = new JTextField();

JButton btnCapNhat = new JcolumnButton();
```

```java
public void loadTable() {
	PreparedStatement ps = conn.prepareStatement("SELECT * FROM NHACUNGCAP");
	ResultSet rs = ps.executeQuery();
	
	while (rs.next())
		model.addRow(new Object[]{
			rs.getString("MaNCC"),
			rs.getString("TenNCC"),
			rs.getString("SoDienThoai"),
			rs.getString("DiaChi")
		})
}
```

```java
table.getSelectionModel().addListSelectionListener(e -> {
	int row = table.getSelectedRow();
	
	txtMaNCC.setText(model.getValueAt(row, 0).toString());
	txtTenNCC.setText(model.getValueAt(row, 1).toString());
	txtSDT.setText(model.getValueAt(row, 2).toString());
	txtDiaChi.setText(model.getValueAt(row, 3).toString());
});
```

```java
btnCapNhat.addActionListener(e -> {
	String maNCC = txtMaNCC.getText();
	String tenNCC = txtTenNCC.getText();
	String SDT = txtSDT.getText();
	String diaChi = txtDiaChi.getText();
	
	PreparedStatement ps = conn.prepareStatement("UPDATE NHACUNGCAP SET TenNCC = ?, SoDienThoai = ?, DiaChi = ? WHERE MaNCC = ?");
	
	ps.setString(1, tenNCC);
	ps.setString(2, SDT);
	ps.setString(3, diaChi);
	ps.setString(4, maNCC);
	
	ps.executeUpdate();
});
```

# Câu 3

```java
JTextField txtMaPN = new JTextField();
JComboBox cbTenNCC = new JComboBox();
JTextField txtNgayNhap = new JTextField();

DefaultListModel lstModel = new DefaultListModel();
JList list = new JList<>(lstModel);

DefaultTableModel tbModel = new DefaultTableModel(new String[]{"Mã sản phẩm", "Tên sản phẩm", "Số lượng", "Giá"}, 0) {
	public boolean isCellEditable(int row, int column) {
		return column == 2 || column == 3;
	}
}
JTable table = new JTable(tbModel);

JButton btnThem = new JButton("Thêm");
JButton btnXoa = new JButton("Xóa");
```

```java
public void loadCbTenNCC() {
	PreparedStatement ps = conn.prepareStatement("SELECT TenNCC FROM NHACUNGCAP");
	ResultSet rs = ps.executeQuery();
	while (rs.next())
		cbTenNCC.addItem(rs.getString("TenNCC"));
}
```

```java
public void loadList() {
	PreparedStatement ps = conn.prepareStatement("SELECT TenSanPham FROM SANPHAM");
	ResultSet rs = ps.executeQuery();
	while (rs.next())
		lstModel.addElement(rs.getString("TenSanPham"));
}
```

```java
list.addListSelectionListener(e -> {
	String tenSP = (String)list.getSelectedValue();
	
	PreparedStatement ps = conn.prepareStatement("SELECT MaSanPham, SoLuongTonKho FROM SANPHAM WHERE TenSanPham = ?");
	
	ps.setString(1, tenSP);
	
	ResultSet rs = ps.executeQuery();
	
	while (rs.next())
		tbModel.addRow(new Object[]{
			rs.getString("MaSanPham"),
			tenSP,
			rs.getInt("SoLuongTonKho")
		})
	
});
```

```java
btnXoa.addActionListener(e -> {
	int row = tbModel.getSelectedRow();
	model.removeRow(row);
});
```

```java
btnThem.addActionListener(e -> {
	String maPN = txtMaPN.getText();
	String tenNCC = (String)cbTenNCC.getSelectedItem();
	String ngayNhap = txtNgayNhap.getText();
	
	// Lay maNCC
	
	String maNCC = "";
	
	PreparedStatement ps = conn.prepareStatement("SELECT MaNCC FROM NHACUNGCAP WHERE TenNCC = ?");
	
	ps.setString(1, tenNCC);
	
	ResultSet rs = ps.executeQuery();
	
	while (rs.next())
		maNCC = rs.getString("MaNCC");
	
	// Insert PHIEUNHAP
	
	ps = conn.prepareStatement("INSERT INTO PHIEUNHAP VALUES (?, ?, ?)");
	
	ps.setString(1, maPN);
	ps.setString(2, maNCC);
	ps.setString(3, ngayNhap);
	
	ps.executeUpdate();
	
	// Insert CHITIETPHIEUNHAP
	ps = conn.prepareStatement("INSERT INTO CHITIETPHIEUNHAP VALUES (?, ?, ?, ?)");
	
	PreparedStatement updateTonKho = conn.prepareStatement("UPDATE SANPHAM SET SoLuongTonKho = SoLuongTonKho + ? WHERE MaSanPham = ?");
	
	for (int i = 0; i < tbModel.getRowCount(); i++) {
		String maSP = (String)tbModel.getValueAt(i, 0);
		int sl = (Integer)tbModel.getValueAt(i, 2);
		double gia = (Double)tbModel.getValueAt(i, 3);
		
		ps.setString(1, maPN);
		ps.setString(2, maSP);
		ps.setInt(3, sl);
		ps.setDouble(4, gia);
		ps.executeUpdate();
		
		updateTonKho.setInt(1, sl);
		updateTonKho.setString(2, maSP);
		updateTonKho.executeUpdate();
	}
});
```
