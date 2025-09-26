# Các lệnh về trạng thái

```bash
git status
```
Kiểm tra trạng thái của local: Có 1 số trạng thái sau:
- `Modifined` (`M`): Đã bị sửa đổi nhưng chưa được cập nhật vào local hay remote.
- `Untracked` (`U`): Chưa được thêm vào [[Giới thiệu#Các thành phần của hệ thống git|Staging area]].
Trong môi trường làm việc VS Code, trạng thái của file được hiển thị ngay cạnh file.

# Các lệnh về branch

## Xem branch

```bash
git branch
```
Hiển thị các nhánh hiện có tại local.

```bash
git branch -a
```
Hiển thị các nhánh hiện có tại local và remote.

## Tạo branch

```bash
git branch -c branch
```
Tạo nhánh mới có tên `branch`.

```bash
git checkout branch
```
Chuyển sang nhánh hiện tại sang `branch` và sao chép project sang branch này.

```bash
git checkout -b branch
```
Tạo nhánh mới có tên `brach`, chuyển sang nhánh hiện tại sang `branch` và sao chép project sang branch này.

## Xóa branch

```bash
git branch -d branch
```
Xóa nhánh `branch`. Khi xóa nhánh, bạn cần di chuyển sang một nhánh khác.

```bash
git push -u origin branch
```
Đưa code tại branch lên remote. Chỉ trong lần đầu tiên push thì mới cần `-u origin branch`.

```bash
git push -d origin branch
```
Xóa nhánh `branch` của remote.

## Gộp branch

```bash
git merge branch
```
Gộp nhánh `branch` vào nhánh main. Khi thực thi lệnh này cần `git checkout main` trước.
