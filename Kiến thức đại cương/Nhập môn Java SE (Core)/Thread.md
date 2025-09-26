
Java là ngôn ngữ lập trình đa luồng, tức là cùng một lúc có thể thực hiện nhiều nhiệm vụ khác nhau.

# Tạo luồng

**Cách 1**: Sử dụng [[OOP nâng cao#Từ khóa `extends`|extends]] `Thread`:
```java
public class Main extends Thread {
	public void run() {
		System.out.println("This code is running in a thread");
	}
}
```

**Cách 2**: Sử dụng [[OOP nâng cao#Lớp thuần ảo (Interface class)|implements]] `Runable`:
```java
public class Main implements Runable {
	public void run() {
		System.out.println("This code is running in a thread");
	}
}
```

# Kích hoạt luồng

Sử dụng phương thức `Main.start()` (đối với `Thread`) hoặc `Thread.start()` (đối với `Runable`):

```java
Main thread = new Main();
thread.start();
```

```java
Main obj = new Main();
Thread thread = new Thread(obj);
thread.start();
```

# Vấn đề đồng thời (Concurrency problem)


