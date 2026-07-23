**Framer Motion** (**Motion for React**) là một thư viện animation  dành riêng cho React, cho phép animate component, layout, gesture và scroll mà không cần thao tác trực tiếp với DOM hay refs như GSAP.

```sh
npm install framer-motion
```

> [!note]
> Framer Motion animate qua **props** của component `motion`, khác với GSAP là animate qua **selector/ref**. Vì vậy Framer Motion "React-native" hơn, nhưng cũng có nghĩa là mọi animation đều gắn liền với lifecycle của component (mount/unmount/re-render).

# `motion` component

Muốn animate một element, phải biến nó thành **`motion` component** bằng cách thay tag gốc bằng `motion.<tag>`.

```jsx
import { motion } from "framer-motion";

<motion.div animate={{ x: 250 }} />
```

Bất kỳ tag HTML hoặc SVG nào cũng có bản `motion` tương ứng: `motion.div`, `motion.button`, `motion.svg`, `motion.path`,...

Muốn biến 1 component tuỳ chỉnh thành `motion` component thì phải bọc bằng `motion.create()`:

```jsx
const MotionCustom = motion.create(MyComponent);
```

## Các props điều khiển trạng thái

Framer Motion dùng **props** để định nghĩa các trạng thái (state) của animation:

| Prop          | Ý nghĩa                                                                |
| ------------- | ---------------------------------------------------------------------- |
| `initial`     | Trạng thái ban đầu (lúc mount)                                         |
| `animate`     | Trạng thái đích                                                        |
| `exit`        | Trạng thái khi unmount (**bắt buộc** phải nằm trong `AnimatePresence`) |
| `whileHover`  | Trạng thái khi hover                                                   |
| `whileTap`    | Trạng thái khi nhấn (mousedown/touchstart)                             |
| `whileFocus`  | Trạng thái khi element được focus                                      |
| `whileDrag`   | Trạng thái trong lúc kéo (drag)                                        |
| `whileInView` | Trạng thái khi element xuất hiện trong viewport                        |

**VD**: Di chuyển từ vị trí `x` = `0` phải `250` đơn vị.
```jsx
<motion.div initial={{ x: 0 }} animate={{ x: 250 }} />
```

**VD**: Di chuyển từ vị trí gốc sang phải `250` đơn vị. Vị trí gốc là vị trí component này được render mà không có animation tác động.
```jsx
<motion.div animate={{ x: 250 }} />
```

**VD**: `whileHover` và `whileTap`.
```jsx
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
/>
```

### Các thuộc tính định dạng (bên trong `animate`, `initial`,...)

|Thuộc tính|Ý nghĩa|VD|
|---|---|---|
|`x`, `y`, `z`|Dịch chuyển theo trục (translate)|`x: 100`|
|`rotate`|Xoay (độ)|`rotate: 360`|
|`rotateX`, `rotateY`|Xoay 3D|`rotateY: 180`|
|`scale`|Phóng to/thu nhỏ|`scale: 1.5`|
|`scaleX`, `scaleY`|Scale từng trục|`scaleX: 2`|
|`opacity`|Độ trong suốt|`opacity: 0`|
|`width`, `height`|Kích thước|`width: 300`|
|`backgroundColor`|Màu nền|`backgroundColor: "#ff0000"`|
|`color`|Màu chữ|`color: "white"`|
|`borderRadius`|Bo góc|`borderRadius: "50%"`|
|`skewX`, `skewY`|Nghiêng|`skewX: 20`|
|`clipPath`|Hiệu ứng cắt|`clipPath: "circle(50%)"`|
|`filter`|Blur, brightness...|`filter: "blur(10px)"`|
|`pathLength`|Độ dài đường vẽ (SVG, dùng với `path`)|`pathLength: 1`|

## `transition`

Kiểm soát **cách** animation chạy (thời gian, easing, loại chuyển động).

```jsx
<motion.div
  animate={{ x: 250 }}
  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
/>
```

|Thuộc tính|Ý nghĩa|VD|
|---|---|---|
|`duration`|Thời gian chạy (giây)|`duration: 1.5`|
|`delay`|Trễ trước khi chạy|`delay: 0.5`|
|`ease`|Kiểu chuyển động|`ease: "easeOut"`|
|`repeat`|Số lần lặp, `Infinity` nếu là lặp vô hạn|`repeat: 3`|
|`repeatDelay`|Trễ giữa các lần lặp|`repeatDelay: 1`|
|`repeatType`|Kiểu lặp: `"loop"`, `"reverse"`, `"mirror"`|`repeatType: "reverse"`|
|`type`|Loại animation: `"tween"`, `"spring"`, `"inertia"`|`type: "spring"`|
|`staggerChildren`|Khoảng cách stagger giữa các con (dùng với `variants`)|`staggerChildren: 0.1`|

