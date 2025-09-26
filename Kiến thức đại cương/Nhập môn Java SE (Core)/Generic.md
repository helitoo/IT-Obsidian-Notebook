
Generic là cách viết tham số hóa kiểu dữ liệu.

Cú pháp:
- `<A>` hay `<A, B>`...: Với `A`, `B` là các tham số kiểu dữ liệu.
- Bạn có thể chỉ thị các kiểu nhận được (Bounded type) thông qua từ khóa `extends`. VD:
	- `<T extends Number>`: `T` chỉ chấp nhận kiểu số như `Integer`, `Float`,...
	- `<T extends List>`: `T` chỉ chấp nhận kiểu interface của [[Java Collection Framework#`List`|List]] là `ListArray` và `LinkedList`.

VD: Generic [[OOP cơ bản#Lớp & Đối tượng|class]]:
```java
class Box<T> {  
	T value;
	
	void set(T value) {  
		this.value = value;  
	}  
	
	T get() {  
		return value;  
	}  
}
```
Khi gọi `Box<String> stringBox = new Box<>();` sẽ tạo ra một đối tượng có kiểu `T` là `String`.

VD: Generic method:
```java
public static <T> void printArray(T[] array) {  
	for (T item : array) {  
		System.out.println(item);  
	}  
}
```




