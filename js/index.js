function showBigImg(img) {
    //alert(img);
    /*var image = document.createElement("img");
    var imgsrc = document.createAttribute("src");
    imgsrc.nodeValue = img;
    image.setAttributeNode(imgsrc);
    var bod = document.getElementsByTagName("body")[0];
    bod.appendChild(image);*/
    var bigImg = document.getElementById("bigimg");
    bigImg.src = img;
}