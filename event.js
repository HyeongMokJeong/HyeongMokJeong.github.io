function show() {
    document.querySelector(".background").className = "background show";
}
  
function close() { 
    document.querySelector(".background").className = "background";
}

var num = 1;
function changePic(idx) {
    if (idx){
        if(num == 5) return;
        num++;
    } else{
        if(num == 1) return;
        num--;
    }
    var imgTag = document.getElementById("perfume_img");
    imgTag.setAttribute("src", "C:/Users/jhm10/Desktop/블로깅/캡처" + num + ".PNG");
    imgTag.setAttribute("width", "70%");
    imgTag.setAttribute("margin-top", "10px");
}

document.querySelector("#show").addEventListener('click', show);
document.querySelector("#close").addEventListener('click', close);