### `ease`

|`ease`|Cảm giác|
|---|---|
|`"linear"`|Tốc độ đều|
|`"easeOut"`|Mượt vừa|
|`"easeInOut"`|Mượt cả 2 đầu, rất phổ biến|
|`"circOut"`|Chuyển động tròn|
|`"backOut"`|Vượt đích rồi quay lại|
|`[0.17, 0.67, 0.83, 0.67]`|Custom cubic-bezier|

### `type: "spring"`

Khác biệt lớn nhất so với GSAP: Framer Motion hỗ trợ animation **có tính vật lý (physics-based)**.
Khi có thuộc tính này, `duration` bị bỏ qua, thay vào đó, các thuộc tính sau hữu hiệu:

|Thuộc tính|Ý nghĩa|VD|
|---|---|---|
|`stiffness`|Độ "cứng" lò xo, càng cao càng nhanh|`stiffness: 300`|
|`damping`|Độ cản, càng cao càng ít nảy|`damping: 20`|
|`mass`|Khối lượng object, ảnh hưởng quán tính|`mass: 1`|
|`bounce`|Độ nảy (0–1), thay thế nhanh cho `damping`|`bounce: 0.25`|

```jsx
<motion.div
  animate={{ scale: 1 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
/>
```

## Các sự kiện (callback props)

Tương đương nhóm `onStart`, `onUpdate`,... của GSAP, nhưng đặt trực tiếp trên `motion` component:

|Prop|Khi nào chạy|
|---|---|
|`onAnimationStart`|Animation bắt đầu|
|`onUpdate`|Mỗi frame|
|`onAnimationComplete`|Hoàn thành|
|`onHoverStart` / `onHoverEnd`|Bắt đầu/kết thúc hover|
|`onTap` / `onTapStart` / `onTapCancel`|Các sự kiện nhấn|
|`onDrag` / `onDragStart` / `onDragEnd`|Các sự kiện kéo|
|`onViewportEnter` / `onViewportLeave`|Vào/ra khỏi viewport|

# `variants`

**Variants** là cách định nghĩa các trạng thái animation dưới dạng **object đặt tên**, thay vì viết trực tiếp giá trị vào `animate`. Đây là cơ chế thay thế cho việc lặp code khi nhiều component cần chung 1 tập trạng thái, đồng thời là điều kiện bắt buộc để dùng **stagger** (xem bên dưới).

```jsx
const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

<motion.div
  variants={boxVariants}
  initial="hidden"
  animate="visible"
/>
```

## Propagation (lan truyền variants cho con)

Nếu component cha có `variants` và set `initial`/`animate` bằng **tên** (string), thì các `motion` con (chỉ cần có `variants` cùng tên state, **không cần** khai báo lại `initial`/`animate`) sẽ tự động nhận trạng thái từ cha lan xuống.

```jsx
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

<motion.ul variants={container} initial="hidden" animate="visible">
  {items.map((i) => (
    <motion.li key={i} variants={item} />
  ))}
</motion.ul>
```

Đây chính là cơ chế **`stagger`** của Framer Motion: đặt `staggerChildren` (và `delayChildren` nếu cần trễ trước khi bắt đầu stagger) trong `transition` của variant cha.

|Thuộc tính|Ý nghĩa|VD|
|---|---|---|
|`staggerChildren`|Khoảng cách giữa animation của các con|`staggerChildren: 0.1`|
|`delayChildren`|Trễ trước khi con đầu tiên bắt đầu|`delayChildren: 0.3`|
|`staggerDirection`|Hướng stagger: `1` (xuôi) hoặc `-1` (ngược)|`staggerDirection: -1`|

> [!note] Framer Motion không có sẵn tuỳ chọn `from: "center"`/`"random"`/`grid` như GSAP. Muốn stagger theo thứ tự tuỳ ý (VD: từ giữa ra) phải tự tính `delay` riêng cho từng phần tử qua hàm trong `transition`, hoặc sắp lại mảng `items` trước khi map.

## `orchestration` giữa cha và con

`transition` của variant cha còn hỗ trợ điều phối thời điểm cha–con chạy trước/sau nhau:

