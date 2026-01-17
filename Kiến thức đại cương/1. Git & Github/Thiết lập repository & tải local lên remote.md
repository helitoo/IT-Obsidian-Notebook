
Khi tạo 1 repository ở Github, Github sẽ hiển thị các lệnh cần thiết để tải local lên remote nên không nhất thiết phải bám sát các lệnh này.

```bash
git init
```
Tạo repository cục bộ.

```bash
git add urFile
```
Đưa các file của project vào [[Kiến thức đại cương/1. Git & Github/Giới thiệu#Các thành phần của hệ thống git|Staging area]].
Nếu muốn đưa toàn bộ project vào staging thì chọn `git add .` .

```bash
git commit -m "msg"
```
Đưa project vào local repository và đặt tên phiên bản này là `msg`.

```bash
git branch -M main
```
Sửa nhánh hiện tại thành main.

```bash
git remote add origin link
```
Mở cổng kết nối remote và local.

```bash
git push -u origin main
```
Đưa code lên remote. Chỉ trong lần đầu tiên push thì mới cần `-u`.






