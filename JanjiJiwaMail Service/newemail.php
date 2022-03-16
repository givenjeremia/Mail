<?php 
    header("Access-Control-Allow-Origin: *");
    $arr = [];
    $conn = new mysqli("localhost", "hybrid_160419118","ubaya","hybrid_160419118");
    if($conn->connect_error) {
        $arr= ["result"=>"error","message"=>"unable to connect"];
    }
    extract($_POST);
    //Cek Apakah Ada Email Penerima
    $sql = "SELECT * FROM `users_janji` WHERE `email`=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s',$email_penerima);
    $stmt->execute();
    $result = $stmt->get_result();

    if($result->num_rows > 0 ){
        date_default_timezone_set("Asia/Jakarta");
        $date_now = date("Y-m-d h:i:s",strtotime('now'));
        // Insert Message
        $sql2 = "INSERT INTO `message_janji`(`email_pengirim`, `email_penerima`, `subject`, `message` , `time`) VALUES (?,?,?,?,?)";
        $stmt2 = $conn->prepare($sql2);
        $stmt2->bind_param('sssss',$email_pengirim,$email_penerima,$subject,$message,$date_now);
        $stmt2->execute();

        if($stmt2->affected_rows>0){
            $newid = $stmt2->insert_id;
            //Insert Action
            $default = 0;
            $sql3 = "INSERT INTO `action_janji`(`email`, `idmessage`, `read`, `starred`) VALUES (?,?,?,?)";
            $stmt3 = $conn->prepare($sql3);
            $stmt3->bind_param('siii',$email_pengirim,$newid,$default,$default);
            $stmt3->execute();

            if($stmt3->affected_rows > 0){
                // Insert Image
            $img = str_replace('data:image/jpeg;base64,', '',$image);
            $img = str_replace(' ', '+', $img);
            $data = base64_decode($img);
            file_put_contents('image/'.$newid.'.jpg', $data);
                $arr = ['result'=>'success' , 'idmessage'=>$newid ,'email_penerima'=>$email_penerima];
            }
            else{
                $arr = ['result'=>'tidak'  , 'message'=>'Email Gagal Di Kirim' ,'dberror'=> $conn->error];
            }
         $stmt3->close();
    
        }
        else{
            $arr = ['result'=>'gagal' , 'message'=>'Email Gagal Di Kirim' ,'dberror'=> $conn->error];
        }
        $stmt2->close();
   
    }
    else{
        $arr = ['result'=>'fail' , 'message'=>'Email Penerima Tidak Di Temukan' ,'dberror'=> $conn->error];
    }

    echo json_encode($arr);
    $stmt->close();
    
    $conn->close();
