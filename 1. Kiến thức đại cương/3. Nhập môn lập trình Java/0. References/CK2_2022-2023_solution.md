
# Câu 1

Khai báo UI:
```java
JLabel lbTenTour = new JLabel("Tên tour");
JTextField txtTenTour = new JTextField();

JLabel lbNgKH = new JLabel("Ngày khởi hành");
JTextField txtNgKH = new JTextField();

JLabel lbSoNgay = new JLabel("Số ngày");
JTextField txtSoNgay = new JTextField();

JLabel lbSoDem = new JLabel("Số đêm");
JTextField txtSoDem = new JTextField();

JLabel lbGiaTour = new JLabel("Giá tour");
JTextField txtGiaTour = new JTextField();

JButton btnThem = new JButton("Thêm");
```

Handler của btnThem:
```java
btnThem.addActionListener(e -> {
    try {
        String tenTour = txtTenTour.getText();
        String ngayKH = txtNgKH.getText();
        int soNgay = Integer.parseInt(txtSoNgay.getText());
        int soDem = Integer.parseInt(txtSoDem.getText());
        double giaTour = Double.parseDouble(txtGiaTour.getText());
		
        String sql =
		    "INSERT INTO TOUR " +
		    "(TenTour, NgayKhoiHanh, SoNgay, SoDem, Gia) " +
		    "VALUES (" +
		    "N'" + tenTour + "', " +
		    "'" + ngayKH + "', " +
		    soNgay + ", " +
		    soDem + ", " +
		    giaTour +
		    ")";
		
		Statement st = conn.createStatement();
		
		int kq = st.executeUpdate(sql);
		
		st.close();
		
        int kq = ps.executeUpdate();
		
        if (kq > 0) {
	        // Thêm thành công
        }
        
    } catch (Exception ex) {  
		JOptionPane.showMessageDialog(null, ex.getMessage());
	}
});
```

# Câu 2

Khai báo UI:
```java
JLabel lbTinhTP = new JLabel("Tên Tỉnh / Thành phố");
JComboBox<String> cboTinhTP = new JComboBox<>();

JLabel lbTenDDL = new JLabel("Tên điểm du lịch");
JTextField txtTenDDL = new JTextField();

JLabel lbDacTrung = new JLabel("Đặc trưng");
JTextField txtDacTrung = new JTextField();

JButton btnThem = new JButton("Thêm");
```

Nạp dữ liệu từ bảng `TINHTP` vào `cboTinhTP`:
```java
try {
    Statement st = conn.createStatement();
	
    ResultSet rs = st.executeQuery("SELECT TenTTP FROM TINHTP");
	
    while (rs.next()) {
        cboTinhTP.addItem(rs.getString("TenTTP"));
    }
	
    rs.close();
    st.close();
	
} catch (Exception ex) {
    JOptionPane.showMessageDialog(null, ex.getMessage());
}
```

Handler của btnThem:
```java
btnThem.addActionListener(e -> {
    try {
        String tenTTP = cboTinhTP.getSelectedItem().toString();
        String tenDDL = txtTenDDL.getText().trim();
        String dacTrung = txtDacTrung.getText().trim();
		
        Statement st = conn.createStatement();
		
        // Lấy MaTTP từ TenTTP
        ResultSet rs = st.executeQuery(
            "SELECT MaTTP FROM TINHTP " +
            "WHERE TenTTP = N'" + tenTTP + "'"
        );
		
        String maTTP = "";
		
        if (rs.next()) {
            maTTP = rs.getString("MaTTP");
        }
		
        rs.close();
		
        String sql =
            "INSERT INTO DIEMDL(TenDDL, MaTTP, DacTrung) " +
            "VALUES(N'" + tenDDL + "', '" + maTTP + "', N'" + dacTrung + "')";
			
        int kq = st.executeUpdate(sql);
		
        if (kq > 0) {
            // Thành công
        }
		
        st.close();
		
    } catch (Exception ex) {
        // Thất bại
    }
});
```

# Câu 3

