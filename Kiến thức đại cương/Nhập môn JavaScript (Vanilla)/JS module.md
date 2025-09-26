
JS Module là đoạn mã nằm trong file riêng, một hoặc mọi thành phần của nó ([[Biến và hàm#Khai báo biến|Biến]] hoặc [[Biến và hàm#Khai báo hàm|Hàm]]) có thể được xuất ra (`export`) và nhập vào (`import`) từ file khác.

# Export

Có 2 loại export:

## Named export

Được dùng nếu cần export nhiều hơn 2 thành phần.

VD: Export tuần tự:
```js
export const name = "Jesse";
export const age = 40;
```

VD: Export một lần:
```js
const name = "Jesse";
const age = 40;

export {name, age};
```

## Default export

Được dùng khi chỉ có 1 đối tượng được export.

VD:
```js
export default const message = () => {
    const name = "Jesse";
    const age = 40;
    return `${name} is ${age} years old.`;
};
```

Hoặc:
```js
const message = () => {
    const name = "Jesse";
    const age = 40;
    return `${name} is ${age} years old.`;
};

export default message;
```

# Import

Bạn chỉ có thể import những thành phần được export. Và file có import phải có [[Chèn mã JS vào trang .html#type module|type module]].

Import cũng có 2 loại:

## Named import

```js
import { name, age } from "./person.js";
```

## Default import

```js
import message from "./message.js";
```
