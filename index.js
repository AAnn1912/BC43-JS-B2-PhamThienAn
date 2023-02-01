// mở tag

var oPen1 = document.getElementById("close1");
var oPen2 = document.getElementById("close2");
var oPen3 = document.getElementById("close3");
var oPen4 = document.getElementById("close4");
var oPen5 = document.getElementById("close5");
var touch1 = document.getElementById("touch1");
var touch2 = document.getElementById("touch2");
var touch3 = document.getElementById("touch3");
var touch4 = document.getElementById("touch4");
var touch5 = document.getElementById("touch5");
var oneAppear = document.getElementById("one");
var twoAppear = document.getElementById("two");
var threeAppear = document.getElementById("three");
var fourAppear = document.getElementById("four");
var fiveAppear = document.getElementById("five");
oPen1.src = "./img/book (2).png";
oPen2.src = "./img/book (1).png";
oPen3.src = "./img/book (1).png";
oPen4.src = "./img/book (1).png";
oPen5.src = "./img/book (1).png";
touch1.className = "page-before"; //one
touch2.className = "page";
touch3.className = "page";
touch4.className = "page";
touch5.className = "page";
oneAppear.className = "one-c text appear";
twoAppear.className = "hide";
threeAppear.className = "hide";
fourAppear.className = "hide";
fiveAppear.className = "hide";

function touchBook() {
  oPen1.src = "./img/book (2).png";
  oPen2.src = "./img/book (1).png";
  oPen3.src = "./img/book (1).png";
  oPen4.src = "./img/book (1).png";
  oPen5.src = "./img/book (1).png";
  touch1.className = "page-before"; //one
  touch2.className = "page";
  touch3.className = "page";
  touch4.className = "page";
  touch5.className = "page";
  oneAppear.className = "one-c text appear";
  twoAppear.className = "hide";
  threeAppear.className = "hide";
  fourAppear.className = "hide";
  fiveAppear.className = "hide";

  oneAppear.className = "one-c text appear";
  oneAppear.className = "one-c text appear fade1";
}

function touchBook2() {
  oPen1.src = "./img/book (1).png";
  oPen2.src = "./img/book (2).png";
  oPen3.src = "./img/book (1).png";
  oPen4.src = "./img/book (1).png";
  oPen5.src = "./img/book (1).png";
  touch1.className = "page";
  touch2.className = "page-before "; //two
  touch3.className = "page";
  touch4.className = "page";
  touch5.className = "page";
  oneAppear.className = "hide";
  twoAppear.className = "two-c text appear";
  threeAppear.className = "hide";
  fourAppear.className = "hide";
  fiveAppear.className = "hide";
  twoAppear.className = "two-c text appear";
  twoAppear.className = "two-c text appear fade1";
}

function touchBook3() {
  oPen1.src = "./img/book (1).png";
  oPen2.src = "./img/book (1).png";
  oPen3.src = "./img/book (2).png";
  oPen4.src = "./img/book (1).png";
  oPen5.src = "./img/book (1).png";
  touch1.className = "page";
  touch2.className = "page";
  touch3.className = "page-before"; //three
  touch4.className = "page";
  touch5.className = "page";
  oneAppear.className = "hide";
  twoAppear.className = "hide";
  threeAppear.className = "three-c text appear";
  fourAppear.className = "hide";
  fiveAppear.className = "hide";
  threeAppear.className = "three-c text appear";
  threeAppear.className = "three-c text appear fade1";
}

function touchBook4() {
  oPen1.src = "./img/book (1).png";
  oPen2.src = "./img/book (1).png";
  oPen3.src = "./img/book (1).png";
  oPen4.src = "./img/book (2).png";
  oPen5.src = "./img/book (1).png";
  touch1.className = "page";
  touch2.className = "page";
  touch3.className = "page";
  touch4.className = "page-before"; //four
  touch5.className = "page";
  oneAppear.className = "hide";
  twoAppear.className = "hide";
  threeAppear.className = "hide";
  fourAppear.className = "three-c text appear";
  fiveAppear.className = "hide";
  fourAppear.className = "four-c text appear";
  fourAppear.className = "four-c text appear fade1";
}

function touchBook5() {
  oPen1.src = "./img/book (1).png";
  oPen2.src = "./img/book (1).png";
  oPen3.src = "./img/book (1).png";
  oPen4.src = "./img/book (1).png";
  oPen5.src = "./img/book (2).png";
  touch1.className = "page";
  touch2.className = "page";
  touch3.className = "page";
  touch4.className = "page";
  touch5.className = "page-before"; //five
  oneAppear.className = "hide";
  twoAppear.className = "hide";
  threeAppear.className = "hide";
  fourAppear.className = "hide";
  fiveAppear.className = "five-c text appear";

  fiveAppear.className = "five-c text appear";
  fiveAppear.className = "five-c text appear fade1";
}

// Bài 1: tính tiền lương nhân viên

