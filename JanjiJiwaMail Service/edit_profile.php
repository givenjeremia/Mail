<?php 
    header("Access-Control-Allow-Origin: *");
    $arr = [];
    $conn = new mysqli("localhost", "hybrid_160419118","ubaya","hybrid_160419118");
    if($conn->connect_error) {
        $arr= ["result"=>"error","message"=>"unable to connect"];
    }
    extract($_POST);
    $sql = 'UPDATE `users_janji` SET 
    `nama`=?,
    `birthday`=?,
    `address`=? WHERE email=?';
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ssss',$name,$birthday,$address,$email_penerima);
    $stmt->execute();
   
    if($stmt->affected_rows>0){
        
        $arr = ['result'=>'success' , 'data'=>$data];
    }
    else{
        $arr = ['result'=>'fail' , 'message'=>$conn->error];
    }
    echo json_encode($arr);
    $stmt->close();
    $conn->close(); 
?>