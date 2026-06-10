
>[!note] Một số quy ước trước khi làm bài
>- Luôn khai báo `JComboBox` là `JComboBox<String> ... = new JComboBox<>(new String[] {...});`.
>- Luôn khai báo model cho `JList` và `JTable`.
>- Đối với component `JList` thì luôn đặt tên là `list`, `JTable` thì luôn đặt tên là `table`.
>- `PreparedStatement` được sử dụng có tên `ps` và chỉ khai báo 1 lần duy nhất tại mỗi handler, sau đó tái sử dụng lại tên biến. Mã SQL được chèn thẳng vào constructor.
>- `ResultSet` được sử dụng có tên `rs` và có quy tắc giống `ps`.

# Câu 1

```java
JTextField txtTenHLV = new JTextField();

JComboBox<String> cbGioiTinh = new JComboBox<>(new String[] {"Nam", "Nữ"});

JTextField txtCCCD = new JTextField();

JTextField txtSoDT = new JTextField();

JTextField txtBietDanh = new JTextField();

JButton btnThem = new JButton("Thêm");
```

```java
btnThem.addActionListener(e -> {
	String tenHLV = txtTenHLV.getText();
	String gioiTinh = cbGioiTinh.getSelectedItem().toString();
	String CCCD = txtCCCD.getText();
	String soDT = txtSoDT.getText();
	String bietDanh = txtBietDanh.getText();
	
	PreparedStatement ps = conn.prepareStatement(
		"INSERT INTO HLV (TenHLV, GioiTinh, CCCD, SoDT, BietDanh) " +
		"VALUES (?, ?, ?, ?, ?)"
	);
	
	ps.setString(1, tenHLV);
	ps.setString(2, gioiTinh);
	ps.setString(3, CCCD);
	ps.setString(4, soDT);
	ps.setString(5, bietDanh);
	
	ps.executeUpdate();
});
```

# Câu 2

```java
JTextField txtMaHV = new JTextField();

JTextField txtTenHV = new JTextField();

JComboBox<String> cbTenGoi = new JComboBox<>();

JComboBox<String> cbTenHLV = new JComboBox<>();

JTextField txtNgayTap = new JTextField();

JTextField txtGioTap = new JTextField();

JButton btnThem = new JButton("Thêm");
```

```java
txtMaHV.addActionListener(e -> {
	String maHV = txtMaHV.getText();
	
	// Lấy tên hội viên
	
	PreparedStatement ps = conn.prepareStatement(
		"SELECT TenHV " +
		"FROM HOIVIEN " +
		"WHERE MaHV = ?"
	);
	
	ps.setString(1, maHV);
	
	ResultSet rs = ps.executeQuery();
	
	if (rs.next())
		txtTenHV.setText( rs.getString("TenHV") );
	
	// Lấy danh sách gói tập
	
	cbTenGoi.removeAllItems();
	
	ps = conn.prepareStatement(
		"SELECT gt.TenGoi " +
		"FROM DANGKY dk " +
		"JOIN GOITAP gt ON gt.MaGoi = dk.MaGoi " +
		"WHERE dk.MaHV = ? " +
		"AND dk.SoBuoiConLai > 0"
	);
	ps.setString(1, maHV);
	
	rs = ps.executeQuery();
	
	while (rs.next())
		cbTenGoi.addItem(rs.getString("TenGoi"));
	
	// Lấy danh sách HLV
	cbTenHLV.removeAllItems();
	
	ps = conn.prepareStatement(
		"SELECT BietDanh " +
		"FROM HLV"
	);
	
	rs = ps.executeQuery();

	while (rs.next())
		cbTenHLV.addItem(rs.getString("BietDanh"));
```