|Thuộc tính|Ý nghĩa|
|---|---|
|`when`|`"beforeChildren"` hoặc `"afterChildren"` — cha chạy trước/sau con|

# `AnimatePresence`

Vì React unmount component ngay lập tức khi điều kiện render sai, DOM biến mất trước khi animation `exit` kịp chạy. `AnimatePresence` giải quyết vấn đề này bằng cách giữ component lại trong DOM cho đến khi animation `exit` hoàn tất.

```jsx
import { AnimatePresence, motion } from "framer-motion";

<AnimatePresence>
  {isVisible && (
    <motion.div
      key="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  )}
</AnimatePresence>
```

> [!important]
> Component con trực tiếp bên trong `AnimatePresence` **bắt buộc** phải có prop `key` duy nhất, nếu không React sẽ không nhận diện được đâu là phần tử bị gỡ bỏ để chạy `exit`.

| Prop `AnimatePresence` | Ý nghĩa                                                                                                                                            |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                 | `"sync"` (mặc định).<br>`"wait"` (đợi exit xong mới enter).<br>`"popLayout"` (con enter chiếm layout ngay, không đợi các anh em khác dịch chuyển). |
| `initial`              | `false` để tắt animation lúc mount lần đầu                                                                                                         |
| `onExitComplete`       | Callback khi toàn bộ animation exit hoàn tất                                                                                                       |

# `useAnimate`

Là hook cho phép viết animation theo kiểu **imperative**. dùng khi animation phức tạp, cần trình tự nhiều bước, hoặc cần chạy animation ngoài lifecycle render bình thường (VD: trong 1 hàm xử lý sự kiện phức tạp).

```jsx
import { useAnimate } from "framer-motion";

function Box() {
  const [scope, animate] = useAnimate();

  const handleClick = async () => {
    await animate(scope.current, { x: 250 }, { duration: 1 });
    await animate(scope.current, { y: 250 }, { duration: 1 });
  };

  return <div ref={scope} onClick={handleClick} />;
}
```

| Tiêu chí                                  | `useEffect` + `animate()` (import từ `"motion"`) | `useAnimate`               |
| ----------------------------------------- | ------------------------------------------------ | -------------------------- |
| Tạo animation imperative                  | ✅                                                | ✅                          |
| Tự động cleanup animation khi unmount     | ❌ phải tự viết                                   | ✅ tự động                  |
| React Strict Mode                         | ⚠️ dễ tạo animation 2 lần                        | ✅ xử lý sẵn                |
| Giới hạn phạm vi tìm selector con (scope) | ❌ không có                                       | ✅ có (query trong `scope`) |
| Viết code                                 | Dài hơn                                          | Ngắn hơn                   |

`animate()` trả về bên trong `useAnimate` còn cho phép truy vấn nhiều phần tử con trong `scope` bằng CSS selector.

```jsx
animate("li", { opacity: 1 }, { delay: stagger(0.1) });
```

| Thuộc tính của<br>`stagger(time, options)` | Ý nghĩa                                        |
| ------------------------------------------ | ---------------------------------------------- |
| `time`                                     | Khoảng cách giữa các phần tử (giây)            |
| `startDelay`                               | Trễ trước khi stagger bắt đầu                  |
| `from`                                     | `"first"`, `"last"`, `"center"`, hoặc số index |
| `ease`                                     | Ease áp dụng cho khoảng stagger                |

# `useScroll` và `useTransform`

Framer Motion không có plugin `scrollTrigger` tích hợp sẵn như GSAP. Hiệu ứng theo scroll được ghép từ 2 hook:

- **`useScroll()`**: trả về các **motion value** (`scrollYProgress`, `scrollXProgress`,...) đại diện tiến độ scroll, giá trị từ `0` đến `1`.
- **`useTransform()`**: ánh xạ (map) 1 motion value từ khoảng này sang khoảng khác.

```jsx
import { useScroll, useTransform, motion } from "framer-motion";

function Section() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // tương đương start/end của scrollTrigger
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return <motion.div ref={ref} style={{ x }} />;
}
```

|Option của `useScroll`|Ý nghĩa|
|---|---|
|`target`|Ref của element theo dõi (mặc định là toàn trang nếu bỏ trống)|
|`offset`|Cặp điểm `[start, end]`, mỗi điểm dạng `"<mép trigger> <mép viewport>"`, tương đương `start`/`end` của `scrollTrigger`|
|`container`|Ref của phần tử scroll cha, nếu không scroll trên `window`|

