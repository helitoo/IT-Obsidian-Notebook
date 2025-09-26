
Annotation là các thông báo không ảnh hưởng gì đến logic của chương trình, nó giúp code tường minh hơn và giúp compiler phát hiện các lỗi về logic và cú pháp.

Có 2 annotation thông dụng:

# `@Override`

Thông báo rằng phương thức này sẽ ghi đè phương thức ở lớp cha ([[OOP nâng cao#Tính kế thừa (Inheritance), Tính đa hình (Polymorphism)|kế thừa]]) -> trả về lỗi khi ghi đè không đúng cách.

```java
class Animal {  
	void makeSound() {  
		System.out.println("Animal sound");  
	}  
}  

class Dog extends Animal {  
	@Override 
	void makeSound() {  
		System.out.println("Woof!");  
	}  
}
```

# `@Deprecated`

Thông báo đoạn code đã lỗi thời, không nên sử dụng -> Trả về `warining` khi cố sử dụng.

```java
public class Main {  
	@Deprecated  
	static void oldMethod() {  
		System.out.println("This method is outdated.");  
	}  
	
	public static void main(String[] args) {  
		oldMethod();
		// warning: [deprecation] oldMethod() in Main has been deprecated  
	}  
}
```

