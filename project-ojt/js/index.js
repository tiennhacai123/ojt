//lay giu lieu tren local
const userLogin = JSON.parse(localStorage.getItem("userLogin")) || {};
const userLoginElement = document.getElementById("userLogin");
if(userLogin){
    //hien thi ten cua user dang dang nhap len header
    userLoginElement.innerHTML = userLogin.username;
}else{
    userLoginElement.innerHTML = "";
}
// let products = [
//     {
//         image: "./asset/images/quanBaggy.jpeg",
//         name: "Quần baggy nam ống rộng",
//         price: "₫200.000",
//         id: 1,
//         buy: "Đã bán 30 cái",
//     },
//     {
//         image: "./asset/images/túi đeo cheo.jpg",
//         name: "Túi đeo chéo vải canvas Hàn Quốc",
//         price: "₫150.000",
//         id: 2,
//         buy: "Đã bán 20 cái",
//     },
//     {
//         image: "./asset/images/gấu bông.jpeg",
//         name: "Gấu Bông Rồng Vải Lông Thỏ Siêu Mịn",
//         price: "₫150.000",
//         id: 3,
//         buy: "Đã bán 19 cái",
//     },
//     {
//         image: "./asset/images/ốp đt.jpeg",
//         name: "Ốp lưng Xiaomi Redmi 9T / Poco viền vuông",
//         price: "₫50.000",
//         id: 4,
//         buy: "Đã bán 2 cái",
//     },
//     {
//         image: "./asset/images/xịt thơm miêng.jpeg",
//         name: "Xịt Thơm Miệng Hương Trái Cây",
//         price: "₫300.000",
//         id: 5,
//         buy: "Đã bán 12 cái",
//     },
//     {
//         image: "./asset/images/áo khoác.jpeg",
//         name: "Thắt lưng nam da cao cấp",
//         price: "₫100.000",
//         id: 6,
//         buy: "Đã bán 100 cái",
//     },
//     {
//         image: "./asset/images/áo khoác.jpeg",
//         name: "Áo Khoác Ngoài Dáng Rộng Phong Cách",
//         price: "₫54.000",
//         id: 7,
//         buy: "Đã bán 54 cái",
//     },
//     {
//         image: "./asset/images/giàyjd.jpeg",
//         name: "Giày _Nike Air Force 1 Lv xám",
//         price: "₫330.000",
//         id: 8,
//         buy: "Đã bán 150 cái",
//     },
//     {
//         image: "./asset/images/ô.jpeg",
//         name: "Ô che nắng ô che mưa gấp gọn",
//         price: "₫30.000",
//         id: 9,
//         buy: "Đã bán 50 cái",
//     },
//     {
//         image: "./asset/images/set quà.jpeg",
//         name: "Set quà tặng nến thơm và cốc xinh xắn",
//         price: "₫119.000",
//         id: 10,
//         buy: "Đã bán 105 cái",
//     },
//     {
//         image: "./asset/images/set ga giường.jpeg",
//         name: "Set Ga Gối 3 Món m8 Drap giường",
//         price: "₫200.000",
//         id: 11,
//         buy: "Đã bán 150 cái",
//     },
//     {
//         image: "./asset/images/kính.jpeg",
//         name: "Gọng kính cận nam nữ LATIO mắt kính",
//         price: "₫33.000",
//         id: 12,
//         buy: "Đã bán 10 cái",
//     },

// ]
// // lưu data lên trên localstorage
// localStorage.setItem("products", JSON.stringify(products))
//lay du lieu ve di render
let products = JSON.parse(localStorage.getItem("products"));
// console.log(products);

//function render products//

function renderProduct() {
    let element = "";
    let subElement = "";
    let flag = 0;
    for (let i = 0; i < products.length; i++) {
        element +=
            `
        <div class="items">
        <img src="${products[i].image}" alt="">
        <div>
            <h5 class="title">${products[i].name}</h5>
            <span class="cost-sold">
                <p class="cost">${products[i].price}</p>
                <p class="sold">${products[i].buy}</p>
            </span>
            <button class="btn-buy">Mua</button>
        </div>
    </div>
        `;
        flag++;
        if (flag === 6) {
            subElement += `<div class="shop">
            ${element}
            </div>`;
            flag = 0;
            element = "";
        }

    }
    document.getElementById("section").innerHTML =
        `
    ${subElement}
    `
}
renderProduct();
