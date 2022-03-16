<?php 
    header("Access-Control-Allow-Origin: *");
    $arr = [];
    $conn = new mysqli("localhost", "hybrid_160419118","ubaya","hybrid_160419118");
    if($conn->connect_error) {
        $arr= ["result"=>"error","message"=>"unable to connect"];
    }
    extract($_POST);
    $sql = "SELECT * FROM message_janji WHERE idmessage=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i',$idmessage);
    $stmt->execute();
    $result = $stmt->get_result();
    $detailinbox =[];
    if($result-> num_rows >0){
        while($r2 = mysqli_fetch_assoc($result))
        {
            array_push($detailinbox,$r2);
        }
        $arr =$detailinbox;
    }
    else{
        $arr = ['result'=>'fail' , 'message'=>$conn->error];
    }
    echo json_encode($arr);
    $stmt->close();
    $conn->close();
?>