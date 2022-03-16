<?php 
    header("Access-Control-Allow-Origin: *");
    $arr = [];
    $conn = new mysqli("localhost", "hybrid_160419118","ubaya","hybrid_160419118");
    if($conn->connect_error) {
        $arr= ["result"=>"error","message"=>"unable to connect"];
    }
    extract($_POST);
    $sql = "SELECT * FROM `users_janji` WHERE email=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s',$email_penerima);
    $stmt->execute();
    $result = $stmt->get_result();
    $profile =[];
    if($result-> num_rows >0){
        while($r2 = mysqli_fetch_assoc($result))
        {
            array_push($profile,$r2);
        }
        // $arr = ['result'=>'success' , 'data'=>$profile];
        $arr=$profile;
    }
    else{
        $arr = ['result'=>'fail' , 'message'=>$conn->error];
    }
    echo json_encode($arr);
    $stmt->close();
    $conn->close();
?>