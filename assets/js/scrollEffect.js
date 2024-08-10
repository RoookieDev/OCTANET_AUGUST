window.addEventListener("load", function(){
  var img1 = this.document.querySelector("#img1");
  img1.style.left=0;

  var head1 = this.document.querySelector("#head1");
  head1.style.lineHeight = "50px";
})

window.addEventListener("scroll", function(){
    var container1 = this.document.querySelector(".cardBx");
    var conPosition1 = container1.getBoundingClientRect().top;
    var screenHeight = this.window.innerHeight/2;
    var imgCard = document.querySelectorAll(".cardBx .cardholder .card img");
       
    if(screenHeight > conPosition1){
        imgCard.forEach((img)=>{
            img.style.top=0;
            img.style.opacity=1;
        }) 
    }
    else{
        imgCard.forEach((img)=>{
            img.style.top="100px";
            img.style.opacity=0;
        }) 
    }


    var container2 = this.document.querySelector(".catalogue");
    var conPosition2 = container2.getBoundingClientRect().top;
    var bigImg = this.document.querySelector(".bigImg img");
    var smallImg = this.document.querySelectorAll(".catalogue .container .smallImg .cardBx img");
    if(screenHeight > conPosition2){
        bigImg.style.transform = "translate(0,-50%)";
        bigImg.style.opacity =1;

        smallImg.forEach((img)=>{
            img.style.left = 0;
            img.style.opacity=1;
        });
    }
    else{
        bigImg.style.transform = "translate(0,10%)";
        bigImg.style.opacity =0;
        smallImg.forEach((img)=>{
            img.style.left = "100px";
            img.style.opacity=0;
        })
    }
});