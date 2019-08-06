(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      define(factory);// AMD
    } else if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = factory(); // CommonJS
    } else {
      window.Progressbar = factory(); // Browser globals
    }
  }(this, function () {
    function Progressbar(options){
      this.id = options.id;
      this.value = options.value || 0;
      this.width = options.width || 90;
      this.height = options.height || 90;
      this.bgColor = options.bgColor || '#3fa1ea';
      this.barColor = options.barColor || 'red';
      this.fontColor = options.fontColor || '#fff';
      if(options.init){
        this.init();
      }
    }
    Progressbar.prototype.init = function(){
      var canvas = document.getElementById(this.id);
  
      if(!canvas.getContext) {
        throw new Error('your browser does not support canvas')
      }
  
      if(!this.id){
        throw new Error('your need pass id ')
      }
  
      var width = parseInt(this.width);
      var height = parseInt(this.height);
      canvas.setAttribute('width',width);
      canvas.setAttribute('height',height);
  
      var ctx = canvas.getContext("2d");
  
      var startAngle = 3 / 2 * Math.PI;
      var percentage = 0;
      var diffAngle = 0;
      var cx = width / 2;
      var cy = height / 2;
      var timer = setInterval(draw, 50);
      var value = this.value;
      var bgColor = this.bgColor;
      var barColor = this.barColor;
      var fontColor = this.fontColor;
  
      function draw(){
        diffAngle = (percentage / 1000) * Math.PI * 2;
  
        //清除矩形区域
        ctx.clearRect(0, 0, width, height);
  
        ctx.beginPath();
  
        //设置线段宽度
        ctx.lineWidth = 15;
  
        //绘制圆
        ctx.arc(cx, cy, 35, 0, 2 * Math.PI, false);
  
        //设置填充色
        ctx.fillStyle = '#060f30';
        ctx.fill();
  
        //绘制图形轮廓
        ctx.strokeStyle = bgColor; 
        ctx.stroke();
  
        //绘制百分比进度
        ctx.beginPath();
        ctx.arc(cx, cy, 35, startAngle, diffAngle + startAngle, false);
        ctx.strokeStyle = barColor;
        ctx.stroke();
  
        //绘制百分比文字
        ctx.fillStyle = fontColor;
        ctx.textAlign = 'center';
        ctx.font = '16px serif';
        ctx.fillText("共"+percentage + '个', cx, cy + 6);
  
        if (percentage >= value) {
          clearTimeout(timer);
        }
  
        percentage++;
      }
    }
    return Progressbar;
  }));
  
  var progressbar1 = new Progressbar({ id: 'myCanvas',value: 54 ,init: true })
  var progressbar2 = new Progressbar({ id: 'myCanvas2',value: 190 ,init: true })
  var progressbar3 = new Progressbar({ id: 'myCanvas3',value: 190 ,init: true })
  var progressbar4 = new Progressbar({ id: 'myCanvas4',value: 54 ,init: true })
  var progressbar5= new Progressbar({ id: 'myCanvas5',value: 190 ,init: true })
  var progressbar6 = new Progressbar({ id: 'myCanvas6',value: 190 ,init: true })