<?php 
    header("Access-Control-Allow-Origin: *");
    $arr = [];
    $conn = new mysqli("localhost", "hybrid_160419118","ubaya","hybrid_160419118");
    if($conn->connect_error) {
        $arr= ["result"=>"error","message"=>"unable to connect"];
    }
    extract($_POST);
    $idmessage =  $_POST['idmessage'];
    $sql = "";
    if(isset($_POST['stared'])){
        $stared = $_POST['stared'];
        $sql = "UPDATE `action_janji` SET `starred`= $stared WHERE `idmessage`= $idmessage";
    }
    else if(isset($_POST['unstared'])){
        $unstared = $_POST['unstared'];
        $sql = "UPDATE `action_janji` SET `starred`= $unstared WHERE `idmessage`= $idmessage";
    }
    else{
        $read = $_POST['read'];
        $sql = "UPDATE `action_janji` SET `read`= $read WHERE `idmessage`= $idmessage";
    }
    $stmt = $conn->prepare($sql);
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