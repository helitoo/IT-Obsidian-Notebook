
# Tính đóng gói (Encapsulation)

## Đóng gói qua phạm vi truy cập

Những thuộc tính của lớp nên là:
- `private`: Không thể truy cập từ ngoài lớp.
- Mặc định: Không thể truy cập từ ngoài package.
- `protected`: Không thể truy cập từ ngoài package không kế thừa.

Khi đó, những thuộc tính này không thể được truy cập hay chỉnh sửa từ phạm vi ngoài lớp (tùy phạm vi). Do đó, phải dùng các phương thức getter (để lấy giá trị) và setter (để sửa giá trị) các thuộc tính.

VD:
```java
public class Person {
	private String name;
	
	// Getter
	public String getName() {
		return name;
	}
	
	// Setter
	public void setName(String newName) {
		this.name = newName;
	}
}
```

## Đóng gói qua lớp lồng nhau (Inner class)

Lớp có thể được khai báo lồng trong lớp khác, gọi là Inner class. Inner class có ý nghĩa gôm dữ liệu tam thời, không có vai trò lớn trong thiết kế hệ thống.

VD: Inner class không static -> Cần tạo object khi dùng:
```java
class OuterClass {
	int x = 10;
	
	private class InnerClass {
		int y = 5;
	}
}

public class Main {
	public static void main(String[] args) {
		OuterClass myOuter = new OuterClass();
		OuterClass.InnerClass myInner = myOuter.new InnerClass();
		System.out.println(myInner.y + myOuter.x);
	}
}
```

VD: Static inner class -> Không cần tạo object khi dùng:
```java
class OuterClass {
	int x = 10;
	
	static class InnerClass {
		int y = 5;
	}
}

public class Main {
	public static void main(String[] args) {
		OuterClass.InnerClass myInner = new OuterClass.InnerClass();
		System.out.println(myInner.y);
	}
}
```

Inner class có thể truy cập ngược lên outer class thông qua các phương thức:
```java
class OuterClass {
	int x = 10;
	
	class InnerClass {
		public int getOuterX() {
		  return x;
		}
	}
}
```

## Đóng gói qua package

# Tính kế thừa (Inheritance), Tính đa hình (Polymorphism)

## Từ khóa `extends`

Một lớp có thể kế thừa một lớp khác (sử dụng các thành phần của lớp khác (Mặc định và `protected`)) bằng từ khóa `extends`:

VD:
```java
class Vehicle {
	protected String brand = "Ford";
	public void honk() {
		System.out.println("Tuut, tuut!");
	}
}

class Car extends Vehicle {
	// ...
}
```
Lúc này, lớp `Car` có thể truy cập đến `brand` và `honk()` của `Vehicle`.

Nếu lớp cha là `final` thì không thể được kế thừa.

Một lớp đa hình khi có lớp khác kế thừa nó, nhưng lại ghi đè các thành phần của nó.

VD:
```java
class Animal {
	public void animalSound() {
		System.out.println("The animal makes a sound");
	}
}

class Pig extends Animal {
	public void animalSound() {
		System.out.println("The pig says: wee wee");
	}
}
```
Lúc này, phương thức `Pig.animalSound()` đã ghi đè phương thức cùng tên của `Animal`.

## Từ khóa `super`

Lớp con có thể chủ động gọi thành phần của cha trực tiếp với nó thông qua đối tượng `super`:

```java
class Pig extends Animal {
	public void animalSound() {
		super.animalSound();
	}
}
```
Lúc này, `Pig.animalSound()` chỉ gọi `animalSound()` của cha.

