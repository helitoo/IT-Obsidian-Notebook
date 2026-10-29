
**jQuery** là thư viện Javascript giúp đơn giản hóa cách viết JavaScript và tăng tốc độ xử lý sự kiện.

# Selector

**Cú pháp**:
```js
$('selector').action()
```

**VD**:
```js
$('#myBtn').on('click', function(event) {
  $('#output').text('Bạn vừa nhấn nút!');
  console.log('Sự kiện:', event.type);
});
```

# Methods

### Lấy và đặt giá trị vào element

| Cú pháp                                                                       | Ý nghĩa                                                                   |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **`.text()`**: Lấy giá trị.<br><br>**`.text('content')`**: Đặt giá trị.       | Lấy/đặt **nội dung text thuần** (loại bỏ mọi thẻ HTML) của phần tử.       |
| **`.html()`**: Lấy giá trị.<br><br>**`.html('<b>content</b>')`**: Đặt giá trị | Lấy/đặt **nội dung HTML** bên trong phần tử (giữ nguyên thẻ).             |
| **`.val()`**: Lấy giá trị.<br><br>**`.val('giá trị')`**: Đặt giá trị.         | Lấy/đặt **giá trị** của phần tử **form** (`input`, `select`, `textarea`). |

### Thêm phần tử vào DOM

| Cú pháp               | Ý nghĩa                                                                 |
| --------------------- | ----------------------------------------------------------------------- |
| **`$(A).append(B)`**  | Chèn `B` vào **cuối cùng bên trong** `A` (là phần tử con cuối).         |
| **`$(A).prepend(B)`** | Chèn `B` vào **đầu tiên bên trong** `A` (là phần tử con đầu).           |
| **`$(A).after(B)`**   | Chèn `B` **ngay sau** `A`, ở cùng cấp (là phần tử anh em kế tiếp).      |
| **`$(A).before(B)`**  | Chèn `B` **ngay trước** `A`, ở cùng cấp (là phần tử anh em đứng trước). |

### Xóa phần tử / nội dung

| Cú pháp                    | Ý nghĩa                                                                       |
| -------------------------- | ----------------------------------------------------------------------------- |
| **`$(selector).remove()`** | Xóa **hoàn toàn** phần tử khỏi DOM (kể cả data, event handler gắn kèm).       |
| **`$(selector).empty()`**  | Xóa **toàn bộ nội dung con** bên trong phần tử, nhưng **giữ lại** phần tử đó. |

### Class và CSS

| Cú pháp                                                                                                                                                    | Ý nghĩa                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **`.addClass('className')`**                                                                                                                               | Thêm một hoặc nhiều class vào phần tử.                           |
| **`.removeClass('className')`**                                                                                                                            | Xóa một hoặc nhiều class khỏi phần tử (không tham số = xóa hết). |
| **`.toggleClass('className')`**                                                                                                                            | Bật/tắt class: nếu đang có thì xóa, nếu chưa có thì thêm.        |
| **`.css('color')`**: Lấy giá trị.<br><br>**`.css('color', 'red')`**: Đặt giá trị.<br><br>**`.css({color:'red', fontSize:'14px'})`**: Đặt nhiều thuộc tính. | Lấy/đặt **thuộc tính CSS inline** trực tiếp trên phần tử.        |

### Thuộc tính

| Cú pháp                                                                                        | Ý nghĩa                                                                                              |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **`.attr('attrName')`**: Lấy giá trị.<br><br>**`.attr('attrName', 'value')`**: Đặt giá trị.    | Lấy/đặt **giá trị của attribute HTML** (ví dụ `href`, `src`, `data-*`).                              |
| **`.removeAttr('attrName')`**                                                                  | Xóa hẳn attribute khỏi phần tử                                                                       |
| **`.prop('propName')`**: Lấy giá trị.<br><br>**`.prop('propName', true/false)`**: Đặt giá trị. | Lấy/đặt **boolean property của DOM object** (*VD `checked`, `disabled`, `selected` - kiểu boolean*). |
| **`.removeProp('propName')`**                                                                  | Xóa một property (thường dùng cho property tùy chỉnh).                                               |
| **`.hasClass('className')`**                                                                   | Kiểm tra phần tử **có chứa class đó không**, trả về `true`/`false`.                                  |

# Events

### Document loading

| Cú pháp         | Xảy ra khi ...                            |
| --------------- | ----------------------------------------- |
| **`.load()`**   | Document và các element con đã load xong. |
| **`.ready()`**  | DOM đã load xong.                         |
| **`.unload()`** | Page chưa load xong thì bị đóng.          |

### Form

| Cú pháp         | Xảy ra khi ...                      |
| --------------- | ----------------------------------- |
| **`.blur()`**   | Element mất focus.                  |
| **`.change()`** | Element thay đổi nội dung.          |
| **`.focus()`**  | Element được focus.                 |
| **`.select()`** | Nội dung của element được bôi chọn. |
| **`.submit()`** | Form được submit.                   |

### Browser

| Cú pháp         | Xảy ra khi ...                  |
| --------------- | ------------------------------- |
| **`.scroll()`** | Element bị cuộn.                |
| **`.resize()`** | Element bị thay đổi kích thước. |

### Mouse

| Cú pháp             | Xảy ra khi ...                                                                                                    |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **`.click()`**      | Element bị click.                                                                                                 |
| **`.dbclick()`**    | Element bị double click.                                                                                          |
| **`.mousedown()`**  | Element bị click vào nhưng chưa nhả ra.                                                                           |
| **`.mouseup()`**    | Con trỏ nhả click ra khỏi element. Được kích hoạt kể cả khi trước đó element không bị click vào.                  |
| **`.hover()`**      | Element bị rê chuột vào / ra.<br>Là tổng hợp của `mouseenter` và `mouseleave`.                                    |
| **`.mouseenter()`** | Element bị rê chuột vào.                                                                                          |
| **`.mouseleave()`** | Element bị rê chuột ra.<br>Sự kiện này chỉ được kích hoạt một lần khi con trỏ ra khỏi element.                    |
| **`.mouseout()`**   | Element bị rê chuột ra.<br>Sự kiện này sẽ liên tục bị kích hoạt khi con trỏ ra khỏi của element con của selector. |
| **`.mousemove()`**  | Con trỏ đang di chuyển trên element.                                                                              |
| **`.mouseover()`**  | Con trỏ đang nằm trên element.                                                                                    |

# Effects
























