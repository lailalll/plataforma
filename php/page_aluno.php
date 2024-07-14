
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>page dados_aluno</title>
    <style>
        body{
            background-color: rgb(4, 96, 133);
        }
        a{
            margin:0px !important; 
        }
        h2{
            margin:0px !important;
        }
        body{
            padding: 5px 10px;
        }
        *{
            margin:0px;
        }
        h3{
            margin:20px 0px 0px 0px;
        }
        form{
            display: flex;
            flex-direction:column;
            width:100%;
            justify-content:center;
            align-items:center;
        }
        form *{
            font-size:17px;
            font-weight:bold;
        }
        .block{
            width:500px;
            display:flex;
            justify-content:center;
            align-items:start;
        }
        span{
            flex-basis:100%;
            margin:2px;
        }
        input:not([type="radio"]){
            width:90%;
            height:30px;
        }
        textarea{
            width:50%;
            height:50px;
            max-height:100px;
            max-width:100%;
            min-height:50px;
            min-width:50%;
            margin:4px 2px;
            
        }
        input[type="submit"]{
            width:200px;
            height:35px;
            margin:5px;
        }
        .div_sms{
            border:1px solid blue;
            height:200px;
            width:500px;
        }
        .recado{
            border:1px solid black;
            width:300px;
            height:200px;
            text-align:start;
        }
        td{
            color:black;
            }
        header{
            width: 100%;
            height: 80px;
            display: flex;
            align-items: center;
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
        table{
            border: 1px solid black;
            width: 100%;
            border-collapse: collapse;    

        }
        table th{
            border: 1px solid black;
            height: 20px;
            color: black;
            font-weight: bold;
        }
        table td{
            text-align: center;
            border: 1px solid black;
            height: 25px;
            color: black;
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <a href="../index/index.html">index</a>
        </nav>
    </header>
    <h2> Bem vindo , <?php echo $_GET['name']; ?> ! </h2>
    <h3> Cá estão os seus dados : </h3>
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
            $name = $_GET['name'];
            exibir_dados_aluno($name);
            
            admin_creater();

            ?>
    </table>
        <br>
        <?php
          recado($_GET['name']);
        ?>
       
      </div>
</body>
</html>
