<?php 
    header("Access-Control-Allow-Origin: *");
    $arr = [];
    $conn = new mysqli("localhost", "hybrid_160419118","ubaya","hybrid_160419118");
    if($conn->connect_error) {
        $arr= ["result"=>"error","message"=>"unable to connect"];
    }
    extract($_POST);
    $sql="INSERT INTO `users_janji`(`email`, `password`, `nama`, `birthday`, `address`) VALUES (?,?,?,?,?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('sssss',$email,$password,$nama,$birthday,$address);
    $stmt->execute();
    if($stmt->affected_rows>0){
        $arr = ['result'=>'success'];
    }
    else{
        $arr = ['result'=>'fail' , 'message'=>$conn->error];
    }
    echo json_encode($arr);
    $stmt->close();
    $conn->close(); 
?>