var cont = document.querySelectorAll(".btn");
var imgSrc = document.querySelector(".targetImg");
var text = document.querySelector("#targetText");
cont.forEach(
    (btn, index)=>{
        btn.addEventListener("click",()=>{
            var name = btn.getAttribute('img-name');
            imgSrc.src = "assets/img/"+ name + ".png";
            text.innerHTML = name;
        })
})