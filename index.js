//bài 1 tính tiền lương nhân viên

//nhận kết quả số ngày làm việc do người dùng nhập
//tính tiền lương nhân viên theo công thức số ngày làm * 100.000 rồi in ra màn hình
//số tiền lương của nhân viên

document.getElementById("btnTienLuong").onclick = function () {
    let gioLam = document.getElementById("soNgay").value
    let tongTienLuong = gioLam * 100000;
    document.querySelector(".hienKetQua").innerHTML += ` ${new Intl.NumberFormat('vn').format(tongTienLuong)} VND`
}

//bài 2 tính trung bình cộng
// nhận 5 số từ người dùng
// tính tổng 5 số /5
//in kết quả ra màn hình

document.getElementById("btnTrungBinh").onclick = function () {

    let soThu1 = document.getElementById("soThu1").value * 1;
    let soThu2 = document.getElementById("soThu2").value * 1;
    let soThu3 = document.getElementById("soThu3").value * 1;
    let soThu4 = document.getElementById("soThu4").value * 1;
    let soThu5 = document.getElementById("soThu5").value * 1;

    let trungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5
    document.querySelector(".hienKetQua2").innerHTML += ` ${trungBinh}`;
}

// bài 3 đổi tiền
// nhận số usd người dùng nhập
// tính vnd = usd . 23.500
// in kết quả ra màn hình

document.getElementById("btnQuyDoi").onclick = function () {
    let soVnd = 0;
    let soUsd = document.getElementById("soUSD").value;
    soVnd = soUsd * 23500;

    document.querySelector(".hienKetQua3").innerHTML += ` ${new Intl.NumberFormat('vn').format(soVnd)} VND`;
}

// bài 4
// nhận chiều dài chiều rộng từ người dùng
// tính chu vi, diện tích HCN
// in kết quả ra màn hình

document.getElementById("btnTinh").onclick = function () {
    let chieuDai = document.getElementById("chieuDai").value * 1;
    let chieuRong = document.getElementById("chieuRong").value * 1;

    let chuVi = (chieuDai + chieuRong) * 2;
    let dienTich = chieuDai * chieuRong;

    document.querySelector(".hienKetQuaChuVi").innerHTML += ` ${chuVi}`;
    document.querySelector(".hienKetQuaDienTich").innerHTML += ` ${dienTich}`;
}


// bài 5
// số tự nhiên có 2 chữ số
// lấy số hàng chục cộng số hàng đơn vị 
// in kết quả ra màn hình

document.getElementById("btnTong2So").onclick = function () {
    let so2ChuSo = document.getElementById("so2ChuSo").value * 1;

    let tong2ChuSo = (so2ChuSo - (so2ChuSo%10)) / 10 + so2ChuSo % 10;

    document.querySelector(".hienKetQua5").innerHTML += ` ${tong2ChuSo}`;
}
