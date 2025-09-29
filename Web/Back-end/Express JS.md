

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkHnI2qKrGwyBJwLHvPjaFZo5UUYWOUWmIw&s)

```insta-toc
---
title:
  name: Mục lục
  level: 1
  center: false
exclude: ""
style:
  listType: number
omit: []
levels:
  min: 1
  max: 6
---

# Mục lục

1. Giới thiệu & Cài đặt
2. Cấu trúc dự án Express
3. Routing
    1. Định nghĩa endpoint
    2. Handler
    3. Tùy chỉnh URI
4. Middleware
```

# Giới thiệu & Cài đặt

**Express JS** là một [[Node.js]] framework hỗ trợ xây dựng server. Hầu hết các framework nổi tiếng của NodeJS đều dựa trên Express JS.

Cài đặt:
```sh
npm install express
```

# Cấu trúc dự án Express

Khai báo thư viện:
```js
const express = require('express');
const app = express();
const port = 3000;
```

Khai báo port của server:
```js
app.listen(urPort, () => {
	console.log(`The server is running on ${urPort}`);
	// ...
})
```

Khởi chạy server:
```sh
npm nodemon urApp.js
```
Hoặc:
```sh
npm start
```

# Routing

Server được chia thành các endpoint để xử lý từng nhiệm vụ riêng biệt bằng một hàm **handler**. Mỗi endpoint được định danh bằng một đường dẫn (**URI**, path). Khi client truy cập vào URI, endpoint sẽ được gọi.

## Định nghĩa endpoint

**Cách 1**: Dùng đối tượng `express`.

```js
const app = express();

app.method('/uri', handler);
// app.method2('/uri2', handler2); ...
```
-> Khi client truy cập vào `/uri` thì endpoint trên sẽ được gọi.

**Cách 2**: Dùng đối tượng `express.Router()`.

```js
const router = express.Router();

router.method('/uri', handler);
// router.method('/uri2', handler2);

app.use('/preUri', router)
```
-> Khi client truy cập vào `/preUri/uri` thì endpoint của `router` sẽ được gọi.

>[!NOTE]
>- App đơn giản, chỉ có vài endpoint riêng lẻ -> Dùng `express`.
>- App có nhiều endpoint phức tạp, cần gom nhóm để dễ xử lý -> Dùng `express.Router()`.

## Handler

**Handler** là một hàm nhận 2 tham số là `req` và `res`.

```js
instance.method('/uri', (req, res) => {
	// ...
});
```

`req` đại diện cho **request** từ client, có các phương thức trả về thông tin của request:
- `req.url`.
- `req.method`.
- `req.params`: Tham số của path.
- `req.query`: Tham số query của path.
- `req.header`: Header của request.
- `req.body`: Body của request.

`res` đại diện cho **response** từ server, có các phương thức để phản hồi sau:
- `res.set('headerProps', 'val')`: Cài đặt header.
- `res.send(urTxt)`: Trả về plain text.
- `res.json(urJson)`: Trả về JSON.
- `res.sendFile('pathToFile')`.
- `res.status(urStatusCode)`: Trả về trạng thái.
- `res.redirect('urURI')`: Chuyển hướng.

Chú ý các phương thức trả về giá trị thì phải kèm theo `return` phía trước.

## Tùy chỉnh URI

1. **Parametered URI**: `:var`... `var` là tên biến, có thể được truy cập bằng `req.params.var`.
2. **Optional parameterd URI**: `:var?`... Giá trị của `var` có thể được client điền hoặc không.
3. **Query URI**: Không có cú pháp khai báo. Client truy cập theo cú pháp `?var=val&...`. Truy cập bằng `req.params.var`.

VD: Có URI `/users/:userId/books/:bookId?` chạy ở port `3000`.
Khi client truy cập vào `http://localhost:3000/users/10/books/88?sort=title&page=2` thì:
- `req.params.userID = 10`.
- `req.params.bookId = 88`.
- `req.params.sort = title`.
- `req.params.page = 2`.

>[!NOTE]
>- **Truyền dữ liệu qua URI**: Khi dữ liệu ngắn, đơn giản, không cần bảo mật.
>- **Truyền dữ liệu qua body**: Trong các trường hợp khác.

# Middleware

Middleware là những hàm trung gian được kích hoạt trước khi gọi handler chính.

Cú pháp:
```js
instance.method(
	middleware1,
	middleware2,
	//...
	middlewareLast
)

instance.use(middlewareFirst)
```

Trong đó:
- Các middleware được gọi theo thứ tự khai báo. `middlewareFirst` là middleware được gọi đầu tiên (nếu được khai báo).
- Middleware cuối cùng chính là **handler**.

Mỗi middleware có 3 tham số là `(req, ques, next)`.
- `next();` là hàm chỉ thị kích hoạt middleware kế tiếp.
- Nếu ở một middleware nào đó mà trả về response, thì các middleware sau đó sẽ không được kích hoạt.









