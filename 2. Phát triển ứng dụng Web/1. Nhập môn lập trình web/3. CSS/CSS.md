
![](https://t3.ftcdn.net/jpg/03/21/24/30/360_F_321243084_GstfWflk1eTLlzUdRZ5mjoP5IG1iCc8J.jpg)

# Tổng quan

**CSS** (Cascading Style Sheets) là một ngôn ngữ biểu diễn dùng để định dạng, trang trí và tạo giao diện cho các tài liệu được viết bằng ngôn ngữ đánh dấu như HTML hoặc XML.

>[!quote]
>CSS là lớp da của các trang web.

CSS có cú pháp sau:
```css
selector {
	property1: value1;
	property2: value2;
	/* ... */
}
```
Trong đó:
- Selector: Phạm vi của style, style này được áp dụng lên các HTML element nào?
- Property: Tên style.
- Value: Giá trị thật quy định đặc điểm cụ thể của style.

# Selector

Selector là cách chọn những HTML element nào sẽ được áp dụng style của CSS.

#### General selector

| Cú pháp                 | Ý nghĩa                                              |
| ----------------------- | ---------------------------------------------------- |
| `'*'` / `document`      | Tất cả element.                                      |
| `elementName`           | Chọn theo tên tag.                                   |
| `#id`                   | Chọn theo ID.                                        |
| `.className`            | Chọn theo class.                                     |
| `elementName.className` | Chọn theo element và class.                          |
| `selector1,selector2`   | Ngăn cách bởi dấu `,`, chọn nhiều selector cùng lúc. |

#### Attribute selector

| Cú pháp                  | Ý nghĩa                                                                                                                                                                                                                                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`input[name]`**        | Chọn mọi thẻ `input` có thuộc tính `name`.                                                                                                                                                                                                                                                                                                  |
| **`input[name='text']`** | Chọn mọi thẻ `input` có thuộc tính `name` với giá trị là `'text'`, tương tự với các toán tử:<br>- **`!=...`**: Khác `...`.<br>- **`*=...`**: Chứa chuỗi `...`.<br>- **`~=...`**: Chứa chuỗi `...`, giữa các ký tự của `...` có thể có khoảng cách.<br>- **`^=...`**: Bắt đầu bằng chuỗi `...`.<br>- **`$=...`**: Kết thúc bằng chuỗi `...`. |

#### Pseudo class

Chọn phần tử theo **trạng thái** hoặc **vị trí**.

| Cú pháp              | Ý nghĩa                                                                |
| -------------------- | ---------------------------------------------------------------------- |
| `:hover`             | Khi di chuột lên phần tử                                               |
| `:active`            | Khi phần tử đang được nhấn (giữ chuột)                                 |
| `:focus`             | Khi phần tử đang được focus (ví dụ ô input được chọn)                  |
| `:focus-visible`     | Khi focus bằng bàn phím (hoặc khi trình duyệt thấy cần hiển thị focus) |
| `:focus-within`      | Khi phần tử hoặc bất kỳ phần tử con nào bên trong đang được focus      |
| `:visited`           | Liên kết đã được truy cập                                              |
| `:link`              | Liên kết chưa được truy cập                                            |
| `:first-child`       | Phần tử là con đầu tiên của cha                                        |
| `:last-child`        | Phần tử là con cuối cùng của cha                                       |
| `:only-child`        | Phần tử là con duy nhất của cha                                        |
| `:nth-child(n)`      | Phần tử con thứ n (hỗ trợ `odd`, `even`, `2n+1`...)                    |
| `:nth-last-child(n)` | Phần tử con thứ n tính từ cuối                                         |
| `:first-of-type`     | Phần tử đầu tiên cùng loại thẻ trong cha                               |
| `:last-of-type`      | Phần tử cuối cùng cùng loại thẻ trong cha                              |
| `:nth-of-type(n)`    | Phần tử thứ n cùng loại thẻ                                            |
| `:not(selector)`     | Phần tử không khớp với selector bên trong                              |
| `:is(a, b)`          | Khớp với bất kỳ selector nào trong danh sách (viết gọn nhóm selector)  |
| `:where(a, b)`       | Giống `:is()` nhưng độ ưu tiên (specificity) bằng 0                    |
| `:has(selector)`     | Phần tử cha chứa phần tử khớp selector bên trong                       |
| `:empty`             | Phần tử không có con và không có nội dung văn bản                      |
| `:root`              | Phần tử gốc của tài liệu (thường là `<html>`)                          |
| `:checked`           | Checkbox, radio hoặc option đang được chọn                             |
| `:disabled`          | Phần tử form bị vô hiệu hóa                                            |
| `:enabled`           | Phần tử form đang được kích hoạt                                       |
| `:required`          | Trường form bắt buộc nhập                                              |
| `:optional`          | Trường form không bắt buộc                                             |
| `:valid`             | Trường form có giá trị hợp lệ                                          |
| `:invalid`           | Trường form có giá trị không hợp lệ                                    |
| `:placeholder-shown` | Input đang hiển thị placeholder (chưa nhập gì)                         |
| `:read-only`         | Phần tử chỉ đọc                                                        |
| `:target`            | Phần tử có id trùng với phần `#hash` trên URL                          |

#### Pseudo element

Chọn hoặc tạo thêm **một phần** của phần tử.

| Cú pháp          | Ý nghĩa                                    |
| ---------------- | ------------------------------------------ |
| `::before`       | Tạo nội dung ảo trước nội dung của phần tử |
| `::after`        | Tạo nội dung ảo sau nội dung của phần tử   |
| `::first-letter` | Chọn chữ cái đầu tiên của văn bản          |
| `::first-line`   | Chọn dòng đầu tiên của văn bản             |
| `::selection`    | Phần văn bản đang được người dùng bôi đen  |
| `::placeholder`  | Văn bản placeholder của input/textarea     |
| `::marker`       | Dấu đầu dòng hoặc số thứ tự của danh sách  |
| `::backdrop`     | Lớp nền phía sau phần tử toàn màn hình     |

**VD** `::before` và `::after`:
```css
/* Thêm icon hoặc ký tự trước/sau văn bản */

.link::before {
  content: "👉 ";
}

.link::after {
  content: " →";
  color: tomato;
}

/* Đánh dấu trường bắt buộc bằng dấu `*` */
.required::after {
  content: " *";
  color: red;
}

/* Gạch chân khi hover vào .title */
.title {
  position: relative;
  display: inline-block;
}

.title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 3px;
  background: #3498db;
  transition: width 0.3s;
}

.title:hover::after {
  width: 100%;
}

/* Thêm dấu ngoặc kép cho .quote */
.quote::before {
  content: "“";
  font-size: 2em;
  color: gray;
}

.quote::after {
  content: "”";
  font-size: 2em;
  color: gray;
}
```

# Một số style thường dùng

### Box model

Mọi phần tử HTML là một **hộp** gồm 4 lớp lồng nhau, từ trong ra ngoài:

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStVL4eY3_djI3zWGvJiscripf-ngKOj7APU7hQuLYchK8uoiEWCpq0huo&s=10)

