
**Câu 1**:

**Tên kho dữ liệu**: DWDuLich.
**Bảng fact**: TOURDULICH.
**Bảng dim**: KHACHDULICH, HUONGDANVIEN, DIEMDEN, LOAIHINHDULICH, TOURDULICH, NHOM, NAM.

![[CK2_2023-2024_db.svg]]

**Độ đo**:
1. Đếm số ngày đi `[Count NgayDi]`:
```mdx
COUNT(
	DISTINCT(
		[TOURDULICH].[NgayDi].[NgayDi].MEMBERS
	)
)
```

2. Tổng số ngày đi `[Sum SoNgay]`:
```mdx
SUM (
	[TOURDULICH].[SoNgay].[SoNgay].MEMBERS
)
```

3. Trung bình số ngày đi `[Avg NgayDi]`:
```mdx
[Measures].[Sum SoNgay] / [Measures].[Count NgayDi]
```

Đếm số tour `[Count tour]`:
```mdx
COUNT(
	DISTINCT(
		[TOURDULICH].[MaTour].[MaTour].MEMBERS
	)
)
```


**Câu 3**:

a - Với mỗi quý trong năm 2023, cho biết 02 loại hình du lịch có số tour du lịch nhiều nhất.

```mdx
SELECT
    [Measures].[Count tour] ON COLUMNS,
    GENERATE(
        [NAM].[Quy].[Quy].MEMBERS,
        TOPCOUNT(
            [NAM].[Quy].CURRENTMEMBER *
            [LOAIHINHDULICH].[TenLoaiHinhDL].[TenLoaiHinhDL].MEMBERS,
            2,
            [Measures].[Count tour]
        )
    ) ON ROWS
FROM [DWDuLich]
WHERE ( [NAM].[Nam].&[2023] )
```

b - Top 03 hướng dẫn viên dẫn nhiều tour nhất trong cả hai năm 2022 và 2023.

```mdx
SELECT
    [Measures].[Count tour] ON COLUMNS,
    TOPCOUNT(
        [HUONGDANVIEN].[HoTenHDL].[HoTenHDL].MEMBERS,
        3,
        [Measures].[Count tour]
    ) ON ROWS
FROM (
    SELECT { [NAM].[Nam].&[2022], [NAM].[Nam].&[2023] } ON COLUMNS
    FROM [DWDuLich]
)
```

**Câu 2**:

1 - Điểm đến có trung bình số ngày đi của mỗi lần khởi hành từ 5 ngày trở lên trong năm 2023.

```mdx
SELECT
    {
	    [Measures].[Sum SoNgay], [Measures].[Count NgayDi],
	    [Measures].[Avg NgayDi]
	} ON COLUMNS,
    FILTER(
        [DIEMDEN].[Ten].[Ten].MEMBERS,
        [Measures].[Avg NgayDi] >= 5
    ) ON ROWS
FROM [DWDuLich]
WHERE ( [NAM].[Nam].&[2023] )
```

2 - Drill down theo yếu tố thời gian (Năm → Quý → Tháng).

```mdx
SELECT
    {
	    [Measures].[Sum SoNgay],
	    [Measures].[Avg NgayDi]
	} ON COLUMNS,
    DRILLDOWNLEVEL(
        DRILLDOWNLEVEL(
            [NAM].[Nam - Quy - Thang - Ngay].[Nam].MEMBERS
        )
    ) ON ROWS
FROM [DWDuLich]
```

3 - Top 5 quốc gia của khách du lịch có nhiều khách tham gia tour nhất, kèm tổng số ngày đi.

```mdx
WITH MEMBER [Measures].[SoKhach] AS
    COUNT(
        NONEMPTY(
            [KHACHDULICH].[MaKDL].[MaKDL].MEMBERS,
            [Measures].[Sum SoNgay]
        )
    )
SELECT
    { [Measures].[SoKhach], [Measures].[Sum SoNgay] } ON COLUMNS,
    TOPCOUNT(
        [KHACHDULICH].[QuocGiaKDL].[QuocGiaKDL].MEMBERS,
        5,
        [Measures].[SoKhach]
    ) ON ROWS
FROM [DWDuLich]
```









