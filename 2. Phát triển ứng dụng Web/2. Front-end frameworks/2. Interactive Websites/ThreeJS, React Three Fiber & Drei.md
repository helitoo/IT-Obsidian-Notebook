
# Các khái niệm cơ bản

### Các khái niệm liên quan đến scene

| Khái niệm                                            | Ý nghĩa                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **[Scene](https://threejs.org/docs/?q=scene#Scene)** | Là nơi mà tất cả những gì diễn ra.                                                                                                                                                                                                                                             |
| **Environment**                                      | Là tấm nền (back-drop) của scene. Một scene có thể có nhiều environment khác nhau.<br>Ví dụ như *Ngày*, *Đêm* là các environment của scene *Thế giới*.                                                                                                                         |
| **[Camera](https://threejs.org/docs/#Camera)**       | Góc nhìn của người dùng nhìn vào scene. Một scene có thể được nhìn bởi nhiều camera.<br>[Danh sách các loại camera](https://threejs.org/docs/#ArrayCamera).                                                                                                                    |
| **[Control](https://threejs.org/docs/#Controls)**    | Cách điều khiển camera.<br>[Danh sách các loại control](https://threejs.org/docs/#ArcballControls).                                                                                                                                                                            |
| **Renderer**                                         | Là bộ xử lý (processor) tính toán cách render các object bên trong scene, kết hợp cùng với environment, dưới góc nhìn của camera. Kết quả của nó được chuyển thành *pixel* và hiển thị trên màn hình.<br>[Danh sách các loại renderer](https://threejs.org/docs/#CSS2DObject). |
| **[Light](https://threejs.org/docs/#Light)**         | Là ánh sáng chiếu vào scene.<br>[Danh sách các loại light](https://threejs.org/docs/#AmbientLight).                                                                                                                                                                            |

### Các khái niệm liên quan đến object

| Khái niệm                                     | Ý nghĩa                                                                                                |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Object**                                    | Là các đối tượng 3D cụ thể được render lên màn hình.<br>                                               |
| **[Point](https://threejs.org/docs/#Points)** | Là 1 object, đại diện cho 1 điểm.                                                                      |
| **[Line](https://threejs.org/docs/#Line)**    | Là 1 object, đại diện cho 1 đường thẳng nối giữa 2 point.                                              |
| **[Mesh](https://threejs.org/docs/#Mesh)**    | Là object kết hợp giữa points, lines và các mặt phẳng.                                                 |
| **Geometry**                                  | Là hình dạng của object.<br>[Danh sách các loại geometry](https://threejs.org/docs/#BoxGeometry).      |
| **Material**                                  | Là vật liệu của object.<br>[Danh sách các loại material](https://threejs.org/docs/#Line2NodeMaterial). |

# Vanilla ThreeJS

Cách cài đặt ThreeJS: https://threejs.org/manual/#en/installation.

`main.js`
```js
import * as THREE from 'three';

// 1. Create the scene
const scene : THREE.scene = new THREE.scene();
scene.background = new THREE.Color('#F0F0F0');

// 2. Add the camera
const camera = new THREE.PerspectiveCamera(
  75, // fov
  window.innerWidth / window.innerHeight, // aspect
  0.1 // near
  100 // far
);
camera.postion.z = 5;

// 3. Create and add a cube object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 4. Add lighting
const light = new THREE.DirectionalLight(
  0x9CDBA6, // color
  10 // intensity
);
light.position.set([1, 1, 1]);
scene.add(light);

// 5. Set up the renderer
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 6. Add Control
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

// 7. Animate the scene
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// 8. Handle window resizing
window.addEventListener(type: 'resize', listener: () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
})
```

Script trên được tiêm vào HTML như sau:
```html
<script type="modele" scr="main.js"></script>
```

**Trong đó**:
- **[`PerspectiveCamera`](https://threejs.org/docs/?q=PerspectiveCamera#PerspectiveCamera)**: Là loại camera mô phỏng cách con người nhìn vào scene, những object càng gần camera sẽ càng to, càng xa sẽ càng nhỏ.
	- `fov` (*Field of view*) \[Degree]: Góc không gian theo chiều dọc mà camera nhìn thấy.
	- `aspect`: Tỷ lệ khung hình của camera.
	- `near`: Khoảng cách gần nhất mà object có thể được nhìn thấy bởi camera.
	- `far`: Khoảng cách xa nhất mà object có thể được nhìn thấy bởi camera.
![[camera.svg]]
- **[`MeshStandardMaterial`](https://threejs.org/docs/?q=MeshStandardMaterial#MeshStandardMaterial)**: Là material chuẩn, phản ứng với ánh sáng dựa theo các nguyên tắc vật lý (*Physically based rendering - PBR*).
- **[`DirectionalLight`](https://threejs.org/docs/?q=DirectionalLight#DirectionalLight)**: Là loại ánh sáng phát ra nhiều tia sáng song song, chiếu vào object, tương tự như ánh sáng mặt trời.
	- `intensity`: Độ mạnh của ánh sáng, `1` là chuẩn.
![](https://static.lockex1987.com/learn-threejs/images/light-types.png)

- **[`WebGLRenderer`](https://threejs.org/docs/?q=WebGLRenderer#WebGLRenderer)**: Một renderer sử dụng WebGL 2. Renderer có `size` là kích thước vùng hoạt động của nó và 1 DOM element làm phạm vi hoạt động của nó, thường là `canvas`.
- **`position`**: Là vị trí các đối tượng, gồm 3 thuộc tính là `x`, `y`, `z` như sau. Mặc định, khi tạo một scene mới, gốc tọa độ thế giới `(0, 0, 0)` nằm tại tâm của hệ tọa độ. Các đối tượng được định vị tương đối so với gốc này. Gốc tọa độ không phụ thuộc vào kích thước (`size`) của renderer hay kích thước canvas.
![[position.svg]]

- **`rotation`** \[Radian]: Là góc quay của đối tượng so với ban đầu, chiều quay ngược chiều kim đồng hồ.
![[rotation.svg]]
- **[`OrbitControls`](https://threejs.org/docs/?q=orbit#OrbitControls)**: Là control cung cấp 2 loại tính năng là zoom (phóng to / thu nhỏ) và pan (kéo lên - xuống hoặc trái - phải).

# React Three Fiber (R3F) & React Three Drei

**R3F** là một thư viện React cung cấp các tính năng của ThreeJS. Nó là ThreeJS dành cho React.

**Drei** là một thư viện R3F components và các phương thức trừu tượng hơn R3F, được xây dựng dựa trên R3F.

**Cài đặt**:
```sh
npm i three @react-three/fiber @react-three/drei
```

Chương trình trên có thể được viết lại thành component sau:
```jsx
<Canvas>
  <OrbitControls enableZoom enablePan enableRotate/>
  <directionalLight position={[1,1,1]} intensity={10} color={0xF0F0F0}/>
  <color attach="background" args={['#F0F0F0']}/>
  <RotatingCube/>
</Canvas>
```

>[!tip]
>- Từng object của ThreeJS được đổi sang component tương ứng trong Fiber.
>- Với chữ cái đầu in thường.
>- Các thuộc tính và tham số của ThreeJS constructor được thay bằng các thuộc tính của Fiber component.

Trong đó:
- **[`<Canvas>`](https://r3f.docs.pmnd.rs/api/canvas#canvas)**: Định nghĩa scene, renderer. Bên trong nó là các Fiber component. Nó cũng nhận các thuộc tính như 1 component thông thường.
- `<RotatingCube>` là custom component, nó được định nghĩa như sau:

```jsx
const RotatingCube = () => {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  })
  
  return (
    <mesh ref={meshRef}>
      <boxGeometry/>
      <meshStandardMaterial/>
    </mesh>
  )
}
```

Trong đó:
- Object được render liên tục trong nhiều vòng lặp (*Render loop / Animation loop*) để cập nhật trạng thái của nó. Ở mỗi lần loop, bạn có thể kiểm soát object thông qua **`useFrame`** (cung cấp bởi Fiber).

# Model bên ngoài

Việc xây dựng thủ công các model bằng các geometry sẵn có của Three thường rất khó khăn, người ta thường thiết kế các model qua các phần mềm chuyên dụng trước rồi xuất sang định dạng `.gltf`, sau đó từ `.gltf` chuyển sang JSX component (các `<mesh>`) thông qua tool [gltfjsx](https://github.com/pmndrs/gltfjsx) như sau:

```sh
npx gltfjsx ".glb path" -T
```

File `.jsx` sẽ được tạo ra tại folder chạy lệnh trên.

**Practice**:
1. Tìm và tải glTF (dưới dạng `.zip`) từ [Sketchfab](https://sketchfab.com/feed) (*chỉ tải được các file Downloadable*). Sketchfab là một thư viện mô hình 3D rất lớn và nổi tiếng trên thế giới.
2. Ném file `.zip` đó vào [gltf.pmnd.rs](https://gltf.pmnd.rs/) và nhận về component tương ứng.

