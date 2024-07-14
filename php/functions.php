<style>
    .h3{
        color:white;
        text-align:center;
        width:100%;
        margin-bottom:10    px;
        text-shadow:1px 1px 1px black;
        font-size:19px;
    }
    .smsp{
        width:100%;
        color:white;
        text-shadow:1px 1px 1px black;
        text-align:center;
    }
</style>
<?php
  require("conect.php");
    function admin_creater(){
        require("conect.php");
        if($teste = mysqli_num_rows(mysqli_query($conect,"SELECT nome FROM admin WHERE nome='quinguri'"))){
        }else{
            $script = mysqli_query($conect,"INSERT INTO admin(nome,pass) values('quinguri',123000)");
        }
        
    }
    function exibir_dados_pra_admin(){
        require("conect.php");
        $td = 'all_dates';

        $script = mysqli_query($conect,"SELECT * from all_dates");
    
            while($recebidos = mysqli_fetch_row($script)){
                $nome = $recebidos[0];
                $sobrenome = $recebidos[1];
                $idade = $recebidos[2];
                $sexo = $recebidos[3];
                $Contacto1 = $recebidos[4];
                $Contacto2 = $recebidos[5];
                $email = $recebidos[6];
                $localidade = $recebidos[7];
                echo " 
                <tr>
                <td>$nome</td><td>$sobrenome</td><td>$idade</td><td>$sexo</td><td>$Contacto1</td><td>$Contacto2</td><td>$email</td><td>$localidade</td>
                </tr>
                ";
            }
    


    }
    function exibir_dados_aluno($name){
        require("conect.php");

        $td = 'all_dates';

        $query = "SELECT * FROM all_dates WHERE nome='$name'";
        $script = mysqli_query($conect,$query);
        while($recebidos = mysqli_fetch_row($script)){
            $nome = $recebidos[0];
            $sobrenome = $recebidos[1];
            $idade = $recebidos[2];
            $sexo = $recebidos[3];
            $Contacto1 = $recebidos[4];
            $Contacto2 = $recebidos[5];
            $email = $recebidos[6];
            $localidade = $recebidos[7];
            echo " 
            <tr>
            <td>$nome</td><td>$sobrenome</td><td>$idade</td><td>$sexo</td><td>$Contacto1</td><td>$Contacto2</td><td>$email</td><td>$localidade</td>
            </tr>
            ";
        }
    }
    function recado($name){
        require("conect.php");
        if(true){
            $db = "plataforma";
            $script = mysqli_query($conect,"SELECT recado from all_dates where nome='$name'");
            $res = mysqli_fetch_row($script);
            if($res[0]){
                echo "<p class='recado'>Ola $name , $res[0]</p>";
            }else{    
            } 
        }else{
        }
        $query = mysqli_query($conect,"SELECT destino FROM mensagem WHERE destino = '$name'");
        if($res=mysqli_num_rows($query)){
            $query = mysqli_query($conect,"SELECT sms FROM mensagem WHERE destino = '$name'");
            echo "<h4 class=h3> Tens uma mensagem ! </h4>";
            while($sms = mysqli_fetch_row($query)){
                echo "<p class=smsp>".$sms[0]."</p>";
            }
        }else{
            echo "<p class=smsp> Sem mensagem até o momento , $name!</p>";

        }

    }
    function enviar_recado($receptor,$recado){
        if((!empty($receptor))and(!empty($recado))){
            include("conect.php");
            $query = mysqli_query($conect,"SELECT * FROM all_dates WHERE nome='$receptor'");

            if($res = mysqli_num_rows($query)){
                $query = mysqli_query($conect,"INSERT INTO mensagem values('$receptor','$recado')");
                echo "O receptor : ".$receptor;
                echo "<br>";
                echo "O recado : ".$recado;
            }else{
                echo "Lamento , houve um erro! <br/> Destino não encontrado!";
                echo "<br/>";
                echo "Preencha devidamente os campos e tente de novo.";
            }
        }else{
            echo "Receptor vazio";
            echo "<br>";
            echo "O recado vazio";
        }
     
    }

    
    $close = mysqli_close($conect);
?>
    