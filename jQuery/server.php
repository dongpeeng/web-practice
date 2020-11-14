 <?php

    header('content-type:application/json;charset=utf-8');
    //1.接受参数
     $username= $_POST['username'];
    //2.进行处理
    $users=array(
        array("id"=>11,"name"=>"lisi","gender"=>"男"),
        array("id"=>22,"name"=>"wangwu","gender"=>"女")
  );
  echo json_encode($users);
  // phpinfo(); 
?> 