
Bài đọc liền trước: [[Giới thiệu & Cài đặt JavaScript]].

JS có thể được chèn vào trang [[HTML]] trong qua thẻ `<script>` và có 2 hình thức chèn:

# Internal JS

Nhúng mã JS trực tiếp vào trong trang `.html`:
```html
<script>
%% Your code %%
</script>
```

# External JS

## src

Tách mã JS ra một file `.js` riêng biệt và nhúng vào trang `.html` bằng cách sử dụng thuộc tính `src` của thẻ `<script>`.
```html
<script src="urJSfilePath"></script>
```

Emmet:
```emmet
script:src
```
## type module

Trong trường hợp chương trình JS của bạn có import nhiều module, bạn phải khai báo thuộc tính `type="module"` trong thẻ `<script>`.

Emmet:
```emmet
script:module
```