```java
btnThem.addActionListener(e -> {
	String maHV = txtMaHV.getText();
	String tenGoi = cbTenGoi.getSelectedItem().toString();
	String bietDanh = cbTenHLV.getSelectedItem().toString();
	String ngayTap = txtNgayTap.getText();
	String gioTap = txtGioTap.getText();
	
	String maDK = "";
	String maHLV = "";
	
	// Lấy MaDK
	
	PreparedStatement ps = conn.prepareStatement(
		"SELECT dk.MaDK " +
		"FROM DANGKY dk " +
		"JOIN GOITAP gt ON gt.MaGoi = dk.MaGoi " +
		"WHERE dk.MaHV = ? " +
		"AND gt.TenGoi = ?"
	);
	
	ps.setString(1, maHV);
	ps.setString(2, tenGoi);
	
	ResultSet rs = ps.executeQuery();
	
	if (rs.next())
		maDK = rs.getString("MaDK");
	
	// Lấy MaHLV
	ps = conn.prepareStatement(
		"SELECT MaHLV " +
		"FROM HLV " +
		"WHERE BietDanh = ?"
	);
	
	ps.setString(1, bietDanh);
	
	rs = ps.executeQuery();
	
	if (rs.next())
		maHLV = rs.getString("MaHLV");
	
	
	// Thêm buổi tập
	ps = conn.prepareStatement(
		"INSERT INTO TAP(MaDK, MaHLV, NgayTap, GioTap) " +
		"VALUES (?, ?, ?, ?)"
	);
	
	ps.setString(1, maDK);
	ps.setString(2, maHLV);
	ps.setString(3, ngayTap);
	ps.setString(4, gioTap);
	
	ps.executeUpdate();
	
	// Trừ số buổi còn lại
	ps = conn.prepareStatement(
		"UPDATE DANGKY " +
		"SET SoBuoiConLai = SoBuoiConLai - 1 " +
		"WHERE MaDK = ?"
	);
	
	ps.setString(1, maDK);
	
	ps.executeUpdate();
});
```

# Câu 3

```java
JTextField txtMaHV = new JTextField();

JTextField txtTenHV = new JTextField();

DefaultListModel<String> lstModel = new DefaultListModel<>();
JList<String> list = new JList<>(lstModel);

DefaultTableModel tbModel = new DefaultTableModel(new String[] {"Gói tập được đăng ký", "Số buổi đăng ký"}, 0);
JTable table = new JTable(tbModel);

JButton btnThem = new JButton("Thêm");
```

```java
txtMaHV.addActionListener(e -> {
	String maHV = txtMaHV.getText();
	
	PreparedStatement ps = conn.prepareStatement("SELECT TenHV FROM HOIVIEN WHERE MaHV = ?");
	
	ps.setString(1, maHV);
	
	ResultSet rs = ps.executeQuery();
	
	while (rs.next())
		txtTenHV.setText(rs.getString("TenHV"));
});
```

```java
public void loadGoi() {
	PreparedStatement ps = conn.prepareStatement("SELECT TenGoi FROM GOITAP");
	ResultSet rs = ps.executeQuery();
	
	while(rs.next())
		lstModel.addElement(rs.getString("TenGoi"));
}
```

```java
list.addListSelectionListener(e -> {
	String tenGoi = list.getSelectedValue();
	tbModel.addRow(new Object[] {tenGoi, null});
});
```

```java
btnThem.addActionListener(e -> {
	for (int i = 0; i < tbModel.getRowCount(); i++) {
		String tenGoi = (String)tbModel.getValueAt(i, 0);
		int soBuoiConLai = (Integer)tbModel.getValueAt(i, 1);
		String maHV = txtMaHV.getText();
		
		// Lấy maGoi
		String maGoi = "";
		
		PreparedStatement ps = conn.prepareStatement("SELECT MaGoi FROM GOITAP WHERE TenGoi = ?");
		
		ps.setString(1, tenGoi);
		
		ResultSet rs = ps.executeQuery();
		
		while (rs.next())
			maGoi = rs.getString("MaGoi");
		
		// Insert vào DANGKY
		ps = conn.prepareStatement("INSERT INTO DANGKY (MaHV, MaGoi, SoBuoiDK, SoBuoiConLai) VALUES (?, ?, ?, ?)");
		
		ps.setString(1, maHV);
		ps.setString(2, maGoi);
		ps.setInt(3, soBuoiConLai);
		ps.setInt(4, soBuoiConLai);
		
		ps.executeUpdate();
	}
});
```