/* 
-----INPUT-----
lấy ngẩu nhiên số ngày làm và lương 1 ngày 

-----PROCESS-----
B1:tạo biến cho lương 1 ngày, số ngày làm và tổng lương
B2:tính tổng lương bằng cách lấy lương 1 ngày * cho số ngày làm
B3:in kết qua ra bằng console.log

-----OUTPUT-----
cho ra kết quả tổng lương như yêu cầu đề bài
*/

function tinhTien() {
  var luongMotNgay = document.getElementById("luongMotNgay").value;
  var soNgayLam = document.getElementById("soNgayLam").value;
  var tongLuong = document.getElementById("tongluong");
  tongLuong.innerHTML = luongMotNgay * soNgayLam;
  console.log("tổng lương thực lãnh là :", tongLuong);
}

// Bài 2: tính trung bình cộng 5 số thực

/*
-----INPUT-----
lấy ngẩu nhiên 5 số thực

-----PROCESS-----
B1: tạo biến cho 5 số thực được lấy ngẩu nhiên và trung bình cộng
B2: dùng công thức tổng 5 số / 5 để lấy kết quả trung bình cộng
B3: in kết quả bằng console.log

-----OUTPUT-----
Cho kết quả trung bình cộng 5 số theo như yêu cầu đề bài
*/
function ketQua() {
  debugger;
  var soThuc1 = document.getElementById("soT1").value;
  var soThuc2 = document.getElementById("soT2").value;
  var soThuc3 = document.getElementById("soT3").value;
  var soThuc4 = document.getElementById("soT4").value;
  var soThuc5 = document.getElementById("soT5").value;
  var trungBinhCong = document.getElementById("ketqua");
  trungBinhCong.innerHTML =
    (Number(soThuc1) +
      Number(soThuc2) +
      Number(soThuc3) +
      Number(soThuc4) +
      Number(soThuc5)) /
    5;
  console.log("Trung bình cộng 5 số =", trungBinhCong);
}

// Bài 3:Tính quy đổi tiền USD => VND
/*
-----INPUT-----
nhập số tiền USD cần đổi

-----PROCESS-----
B1:tạo biến USD, tỉ lệ quy đổi, VND
B2:tính tổng quy đổi bằng cách USD * ti le quy doi 
B3:in kết quả ra bằng console.log

-----OUTPUT-----
cho tổng tiền quy đổi ra theo như yêu cầu đề bài
*/
function doiTien() {
  debugger;
  var uSD = document.getElementById("USD").value;
  var tiLe = document.getElementById("tiLe").value;
  var vND = document.getElementById("tongTien");
  vND.innerHTML = uSD * tiLe;
  console.log("tổng tiền quy đổi =", VND);
}

// Bài 4: Tính diện tích chu vi hình chữ nhật
/*
-----INPUT-----
chiều dài và chiều rộng của hình chử nhật là 1 số nguyên dương

-----PROCESS-----
B1:tạo biến cho chiều dài, chiều rộng, diện tích, chu vi
B2:tính chu vi bằng cách (chiều dài + chiều rộng)*2
B3:tính diện tích bằng cách (chiều dài * chiều rộng)
B4:in kết quả ra bằng console.log

-----OUTPUT-----
Có kết quả Diện tích và chu vi theo như yêu cầu của đề bài
*/
function dapAn() {
  debugger;
  var chieuDai = document.getElementById("chieuDai").value;
  var chieuRong = document.getElementById("chieuRong").value;
  var dienTich = document.getElementById("dapAnDt");
  var chuVi = document.getElementById("dapAnCv");
  dienTich.innerHTML = "Diện Tích : " + Number(chieuDai) * Number(chieuRong);
  chuVi.innerHTML = ",Chu Vi : " + (Number(chieuDai) + Number(chieuRong)) * 2;
  console.log("Diện tích =", dienTich);
  console.log("Chu Vi =", chuVi);
}

// Bài 5: tính tổng ký số
/* 
-----INPUT-----
Số nguyên dương n
có 2 ký số
(10,11,12,13..99)
+ 19 = 1+9=10
+ 99 = 9+9=18

-----PROCESS-----
B1:tạo biến số cho hàng chục, đơn vị, tổng ký số
B2:lấy số ngẩu nhiên 2 ký số lần lượt theo thứ tự chục, đơn vị
B3:lấy số hàng chục bằng cách lấy số đó chia 10 sau đó làm tròn bằng Math.floor
B4:lấy số đơn vị bằng cách lấy phần dư của số bằng '%'
B5:tổng 2 ký số lấy được cho ra kết quả như yêu cầu đề bài
B6: in kết quả ra bằng console.log


-----OUTPUT-----
Kết quả như biểu mẩu ta được tổng 2 ký số 

*/
function tinhTongKy() {
  var so = document.getElementById("kySo").value;
  var chuc = document.getElementById("kySo").value / 10;
  var donVi = document.getElementById("kySo").value % 10;
  var tongKySo = document.getElementById("tongKySo");
  tongKySo.innerHTML = Math.floor(Number(chuc)) + Number(donVi);
  console.log("tổng ký số của 19 =", tongKySo);
}