| Lớp     | Vai trò                                | Có background?               |
| ------- | -------------------------------------- | ---------------------------- |
| Content | Chứa văn bản, hình ảnh                 | Có                           |
| Padding | Cách giữa content và border            | Có (nền phủ cả vùng này)     |
| Border  | Đường viền bao quanh                   | Có (nền nằm bên dưới border) |
| Margin  | Cách giữa phần tử này với phần tử khác | Không, luôn trong suốt       |

#### Các giá trị cụ thể của màu sắc

| Ví dụ                                                                                                                                                                                                                                                                                                                                           | Ý nghĩa                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `black`, `white`, `gray`, `silver`, `lightgray`, `darkgray`, `red`, `darkred`, `crimson`, `pink`, `hotpink`, `orange`, `coral`, `gold`, `yellow`, `green`, `lime`, `darkgreen`, `olive`, `teal`, `cyan`, `aqua`, `blue`, `navy`, `skyblue`, `royalblue`, `purple`, `violet`, `magenta`, `fuchsia`, `brown`, `chocolate`, `beige`, `transparent` | Tên màu                       |
| `#ff0000`, `#f00`                                                                                                                                                                                                                                                                                                                               | Mã hex                        |
| `rgb(255, 0, 0)`                                                                                                                                                                                                                                                                                                                                | Màu RGB                       |
| `transparent`                                                                                                                                                                                                                                                                                                                                   | Trong suốt (chỉ dùng cho nền) |

#### Background

