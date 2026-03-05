
## BTTH03: JS nền tảng, DOM & Sự kiện

**Đối tượng:** Sinh viên chưa học lý thuyết JavaScript

---

## 1. MỤC TIÊU HỌC TẬP

Sau buổi lab, sinh viên có thể:

- Mô tả được JavaScript là gì, chạy ở đâu, khác HTML/CSS ở điểm nào.
- Viết được các đoạn JS đơn giản với:
  - Biến, kiểu dữ liệu cơ bản (number, string, boolean),
  - Cú pháp lệnh, toán tử đơn giản,
  - Cấu trúc điều khiển if/else, vòng lặp đơn giản,
  - Hàm (function) có tham số và giá trị trả về.
- Thao tác được với DOM:
  - Lấy phần tử bằng `document.getElementById`,
  - Thay đổi nội dung văn bản, kiểu dáng (style),
  - Lắng nghe và xử lý một số sự kiện cơ bản: `click`, `input`.
- Nhận biết jQuery là một thư viện hỗ trợ thao tác DOM/sự kiện (ở mức nhận diện, chưa cần sử dụng thành thạo).

---

## 2. CẤU TRÚC THỜI GIAN BUỔI LAB
- 03 tiết thực hành.

---

## 3. HOẠT ĐỘNG 1 (45’): GIỚI THIỆU JS & CÚ PHÁP CƠ BẢN

### 3.1. Chuẩn bị file HTML & JS

Tạo file `lab-js-basic.html`:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Lab JS Cơ bản</title>
</head>
<body>
  <h1>Khám phá JavaScript</h1>
  <p id="welcome">Chưa có JavaScript...</p>
  <button id="runBtn">Nhấn để chạy JS</button>

  <script src="main.js"></script>
</body>
</html>
```

Tạo file `main.js`:

```js
console.log("Hello from JavaScript!");
```


---

### 3.2. Nhiệm vụ cho sinh viên

#### Bước 1: Mở file \& Quan sát bằng Console

1. Mở `lab-js-basic.html` trong trình duyệt (Chrome/Edge/…).
2. Mở DevTools → tab **Console**.
3. Quan sát thông báo xuất hiện.

> Câu hỏi:
> - Em thấy dòng thông báo nào trong console?
>   - "Hello from JavaScript!"
> - Điều này cho em biết JavaScript đang làm gì khi trang web được tải?
>   - JavaScript đang chạy và thực thi mã khi trang web được tải.
---

#### Bước 2:  “JavaScript là gì?” (Tra cứu nhanh)

Sử dụng 1–2 nguồn tài liệu (vd. W3Schools, freeCodeCamp, …), tóm tắt:

> a) JavaScript chạy ở đâu? (Trình duyệt / Server / Cả hai?)
>   - cả hai
> b) HTML, CSS, JavaScript mỗi phần chịu trách nhiệm chính về điều gì?
>
> - HTML: tạo cấu trúc và nội dung của trang web (ví dụ: tiêu đề, đoạn văn, hình ảnh, nút bấm) = Khung xương trang web.
> - CSS: dùng để thiết kế giao diện cho trang web (màu sắc, font chữ, bố cục, kích thước) = Trang trí, làm đẹp.
> - JavaScript: dùng để tạo chức năng và tương tác cho trang web (xử lý khi nhấn nút, thay đổi nội dung, gửi dữ liệu, hiệu ứng động) = Làm trang web hoạt động và tương tác.

---

#### Bước 3: Thử nghiệm biến \& kiểu dữ liệu trong Console

Trong tab Console, gõ từng dòng sau và ghi lại kết quả:

```js
let age = 20;
const name = "An";
let isStudent = true;

typeof age;
typeof name;
typeof isStudent;

