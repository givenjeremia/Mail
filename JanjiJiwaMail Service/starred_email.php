<?php 
    header("Access-Control-Allow-Origin: *");
    $arr = [];
    $conn = new mysqli("localhost", "hybrid_160419118","ubaya","hybrid_160419118");
    if($conn->connect_error) {
        $arr= ["result"=>"error","message"=>"unable to connect"];
    }
    extract($_POST);
    $sql = "SELECT * FROM message_janji mj INNER JOIN action_janji aj ON  mj.idmessage = aj.idmessage  WHERE mj.email_penerima = ? AND `starred`= ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('si',$email_penerima,$starred);
    $stmt->execute();
    $result = $stmt->get_result();
    $inbox =[];
    if($result-> num_rows >0){
        while($r2 = mysqli_fetch_assoc($result))
        {
            array_push($inbox,$r2);
        }
        $arr = ['result'=>'success' , 'data'=>$inbox];
    }
    else{
        $arr = ['result'=>'fail' , 'message'=>$conn->error];
    }
    echo json_encode($arr);
    $stmt->close();
    $conn->close();
?>