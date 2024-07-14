
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resposta</title>
    <link rel="stylesheet" href="style/page_admin.css">
</head>
<body>
    <header>
        <nav>
            <a href="../index/index.html">logar</a>
            <a href="../index/index.html#form">inicio</a>
        </nav>
    </header>
</body>
</html>
<?php
    require("conect.php");

    $db = "plataforma";


    if(isset($_POST["logar"])){
        $name = $_POST["name"];
        $pass = $_POST["pass"];

          if($name=="quinguri" && $pass==123000){
              $script = mysqli_query($conect,"SELECT nome FROM admin WHERE nome='quinguri'");
              if($teste = mysqli_num_rows($script)){
                  header("location: page_admin.php");
              }
              
            }else{
                $name;
                $pass;
                $query = "SELECT nome FROM all_dates WHERE nome='$name' and contacto1='$pass'";
                $script = mysqli_query($conect,$query);
                
                $res = mysqli_num_rows($script);
                if($res){
                    header("location: page_aluno.php?name=$name");
                }else{
                    header("location: logar.php?login=false");
                }
                $close = mysqli_close($conect);
            }
        
    }else if(isset($_POST["add_admin"])){
        $scr = " INSERT INTO admin(nome,pass) values('sadraque',0101)";
        $script = mysqli_query($conect,$scr);
        echo " Adicionou! ";

    }else if(isset($_POST["send_dates"])){
        echo "<h1>Inscrição feita com sucesso !";
        $nome = $_POST["name"];
        $sobrenome = $_POST["sobrenome"];
        $idade = $_POST["idade"];
        $contacto1 = $_POST["contacto1"];
        $contacto2 = $_POST["contacto2"];
        $detalhes = $_POST["detalhes"];
        $email = $_POST["email"];
        $sexo = $_POST["sexo"];
        $localidade = $_POST["localidade"];

        $script = mysqli_query($conect,"INSERT INTO all_dates VALUES('$nome','$sobrenome','$idade','$sexo','$contacto1','$contacto2','$email','$localidade','$detalhes')");
        
        header("location: ../index/index.html ");
    }
    
    
    
    $close = mysqli_close($conect)
?>