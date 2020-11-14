
//返回下一个兄弟元素节点
function next(el){
    do{
       el=el.nextSibling;
    }while(el && el.nodeType !=1); //元素节点为1 属性节点2 文本节点3
    return el;
}
//返回第一个元素孩子节点
function first(el){
       el=el.firstChild;
 return el && el.nodeType !=1? next(el):el;
   
}

function getByClassName(className,tagName,context){
       var el=[];
       context=context || document;
       if(document.getElementsByClassName){
           el=context.getElementsByClassName(className);
       }else{
           var arr =context.getElementsByTagName(tagName);
           for(var i=0;i<arr.length;i++){
               if(arr[i].className.indexOf(className)!=-1){
                   el.push(arr[i]);
               }
           }
           return el;
       }
}
//合并对象
function extend(target,obj){
    for(var p in obj){
        if(typeof obj[p]=='object'){
            target[p]= (obj[p].constructor ==Array?extend([],obj[p]):extend({},obj[p]));
            // target[p] = extend(obj[p].constructor == Array ? [] : {}, obj[p]);
        }
        else
         target[p]=obj[p];
    }

}


var util = (function(){

    return {
        getByClass: function (){
    
        },
        next: function (elem){
            do{
                elem = elem.nextSibling;
            }while(elem && elem.nodeType != 1);
            return elem;
        },
        first: function (elem){
            elem = elem.firstChild;
            return elem && elem.nodeType != 1 ? this.next(elem) : elem;

        }
    }
    function one(fn) {
        var flag = true;
        return function () {
            if (flag) {
                flag = false;
                fn.apply(this, arguments);
            }
        }
    }
})();
