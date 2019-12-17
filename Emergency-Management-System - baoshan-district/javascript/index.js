var config = {
    el: document.getElementById('switch'),
    dropElement: document.querySelector("#dropMenu")
}

function init() {
    config.el.onmouseover = function() {
        config.dropElement.style.display = "block"
        config.dropElement.classList.add("layui-anim-upbit")
    }
    config.dropElement.onmouseover = function() {
        config.dropElement.style.display = "block"
    }
    config.dropElement.onmouseout = function() {
        config.dropElement.style.display = "none";
    }
}
init()