**VD**: `offset: ["start end", "end start"]` tương đương `scrollTrigger: { start: "top bottom", end: "bottom top" }` trong GSAP — animation chạy suốt từ lúc mép trên trigger chạm đáy viewport đến lúc mép dưới trigger chạm đỉnh viewport.

Muốn có `scrub` (animation gắn liền tiến độ scroll, không cần easing riêng) thì gán trực tiếp motion value đã `useTransform` vào `style`, như ví dụ trên — đây chính là hành vi mặc định, không cần bật thêm option nào.

Muốn có hiệu ứng như `toggleActions`/`onEnter` của GSAP (animate 1 lần khi element xuất hiện, không gắn liên tục theo scroll), dùng prop `whileInView` trên `motion` component thay vì `useScroll`:

```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
/>
```

|Option của `viewport`|Ý nghĩa|
|---|---|
|`once`|`true` để chỉ animate 1 lần, không reverse khi cuộn ra lại (tương đương `toggleActions: "play none none none"`)|
|`amount`|Tỉ lệ diện tích element phải hiện ra để tính là "trong view" (`0`–`1`, hoặc `"some"`/`"all"`)|
|`margin`|Mở rộng/thu hẹp vùng viewport tính toán, giống `rootMargin` của `IntersectionObserver`|

# `useMotionValue` + `motion value`

**Motion value** là các giá trị được Framer Motion theo dõi riêng biệt, thay đổi mà **không** trigger re-render component (khác với `useState`) — đây là lý do animation của Framer Motion đạt hiệu năng cao dù chạy trên React.

```jsx
import { useMotionValue } from "framer-motion";

const x = useMotionValue(0);

<motion.div style={{ x }} drag="x" />
```

|Hook|Ý nghĩa|
|---|---|
|`useMotionValue(initial)`|Tạo 1 motion value điều khiển thủ công|
|`useTransform(value, in, out)`|Map 1 motion value sang giá trị khác (đổi khoảng hoặc đổi đơn vị)|
|`useSpring(value, config)`|Bọc 1 motion value bằng hiệu ứng lò xo, làm mượt khi giá trị gốc thay đổi đột ngột|
|`useMotionValueEvent(value, "change", cb)`|Lắng nghe sự kiện thay đổi của motion value, tương đương `onUpdate`|

# `drag`

Là prop bật tính năng kéo-thả trực tiếp trên `motion` component, không cần thư viện ngoài.

```jsx
<motion.div drag dragConstraints={{ left: 0, right: 300, top: 0, bottom: 0 }} />
```

|Thuộc tính|Ý nghĩa|VD|
|---|---|---|
|`drag`|Bật kéo: `true`, `"x"`, hoặc `"y"`|`drag="x"`|
|`dragConstraints`|Giới hạn vùng kéo (object hoặc `ref`)|`dragConstraints={{ left: 0, right: 300 }}`|
|`dragElastic`|Độ "co giãn" khi kéo vượt giới hạn (`0`–`1`)|`dragElastic: 0.2`|
|`dragMomentum`|Có quán tính sau khi thả hay không|`dragMomentum: false`|
|`dragSnapToOrigin`|Tự bay về vị trí gốc sau khi thả|`dragSnapToOrigin: true`|

# `AnimatePresence` + layout kết hợp `variants` — ví dụ tổng hợp

Tương tự cách GSAP dùng `gsap.timeline()` để phối hợp nhiều tween, Framer Motion phối hợp animation phức tạp bằng cách **kết hợp** `variants` (propagation), `AnimatePresence` (mount/unmount) và `layout` (thay đổi vị trí) trong cùng 1 cây component, thay vì có một API "timeline" tập trung riêng biệt.

```jsx
const list = {
  visible: { transition: { staggerChildren: 0.08 } },
};
const row = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

<motion.ul variants={list} initial="hidden" animate="visible">
  <AnimatePresence>
    {rows.map((r) => (
      <motion.li key={r.id} layout variants={row} exit="exit" />
    ))}
  </AnimatePresence>
</motion.ul>
```

> [!note]
> Framer Motion vẫn có `animate.timeline` (hàm `animate([...])` kiểu sequence, import từ `"motion"`) cho trường hợp cần điều khiển trình tự tuyệt đối như `gsap.timeline()`, nhưng cách tiếp cận idiomatic trong React là dùng `variants` + propagation như trên.