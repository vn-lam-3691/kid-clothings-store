// Banner chuyển ảnh
var index = 1;
changeImage = function () {
    var imgs = ["./assets/img/home_banner/banner_1.JPG", "./assets/img/home_banner/banner_2.JPG"];
    document.getElementById('banner-img').src = imgs[index];
    index++;
    if (index == 2) {
        index = 0;
    }
}
setInterval(changeImage, 3000);