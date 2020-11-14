/*
    封装move函数
    
    ele 要传递的元素
    
    attr 属性 --- 字符串
    
    speed  速度  正负值
    
    target 目标值（结束位置）
    
    callback 回调函数 --- 当这个函数执行完毕后，再去调用它
*/
function move(ele, attr, speed, target, callback){
    //获取当前的位置
    //从左往右进行移动 --- current<target speed
    //从右往左进行移动 --- current>target -speed
    var current = parseInt(getStyle(ele, attr));
    //   810 > 800
    if(current>target){
        speed = -speed;
    }
    
    //定时器累加问题 --- 先清除再开启
    clearInterval(ele.timer);
 
    ele.timer = setInterval(function(){
        //获取元素的现在位置
        var begin = parseInt(getStyle(ele, attr));
        //步长
        var step = begin + speed;
        
        //判断当step>800, 让step = 800
        //从左往右进行移动 --- speed>0 正值
        //从右往左进行移动 --- speed<0 负值
        //   -10              0            10           超过800直接变成  800
        if(speed<0 && step<target || speed>0 && step>target){
            step = target;
        }
        
        //赋值元素
        ele.style[attr] = step + "px";
        
        //让元素到达目标值时停止 800px
        if(step == target){
            clearInterval(ele.timer);
            //当move函数执行完毕后, 就执行它了
            //当条件都满足时才执行callback回调函数
            callback && callback();
        }
 
    },450)
 }
 
 //获取元素的方式 --- 注意点:如果在IE浏览器下, 要指定默认的值, 如果不指定获取的是auto
 function getStyle(obj, name){
    if(window.getComputedStyle){
        return getComputedStyle(obj, null)[name];
    }else{
        return obj.currentStyle[name];
    }
 }