| Ví dụ                                                        | Ý nghĩa                                                  |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| `background-color: <màu>;`                                   | Màu nền.                                                 |
| `background-image: url(tiles.gif);`                          | Dùng hình làm nền.                                       |
| `background-image: none;`                                    | Không dùng hình nền.                                     |
| `background-position: center;`                               | Một từ khóa. Trục còn lại mặc định là `center`           |
| `background-position: top left;`                             | Dính vào mép trên bên trái.                              |
| `background-position: 50% 30%;`                              | Cách mép trái 50% và cách mép trên 30%                   |
| `background-position: 10px 20px;`                            | Cách mép trái 10px và cách mép trên 20px                 |
| `background-repeat: <giá trị>;`                              | Cách lặp hình nền.                                       |
| `background-attachment: <giá trị>;`                          | Hình nền cuộn theo trang hay cố định.                    |
| `background: black url(tile.gif) no-repeat scroll top left;` | Khai báo đầy đủ 5 thành phần.                            |
| `background: black url(tile.gif) no-repeat top left;`        | Bỏ `attachment` (dùng mặc định `scroll`).                |
| `background: black url(tile.gif);`                           | Chỉ có màu và hình, các thành phần còn lại lấy mặc định. |
| `background: black;`                                         | Chỉ khai báo màu nền.                                    |

| `background-position` | Ý nghĩa                    |
| --------------------- | -------------------------- |
| `top` / `bottom`      | Sát cạnh trên / cạnh dưới. |
| `left` / `right`      | Sát cạnh trái / cạnh phải. |
| `center`              | Căn giữa.                  |

| `background-repeat` | Ý nghĩa                           |
| ------------------- | --------------------------------- |
| `repeat`            | Lặp theo cả hai chiều (mặc định). |
| `repeat-x`          | Chỉ lặp theo chiều ngang.         |
| `repeat-y`          | Chỉ lặp theo chiều dọc.           |
| `no-repeat`         | Không lặp.                        |

| `background-attachment` | Ý nghĩa                                     |
| ----------------------- | ------------------------------------------- |
| `scroll`                | Hình nền cuộn cùng nội dung (mặc định).     |
| `fixed`                 | Hình nền cố định so với cửa sổ trình duyệt. |

#### Border

| Ví dụ                                                                      | Ý nghĩa                             |
| -------------------------------------------------------------------------- | ----------------------------------- |
| `border: 1px dashed #000;`                                                 | Khai báo `width style color`.       |
| `border: 1px solid;`                                                       | Khai báo `width style`              |
| `border-top: 1px double green;`<br>Tương tự với `bottom`, `left`, `right`. | Style của 1 cạnh.                   |
| `border-top: 1px double;`<br>Tương tự với `bottom`, `left`, `right`.       | Style của 1 cạnh.                   |
| `border-top-style: dotted;`<br>Tương tự với `bottom`, `left`, `right`.     | Kiểu đường viền của một cạnh.       |
| `border-style: solid;`                                                     | Áp dụng cho cả 4 cạnh.              |
| `border-style: solid dashed;`                                              | Áp dụng cho trên/dưới, trái/phải.   |
| `border-style: solid dashed dotted;`                                       | Áp dụng cho trên, trái/phải, dưới.  |
| `border-style: solid dashed dotted double;`                                | Áp dụng cho trên, phải, dưới, trái  |
| `border-color: red;`                                                       | Áp dụng cho cả 4 cạnh cùng màu.     |
| `border-color: red blue;`                                                  | Áp dụng cho trên/dưới, trái/phải.   |
| `border-color: red blue green;`                                            | Áp dụng cho trên, trái/phải, dưới.  |
| `border-color: red blue green #000;`                                       | Áp dụng cho trên, phải, dưới, trái. |
| `border-top-color: #00f;`<br>Tương tự với `bottom`, `left`, `right`.       | Màu viền của một cạnh.              |
| `border-width: 2px;`                                                       | Áp dụng cho cả 4 cạnh.              |
| `border-width: 2px 4px;`                                                   | Áp dụng cho trên/dưới, trái/phải.   |
| `border-width: 2px 4px 6px;`                                               | Áp dụng cho rên, trái/phải, dưới.   |
| `border-width: 2px 4px 6px 8px;`                                           | Áp dụng cho trên, phải, dưới, trái. |
| `border-top-width: thick;`<br>Tương tự với `bottom`, `left`, `right`.      | Độ dày của một cạnh.                |

| `border-style` | Ý nghĩa                                                 |
| -------------- | ------------------------------------------------------- |
| `none`         | Không có viền.                                          |
| `hidden`       | Viền ẩn (tương tự `none`, khác biệt khi gộp viền bảng). |
| `dotted`       | Chấm tròn.                                              |
| `dashed`       | Nét đứt.                                                |
| `solid`        | Nét liền.                                               |
| `double`       | Hai nét liền.                                           |
| `groove`       | Viền chìm (kiểu 3D lõm).                                |
| `ridge`        | Viền nổi (kiểu 3D lồi).                                 |
| `inset`        | Phần tử trông như chìm xuống.                           |
| `outset`       | Phần tử trông như nổi lên.                              |

