const serach = document.querySelector('.search-s')
const storageList = document.querySelector(".storageList");
const storageLi = document.querySelectorAll(".storageList li");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const imgWidth = storageLi[0].offsetWidth;


var index=0;
next.onclick = function () {
if(index<storageLi.length-1){
index++;
animate(storageList,-index*imgWidth);
}
};
prev.onclick = function () {
if(index > 0){
index--;
animate(storageList, -index*imgWidth);
}
};


function animate(obj,target){
clearInterval(obj.timer)
obj.timer = setInterval(function(){
    var leader = obj.offsetLeft;       
    var step = 12;
    step = leader<target?step:-step;
    if(Math.abs(leader-target)>=Math.abs(step)){
        leader = leader + step;
        obj.style.left = leader + "px"
    }else{
        obj.style.left =target + "px";
        clearInterval(obj.timer)
    }
},15)
}

const cycleLi = document.querySelectorAll('.cycle li');
const cycleItem = document.querySelectorAll('.cycle-content .cycle-item');
for (let i = 0; i < cycleLi.length; i++) {
cycleLi[i].addEventListener("mouseover", function () {
for (let i = 0; i < cycleLi.length; i++) {
  if (cycleLi[i] == this) {
    cycleLi[i].className = 'active';
    cycleItem[i].className = 'cycle-item up'
  } else {
    cycleLi[i].className = '';
    cycleItem[i].className = 'cycle-item';
  }
}
})
}