1 + 2 * 3;
"Hello " + "world";
```

> Câu hỏi:
> - Kết quả `typeof age` là gì?
>   - `number`
> - Kết quả `typeof name` là gì?
>   - `string`
> - Kết quả `typeof isStudent` là gì?
>   - `boolean`
> - Em hãy tự mô tả ngắn gọn:
>   - `number` là: kiểu dữ liệu dùng để lưu các giá trị số.
>   - `string` là: kiểu dữ liệu dùng để lưu chuỗi ký tự hoặc văn bản.
>   - `boolean` là: là: kiểu dữ liệu chỉ có 2 giá trị đúng hoặc sai (true hoặc false).

---

#### Bước 4: Viết đoạn script tính tuổi

Mở file `main.js`, viết thêm:

```js
let name = "Tường";
let yearOfBirth = 2006;
let currentYear = 2026;
let age = currentYear - yearOfBirth;

console.log("Xin chào, mình là " + name + ", năm nay mình " + age + " tuổi.");
```

Sau đó:

1. Đổi giá trị `name`, `yearOfBirth` thành thông tin của chính em.
2. Reload trang \& quan sát console.

> Câu hỏi:
> - Dòng log hiển thị gì sau khi em sửa thông tin?
>   - Xin chào, mình là Tường, năm nay mình 20 tuổi.
> - Nếu em quên dấu `;` hoặc quên dấu `+`, điều gì xảy ra? Trình duyệt báo lỗi thế nào?
>   -  JavaScript thường vẫn chạy được vì JS có cơ chế tự thêm dấu ';'.Nếu quên dấu + khi nối chuỗi thì trình duyệt sẽ báo lỗi SyntaxError trong Console và chương trình không chạy.

---

#### Bước 5: Phản tư nhanh (Reflection)

> - Điều thú vị nhất em vừa khám phá được về console là gì?
>   -  Điều thú vị nhất là em có thể gõ trực tiếp code JavaScript trong Console và xem kết quả ngay lập tức mà không cần sửa file rồi chạy lại trang web.
> - Em gặp lỗi cú pháp nào? Em đã xử lý bằng cách nào (tự sửa, hỏi bạn, đọc lỗi, tìm Google, …)?
>   -  Em gặp lỗi SyntaxError khi viết thiếu dấu " trong chuỗi và thiếu dấu + khi nối chuỗi. Em đã đọc thông báo lỗi trong Console và sửa lại code cho đúng, sau đó reload trang để kiểm tra lại.

---

## 4. HOẠT ĐỘNG 2 (40’): CẤU TRÚC ĐIỀU KHIỂN \& HÀM

### 4.1. Chuẩn bị file logic (hoặc viết tiếp trong main.js)

Ví dụ đoạn mã:

```js
// TODO: Đổi giá trị score và quan sát kết quả
let score = 7.5;

