
Java có hỗ trợ sẵn một số cấu trúc dữ liệu trong package [[Một số thư viện chuẩn của Java#`java.util`|java.util]].

Nội dung:
1. Collection:
	1. `List`:
		1. `ArrayList`, `LinkedList`.
		2. `.add()`, `.get()`, `.set()`, `.remove()`, `.size()`,...
	2. `Set`:
		1. `HashSet`, `LinkedHashSet`, `TreeSet`.
		2. `.add()`, `.remove()`, `.clear()`, `.contains()`,...
	3. `Map`:
		1. `HashMap`, `LinkedHashMap`, `TreeMap`.
		2. `.put()`, `.get()`, `.keySet()`, `.values()`, `.entrySet()`, `.remove()`, `.clear()`, `.containsKey()`, `.size()`,...
2. `Iterator`: `.iterator()`, `.hasNext()`, `.next()`, `.remove()`,...
3. `Collections`: `.sort()`, `.reverse()`, `.max()`, `.min()`, `.fill()`, `.binarySearch()`...

# Các collection

Collection là cấu trúc dữ liệu. Có 3 [[OOP nâng cao|interface]] collection là `List`, `Set`, `Map`. Mỗi interface có một vài lớp cụ thể implement đến.

## Khởi tạo

```java
urCollection<urType> urCl = new urCollection<>();
```
Chú ý rằng kiểu dữ liệu của collection (`urType`) khi khai báo phải là tên lớp đối tượng, như là [[OOP cơ bản#Wrapper class|wrapper class]], [[Các kiểu dữ liệu sơ cấp#Chuỗi ký tự `String`|String]] hoặc các lớp collection.

Đối với `Map` thì cần khai báo dữ liệu của key trước, value sau:
```java
urMap<keyType, valType> m = new urMap<>();
```

## Duyệt

### Duyệt bằng for

Cả `List` và `Set` đều có thể được duyệt bằng [[Các kiểu dữ liệu sơ cấp#Dùng for-each|for-each]]. `Map` được duyệt gián tiếp thông qua `.keySet()`, `.values()`, hay `.entrySet()`.

`List` có thể được duyệt bằng [[Các kiểu dữ liệu sơ cấp#Dùng for|for]] vì nó có phương thức `.get()` để lấy phần tử.

### Duyệt bằng `Iterator`

`Iterator` là một lớp của `java.util` có thể dùng để duyệt các collection.

Mô hình:
```java
Iterator<String> it = collection.iterator();

while(it.hasNext()) {
	System.out.println(it.next());
}
```
Trong đó:
- `.iterator()`: Là phương thức khởi tạo đối tượng `Iterator` của các collection.
- `.hasNext()`: Trả về `true` nếu còn phần tử liền tiếp.
- `.next()`: Trả về phần tử hiện tại và dịch chuyển đến phần tử liền tiếp.

Ngoài ra, đối tượng `Iterator` còn một số phương thức như:
- `.remove()`: Xóa phần tử hiện tại.

## `List`

`List` là [[Các kiểu dữ liệu sơ cấp#Mảng (Array)|mảng]] động. Có 2 class implement đến là `ArrayList` và `LinkedList`.

**Một số phương thức chung**:
- `.add(val)`: Thêm `val` vào cuối list.
- `.get(i)`: Lấy phần tử tại index `i`.
- `.set(i, val)`: Sử giá trị phần tử có index `i` thành `val`.
- `.remove(i)`: Xóa phần tử tại index `i`.
- `.size()`: Trả về số lượng phần tử của đối tượng.

**Một số phương thức riêng của `LinkedList`**:
- `.addFirst(val)`: Thêm `val` vào đầu list.
- `.addLast(val)`: Thêm `val` vào cuối list.
- `.removeFirst();`: Xóa phần tử đầu list.
- `.removeLast();`: Xóa phần tử cuối list.
- `.getFirst()`: Lấy phần tử đầu list.
- `.getLast()`: Lấy phần tử cuối list.

Do `ArrayList` và `LinkedList` đều implement tới `List`, bạn cũng có thể khai báo như thế này:
```java
import java.util.List;
import java.util.ArrayList;

List<String> list = new ArrayList<>();
```
Nhưv vậy, sau khi khai báo, `list` có thể được tùy ý thay đổi dữ liệu giữa `ArrayList` và `LinkedList`.

## `Set`

`Set` là cấu trúc dữ liệu tập hợp, các phần tử không được trùng nhau, không thể truy xuất ngẫu nhiên (nhưng vẫn có thể for-each). Có 3 class implement đến là:
- `HashSet`: Các key thêm vào được sắp xếp ngẫu nhiên.
- `LinkedHashSet`: Các key thêm vào được sắp xếp theo thứ tự được thêm vào.
- `TreeSet`: Các key thêm vào được sắp xếp theo thứ tự tăng dần -> Tốc độ chậm hơn.

**Một số phương thức**:
- `.add(val)`: Thêm `val`.
- `.remove(val)`: Xóa `val`.
- `.clear()`: Xóa toàn bộ phần tử.
- `.contains(val)`: Trả về `true` nếu `val` có trong set.
- `.size()`: Trả về số lượng phần tử.

## `Map`

`Map` là cấu trúc dữ liệu mà mỗi phần tử có dạng key - value. Key không thể trùng nhau. Có 3 class implement đến là:
- `HashMap`: Các phần tử thêm vào được sắp xếp ngẫu nhiên.
- `LinkedHashMap`: Các phần tử thêm vào được sắp xếp theo thứ tự được thêm vào.
- `TreeMap`: Các phần tử thêm vào được sắp xếp theo thứ tự tăng dần -> Tốc độ chậm hơn.

**Một số phương thức**:
- `.put(key, value)`: Thêm cặp `key` - `value`.
- `.get(key)`: Trả về value của `key`.
- `.keySet()`: Trả về một `Set` chứa các key.
- `.values()`: Trả về một danh sách các value.
- `.entrySet()`: Trả về một `Set` các đối tượng `Map.Entrie`. Đối tượng này có 2 phương thức là:
	- `.getKey()`: Trả về key.
	- `.getValue()`: Trả về value.
- `.remove(key)`: Xóa cặp `key` - value.
- `.clear()`: Xóa toàn bộ phần tử.
- `.containsKey(key)`: Trả về `true` nếu `key` có tồn tại.
- `.size()`: Trả về số lượng phần tử.

# `Collections`

`Collections` là một lớp của `java.util`, chứa các phương thức tĩnh để xử lý collection như:
- `Collections.sort(urClt);`: Sắp xếp `urClt` theo thứ tự tăng dần.
- `Collections.sort(urClt, Collections.reverseOrder());`: Sắp xếp `urClt` theo thứ tự giảm dần.
- `Collections.reverse(urClt);`.
- `Collections.max(urClt)`, `Collections.min(urClt)`.
- `Collections.fill(urClt, val);`: Thay thế tất cả phần tử của `urClt` thành `val`.
- `Collections.binarySearch(urClt, val)`: Trả về index của giá trị `val` trong `urClt` (đã được sắp xếp tăng dần sẵn). Nếu không tìm thấy, nó sẽ trả về index liền trước vị trí đáng nhẽ phải xuất hiện `val`.







