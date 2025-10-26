
Bài đọc liền trước: [[Giới thiệu & Cài đặt Pandas]].

# Khai báo Serie và DataFrame

```python
pandas.Series()
```

^877ed8

Trả về một Serie. Có các tham số như:
- `data=None` (iterable): Dữ liệu của Serie.
- `index=[0, 1, 2, 3,...]` (array | `None`): Index của Serie. Trong trường hợp `data` là `dict`, `index` sẽ nhận các key làm giá trị.
- `dtype=infer`: Kiểu dữ liệu của Serie.
- `copy=True`: Là `False` thì dữ liệu nạp vào Serie sẽ là tham chiếu.

```python
pandas.DataFrame()
```

^43f7fe

Trả về một DataFrame. Có các tham số như:
- `data=None` (iterable, DataFrames...): Dữ liệu của DataFrame:
	- `dict`: Key là tên cột, value là các danh sách. VD: `pd.DataFrame({'a': [1, 2], 'b': [3, 4]})`.
	- `list`: Mỗi phần tử chứa một dict tượng trưng cho 1 hàng. VD: `pd.DataFrame([{'a': 1, 'b': 3}, {'a': 2, 'b': 4}])`.
- `index=[0, 1, 2, 3,...]` (array | `None`): Index của DataFrame. Trong trường hợp `data` là dict, `index` sẽ nhận các key làm giá trị.
- `columns=[0, 1, 2, 3,...]` (array | `None`): Tên các field.
- `dtype=infer`: Kiểu dữ liệu của Serie.
- `copy`: Là `False` thì dữ liệu nạp vào DataFrame sẽ là tham chiếu. Nếu `data` là DataFrame hay ndarray thì `copy=False`.

# Liên kết DataFrame với file dữ liệu

## .csv

```python
pandas.read_csv()
```
Trả về một DataFrame.

```python
pandas.to_csv()
```
Ghi dữ liệu vào file csv.

2 phương thức trên có một số tham số tương ứng như sau:

| Chức năng                    | `read_csv()`                                                                              | `to_csv()`                                                                                |
| ---------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Địa chỉ đích / nguồn**     | `filepath_or_buffer`: Địa chỉ đọc file.                                                   | `path_or_buf`: Địa chỉ lưu file.                                                          |
| **Ghi/Đọc index**            | `index_col`: Chỉ định cột làm index, thường là `None`.                                    | `index=True/False`: Có ghi index không, thường là `False`.                                |
| **Tên field**                | `header=0/None/...`: Chỉ định record nào là danh sách tên field.                          | `header=True/False`: Có ghi tên field không.                                              |
| **Phạm vi đọc xuất dữ liệu** | `usecols=[...]`: Tên các field sẽ được đọc vào file.                                      | `columns=[...]`: Tên các field sẽ được ghi ra file.                                       |
| **Phân cách field**          | `sep=','`                                                                                 | `sep=','`                                                                                 |
| **Phân cách record**         | `lineterminator='\n'`                                                                     | `lineterminator='\n'`                                                                     |
| **Kiểu**                     | `dtype={col: type,...}` – ép kiểu khi đọc                                                 | --                                                                                        |
| **Chế độ mã hóa ký tự**      | `encoding='...'` thường là `utf-8-sig` là chế độ mã hóa Unicode có tương thích với Excel. | `encoding='...'` thường là `utf-8-sig` là chế độ mã hóa Unicode có tương thích với Excel. |
| **Định dạng số thực**        | --                                                                                        | `float_format='%.2f'` nghĩa là làm tròn 2 chữ số phần thập phân.                          |
| **Xử lý `NaN`**              | `na_values=[...]`: Những giá trị được liệt kê trong danh sách này sẽ được coi là `NaN`.   | `na_rep=''`: Ký tự thay thế `NaN` khi ghi.                                                |
| **Chế độ mở file**           | --                                                                                        | `mode='w'`. Thường dùng 2 chế độ là `w` cho ghi đè và `a` cho ghi thêm.                   |

## Các loại file khác

Ngoài `.csv` còn có một số file được hỗ trợ với tham số tương tự như:

### Các file văn bản thô (Text-based)

| Định dạng                  | Hàm đọc              | Hàm ghi            |
| -------------------------- | -------------------- | ------------------ |
| CSV (`.csv`)               | `read_csv()`         | `to_csv()`         |
| TSV / TXT (`.tsv`, `.txt`) | `read_csv(sep='\t')` | `to_csv(sep='\t')` |
| Fixed-width (`.txt`)       | `read_fwf()`         | --                 |
| Clipboard                  | `read_clipboard()`   | `to_clipboard()`   |

### Các file Excel

|Định dạng|Hàm đọc|Hàm ghi|
|---|---|---|
|Excel (`.xls`, `.xlsx`, `.xlsm`, `.xlsb`, `.odf`, `.ods`)|`read_excel()`|`to_excel()`|

### Các file JSON/XML

|Định dạng|Hàm đọc|Hàm ghi|
|---|---|---|
|JSON (`.json`)|`read_json()`|`to_json()`|
|NDJSON (`.jsonl`)|`read_json(lines=True)`|`to_json(orient='records', lines=True)`|
|XML (`.xml`)|`read_xml()`|`to_xml()` (>= pandas 1.3)|

### Cơ sở dữ liệu

| Nguồn                             | Hàm đọc                           | Hàm ghi    |
| --------------------------------- | --------------------------------- | ---------- |
| SQLite / PostgreSQL / MySQL, etc. | `read_sql()` / `read_sql_query()` | `to_sql()` |
Cần cài thêm các module `sqlalchemy` hoặc `sqlite3`.
