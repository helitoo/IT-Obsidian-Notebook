
# Cài đặt & Sử dụng C trong Linux

## Cài đặt compiler

Cài đặt compiler GNU GCC:
```sh
apt-get install build-essential
```

Định vị GCC:
```sh
which gcc
```
gcc sẽ thường được đặt tại `/user/bin/gcc`.

## Biên dịch & thực thi file

Biên dịch file `hello.c`:
```
gcc hello.c -o hello
```
`hello` ở đây là file thực thi. Trong Window, file thực thi có phần mở rộng `.exe`, nhưng trong [[Giới thiệu & Cài đặt Ubuntu trên máy ảo VMWare#Linux|Linux]], file thực thi được nhận diện là file được phân [[Các lệnh cơ bản quản lý file#Phân quyền|quyền thực thi]] và không cần phần mở rộng.

Chạy file `hello`:
```sh
./ hello
```

## Make & `Makefile`

Việc compile và run chương trình bằng cách sử dụng 2 dòng lệnh trên trở nên dài dòng, dễ xảy ra lỗi và rất khó để sửa lại câu lệnh bằng tay. Để khắc phục tình trạng này, một chương trình có tên là **make** đã được ra đời để tự động hóa các thao tác có tính lặp đi lặp lại. make đã được cài sẵn vào GNU GCC.

Mặc định, make sẽ thực thi một tệp tin là `Makefile` trong thư mục hiện hành gọi make (chú ý sau khi nhấn `:` xuống dòng thì phải bắt đầu bằng 1 dấu `    ` (tab)).
```Makefile
all: hello run

hello:
	gcc main.c hello.c -o hello

run:
	./hello

clean:
	rm -f hello

.PHONY: hello
```

Bây giờ compile và run chương trình chỉ cần sử dụng câu lệnh:
```sh
make all
```

# Process & Thread trong Linux

## Process

Process có 4 [[Tiến trình & Tiểu trình#Trạng thái process|trạng thái]] sau:
1. **running**: Process đang dùng CPU để thực thi công việc.
2. **waiting**: Process đang chờ tín hiệu I/O nạp dữ liệu.
3. **suspend / sleep**: Process đang bị tạm dừng do tín hiệu từ OS.
4. **zombie**: Process đã hoàn thành nhưng còn sót lại thông tin cho [[Tiến trình & Tiểu trình#Tạo mới process|process cha]] tham khảo.

Process có 2 chế độ chạy:
1. **Foreground**: Chạy trực tiếp.
2. **Background**: Chạy nền.

Các thông số của process:
- **PID (Process ID)**: ID của process.
- **PPID (Parent process ID)**: ID của process cha.

## Thread








# Thao tác cơ bản với process

## Tạo process

Có 3 cách:

|                              | Mô tả                                                                                                                                                          | Giá trị trả về                                                                                                          |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `fork()` (`unistd.h`)        | Tạo process con bằng cách nhân bản process hiện có (cha).                                                                                                      | - `0`: Ta đang trong process con.<br><br>- PID: Ta đang trong process cha, con không được tạo.<br><br>- `-1`: Thất bại. |
| Họ hàm `exec()` (`unistd.h`) | Thay thế process hiện tại bằng một process khác (`name`). Process hiện tại sẽ không được thực thi nữa.<br><br>Một hàm thường dùng là `exel(path, name, NULL)`. | - `void`: Thành công.<br><br>- `-1`: Thất bại.                                                                          |
| `system()` (`stdlib.h`)      | Tạo process con. Process cha sẽ đợi con chạy xong rồi chạy tiếp.                                                                                               |                                                                                                                         |

VD: `fork()`:
```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main(){
	pid_t pid;
	pid = fork();
	
	if (pid == 0)
		printf("Child Process, pid=%d\n",pid);
	else
		printf("Parent Process, pid=%d\n",pid);
	
	exit(0);
}
```
- Nếu `pid == 0`,  Ta đang ở trong process con, in ra `"Chil Process, pid=..."` để thông báo.
- Trong các trường hợp khác, ta đang ở trong process cha (con không được tạo), in ra `"Parent Process, pid=..."`.

VD: `execl()`:
```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main(){
    execl("/usr/bin/gedit", "gedit", "foo.c", NULL);
    printf("ERROR!!! execl() is failed!\n");
    exit(1);
}
```
- Khi chạy đến `execl()`, chương trình `gedit` nằm tại `usr/bin/gedit` sẽ mở `foo.c` và chạy file này, các dòng lệnh sau đó sẽ không được thực thi. 
- Nếu `execl()` thất bại, `"ERROR!!! execl() is failed"` sẽ được in ra.

VD: `system()`:
```c
#include <stdio.h>
#include <stdlib.h>

int main(){
    printf("Hello IT007! I wil open vim editor now ^_^\n");
    system("vi abc.txt");
    return 0;
}
```
- Tạo process con thực thi `vi abc.txt`. Sau đó quay lại process cha (thực thi `return 0` tiếp).

## Kết thúc process

Khi process bị crash, nó tạo một bản sao bộ nhớ tại RAM, được gọi là **core file (core dump)**.

Có 2 cách:
1. `exit(val);`: Đưa process vào *zombie*. Process sẽ biến mất hẳn khi dùng `wait()` hoặc `waitpid()`.
2. Gửi các signal đến process.

## Tín hiệu (Signal)

### Giới thiệu signal

**Signal** là các thông điệp gửi đến process nhằm thông báo một trạng thái nào đó. **Signal handler** là bộ xử lý signal.

Khi process nhận signal, signal sẽ ngắt ngang quá trình running của process để chuyển qua signal handler.

Một số signal:

| Signal       | Ký hiệu | Kích hoạt khi                                              | Thông điệp                                 |
| ------------ | ------- | ---------------------------------------------------------- | ------------------------------------------ |
| **SIGINT**   | `2`     | Người dùng nhấn `Ctrl C`.                                  | Dừng process.                              |
| **SIGQUIT**  | `3`     | Người dùng nhấn `Ctrl \`.                                  | Dừng process, tạo core dump.               |
| **SIGABRT**  | `6`     | Gọi `abort()`.                                             | Dừng process, tạo core dump.               |
| **SIGTSTP**  | `20`    | Người dùng nhấn `Ctrl Z`.                                  | Tạm dừng process, đưa vào *suspend/sleep*. |
| **SIGFPE**   | `8`     | Lỗi toán học số học (chia 0, tràn số, lỗi dấu phẩy động…). | Dừng process do lỗi số học.                |
| **SIGTERM**  | `15`    | Người dùng hoặc hệ thống gửi tín hiệu kết thúc mặc định.   | Dừng process.                              |
| **SIGKILL**  | `9`     | OS / người dùng gửi (không thể chặn, không thể xử lý).     | Buộc dừng process ngay lập tức (kill cứng) |
| **SIGHUP**   | `1`     | Terminal bị đóng, mất kết nối điều khiển.                  | Terminal điều khiển đã đóng.               |
| **SIGALARM** | `14`    | Timer được cài bằng `alarm()` hết hạn.                     | Hết thời gian hẹn giờ.                     |

### Gửi signal

Gửi signal:
```sh
kill -urSignal urPID
```
Ở đây, `urSignal` có thể là tên hoặc mã signal.

### Bắt signal

```c
#include <signal.h>

signal(signum, handler);
```

VD:
```c
#include <stdio.h>
#include <signal.h>

int loop_forever = 1;

void on_sigint(){
	printf("\nCRTL+C is pressed!\n");
	loop_forever = 0;
}

int main(){
	loop_forever = 1;
	
	signal(SIGINT, on_sigint);
	
	while(loop_forever){}
	
	return 0;
}
```

# Thao tác cơ bản với thread

## Tạo thread

```c
#include <pthread.h>

pthread_create( thread, attr, start_routine, arg)
```

Các tham số:

| Tham số         | Kiểu                             | Ý nghĩa                                                                                       |
| --------------- | -------------------------------- | --------------------------------------------------------------------------------------------- |
| `thread`        | `pthread_t*`                     | Sau khi tạo thread, `thread` sẽ mang ID của thread.                                           |
| `attr`          | `const pthread_attr_t*`          | Chứa cấu hình thread (stack size, detached state, scheduling policy,...), mặc định là `NULL`. |
| `start_routine` | `void* start_routine(void* arg)` | Hàm chứa các công việc của thread.                                                            |
| `arg`           | `void*`                          | Tham số truyền vào `start_routine`, mặc định là `NULL`.                                       |

Nếu thread được tạo thành công, hàm trả về `0`, ngược lại là một số khác `0`.

VD: Tạo thread không đối số:
```c
#include <pthread.h>
#include <stdio.h>

void *thread_print(void *messenge) {
	while(1) {
		printf("Hello, How are you?\n");
	}
}

int main() {
	pthread_t idthread;
	
	pthread_create(&idthread, NULL, &thread_print, NULL);
	
	while(1) {
		printf("I'm fine, and you?\n");
	}
	
	return 0;
}
```

VD: Tạo thread có tham số:
```c
#include <pthread.h>
#include <stdio.h>

struct struct_print_parms{
	char character;
	int count;
};

void* char_print(void* args) {
	// Lấy giá trị arg (arg đang là địa chỉ)
	struct struct_print_parms* p = (struct struct_print_parms*) args;
	
	for (int i = 0; i < p->count; i++)
		printf ("%c\n", p->character);
	
	return NULL;
}

int main () {
	pthread_t tid;
	
	struct struct_print_parms th_args;
	th_args.character = 'X';
	th_args.count = 5;
	
	pthread_create(&tid, NULL, &char_print, &th_args);
	
	return 0;
}
```
Ở đây, `char_print` sẽ in ra `p->charactor` `p->count` lần.

## Dừng thread

```c
#include <pthread.h>

pthread_exit();
```

```c
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#define NUM_THREADS 2

void *thread_print(void *threadid)
{
	long tid;
	tid = (long)threadid;
	printf("Child thread #%ld\n", tid);
	pthread_exit(NULL);
}

int main()
{
	pthread_t threads[NUM_THREADS];
	int check;
	long tID;
	
	for(tID = 0; tID < NUM_THREADS; tID++){
		printf("Parent thread creates child #%ld\n", tID);
		
		check = pthread_create(
			&threads[tID],
			NULL,
			thread_print,
			(void *)tID
		);
		
		if (check != 0){
			printf(
				"Parent thread can't create child #%ld", tID);
			exit(-1);
		}
	}
	
	sleep(100);
	
	pthread_exit(NULL);
}
```
Chương trình trên có chức năng:
- Tạo `NUM_THREADS` thread, ở đây là `2`. Nếu có thread nào khởi tạo thất bại thì dừng toàn bộ process (`exit(-1)`).
- Duyệt qua từng thread, ở mỗi thread cho thực thi `thread_print`.

Chú ý rằng các thread độc lập với nhau nên không chạy tuần tự. Thread cha có thể hoàn thành `for` trước, nên cần `sleep()` để đợi các thread con hoàn thành.
```sh
Parent thread creates child 1
Parent thread creates child 2
Child thread 1
Child thread 2
```

## Hợp và Gỡ thread

```c
#include <pthread.h>

pthread_join(threadid, status);
```
- Tạm thời ngưng thread hiện tại, gọi thread `threadid`.
- Sau khi `threadid` thực thi xong, đưa về *zombie* thì quay lại thực thi tiếp thread hiện tại. `status` là `void*`, nhận giá trị `thread_exit(val)` của `threadid` (mặc định là `NULL`).

```c
#include <pthread.h>

pthread_detach(threadid);
```
- Dọn dẹp các thông tin còn sót lại của `threadid` sau khi đưa về *zombie*.

VD:
```c
#include <pthread.h>
#include <stdio.h>
#inlucde <stdlib.h>
#inlcude <unistd.h>

#define NUM_THREADS 2

void *thread_print(void *threadid)
{
	long tid;
	tid = (long)threadid;
	printf("Child thread #%ld ^_^!!!\n", tid);
	sleep(100);
}

int main()
{
	pthread_t threads[NUM_THREADS];
	int check;
	long tID;
	
	for(tID = 0; tID < NUM_THREADS; tID++){
		printf("Parent thread creates child: #%ld\n", tID);
		
		check = pthread_create(
			&threads[tID],
			NULL,
			thread_print,
			(void *)tID
		);
		
		if (check != 0){
			printf(
				"Parent thread can't create child #%ld", tID);
			exit(-1);
		}
		
		pthread_join(threads[tID], NULL);
	}
	
	pthread_exit(NULL);
}
```
- Nhờ có `thread_join` và `sleep()`, parent thread buộc phải đợi từng thread con thực thi xong rồi mới tạo thread tiếp.

```sh
Parent thread creates child 1
Child thread 1
Parent thread creates child 2
Child thread 2
```

# Định thời process

Lý thuyết: [[Định thời]].

**Yêu cầu**: Viết chương trình mô phỏng các giải thuật định thời khi biết:
- `n`: Số lượng process.
- Mỗi process gồm có:
	- `name`: Tên process.
	- `arr`: Arrival time.
	- `bur`: Burst time.
- Đầu ra chương trình:
	- In ra thứ tự xử lý process.
	- Tính waiting time trung bình, turnaround time trung bình.

```c
#include <stdio.h>

struct process {
    char name[20];
    float arr;
    float bur;
};
```

# Đồng bộ hóa process & thread










# Bài tập