// TODO: Dự đoán điều kiện if/else đang làm gì, rồi chạy thử
if (score >= 8) {
  console.log("Giỏi");
} else if (score >= 6.5) {
  console.log("Khá");
} else if (score >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

// TODO: Viết hàm tính điểm trung bình 3 môn
function tinhDiemTrungBinh(m1, m2, m3) {
  let avg = (m1 + m2 + m3) / 3;
  return avg;
}

// Gợi ý dùng thử hàm trong console:
// tinhDiemTrungBinh(8, 7, 9);
```


---

### 4.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đoán trước – chạy sau

> a) Nếu `score = 9`, em dự đoán console sẽ in: Giỏi
> b) Nếu `score = 6`, em dự đoán console sẽ in: Trung Bình

Sau đó:

1. Thay `score = 9`, reload trang hoặc chạy file và kiểm tra console.
2. Thay `score = 6`, kiểm tra lại.

> So sánh dự đoán và kết quả thực tế:
> - Trường hợp `score = 9`: Dự đoán vs Thực tế: trùng khớp
> - Trường hợp `score = 6`: Dự đoán vs Thực tế: trùng khớp

---

#### Bước 2: Mô tả lại if/else bằng lời

> - Khi nào chương trình in `"Giỏi"`?
>   - Chương trình in "Giỏi" khi điểm score lớn hơn hoặc bằng 8.
> - Khi nào chương trình in `"Yếu"`?
>   - Chương trình in "Yếu" khi điểm score nhỏ hơn 5.
> - Em hãy mô tả cấu trúc `if/else` bằng lời của em (có thể ví von “ngã rẽ” trong đời sống):
>   - Cấu trúc if/else giống như các ngã rẽ khi đưa ra quyết định.Chương trình sẽ kiểm tra từng điều kiện từ trên xuống dưới. Nếu điều kiện nào đúng thì thực hiện lệnh trong khối đó và không kiểm tra các điều kiện phía sau nữa. Nếu tất cả điều kiện đều sai thì chương trình sẽ chạy phần else cuối cùng.
---

#### Bước 3: Làm việc với hàm

1. Mở Console, gọi hàm:
```js
tinhDiemTrungBinh(8, 7, 9);
```

> Em ghi lại giá trị hàm trả về: 8

2. Viết thêm hàm `xepLoai(avg)` trong file JS:
```js
function xepLoai(avg) {
  // TODO: Dùng if/else để:
  // avg >= 8  -> "Giỏi"
  // avg >= 6.5 -> "Khá"
  // avg >= 5  -> "Trung bình"
  // còn lại   -> "Yếu"
  if (avg >= 8) {
      console.log("Giỏi");
  } else if (avg >= 6.5) {
      console.log("Khá");
  } else if (avg >= 5) {
      console.log("Trung bình");
  } else {
      console.log("Yếu");
  }
}
```

3. Gọi thử trong console:
```js
let avg = tinhDiemTrungBinh(8, 7, 9);
let loai = xepLoai(avg);
console.log("Điểm TB:", avg, " - Xếp loại:", loai);
```

> Câu hỏi:
> - Một hàm gồm những phần chính nào?
>   - Tên hàm: tinhDiemTrungBinh hoặc xepLoai
>   - Tham số (parameters): tinhDiemTrungBinh hoặc xepLoai
>   - Thân hàm (body): Phần chứa các câu lệnh thực hiện công việc của hàm, nằm trong { }.
>   - Giá trị trả về (return): Kết quả mà hàm trả về sau khi thực hiện xong, ví dụ: return avg hoặc return "Giỏi".
> - Ưu điểm của việc dùng hàm thay vì lặp lại cùng một đoạn code nhiều lần là gì?
>   - Ưu điểm của việc dùng hàm là giúp tái sử dụng code nhiều lần, làm cho chương trình ngắn gọn, dễ đọc và dễ sửa lỗi hơn. Nếu cần thay đổi chức năng thì chỉ cần sửa trong một hàm thay vì sửa nhiều chỗ.
---

#### Bước 4: Mở rộng nhỏ (tuỳ chọn)

Viết hàm `kiemTraTuoi(age)`:

```js
function kiemTraTuoi(age) {
  // TODO:
  // Nếu age >= 18 -> console.log("Đủ 18 tuổi");
  // Ngược lại -> console.log("Chưa đủ 18 tuổi");
  if (age >= 18) {
      console.log("Đủ 18 tuổi");
  } else {
      console.log("Chưa đủ 18 tuổi");
  }
}
```

Gọi thử: `kiemTraTuoi(16);`, `kiemTraTuoi(20);`.

---

#### Bước 5: Phản tư

> - Phần nào trong if/else hoặc hàm khiến em khó hiểu nhất?
>   - Phần em thấy khó hiểu nhất là cách các điều kiện trong if / else if / else được kiểm tra theo thứ tự và khi một điều kiện đúng thì chương trình sẽ không kiểm tra các điều kiện phía sau nữa.
> - Em đã làm gì để vượt qua (thử nhiều lần, hỏi bạn, xem lại ví dụ, tra Google, …)?
>   - Em đã thử thay đổi các giá trị nhiều lần và chạy lại chương trình để xem kết quả trong Console, đồng thời đọc lại ví dụ trong bài và xem thông báo lỗi để hiểu rõ hơn.

---

## 5. HOẠT ĐỘNG 3 (40’): THAO TÁC DOM \& SỰ KIỆN

### 5.1. Chuẩn bị HTML

Thêm vào trang (hoặc tạo file mới):

```html
<section>
  <h2>DOM & Sự kiện</h2>
  <p id="status">Chưa có tương tác...</p>

  <button id="btnHello">Chào</button>
  <button id="btnRed">Đổi màu nền thành đỏ</button>

  <div style="margin-top: 20px;">
    <label>Nhập tên: </label>
    <input id="nameInput" type="text" />
    <p id="greeting"></p>
  </div>
</section>

<script src="dom.js"></script>
```

Tạo file `dom.js`:

```js
const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");

btnHello.addEventListener("click", function () {
  statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";
});
```


---

### 5.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đọc \& giải thích

> Câu hỏi:
> - `document.getElementById("status")` đang làm gì?
>   - Thêm vào trang (hoặc tạo file mới):

```html
<section>
  <h2>DOM & Sự kiện</h2>
  <p id="status">Chưa có tương tác...</p>

  <button id="btnHello">Chào</button>
  <button id="btnRed">Đổi màu nền thành đỏ</button>

  <div style="margin-top: 20px;">
    <label>Nhập tên: </label>
    <input id="nameInput" type="text" />
    <p id="greeting"></p>
  </div>
</section>

<script src="dom.js"></script>
```

Tạo file `dom.js`:

```js
const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");

btnHello.addEventListener("click", function () {
  statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";
});
```


---

### 5.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đọc \& giải thích

> Câu hỏi:
> - `document.getElementById("status")` đang làm gì?
> - Sự kiện `"click"` xảy ra khi nào?
>   -  Dùng để tìm và lấy phần tử HTML có id là "status" trong trang web, sau đó JavaScript có thể thay đổi nội dung hoặc thuộc tính của phần tử đó.
> - Sự kiện `"click"` xảy ra khi nào?
>   -  Sự kiện click xảy ra khi người dùng nhấn chuột vào nút hoặc phần tử trên trang web.
> - Trong đoạn code trên, khi nhấn nút `btnHello`, điều gì thay đổi trên trang?
>   - Khi nhấn nút "Chào", JavaScript sẽ thay đổi nội dung của đoạn văn có id status thành: Xin chào! Đây là nội dung được thay đổi bằng JavaScript.

---

#### Bước 2: Thử nghiệm nút đổi màu nền

Hoàn thiện code:

```js
const btnRed = document.getElementById("btnRed");

btnRed.addEventListener("click", function () {
  // TODO: Đổi màu nền trang thành đỏ
  document.body.style.backgroundColor = "red";
});
```

> Câu hỏi:
> - Em có thể đổi sang màu khác (vd. `lightblue`) không? Hãy thử.
> - Em hãy ghi lại 1 ví dụ khác mà JavaScript có thể làm với `document.body.style`.
>   -  Đổi chữ toàn trang: document.body.style.color = "white";
Tăng kích thước chữ của trang: document.body.style.color = "white";

---

#### Bước 3: Xử lý sự kiện input – gõ tên, hiện lời chào

Hoàn thiện code:

```js
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

nameInput.addEventListener("input", function () {
  const value = nameInput.value;
  greeting.textContent = "Xin chào, " + value + "!";
});
```

> Câu hỏi:
> - Sự kiện `"input"` khác gì so với `"click"`?
>   - input xảy ra khi người dùng nhập, xoá hoặc thay đổi nội dung trong ô input.
>   - click xảy ra khi người dùng nhấn chuột vào một nút hoặc phần tử.
> - Khi em xoá hết nội dung ô input, dòng `greeting` hiển thị gì?
>   - Xin chào, !

---

#### Bước 4: Liên hệ khái niệm DOM

> DOM (Document Object Model) là mô hình biểu diễn trang HTML dưới dạng một **cây các đối tượng** mà JavaScript có thể truy cập và thay đổi.
>
> Em hãy:
> - Tự mô tả DOM bằng lời của em:
>   - DOM là cách trình duyệt biểu diễn trang HTML thành các phần tử (object) để JavaScript có thể truy cập, đọc và thay đổi nội dung hoặc kiểu hiển thị của trang web.
> - Nêu 1 ví dụ “thao tác DOM” trong bài (ghi lại 1 dòng lệnh cụ thể).
>   - document.getElementById("status");
---

#### Bước 5: Ảnh kết quả

Hãy chụp các ảnh màn hình:

1. Khi vừa tải trang (chưa tương tác).
2. Sau khi nhấn “Chào”.
3. Sau khi đổi nền sang màu đỏ.
4. Khi gõ tên và nhìn thấy lời chào xuất hiện.

*(Ảnh có thể được yêu cầu nộp cùng bài hoặc dán vào báo cáo)*

---

## 6. KẾT THÚC (15’): GIỚI THIỆU JQUERY \& PHẢN TƯ

### 6.1. Nhìn nhanh jQuery (so sánh với JS thuần)

Ví dụ:

```js
// JS thuần
document.getElementById("btnHello").addEventListener("click", function () {
  alert("Hello from JS!");
});

// jQuery (giả sử đã import jQuery)
$("#btnHello").on("click", function () {
  alert("Hello from jQuery!");
});
```

> Câu hỏi:
> - Điểm giống nhau về chức năng giữa 2 đoạn code trên là gì?
>   - Cả hai đoạn code đều gắn sự kiện click cho nút btnHello.
Khi người dùng nhấn vào nút, chương trình sẽ hiển thị thông báo alert trên màn hình.
> - Điểm khác nhau về cú pháp là gì (`document.getElementById` vs `$("#id")`, `addEventListener` vs `.on`)?
>   - document.getElementById("btnHello").addEventListener("click", function () { Phải viết dài hơn để lấy phần tử và gắn sự kiện.
>   - $("#btnHello").on("click", function () { Ngắn gọn hơn, dùng ký hiệu $ để chọn phần tử.
> - Em hãy tra cứu nhanh “What is jQuery used for?” và ghi 2 ý chính:
>   1. Giúp thao tác với DOM dễ dàng và nhanh hơn (chọn phần tử, thay đổi nội dung, xử lý sự kiện).
>   2. Giúp viết JavaScript ngắn gọn hơn và tương thích tốt với nhiều trình duyệt.

---

### 6.2. Tự đánh giá \& định hướng

> 1. Sau buổi lab, em tò mò nhất về phần nào của JavaScript/DOM?
> 2. Em muốn tự làm thêm tính năng gì trên trang web (vd: bộ đếm, đổi theme, pop-up, mini game, …)?
> 3. Em đánh giá mức độ hiểu của mình về:
>    - Biến \& kiểu dữ liệu: [ ] Chưa hiểu  [v] Tạm ổn  [ ] Khá rõ
>    - If/else \& hàm:       [ ] Chưa hiểu  [v] Tạm ổn  [ ] Khá rõ
>    - DOM \& sự kiện:       [ ] Chưa hiểu  [v] Tạm ổn  [ ] Khá rõ

---

## 7. GHI CHÚ CHO GIẢNG VIÊN (NỘI BỘ)

- Có thể cho SV làm theo cặp/nhóm 2–3 để hỗ trợ nhau thử nghiệm, đọc lỗi, tra cứu.
- Tùy thời lượng thực tế, có thể:
    - Giảm bớt phần mở rộng (hàm `kiemTraTuoi`, tuỳ biến thêm hiệu ứng).
    - Hoặc tăng thêm bài tập DOM (ẩn/hiện một khối, đếm số lần click, v.v.).
- Phiếu học tập tiếp theo có thể chi tiết hóa từng hoạt động thành form trả lời, chỗ dán ảnh, và câu hỏi mini test trắc nghiệm.

```

---```

