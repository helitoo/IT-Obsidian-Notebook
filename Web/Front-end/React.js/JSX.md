
# Tổng quan

**JSX** (JavaScript XML) là một cú pháp mở rộng của JS dành riêng cho [[React.js]], cho phép bạn viết mã [[HTML]] trong JS mà không cần thông qua string.

JSX không phải mã HTML, cần phải biên dịch sang HTML thì browser mới hiểu được.

VD: JSX:
```jsx
const element = <h1>Hello, JSX!</h1>;
```
Sẽ được biên dịch thành:
```js
const element = React.createElement("h1", null, "Hello, JSX!");
```

# Biểu thị của JSX

JSX là một dạng giá trị, có thể được gán vào biến hay return.

VD: JSX 1 dòng:
```jsx
const element = <h1>Hello, JSX!</h1>;
```

VD: JSX nhiều dòng, cần dùng `(` và `)`:
```jsx
const element = (
  <div>
    <h1>Hello</h1>
    <p>This is multi-line JSX</p>
  </div>
);
```

Chú ý:
- Tên thuộc tính quy định class của JSX là `className`, không phải `class`.
- JSX buộc phải gói gọn trong một thẻ lớn nhất, thẻ đó có thể là `<></>`.

JSX không hợp lệ:
```jsx
<h1>Hello</h1>
<p>This is multi-line JSX</p>
```

# Các thuộc tính của JSX

## Nhúng giá trị

JSX cũng tương tự như template, một giá trị có thể được đưa vào JSX thông qua `{` và `}`.

VD:
```jsx
const name = "Thái";
<h1>Hello, {name}!</h1>;
```
Khi đó, JSX sẽ trở thành:
```jsx
<h1>Hello, Thái!</h1>;
```

## Props

**Props** (Properties) là một object chứa các thông tin về các property của JSX.

VD:
JSX:
```jsx
<Hello name="Thái" age={20}>
```
Sẽ có props là:
```json
{
	name: "Thái",
	age: 20
}
```

Props có thể chứa mọi kiểu dữ liệu. **Children** là một props đặc biệt, là phần JSX nằm giữa 2 cặp thẻ đóng và mở lớn nhất của JSX cha.

VD:
Có JSX:
```jsx
<MyBox>
  <h2>Title</h2>
  <p>Content.</p> 
</MyBox>
```
Khi đó, chilren sẽ là:
```jsx
MyBox({ children: [<h2>Title</h2>, <p>Content.</p>] });
```

## Style

**Style** cũng tương tự như prop, cũng là một object.

VD:
```jsx
const boxStyle = {
  border: "1px solid black",
  padding: "10px",
  borderRadius: "8px",
};

<div style={boxStyle}></div>
```

# Khai thác JSX

## Function component

Hàm trả về JSX được gọi là **Function component**.

Quy tắc dùng:
- Chỉ có một tham số là props hoặc không có tham số.
- Tên của function component phải luôn viết hoa chữ cái đầu.
- Gọi function như gọi một thẻ HTML.

VD:
Khai báo component với props:
```jsx
function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}
```
Hoặc với phương pháp destruction:
```jsx
function Welcome({ name }) {
  return <h2>Hello, {name}!</h2>;
}
```
Gọi:
```jsx
<Welcome name="Thái" />
```

## CSS module

**CSS module** là cách viết [[1. CSS]] riêng cho từng component để tránh xung đột class.

Các CSS sẽ được định dạng trong một file có đuôi `.module.css`. Trong file này, bạn chỉ cần khai báo các class và style theo ý muốn. Khi được gán vào JSX và biên dịch thành HTML, các class này sẽ được React biến đổi sao cho độc nhất, không trùng nhau.

VD:
`MyBox.module.css`:
```css
.box {
  border: 2px solid green;
  padding: 16px;
  border-radius: 8px;
  background-color: #f0fdf4;
}

.title {
  color: darkgreen;
  font-size: 20px;
}
```
Sử dụng CSS module:
```jsx
import styles from './MyBox.module.css';

function MyBox() {
  return (
    <div className={styles.box}>
      <h2 className={styles.title}>Tiêu đề</h2>
      <p>Đây là nội dung bên trong hộp.</p>
    </div>
  );
}
```
Khi biên dịch JSX trên lên browser, các class sẽ được tự động phân tích thành các class riêng biệt, không thể trùng nhau, như `.box` sẽ trở thành `.box__MyBox__92a7f`,... .