| `border-width` | Ý nghĩa                |
| -------------- | ---------------------- |
| `thin`         | Mỏng.                  |
| `medium`       | Trung bình (mặc định). |
| `thick`        | Dày.                   |
| `2px`, `0.1em` | Độ dài cụ thể.         |

#### Margin

| Ví dụ                                                         | Ý nghĩa                                          |
| ------------------------------------------------------------- | ------------------------------------------------ |
| `margin: 4px;`                                                | Áp dụng cả 4 cạnh đều 4px.                       |
| `margin: 10em auto;`                                          | Áp dụng trên/dưới = 10em, trái/phải = auto.      |
| `margin: 4px 10px 6px;`                                       | Áp dụngtrên = 4px, trái/phải = 10px, dưới = 6px. |
| `margin: 4px 10px 4px 10px;`                                  | Áp dụng trên, phải, dưới, trái.                  |
| `margin-top: 4em;`<br>Tương tự với `bottom`, `left`, `right`. | Đặt margin cho một cạnh.                         |

#### Padding

| Ví dụ                                                          | Ý nghĩa                                              |
| -------------------------------------------------------------- | ---------------------------------------------------- |
| `padding: 4px;`                                                | 1 giá trị: cả 4 cạnh đều 4px.                        |
| `padding: 6px 4px;`                                            | 2 giá trị: trên/dưới = 6px, trái/phải = 4px.         |
| `padding: 4px 10px 6px;` (*)                                   | 3 giá trị: trên = 4px, trái/phải = 10px, dưới = 6px. |
| `padding: 4px 10px 4px 10px;`                                  | 4 giá trị: trên, phải, dưới, trái.                   |
| `padding-top: 4em;`<br>Tương tự với `bottom`, `left`, `right`. | Đặt padding cho một cạnh.                            |

### Văn bản

#### Font

| Ví dụ                                             | Ý nghĩa                                                 |
| ------------------------------------------------- | ------------------------------------------------------- |
| `font-size: <giá trị>;`                           | Kích thước chữ.                                         |
| `font-style: <giá trị>;`                          | Kiểu chữ (thường, nghiêng).                             |
| `font-weight: <giá trị>;`                         | Độ đậm của chữ.                                         |
| `font-variant: <giá trị>;`                        | Dạng chữ (thường hoặc chữ hoa nhỏ).                     |
| `font-stretch: <giá trị>;`                        | Độ co giãn theo chiều ngang của chữ.                    |
| `line-height: <giá trị>;`                         | Chiều cao dòng (khoảng cách giữa các dòng của văn bản). |
| `font: 12px Arial;`                               | Khai báo `size` và `family`.                            |
| `font: 12px/1.5 Arial;`                           | Khai báo `size`, `line-height` và `family`.             |
| `font: italic bold 12px Arial;`                   | Khai báo `style`, `weight`, `size` và `family`.         |
| `font: bold italic small-caps 12px/20px Verdana;` | Khai báo đầy đủ các style cùng lúc.                     |

| `font-size`                                                              | Ý nghĩa                               |
| ------------------------------------------------------------------------ | ------------------------------------- |
| `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large` | Kích thước tuyệt đối theo từ khóa.    |
| `smaller` / `larger`                                                     | Nhỏ hơn / lớn hơn so với phần tử cha. |
| `[length]` (`12px`, `1.2em`)                                             | Độ dài cụ thể.                        |
| `[%]`                                                                    | Tỷ lệ phần trăm so với phần tử cha.   |

|`font-style`|Ý nghĩa|
|---|---|
|`normal`|Chữ thường.|
|`italic`|Chữ nghiêng.|
|`oblique`|Chữ xiên.|

|`font-weight`|Ý nghĩa|
|---|---|
|`normal`|Bình thường.|
|`bold`|Đậm.|
|`bolder` / `lighter`|Đậm hơn / nhạt hơn so với phần tử cha.|
|`100`, `200`, …, `900`|Độ đậm theo số (100 mỏng nhất, 900 đậm nhất).|

|`font-variant`|Ý nghĩa|
|---|---|
|`normal`|Bình thường.|
|`small-caps`|Chữ hoa nhỏ (chữ thường hiển thị như chữ hoa thu nhỏ).|