Tương tự `this()`, gọi `super()` là gọi [[OOP cơ bản#Phương thức khởi tạo (Constructor)|constructor]] của cha.

# Tính trừu tượng (Abstraction)

## Lớp trừu tượng (Abstract class)

**Lớp trừu tượng** là lớp không có đối tượng, chỉ dùng làm khuông mẫu cho các lớp khác kế thừa. **Phương thức trừu tượng** là phương thức không có nội dung, buộc phải được lớp kế thừa ghi đè. Cả 2 cùng được khai báo bằng từ khóa `abstract`.

VD:
```java
abstract class Animal {
	public abstract void animalSound();
	
	public void sleep() {
		System.out.println("Zzz");
	}
}
```
Ở đây, `Animal` là lớp trừu tượng, `animalSound()` là phương thức trừu tượng. 

## Lớp thuần ảo (Interface class)

**Lớp thuần ảo** là lớp trừu tượng mà toàn bộ phương thức đều là lớp trừu tượng và bắt buộc lớp con phải ghi đè toàn bộ. Khai báo bằng từ khóa `interface`.

Lớp `abstract` cũng có thể có toàn bộ phương thức trừu tượng nhưng không bắt buộc lớp con phải ghi đè toàn bộ.

VD:
```java
interface Animal {
	public void animalSound();
	public void run();
}
```
Cả `animalSound()` và `run()` đều là phương thức trừu tượng dù không có `abstract`.

Các lớp khác đều phải kế thừa lớp thuần ảo qua từ khóa `implements` thay vì `extends`.

VD:
```java
class Pig implements Animal {
	public void animalSound() {
		System.out.println("The pig says: wee wee");
	}
	
	public void sleep() {
		System.out.println("Zzz");
	}
}
```

# Dependency và Dependency injection

VD1:
```java
public class Girl{
    private Bikini outfit;
    
    public Girl(){
      outfit = new Bikini();
    }
}
```

Lúc này, `Bikini` được gọi là một **dependency** của `Girl`. Vấn đề là, khi `Bikini` có vấn đề, hoặc bạn muốn thay bằng class khác, nó cũng sẽ ảnh hưởng trực tiếp đến `Girl`.

VD2:

```java
public interface Outfit {
  public void wear();
}

public class Bikini implements Outfit {
  public void wear() {
    // ...
  }
}

public class Girl{
    private Outfit outfit;
    public Girl(Outfit anything){
      this.outfit = anything;
    }
}

public class Main {
  public static void main(String[] args) {
    Outfit bikini = new Bikini();
    
    Girl ngocTrinh = new Girl(bikini);
  }
}
```

Với đoạn code ở trên, chúng ta đã gần như tách được `Bikini` ra khỏi `Girl`, điều này làm giảm sự phụ thuộc giữa `Girl` và `Bikini`. Khi đó, `Girl` có thể nhận `Outfit` tùy ý theo các lớp implements đến nó mà không phụ thuộc vào một `Outfit` cụ thể.

Quá trình trên được gọi là **dependency injection**.

# Tight-coupling và Loosely-coupled

**Tight-coupling** (liên kết chặt) ám chỉ việc mối quan hệ giữa các class quá chặt chẽ. Khi yêu cầu thay đổi logic hay một class bị lỗi sẽ dẫn tới ảnh hưởng tới toàn bộ các Class khác.

**Loosely-coupled** (lỏng hóa liên kết) là cách ám chỉ việc làm giảm bớt sự phụ thuộc giữa các class với nhau. Dependency injection là một phương pháp loosely-coupled.

VD1:

```java
public class BubbleSortAlgorithm{
    public void sort(int[] array) {
        // ...
    }
}

public class VeryComplexService {
    private BubbleSortAlgorithm bubbleSortAlgorithm
	    = new BubbleSortAlgorithm();
	
    public VeryComplexService(){
    }
    
    public void complexBusiness(int array[]){
        bubbleSortAlgorithm.sort(array);
    }
}
```

Với cách làm ở trên, `VeryComplexService` đã hoàn thiện được nhiệm vụ, tuy nhiên, khi có yêu cầu **thay đổi** thuật toán sắp xếp sang `QuickSort` thì có vẻ chúng ta sẽ phải sửa lại hoàn toàn cả 2 class trên.

Ngoài ra `BubbleSortAlgorithm` sẽ chỉ tồn tại nếu `VeryComplexService` tồn tại, vì `VeryComplexService` tạo đối tượng `BubbleSortAlgorithm` bên trong nó (hay nói cách khác là sự sống chết của `BubbleSortAlgorithm` sẽ do `VeryComplexService` quyết định), theo như cách implement này, nó là liên kết rất chặt với nhau.

VD2:

```java
public interface SortAlgorithm {
    public void sort(int array[]);
}

public class BubbleSortAlgorithm implements SortAlgorithm{
    @Override
    public void sort(int[] array) {
        // ...
    }
}

public class QuicksortAlgorithm implements SortAlgorithm {
    @Override
    public void sort(int[] array) {
        // ...
    }
}

public class VeryComplexService {
    private SortAlgorithm sortAlgorithm;
    
    public VeryComplexService(SortAlgorithm sortAlgorithm){
        this.sortAlgorithm = sortAlgorithm;
    }
    
    public void complexBusiness(int array[]){
        sortAlgorithm.sort(array);
    }
}

public static void main(String[] args) {
    SortAlgorithm bubbleSortAlgorithm =
	    new BubbleSortAlgorithm();
	
    SortAlgorithm quickSortAlgorithm =
	    new QuicksortAlgorithm();
	
    VeryComplexService business1 =
	    new VeryComplexService(bubbleSortAlgorithm);
	
    VeryComplexService business2 =
	    new VeryComplexService(quickSortAlgorithm);
}
```

Cách thứ ba này cũng là cách làm phổ biển nhất. Mối liên hệ giữa 2 class đã "lỏng" hơn trước rất nhiều. `VeryComplexService` sẽ không quan tâm tới việc thuật toán sắp xếp là gì nữa, mà chỉ cần tập trung vào nghiệp vụ. Còn `SortAlgorithm` sẽ được đưa vào từ bên ngoài tùy theo nhu cầu sử dụng.

# Inversion of control

Một project có quá nhiều dependency sẽ làm tăng độ phức tạp quản lý dự án. Trên thực tế, các dev thường đưa các dependency vào một **framework**. Khi cần dùng dependency gì, họ sẽ gọi framework và framework sẽ tìm và thực hiện inject dependency. Phương pháp này được gọi là **Inversion of control**.
