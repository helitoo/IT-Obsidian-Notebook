
# Giới thiệu

Trong quá trình phát triển frontend, có những lúc ta cần kết nối với server để thao tác với dữ liệu, nhưng đôi lúc ta không thể thao với server thực vì nhiều lý do. **Mockup sever** là dạng server nhỏ, nhẹ, đóng vai trò mockup để frontend giao tiếp với server.

**`json-server`**: Là module dựa trên ExpressJS, cho phép xây dựng 1 server với đầy đủ CRUD chỉ với 1 file `json` làm dữ liệu vào.

**`faker-js`**: Là module sinh dữ liệu ngẫu nhiên.

# Hướng dẫn cụ thể

### 1 - Khởi tạo dự án NodeJS mới

`your-project/`
```sh
npm init -y
```

### 2 - Cài package

```sh
npm install @faker-js/faker
npm install json-server
```

### 3 - Tạo dữ liệu bằng faker

Tạo mẫu 100 records vào bảng users và lưu vào `db.json`:
`generate.js`
```js
const { faker } = require("@faker-js/faker");
const fs = require("fs");

const users = [];

for (let i = 1; i <= 100; i++) {
  users.push({
    id: i,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    phone: faker.phone.number(),
    company: faker.company.name(),
    createdAt: faker.date.past(),
  });
}

fs.writeFileSync(
  "db.json",
  JSON.stringify({ users }, null, 2)
);

console.log("Generate completed");
```

```sh
node generate.js
```

### Khởi chạy server

```sh
npx json-server db.json
```

Mặc định, server sẽ chạy ở port `3000`, mỗi enpoint của nó ứng với 1 bảng:
```
JSON Server started on PORT :3000
Press CTRL-C to stop
Watching db.json...

♡⸜(˶˃ ᵕ ˂˶)⸝♡

Index:
http://localhost:3000/

Static files:
Serving ./public directory if it exists

Endpoints:
http://localhost:3000/users
```

Một số enpoint mặc định của `json-server`:
```sh
GET /posts?views:gt=100                  # Filter by condition
GET /posts?_sort=-views                  # Sort by field (descending)
GET /posts?_page=1&_per_page=10          # Pagination
GET /posts?_embed=comments               # Include relations
GET /posts?_where={"or":[...]}           # Complex queries
```

Bạn có thể custom `json-server` bằng cách chạy nó bằng file script:
`server.js`
```js
import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");

server.use((req, res, next) => {
  // Điều hướng /api/user-list về /users
  if (req.url === "/api/user-list") {
    req.url = "/users";
  }

  next();
});

server.use(router);

server.listen(3000);
```
