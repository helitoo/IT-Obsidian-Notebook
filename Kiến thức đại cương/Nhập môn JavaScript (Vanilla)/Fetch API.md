
# Giới thiệu

Fetch API là một API đơn giản của JavaScript hỗ trợ tạo request và nhận response. Fetch là sự thay thế của XMLHttpRequest. Fetch được xây dựng dựa trên [[Callback và Promise#Promise|Promise]], còn XMLHttpRequest dựa trên [[Callback và Promise#Callback function|Callback function]].

Kiểm tra trình duyệt có hỗ trợ fetch không:
```js
if (!('fetch' in window)) {
	console.log('Fetch API not found!');
	return;
}
```

Request và Response được cụ thể hóa bằng ba đối tượng Headers, Response (phản hồi từ server) và Request (gửi dữ liệu đến server). Trong bài viết này, ta không tìm hiểu chuyên sâu về Request.

## Headers

Có thể được khởi tạo qua `new Headers()`. Mỗi một Headers chứa một header là một cặp `{name: value}`. Headers có một số phương thức như sau:

- `headers.append(name, value)`: Thêm vào headers một header `{key: value}`.
- `headers.has(name)`: Trả về `true` nếu header có name tồn tại trong headers.
- `headers.set(name, value)`: Thay đổi header có `name` thành `value`. Không làm gì cả nếu header tồn tại.
- `headers.get(name)`: Lấy về `{name, value}`. Trả về `null` nếu header không tồn tại.
- `headers.delete(name)`: Xóa header có `name`. Không làm gì cả nếu header tồn tại.
- `headers.forEach(callback)`: Lặp qua từng header.

## Response

Có thể được khởi tạo qua `new Response(urContent)`. Response có một số phương thức như sau:

- `response.status`: Trả về status code.
- `response.statusText`: Trả về status messege.
- `response.ok`: Trả về `true` nếu status là `2xx` (thành công).
- `response.headers`: Trả về headers của response.
- `response.type`: Trả về kiểu response.
- `response.bodyUsed`: Trả về `true` ngay khi bạn dùng bất cứ phương thức nào để lấy nội dung từ response.
- `response.body`: Trả về nội dung của response dưới dạng `ReadableStream`. Bạn có thể truy xuất vào phương thức này cả khi response chưa hoàn thiện.
- `response.text()`: Trả về nội dung của response dưới dạng text.
- `response.json()`: Trả về nội dung của response dưới dạng JSON.
- `response.blob()`: Trả về nội dung của response dưới dạng Blob.
- `response.formData()`: Trả về nội dung của response dưới dạng FormData.

`fetch()` là một hàm toàn cục có chức năng lấy tài nguyên từ mạng và trả về một Respone khi nhận được respone hoặc trả về một Promise.

## Nguyên lý hoạt động

### Trao đổi dữ liệu giữa server và client

- Promise chỉ bị reject nếu có lỗi mạng hoặc URL sai định dạng. VD: Không có kết nối Internet, URL viết sai, máy chủ không phản hồi
- Nếu máy chủ trả về lỗi HTTP như `404` (Not Found) hay `504` (Gateway Timeout) thì Promise không bị reject. Thay vào đó, bạn phải tự kiểm tra bằng `response.ok` hay `response.status`.

### Cú pháp

```js
fetch(resource, options)
```
Trong đó:
- `resource`: Tham số chỉ định địa chỉ nơi bạn muốn lấy dữ liệu, nó có thể là một chuỗi chứa URL hoặc một Request.
- `options` (tùy chọn): Là một RequestInit, giúp bạn tùy chỉnh request.

### RequestInit

RequestInit là một đối tượng cấu hình (dictionary) cho phép bạn truyền các tùy chọn vào khi gọi `fetch()` hoặc khởi tạo Request. Về mặt lập trình, RequestInit có dạng như một JSON với các cặp `property:value`.

Bạn có thể:
- Truyền trực tiếp vào `fetch(url, options)`.
- Hoặc truyền vào `new Request(url, options)` rồi gọi `fetch(request)`.

Nếu bạn truyền cùng một tùy chọn ở cả Request và `fetch()`, thì `fetch()` sẽ ưu tiên sử dụng giá trị do nó nhận trực tiếp.

Một số thuộc tính của RequestInit:
- `method`: Các HTTP method, truyền dưới dạng chuỗi in hoa toàn bộ. Mặc định là `"GET"`.
- `header`: Header, thường chứa `{ "Content-Type": "urMIMEType" }` là kiểu dữ liệu của request.
- `body`: Phần dữ liệu chính của request.
Ngoài ra còn một số thuộc tính liên quan đến HTTP Authenication.

VD: GET:
```js
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Lỗi:', error));
```
→ Lấy dữ liệu JSON từ server và in ra console.

VD: POST:
```js
fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	headers: {
	'Content-Type': 'application/json'
},
	body: JSON.stringify({
		title: 'Hello',
		body: 'World',
		userId: 1
	})
})
.then(response => response.json())
.then(data => console.log('Kết quả:', data))
.catch(error => console.error('Lỗi:', error));
```
→ Gửi dữ liệu JSON lên server và lấy về một JSON khác. Sau đó, in JSON này ra console.

VD: Async và Await:
```js
async function loadPost() {
try {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
	const data = await response.json();
	console.log(data);
} catch (error) {
	console.error('Lỗi:', error);
}
}

loadPost();
```
→ Cách viết khác của fetch dưới dạng async và await. Bởi vì fetch là một Promise, cách viết này hợp lệ.

VD: FormData:
```js
const formData = new FormData();

formData.append('name', 'Alice');
formData.append('email', 'alice@example.com');

fetch('https://example.com/api/submit', {
	method: 'POST',
	body: formData
})
.then(res => res.text())
.then(data => console.log(data))
.catch(err => console.error('Lỗi:', err));
```
→ Thêm FormData trên vào server, sau đó in lại response dưới dạng text.

### Hủy fetch bằng AbortController.

AbortController là một cách tiêu chuẩn trong JS để hủy bỏ (abort) một fetch request đang chạy.

Nguyên lý hoạt động: Dựa vào signal:
- signal là cầu nối giữa AbortController và `fetch()`. Khi bạn truyền signal vào `fetch()`, thì `fetch()` sẽ nghe tín hiệu từ AbortController.
- Nếu `AbortController.abort()` được gọi, signal sẽ báo cho `fetch()` biết là phải hủy ngay request đó. Lúc bấy giờ, `fetch()` sẽ trả về reject với thông điệp `"AbortError"`.

Cách sử dụng:

```js
const controller = new AbortController(); // Create controller
const signal = controller.signal;         // Get signal

fetch(url, { signal }); // Send a request with signal

controller.abort();     // Abort fetch, "AbortError"
```

VD: AbortController:
```js
const controller = new AbortController();

const signal = controller.signal;

fetch("https://example.com/data", { signal })
.then(response => console.log("Đã tải xong:", response))
.catch(error => {
	if (error.name === "AbortError")
	  console.error("Yêu cầu đã bị hủy!");
	else
	  console.error("Lỗi khác:", error);
});

setTimeout(() => {
	controller.abort();
}, 3000);
```
→ Sau 3 giây, request sẽ bị hủy nếu không có response.






