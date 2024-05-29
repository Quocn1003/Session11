
function min(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    alert(`Số bé nhất là ${min}`);
}


function kiemTraSoNguyenTo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


function tinhGiaiThua(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    let giaiThua = 1;
    for (let i = 2; i <= n; i++) {
        giaiThua *= i;
    }
    return giaiThua;
}


function checkCapSoTongBang10(arr){
    console.log("Cặp số có tổng bằng 10 là: ");
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i]+arr[j]==10){
                console.log(`${arr[i]} + ${arr[j]} = 10`);
            }
        }   
    }
}


function tanSuatKyTu(arr) {
    console.log("Tần suất xuất hiện các kí tự: ");
    let tanSuat = {};
    for (let i = 0; i < arr.length; i++) {
        let kyTu = arr[i];
        if (tanSuat[kyTu]) {
            tanSuat[kyTu]++;
        } else {
            tanSuat[kyTu] = 1;
        }
    }
    for (let kyTu in tanSuat) {
        console.log(`Ký tự ${kyTu} xuất hiện ${tanSuat[kyTu]} lần.`);
    }
}


console.log("Bài 1: ");
let arr = prompt("Nhập vào 3 số (cách nhau bằng khoảng trắng): ").split(" ");
while(arr.length !=3){
    arr = prompt("Nhập vào 3 số (cách nhau bằng khoảng trắng): ").split(" "); 
}
min(arr);


console.log("Bài 2: ");
let n = parseInt(prompt("Nhập một số dương:"));
while(n<1){
    n = parseInt(prompt("Nhập một số dương:"));
}
if (kiemTraSoNguyenTo(n)) {
    alert(`${n} là sô nguyên tố`);
} else {
    alert(`${n} không phải là số nguyên tố.`);
}


console.log("Bài 3: ");
n = parseInt(prompt("Nhập một số nguyên:"));
let giaiThua = tinhGiaiThua(n);
alert(`Giai thừa của ${n} là: ${giaiThua}`);


console.log("Bài 4: ");
arr=[1,2,3,4,5,6,7,8,9,10]
checkCapSoTongBang10(arr);


console.log("Bài 5: ");
array = prompt("Nhập vào một chuỗi ký tự: ")
arr = array.split("");
tanSuatKyTu(arr);