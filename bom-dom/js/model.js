

var Modal= (function(){
    function extend(target,obj){
        for(var p in obj){
            if(typeof obj[p]=='object'){
                target[p]= (obj[p].constructor ==Array?extend([],obj[p]):extend({},obj[p]));
            }
            else
             target[p]=obj[p];
        }
        return target;
    }
    var el;
    var settings={
        width: 600,
        height: 400
    };
    function Modal(options) {
     var that=this;
     settings = extend(settings,options); 
     this.myModal=document.getElementById(settings.el);
     this.myModal.onclick=function(){
         that.close();
     }
     this.myModal.style.display = "block";
    //  var oModel=document.getElementById('myModal1');
     var modaldialog=util.first(this.myModal);
     modaldialog.onclick=function(e){
         e.stopPropagation();
     };
     modaldialog.style.width=settings.width+'px';
     modaldialog.style.height=settings.height+'px';

      var btnClose = this.myModal.getElementsByClassName('btn-close')[0];
      btnClose.onclick=function(){
         that.close();
      }
      var btnCancel = this.myModal.getElementsByClassName('btn-cancel')[0];
      btnCancel.onclick = function () {
        that.close();
      };
      var btnOk=this.myModal.getElementsByClassName('btn-ok')[0];
      btnOk.onclick=function(){
         settings.onOk();
      }
    }
    Modal.prototype.close=function(){
        this.myModal.style.display='none';
    };
    return Modal;
})();