|`font-stretch`|Ý nghĩa|
|---|---|
|`normal`|Bình thường.|
|`wider` / `narrower`|Rộng hơn / hẹp hơn so với phần tử cha.|
|`ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`|Co hẹp, từ nhiều nhất đến ít nhất.|
|`semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`|Giãn rộng, từ ít nhất đến nhiều nhất.|

|`line-height`|Ý nghĩa|
|---|---|
|`normal`|Mặc định của trình duyệt.|
|`[number]`|Hệ số nhân với cỡ chữ (ví dụ `1.5`).|
|`[length]`|Độ dài cụ thể (ví dụ `20px`).|
|`[%]`|Phần trăm so với cỡ chữ.|

#### Text

| Ví dụ                         | Ý nghĩa                                                 |
| ----------------------------- | ------------------------------------------------------- |
| `text-align: <giá trị>;`      | Căn lề văn bản.                                         |
| `text-decoration: <giá trị>;` | Trang trí văn bản (gạch chân, gạch ngang...).           |
| `text-indent: <giá trị>;`     | Thụt đầu dòng đầu tiên.                                 |
| `text-shadow: <giá trị>;`     | Đổ bóng cho văn bản.                                    |
| `text-transform: <giá trị>;`  | Chuyển đổi chữ hoa/chữ thường.                          |
| `vertical-align: <giá trị>;`  | Căn theo chiều dọc.                                     |
| `white-space: <giá trị>;`     | Cách xử lý khoảng trắng và xuống dòng.                  |
| `word-spacing: <giá trị>;`    | Khoảng cách giữa các từ.                                |
| `letter-spacing: <giá trị>;`  | Khoảng cách giữa các ký tự.                             |
| `direction: <giá trị>;`       | Hướng của văn bản.                                      |


|`text-align`|Ý nghĩa|
|---|---|
|`left`|Căn trái.|
|`right`|Căn phải.|
|`center`|Căn giữa.|
|`justify`|Căn đều hai bên.|

|`text-decoration`|Ý nghĩa|
|---|---|
|`none`|Không trang trí.|
|`underline`|Gạch chân.|
|`overline`|Gạch phía trên.|
|`line-through`|Gạch ngang giữa chữ.|
|`blink`|Nhấp nháy (hầu hết trình duyệt không hỗ trợ).|

|`text-indent`|Ý nghĩa|
|---|---|
|`[length]`|Độ dài cụ thể (ví dụ `2em`).|
|`[%]`|Phần trăm so với chiều rộng của phần tử chứa.|

|`text-shadow`|Ý nghĩa|
|---|---|
|`none`|Không có bóng.|
|`[color]`|Màu của bóng.|
|`[length]`|Độ lệch của bóng (ngang, dọc, độ mờ).|
|`2px 2px 4px #888`|Ví dụ: lệch phải 2px, lệch xuống 2px, mờ 4px, màu xám.|

|`text-transform`|Ý nghĩa|
|---|---|
|`none`|Giữ nguyên.|
|`capitalize`|Viết hoa chữ cái đầu mỗi từ.|
|`uppercase`|Viết hoa toàn bộ.|
|`lowercase`|Viết thường toàn bộ.|

|`vertical-align`|Ý nghĩa|
|---|---|
|`baseline`|Thẳng hàng với đường cơ sở của phần tử cha.|
|`sub`|Chỉ số dưới.|
|`super`|Chỉ số trên.|
|`top`|Sát cạnh trên của dòng.|
|`text-top`|Sát cạnh trên của chữ phần tử cha.|
|`middle`|Căn giữa theo chiều dọc.|
|`bottom`|Sát cạnh dưới của dòng.|
|`text-bottom`|Sát cạnh dưới của chữ phần tử cha.|
|`[length]`, `[%]`|Dịch lên/xuống một khoảng cụ thể.|

|`white-space`|Ý nghĩa|
|---|---|
|`normal`|Gộp khoảng trắng, tự động xuống dòng (mặc định).|
|`pre`|Giữ nguyên khoảng trắng và xuống dòng, không tự xuống dòng.|
|`nowrap`|Gộp khoảng trắng, không tự xuống dòng.|

|`word-spacing` / `letter-spacing`|Ý nghĩa|
|---|---|
|`normal`|Khoảng cách mặc định.|
|`[length]`|Khoảng cách cụ thể (`word-spacing`: giữa các từ; `letter-spacing`: giữa các ký tự).|

