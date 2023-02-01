/*  Bài 1:Tính tiền lương nhân viên
Viết chương trình tính tiền lương nhân viên.*/
function tingLuong(){
////input :tienLuong1Ngay:number ,soNgayLam:number;
var tienLuong1Ngay = document.getElementById('tienLuong1Ngay').value;
var soNgayLam = document.getElementById('soNgayLam').value;
//output: tongLuong:number
var tongLuong = 0;
//progress
tongLuong = tienLuong1Ngay * soNgayLam;
document.getElementById('tongLuong').innerHTML = tongLuong.toLocaleString();
}


/*bài 2: Tính giá trị trung bình
Viết chương trình nhập vào 5 số thực.
Tính giá trị trung của 5 số này và xuất ra màn hình. */

function tingTrungBinh(){
 //input :soThuc[]:number ,khi người dùng nhập vào các số
 var soThuc1 = document.getElementById('soThuc1').value;
 var soThuc2 = document.getElementById('soThuc2').value;
 var soThuc3 = document.getElementById('soThuc3').value;
 var soThuc4 = document.getElementById('soThuc4').value;
 var soThuc5 = document.getElementById('soThuc5').value;

 //output :soTrungBinh => khi người dùng ấn  vào button
var  soTrungBinh = 0;
//progress
soTrungBinh = (Number(soThuc1) + Number(soThuc2) + Number(soThuc3) + Number(soThuc4) + Number(soThuc5)) / 5;
document.getElementById('soTrungBinh').innerHTML = soTrungBinh;
}


/*  bài 3:Quy đổi tiền
Giá USD hiện nay đang là 23.500 VND 
Viết chương trình quy đổi từ USD sang VND 
Cho người dùng nhập vào số tiền USD.
Tính và xuất ra số tiền sau quy đổi VND.*/
function doiTien(){
    //input giaUSD:number; 1USD =23500
 var giaUSD = document.getElementById('soTienNhap').value;

 const tiGia = 23500;
//output: soTienQuyDoi => khi người dùng ấn vào button
var soTienQuyDoi = 0;
//progress
soTienQuyDoi = giaUSD * tiGia;
document.getElementById('soTienQuyDoi').innerHTML = soTienQuyDoi.toLocaleString();
}


/* Bài 4: Tính diện tích , chu vi hình chữ nhật 
Viết chương trình nhập vào "2" chiều dài và chiều rộng của HCN (hình chữ nhật).
Tính và xuất ra diện tích ,chu vi của HCN đó*/
function tinhToan(){
//input: chieuDai.chieuRong= number; giá trị mà người dùng nhập vào
var chieuDai = document.getElementById('chieuDai').value;
var chieuRong = document.getElementById('chieuRong').value;
//output: => dienTich , chuVi được tính ra =>khi người dùng ấn vào button
var dienTich = 0;
var chuVi = 0;
//progress
dienTich = chieuDai * chieuRong;
chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
document.getElementById('giaTriTinhRa').innerHTML = 'Diện tích: ' + dienTich + '; ' + 'Chu vi: ' + chuVi;

}


/*bài 5: viết chương trình nhập vào 1 số có 2 chữ số 
Tính tổng 2 ký số của số vừa nhập.*/
function tinhKySo(){
//input:soNhap =number; sô người dùng nhập vào
var soNhapVao = document.getElementById('soNhapVao').value;
//output: tong2KySo
var tong2KySo = 0;
//progress
var soHangChuc = Math.floor(soNhapVao / 10);
var soHangDonVi = Math.floor(soNhapVao % 10);

var tong2KySo = soHangChuc + soHangDonVi;
document.getElementById('tong2KySo').innerHTML = tong2KySo;
}