var swiper = new Swiper(".mySwiper", {
    zoom: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
var arr = [
    {
        dpimage : "https://i.pinimg.com/564x/fa/34/ed/fa34ed655563a4559c37c49f8721289f.jpg",
        storyimage :"https://i.pinimg.com/564x/fa/47/f3/fa47f3b617d67ee0116f14890c25b311.jpg",
    },
    {
        dpimage : "https://i.pinimg.com/564x/1c/45/9d/1c459d38763b376d9f55f63289de22cb.jpg",
        storyimage :"https://i.pinimg.com/564x/8f/e4/10/8fe4103644f960e665f268956f801877.jpg",
    },
    {
        dpimage : "https://i.pinimg.com/564x/48/ce/42/48ce422a52f946f0818d8a070ad44ef4.jpg",
        storyimage :"https://i.pinimg.com/564x/d1/2e/fd/d12efdc058e1b2d7e50d3724e9807584.jpg",
    },
    {
        dpimage:"https://i.pinimg.com/564x/22/a1/62/22a16287807c4c4a71a96c5148e832a5.jpg",
        storyimage:"https://i.pinimg.com/564x/54/43/b1/5443b145038efc4e6c5dfab063c92540.jpg",

    },
    {
        dpimage:"https://i.pinimg.com/564x/ab/b8/8f/abb88fe4cc8e13fe7d49f1c56be8eccd.jpg",
        storyimage:"https://i.pinimg.com/564x/e7/af/2a/e7af2ac7fcc9ad23adb0192f57e7d93d.jpg",
    },
    {
        dpimage:"https://i.pinimg.com/564x/30/d3/8a/30d38ad06d0f5e979e4355f247094a29.jpg",
        storyimage:"https://i.pinimg.com/564x/79/85/96/798596c67e4b8170ca5cba848b72ce1c.jpg",
    },
    {
        dpimage:"https://i.pinimg.com/564x/ee/ba/ad/eebaad114972ea98eb64713d379fc752.jpg",
        storyimage:"https://i.pinimg.com/564x/fe/62/83/fe62830ffd84f747c1fbf1014ffd08ab.jpg",
    },
    {
        dpimage:"https://i.pinimg.com/564x/03/5a/11/035a11bf0a2e4e2881aeea33e5907070.jpg",
        storyimage:"https://i.pinimg.com/564x/f2/76/4e/f2764e316b8a690d9ed185a27768cc63.jpg",
    },
]
function print(){
    var clutter = "";
    arr.forEach(function(elem,index){
        clutter += `
        <div class="story">
        <div  class="dp">
            <img id= "${index}"  src="${elem.dpimage}" alt="">
        </div>
    </div> `
    })
    document.querySelector(".stories").innerHTML = clutter;
}
print();
var grow = 0;
var p = document.querySelector(".progress")
document.querySelector("#main")
.addEventListener("click",function(dets){
    document.querySelector("img").setAttribute("src",arr[dets.target.id].storyimage) 
    document.querySelector(".full").style.display = "flex";
        if(grow === 0){
            setInterval(function(){
                p.style.width = `${grow++}%`
            },30)
        }else{
            grow = 0;
        }
        //har 30millisecond mai width 1% badhegi toh 100% mai time lagega 30*100=3000milliseconds
        //  ,lekin end ke jerk ko hatane ke liye settimeout mai 3100 diya hai
        setTimeout(function(){
            document.querySelector(".full").style.display = "none";
        },3100)

})
document.querySelector("h3")
.addEventListener("click",function(){
    document.querySelector(".full").style.display = "none";
})
var flag = 1;
document.querySelector("#heart")
.addEventListener("click",function(){
        document.querySelector("#heart").style.display = "none";
        document.querySelector("#redheart").style.display = "initial";
        document.querySelector("#post>h4").textContent = "10987583626  likes"
    
})
document.querySelector("#redheart")
.addEventListener("click",function(){
        document.querySelector("#heart").style.display = "initial";
        document.querySelector("#redheart").style.display = "none";
        document.querySelector("#post>h4").textContent = "10987583625  likes"
        flag = 0;
    
})
document.querySelector(".navdp>img")
.addEventListener("click",function(){
    document.querySelector("img").setAttribute("src","https://i.pinimg.com/564x/26/e6/2d/26e62d6e5372df6942498f6abca4f8f0.jpg")
    document.querySelector(".full").style.display = "flex";
    if(grow === 0){
        setInterval(function(){
            p.style.width = `${grow++}%`
        },30)
    }else{
        grow = 0;
    }
    //har 30millisecond mai width 1% badhegi toh 100% mai time lagega 30*100=3000milliseconds
    //  ,lekin end ke jerk ko hatane ke liye settimeout mai 3100 diya hai
    setTimeout(function(){
        document.querySelector(".full").style.display = "none";
    },3100)
})
// var flag = 1;
var follow = document.querySelectorAll(".follow a");
follow.forEach(function(elem){
elem.addEventListener("click",function(){
    if(flag === 1){
        elem.textContent = "Following";
    elem.style.backgroundColor = "#dadada";
    elem.style.color = "black";
    flag = 0;
    }else{
    elem.textContent = "Follow";
    elem.style.backgroundColor = "royalblue";
    elem.style.color = "white";
    flag = 1;
    }
    
})
})