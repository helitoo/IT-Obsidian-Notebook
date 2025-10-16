
1. **Từ cha sang con**: Sử dụng [[JSX#Props|props]].
2. **Từ con sang cha**: Sử dụng [[8. Callback và Promise#Callback function|callback]] thông qua các [[Component lifecycle & Hook|hook]].

**Ví dụ**: Xây dựng một trang web `TODO LIST` đơn giản phục vụ các tính năng sau:
1. Có nút `input[type="text"]` để nhập task cần làm và nút `button` để thêm task vừa nhập vào danh sách các task. Mỗi task cần có 1 `title` là nội dung của task và `completed` là trạng thái hoàn thiện của task.
2. Có các nút `button` để chỉnh sửa `title` và xóa task. Cho phép chỉnh sửa `completed`.
3. Dữ liệu được người dùng nhập được lưu vào [[6. LocalStorage]] và không bị mất đi khi reload web.

**Bước 1**: Xây dựng khung các component chưa có logic:

`ToDoItem.tsx`
```tsx
"use client";

import { Task } from "../page";

import { useState, useEffect } from "react";

const TodoItem = ({}: {}) => {
  const [title, setTitle] = useState(task.title);
  const [editting, setEditting] = useState(false);

  return (
    <li>
      <input type="text"/>
      <input type="checkbox"/>
      <button>Edit</button>
      <button}>Remove</button>
    </li>
  );
};

export default TodoItem;

```

`ToDoList.tsx`
```tsx
"use client";

import { Task } from "../page";
import TodoItem from "./TodoItem";

const TodoList = ({}: {}) => {
  return (
    <ul>
	    // Danh sach cac ToDoItem
    </ul>
  );
};

export default TodoList;
```

`page.tsx`
```tsx
"use client";

import TodoList from "./components/TodoList";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  return (
    <div>
      <main>
        <h2>TODO LIST</h2>
        <div>
          <input
            type="text"
            placeholder="Enter your task here"
          ></input>
          <button>Add</button>
        </div>
        <TodoList />
      </main>
    </div>
  );
}
```







