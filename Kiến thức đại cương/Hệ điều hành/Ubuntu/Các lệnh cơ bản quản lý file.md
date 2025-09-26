
[[Giới thiệu & Cài đặt Ubuntu trên máy ảo VMWare]].

Trang web phân tích các lệnh shell: [Explains shell](https://explainshell.com/).

Các lệnh shell có dạng tổng quát là:
```shell
command [options] [arguments]
```
Trong đó:
- **command**: Tên lệnh / chương trình cần chạy (VD: `ls`, `cat`, `echo`, `grep`, ...).
- **options** (tuỳ chọn): Thay đổi cách hoạt động của lệnh, thường bắt đầu bằng `-` hoặc `--` (VD: `ls -laht`, `grep --ignore-case`).
- **arguments** (đối số): Dữ liệu hoặc đối tượng mà lệnh sẽ xử lý (VD: file, thư mục, chuỗi).

# Một vài option thông dụng

| Option   | Tên       | Ý nghĩa                                    |
| -------- | --------- | ------------------------------------------ |
| `r`, `R` | Recursive | Xử lý ở folder hiện tại và các folder con. |
| `p`      | Parent    | Xử lý folder cha.                          |
| `f`      | Force     | Bỏ qua các file / folder lỗi.              |
| `v`      | Verbose   | Hiển thị chi tiết thông tin xử lý.         |

# Một vài lệnh thông dụng

| Lệnh                   | Tên                     | Copy                                                                                                                                                                                                                                       |
| ---------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `cd [p]`               | Change directory        | Di chuyển đến `p`.                                                                                                                                                                                                                         |
| `ls -laht [p]`         | Listing                 | Liệt kê các folder/file ở `p`.                                                                                                                                                                                                             |
| `pwd`                  | Print working directory | In đường dẫn tuyệt đối ở folder hiện tại.                                                                                                                                                                                                  |
| `touch [p/file]`       | Touch                   | Tạo một file tại `p`.                                                                                                                                                                                                                      |
| `mkdir -pm [p/folder]` | Make directory          | Tạo một folder tại `p`.                                                                                                                                                                                                                    |
| `rm -vrf [p]`          | Remove                  | Xóa file/folder tại `p`.                                                                                                                                                                                                                   |
| `mv -pvrf [p1] [p2]`   | Move                    | Di chuyển file/folder từ `p1` đến `p2`.                                                                                                                                                                                                    |
| `cp -pvrf [p1] [p2]`   | Remove                  | Sao chép file/folder từ `p1` đến `p2`.                                                                                                                                                                                                     |
| `chmod -r [mode] [p]`  | Change mode             | Thay đổi phân quyền tại file/folder tại `p`.                                                                                                                                                                                               |
| `vi [p]`               | Visual editor           | Mở visual editor cho file `p`.                                                                                                                                                                                                             |
| `cat [files]`          | Concatenate             | `files` đại diện là tên các file hoặc giá trị. Nối các giá trị này lại, sau đó in ra.<br><br>Đích in ra có thể là:<br>- **Để trống**: In ra màn hình.<br>- `> file.txt`: In đè vào `file.txt`.<br>- `>> file.txt`: In tiếp vào `file.txt`. |

Chú ý: `p` là ký hiệu của path - đường dẫn.

# Biểu diễn path

Có các cách biểu diễn path như sau:
1. `/` ở cuối path: Folder đích, có thể không ghi.
2. `../`: Di chuyển đến folder cha của folder/file hiện tại.

VD: Có cây:
```shell
usr/
├── A/
└── B/
	├── b.txt
    └── C/
        └── c.txt
```
Giả sử terminal được mở tại `C/`.
- Path đến `c.txt`: `c.txt`.
- Path đến `b.txt`: `../b.txt`.
- Path đến `usr/`: `../..` hay `../../`.

# Một số trình soạn thảo

## Visual editor

Visual editor là một trình soạn thảo văn bản được tích hợp vào Linux, chạy ngay trong terminal.

Các chế độ làm việc trong Visual:

Khi mở visual bằng lệnh `vi`, mặc định bạn đang ở chế đọc READ.
- Bạn có thể chuyển qua chế độ INSERT bằng cách nhấn `i` khi đang ở READ.
- Để trở về chế độ READ, nhấn nút `Esc`.

Ở chế độ READ, có 3 thao tác sau:
1. `d`: Xóa 1 ký tự.
2. `dd`: Xóa 1 dòng.
3. `yy`: Copy 1 dòng.
4. `p`: Dán dữ liệu từ clipboard vào.
5. `:q`: Thoát khỏi visual.
6. `:wq`: Lưu và thoát khỏi visual.

## Visual improved (Vim)

**Vim** là bản cải tiến của Visual editor, hỗ trợ nhiều tính năng như:
1. Undo, redo.
2. Highlight.
3. Plugin.
4. Find, Replace.
5. Chạy ở CLI và GUI.

Cài đặt Vim:
```sh
apt-get install vim
```

Định vị Vim:
```sh
which vim
```
Vim sẽ thường được đặt tại `/user/bin/vim`.

# Phân quyền


`chmod` có chức năng thiết lập quyền (xem, sửa, thực thi) các file / folder.
```shell
chmod [options] [mode] [file/folder]
```

## Đối tượng phân quyền

Mỗi file/folder đều có:
- **User owner (owner)**: Chủ sở hữu, user tạo ra file/folder.
- **Group owner (group)**: Nhóm sở hữu, owner là thành viên nhóm.

| Mã  | Đối tượng | Ý nghĩa                           |
| --- | --------- | --------------------------------- |
| `u` | User      | Đại diện cho quyền của **owner**. |
| `g` | Group     | Đại diện cho quyền của **group**. |
| `o` | Others    | Đại diện cho các **user khác**.   |
| `a` | All       | Tất cả các đối tượng trên.        |

## Quyền

Các quyền cơ bản:

| Mã  | Quyền           | Ý nghĩa                                                                                                                                            |
| --- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `r` | Read            |                                                                                                                                                    |
| `w` | Write           |                                                                                                                                                    |
| `x` | Execute         |                                                                                                                                                    |
| `X` | Special execute | - Đối với folder -> Luôn phân quyền `x`.<br><br>- Đối với file -> Chỉ phân quyền `x` nếu file đó đã được phân quyền `x` cho `u`, `g` hoặc `a` sẵn. |

Các quyền bổ sung:

| Mã  | Quyền                        | Ý nghĩa                                                   |
| --- | ---------------------------- | --------------------------------------------------------- |
| `0` | **Không** (mặc định)         | Không có chế độ đặc biệt.                                 |
| `1` | **Sticky bit**               | Áp dụng cho folder, chỉ owner mới xóa được file của mình. |
| `2` | **Set group ID** (SGID)      | Phân cho quyền của group.                                 |
| `4` | **Set ser ID** (SUID)        | Phân cho quyền của owner.                                 |
| `6` | **SGID + SUID**              |                                                           |
| `7` | **Sticky bit + SGID + SUID** |                                                           |

Các tổ hợp quyền:

| Mã tổ hợp \ Quyền | `r` | `w` | `x` |
| ----------------- | --- | --- | --- |
| `7`               | x   | x   | x   |
| `6`               | x   | x   |     |
| `5`               | x   |     | x   |
| `4`               |     | x   | x   |
| `3`               | x   |     |     |
| `2`               |     | x   |     |
| `1`               |     |     | x   |
| `0`               |     |     |     |

## Phân quyền

| Mã  | Phân quyền   |
| --- | ------------ |
| `+` | Thêm quyền   |
| `-` | Bỏ quyền     |
| `=` | Chỉ có quyền |

## Biểu diễn chế độ phân quyền

1. Dưới dạng chữ: `[ugoa][+-=][rwx]`.
2. Dưới dạng số: `[012467][76543210][76543210][76543210]`. Trong đó:
	1. **Chữ số thứ 1** (không bắt buộc, mặc định là `0`): Quyền đặc biệt.
	2. **Chữ số thứ 2**: Quyền của owner.
	3. **Chữ số thứ 3**: Quyền của group.
	4. **Chữ số thứ 4**: Quyền của others.

VD:
- `u+wr`: Thêm cho `u` quyền `w` và `r`.
- `g-x`: Xóa khỏi `g` quyền `x`.
- `a=r`: Cào bằng `a` chỉ có quyền `r`.
- `a-x+X`: Loại bỏ quyền `x`, thêm quyền `X` cho `a`.
- `u=rw,go=`: Thêm cho `u` quyền `rw`, `g` và `o` không có quyền.
- `755`: `u` quyền `rwx`, `g` quyền `rx`, `o` quyền `rx`.


