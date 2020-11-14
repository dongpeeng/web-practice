

(function(){
    var oLogin=document.getElementById('login');
    var myModal1;
    var oModel1=document.getElementById('myModal1');
    var oModel2=document.getElementById('myModal2');
function one(fn) {
    var flag = true;
    return function () {
        if (flag) {
            flag = false;
            fn.apply(this, arguments);
        }
        else alert('您已登录');
    }
}

    oLogin.onclick=one(function(){
         myModal1= new Modal(
            { el:'myModal1',
               width: 800 ,
              onOk:function(){
                var username=document.getElementById('username1');
                var password=document.getElementById('password1');
                alert('欢迎'+username.value+'用户');
                oModel1.style.display='none';
             
                
            }   
        });
        return false;
        
    });
    oLogin.removeEventListener('click',function(){
        alert('您已登录')
    },false);
    var oBtnRegist = document.getElementById("regist");
    oBtnRegist.onclick = function () {
      new Modal( 
    { el:'myModal2',
      width: 800 ,
     onOk:function(){
       var username=document.getElementById('username2');
       var password=document.getElementById('password2');
       console.log(username.value); 
       console.log(password.value); 
       alert('恭喜 '+username.value+' 用户注册成功!');
       oModel2.style.display='none';
       username.value='';
       password.value='';
   }});//创建一个新的弹层组件
      
  
      return false;//阻止浏览器默认行为
    };
 
    var btn1 = document.getElementById('btn1');
    btn1.onclick = function(){
      myModal1.close();
    };
}
)();

