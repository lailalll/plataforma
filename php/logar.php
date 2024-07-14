<?php

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    <style>
        body{
            background-color: rgb(5, 24, 109);
            padding: 0px 10px;
        }
        form{
            width:90%;
            min-width: 200px;
            height:400px;
            border:none;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            margin:3% auto;
            /*background-color: rgb(178, 180, 180);
            */
            background-color:none;
        }
        form div{
            width:80%;
            display:flex;
            flex-direction:column;
            margin:10px 0px;
            align-items:flex-start;
            
        }
        input::placeholder{
            color:skyblue;
            font-weight:lighter;

        }
        label{
            color:gray;
        }
        form div:last-of-type{
           /* align-items:center;
*/
        }
        form input{
            width:100%;
            height:40px;
            border:none;
            border-bottom:1px solid black;
            outline:none;
            font-size:17px;
            color:black;
            font-weight:bold;
            background-color: transparent;
            color:white;
            font-weight:lighter;
            
        }
        input:hover{
            border-bottom:1px solid skyblue;
        }
        input:active{
            background:transparent;
        }
        form .bt{
            height:35px;
            width:200px;
            border-radius:5px;
            border:1px solid gray;
            background-color: rgb(5, 24, 109);
            margin:20px 0px 0px 0px;
            color:white;
            font-weight:lighter;
            
        }
        form .bt:hover{
            cursor:pointer;
        }
        .back{
            width:100%;
            justify-content:flex-start;
            display:flex;
            align-items:center;
            height:80px;
        }
        .back a{
            width:100px;
            height:35px;
            background-color: rgb(5, 24, 109);
            color:white;
            font-weight:bold;
            text-decoration:none;
            line-height:35px;
            border-radius:5px;
            text-align:center;
            margin:0px;
            font-weight:lighter;
            border:0.2px solid gray;
        }
        h3,h1{
            width:100%;
            text-align:center;
            margin:0px;
            color:gray;
            color:skyblue;
            display:flex;
            align-items:center;
            justify-content:center;
         }
        *{
            margin:0px;
            padding:0px;
            color:white;
            font-family:arial;
        }
        .criar{
            border-bottom:1px solid white;
            width:100px;
            display:flex;
            justify-content:center;
        }
        label{
            color:white;
        }

    </style>
</head>
<body>
    <div class="back" id="back">
        <a href="../index/index.html">inicio</a>
    </div>
        
        <?php
            $nota_logi = "";
            if(isset($_GET['login'])){
                    $nota_logi = "
                                <h3> Acesso Negado </h3>
                                <h3> (1) Insira corretamente os dados ,ou,  (2) Crie a sua conta e tente de novo !     <a href='../index/index.html#form' style='text-decoration:none;' class=criar>criar</a> </h3>                             
                                ";
                    echo $nota_logi;
            }else{
                    $nota_logi="";
                }

        ?>
        <h1>logar</h1>
        <form action="action.php" method="post">
            <div>
                <label for="name">Nome : </label>
                <input type="text" name="name" id="name" placeholder="Insira o seu nome : " required autocomplete="off">
            </div>
            <div>
                <label for="senha">Senha : </label>
                <input type="password" name="pass" id="senha" placeholder="Insira a senha por defeito : (1- Numero de celular) " required>
            </div>
            <div>
                <input type="submit" value="entrar" name="logar" class="bt">
            </div>
        </form>
        <?php
        
            require("functions.php");
            admin_creater();
        ?>
</body>
</html>