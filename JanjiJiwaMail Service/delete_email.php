<?php 
    header("Access-Control-Allow-Origin: *");
    $arr = [];
    $conn = new mysqli("localhost", "hybrid_160419118","ubaya","hybrid_160419118");
    if($conn->connect_error) {
        $arr= ["result"=>"error","message"=>"unable to connect"];
    }
    extract($_POST);
    $sql1 = "DELETE FROM action_janji WHERE idmessage=?";
    $stmt1 = $conn->prepare($sql1);
    $stmt1->bind_param("i", $idmessage);
    $stmt1->execute();

    $sql2="DELETE FROM message_janji WHERE idmessage=?";
    $stmt2= $conn->prepare($sql2);
    $stmt2->bind_param("i", $idmessage);
    $stmt2->execute();

    if($stmt2->affected_rows>0){
        $arr = ['result'=>'success'];
    }
    else{
        $arr = ['result'=>'fail' , 'message'=>$conn->error];
    }
    echo json_encode($arr);
    $stmt1->close();
    $stmt2->close();
    $conn->close(); 
?>