Khai báo UI:
```java
// Hàng 1 cột 1

JLabel lbMaTour = new JLabel("Mã tour");
JTextField txtMaTour = new JTextField();

JLabel lbTenTour = new JLabel("Tên tour");
JTextField txtTenTour = new JTextField();

JLabel lbSoNgay = new JLabel("Số ngày");
JTextField txtSoNgay = new JTextField();

// Hàng 1 ct 2

JLabel lbNgayKH = new JLabel("Ngày khởi hành");
JTextField txtNgayKH = new JTextField();

JLabel lbGia = new JLabel("Giá tour");
JTextField txtGia = new JTextField();

JLabel lbSoDem = new JLabel("Số đêm");
JTextField txtSoDem = new JTextField();

// ComboBox

JComboBox<String> cboTinhTP = new JComboBox<>();

// Tables

DefaultTableModel modelDDL = new DefaultTableModel();  
JTable tblDDL = new JTable(modelDDL);  
  
DefaultTableModel modelChon = new DefaultTableModel();  
JTable tblChon = new JTable(modelChon);
modelDDL.addColumn("Tên điểm du lịch");
modelDDL.addColumn("Đặc trưng");
modelChon.addColumn("Tên điểm du lịch");

// Button

JButton btnThem = new JButton("Thêm");
```

Load tỉnh thành vào ComboBox:
```java
try {
	Statement st = conn.createStatement();
	
	ResultSet rs = st.executeQuery("SELECT TenTTP FROM TINHTP");
		
	while(rs.next()) {
		cboTinhTP.addItem(rs.getString("TenTTP"));
	}
	
	rs.close();
	st.close();
}
catch(Exception ex) {
	// Lỗi
}
```

Nhập mã tour -> hiện thông tin tour:
```java
txtMaTour.addActionListener(e -> {
    try {
        String maTour = txtMaTour.getText().trim();
        
        Statement st = conn.createStatement();
		
        ResultSet rs = st.executeQuery(
            "SELECT * FROM TOUR WHERE MaTour='" + maTour + "'"
        );
		
        if(rs.next()) {
            txtTenTour.setText(rs.getString("TenTour"));
            txtNgayKH.setText(rs.getString("NgayKhoiHanh"));
            txtGia.setText(rs.getString("Gia"));
            txtSoNgay.setText(rs.getString("SoNgay"));
            txtSoDem.setText(rs.getString("SoDem"));
        }
        
        rs.close();
        st.close();
    }
    catch(Exception ex) {
        // Lỗi
    }
});
```

Chọn tỉnh -> load các điểm du lịch:
```java
cboTinhTP.addActionListener(e -> {
    try {
        modelDDL.setRowCount(0);
        
        String tenTTP = cboTinhTP.getSelectedItem().toString();
        
        Statement st = conn.createStatement();

        String sql =
            "SELECT TenDDL, DacTrung " +
            "FROM DIEMDL D, TINHTP T " +
            "WHERE D.MaTTP=T.MaTTP " +
            "AND TenTTP=N'" +
            tenTTP + "'";
            
        ResultSet rs = st.executeQuery(sql);
		
        while(rs.next()) {
            modelDDL.addRow(
                new Object[] {
                    rs.getString("TenDDL"),
                    rs.getString("DacTrung")
                }
            );
        }
        rs.close();
        st.close();
    }
    catch(Exception ex) {
        // Lỗi
    }
});
```

Chọn điểm du lịch -> đưa sang bảng bên phải:
```java
tblDDL.addMouseListener(
    new MouseAdapter() {
        @Override
        public void mouseClicked(
            MouseEvent e
        ) {
            int row = tblDDL.getSelectedRow();
            
            String tenDDL = modelDDL.getValueAt(row, 0).toString();
            
            modelChon.addRow( new Object[] { tenDDL } );
        }
    }
);
```

Nút Thêm:
```java
btnThem.addActionListener(e -> {
    try {
        String maTour = txtMaTour.getText().trim();
        Statement st = conn.createStatement();
        
        for(int i = 0; i < modelChon.getRowCount(); i++) {
            String tenDDL = modelChon.getValueAt(i,0).toString();
            
            ResultSet rs = st.executeQuery(
                "SELECT MaDDL " +
                "FROM DIEMDL " +
                "WHERE TenDDL=N'" +
                tenDDL + "'"
            );
            
            if(rs.next()) {
                String maDDL = rs.getString("MaDDL");
                st.executeUpdate(
                    "INSERT INTO CHITIET " +
                    "VALUES('" +
                    maTour + "','" +
                    maDDL + "')"
                );
            }
            
            rs.close();
        }
        
        st.close();
        
        // Thêm thành công
    }
    catch(Exception ex) {
        // Lỗi
    }
});
```