|`direction`|Ý nghĩa|
|---|---|
|`ltr`|Từ trái sang phải (left to right).|
|`rtl`|Từ phải sang trái (right to left).|

### Layout

#### Position

Positioning là thay đổi vị trí element một chút vì ý đồ thiết kế nào đó.

| `position`\Style | `top`                                                                                             | `bottom`                       | `left`                        | `right`                       |
| ---------------- | ------------------------------------------------------------------------------------------------- | ------------------------------ | ----------------------------- | ----------------------------- |
| `static`         | Không có tác dụng                                                                                 | Không có tác dụng              | Không có tác dụng             | Không có tác dụng             |
| `relative`       | Dịch phần tử **xuống dưới** so với vị trí gốc của nó                                              | Tương tự, nhưng là xuống dưới. | Tương tự, nhưng là sang trái. | Tương tự, nhưng là sang phải. |
| `absolute`       | Đặt cạnh trên của phần tử cách cạnh trên của **phần tử cha gần nhất có `position` khác `static`** | Tương tự, nhưng là cạnh dưới.  | Tương tự, nhưng là cạnh trái. | Tương tự, nhưng là cạnh phải. |
| `fixed`          | Đặt cạnh trên của phần tử cách cạnh trên của **cửa sổ trình duyệt**                               | Tương tự, nhưng là cạnh dưới.  | Tương tự, nhưng là cạnh trái. | Tương tự, nhưng là cạnh phải. |

**VD**: Căn giữa khối theo chiều ngang:
```css
.container {
  margin: 0 auto;
}
```

**VD**: Căn giữa tuyệt đối (ngang và dọc) bằng `position`:
```css
.parent {
  position: relative;
  height: 300px;
}

/* Đối tượng đc căn giữa .parent */
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

**VD**: Thanh menu cố định trên đầu trang.
```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 10px 20px;
}
```

**VD**: Nút “Lên đầu trang” ở góc dưới phải.
```css
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 14px;
  z-index: 50;
}
```

**VD**: Tooltip hiện khi rê chuột.
```css
.tip {
  position: relative;
}

.tip .tip-text {
  display: none;
  position: absolute;
  bottom: 100%;
  left: 0;
  padding: 4px 8px;
  background: black;
  color: white;
  z-index: 10;
}

.tip:hover .tip-text {
  display: block;
}
```

# Một số style khác

#### Overflow

| Ví dụ                  | Ý nghĩa                                        |
| ---------------------- | ---------------------------------------------- |
| `overflow: <giá trị>;` | Cách xử lý khi nội dung vượt quá phần tử chứa. |

| `overflow` | Ý nghĩa                                          |
| ---------- | ------------------------------------------------ |
| `visible`  | Nội dung thừa vẫn hiển thị bên ngoài (mặc định). |
| `hidden`   | Cắt bỏ phần nội dung thừa.                       |
| `scroll`   | Luôn hiện thanh cuộn.                            |
| `auto`     | Chỉ hiện thanh cuộn khi nội dung bị thừa.        |

# Tích hợp CSS vào HTML

### Inline CSS

Là khai báo CSS bằng thuộc tính `style` của các thẻ HTML.

```html
<tag style="prop1: val1; prop2: val2; ...">...</tag>
```

### Embedding CSS

Là khai báo CSS bên trong thẻ **`<style>`** của HTML.

**VD**:
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webpage title</title>
    <style>
	    /* CSS styles */
    </style>
</head>
<body>
	<!-- Main content -->
</body>
</html>
```

### External CSS

Là khai báo CSS tròn file riêng có phần mở rộng là `.css`, sau đó đưa vào HTML thông qua thẻ **`<link rel="stylesheet" type="text/css"/>`** hoặc **`<style>`**.

**VD**:
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webpage title</title>
    
    <!-- Cách 1 -->
    <link rel="stylesheet" type="text/css" href="Your CSS file dir"/>
    
    <!-- Cách 2 -->
    <style>
	    @import url("Your CSS file dir")
    </style>
</head>
<body>
	<!-- Main content -->
</body>
</html>
```

# Thứ tự ưu tiên khi áp dụng style

1 element có thể bị nhiều nơi định nghĩa style, khi đó browser sẽ áp dụng style theo *nơi định nghĩa gần nhất*, theo quy tắc thứ tự ưu tiên giảm dần là:
1. Inline CSS.
2. Embedding CSS.
3. External CSS.
4. Hệ thống style mặc định của browser.




