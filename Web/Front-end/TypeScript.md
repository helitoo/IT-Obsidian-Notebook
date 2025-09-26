
```insta-toc
---
title:
  name: Table of Contents
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

# Table of Contents

1. Giới thiệu & Cài đặt TypeScript
2. Các kiểu dữ liệu
3. Cú pháp khai báo
```

# Giới thiệu & Cài đặt TypeScript

**TypeScript** (`.ts`) là một ngôn ngữ lập trình mã nguồn mở được phát triển bởi Microsoft, là một phần mở rộng của JavaScript bổ sung về các kiểu dữ liệu.

JavaScript là ngôn ngữ thiếu nghiêm ngặt, nhất là về các kiểu dữ liệu (JS không quy định khai báo kiểu dữ liệu khi khai báo biến), dẫn đến các lỗi runtime xuất hiện khó kiểm soát. TypeScript kiểm soát cú pháp nghiêm ngặt hơn, giúp giảm thiểu các lỗi không đáng có.

**Cài đặt TypeScript**: Thông qua [[Node.js]].
```bash
npm install typescript
```

# Các kiểu dữ liệu

**Primitive**:
1. `string`.
2. `number`.
3. `boolean`.

**Object**:
1. `number[]`: mảng `number`.
2. `null`: `null`.
3. `undefined`: `undefined`.
4. `void`: Không có giá trị.
5. `any`: Bất kỳ kiểu nào.
6. Object: `{propA : typeA; propB : typeB; ...}`.

**Tự định nghĩa kiểu dữ liệu**:
1. **`type`**: Không thể khai báo trùng tên `type`.
2. **`interface`**: Có thể khai báo `interface` nhiều lần. Mỗi lần khai báo một phần dữ liệu.

VD: `type`:
```ts
type Animal = {
  name: string;
  age: number;
}

let a: Animal = { name: "Dog"; age: 3 };
```

VD: `interface`:
```ts
interface Animal = {
  name: string;
}

interface Animal = {
  age: number;
}

let a: Animal = { name: "Dog"; age: 3 };
```

# Cú pháp khai báo

**Khai báo biến primitive nhận 1 kiểu dữ liệu**:
```ts
let myPrim : number = 12;
```

**Khai báo biến primitive nhận nhiều kiểu dữ liệu**:
```ts
let myPrim : number | string = 12;
```

**Khai báo biến primitive literal**:
```ts
let myPrim : string = "a" | "b" | "c";
myPrim = "a";
```

**Khai báo mảng có các phần tử khác kiểu dữ liệu**:
```ts
let myTup : [number, string] = [12, "abc"];
```

**Khai báo hàm**:
```ts
function myFunc (myPar : parType) : funcType {
	// ...
}
```
