/* webserver 的应用 */
var http = require("http")
var querystr = require("querystring")
http.createServer(function(req,res){
//localHost:3000/
//localHost:3000/regist
if(req.url == '/'){
    //response.writeHead(statusCode, [reasonPhrase], [headers])  返回状态  返回的数据类型  响应头：返回的数据格式和编码格式
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"}) //200 代表状态码
    res.write('<h1>用户注册</h1>')
    res.write('<form action="regist" method="post">')
    res.write('<p>用户名：</input><input type="text" name="username"></input></p>')
    res.write('<p>密码：<input type="text" name="password"></input></p>')
    res.write('<p>电话：<input type="text" name="tel"></input></p>')
    res.write('<p><button type="submit">注册</button></p>')
    res.write('</form>')
    console.log('首页');
    res.end('')
}else if(req.url == '/regist'){
    //表单提交注册 发送post请求 到regist
    var postData = ""
    req.on('data',function(data){
        postData+=data;
    })
    req.on('end',function(){
        
       var userInfo =  querystr.parse(postData)
        console.log(userInfo);
        console.log('用户名',userInfo.username);
        console.log('密码',userInfo.password);
        console.log('电话',userInfo.tel);
    })
    console.log('注册');
    res.end('')

}
console.log(req.url);
res.end('')
}).listen(3000);