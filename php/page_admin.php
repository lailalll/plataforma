
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>page hadmin</title>
    <link rel="stylesheet" href="style/page_admin.css">
    <style>
        body{
            background-color: rgb(5, 24, 109);
        }
        td{
            color:black !important;
            font-weight:bold;
        }
        th{
            color:white !important;
        }
        .bt_sms{
            width:200px;
            height:30px;
            border-radius:5px;
            margin:10px 0px;
            border:1px solid white;
            background-color: rgb(5, 24, 109);
            color:white;
        }
        header nav{
            flex-grow: 1;
            display: flex;
            justify-content: end;
            align-items: center;
        }
        header nav a{
            border: 1px solid white;
            height: 30px;
            width: 100px;
            border-radius: 5px;
            margin-right: 5px;
            text-align: center;
            line-height: 30px;
            text-decoration: none;
            color: white;
            background-color: rgb(5, 24, 109);
            font-weight: bold;
        }
        .txt{
            width:100px;
            height:40px;
            border:none;
            border-bottom:1px solid white;
            background:transparent;
            margin-right:20px;    
        }
        .txt_recado{
            width:250px;
            height:40px;
            border:none;
            border-bottom:1px solid white;
            background-color:white;
            background:transparent;
        }
        .txt::placeholder,.txt_recado::placeholder{
            background:transparent;
            color:white;
        }
        .txt:active,.txt_recado:active{
            outline:none;
            border:none;
            
        }
        
    </style>
</head>
<body>
    <header>
        <nav>
            <a href="../index/index.html">inicio</a>
        </nav>
    </header>
    <h2>Todos os estudantes cadastrado : </h2>
    <br>
    <table>
    <tr>
        <th>Nome</th>
        <th>Sobre nome</th>
        <th>idade</th>
        <th>sexo</th>
        <th>Contacto(1)</th>
        <th>Contacto(2)</th>
        <th>Email</th>
        <th>Localidade</th>
    </tr>
            <?php
            require("functions.php");
            exibir_dados_pra_admin();
            
            ?>

    </table>
            <form action="page_admin.php" method="get">
            <input type="submit" class="bt_sms" name="bt_mensagem" value="enviar mensagem">
            </form>
      
        <?php
        if(isset($_GET["bt_mensagem"])){
        ?>
            <form action="page_admin.php" method="get">
            <input type="text" class="txt" name="receptor" placeholder="Enviar recado à : ">
            <input type="text" class="txt_recado" name="recado" placeholder="Recado : ">
    
            <input type="submit" class="bt_sms" name="bt_recado" value="enviar">
            </form> 
        <?php
        }else  if(isset($_GET["bt_recado"])){
            $receptor = $_GET["receptor"];
            $recado = $_GET["recado"];

           enviar_recado($receptor,$recado);
        }else{
            echo "";
        }

        ?>
</body>
</html>