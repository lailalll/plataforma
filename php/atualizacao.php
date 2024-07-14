<style>
    *{
        margin: 0px;
        padding: 0px;
    }
    body{
        background-color: rgb(150, 150, 153);
    }
</style>
<?php
    require("conect.php");

    function volta($novonome){
       // header("location: page_aluno.php?name=$novonome");
    }
    if(isset($_POST["send_dates"])){
        require("conect.php");
            $expt = $_POST["name_search"];
            echo "<hr>"; 
            echo $expt;
            echo "<hr>";
            while ($a <= 12) {
                
                if($expt){
                    $expt = $_POST["name_search"];
                    if($_POST["name"]){
                        $novo_nome = $_POST['name'] ;
                        $scri = "UPDATE all_dates SET nome='$novo_nome' WHERE nome='$expt' ";
                        $script = mysqli_query($conect,$scri);
                        volta($novo_nome);
                        echo "<br>";
                        echo "no nome";
                    }
                    if($_POST["sobrenomes"]){
                        $novo_sobrenome = $_POST['sobrenome'] ;
                        $scri = "UPDATE all_dates SET sobrenome='$novo_sobrenome' WHERE nome='$expt' ";
                        $script = mysqli_query($conect,$scri);
                        volta($novo_nome);
                        echo "<br>";
                        echo "no sobrenome";
                    }
                    if($_POST["idade"]){
                        $novo_idade = $_POST['idade'] ;
                        $scri = "UPDATE all_dates SET idade='$novo_idade' WHERE nome='$expt' ";
                        $script = mysqli_query($conect,$scri);
                        volta($novo_nome);
                        echo "<br>";
                        echo "na idade";
                    }
                    if($_POST["contacto1"]){
                        $novo_contacto1 = $_POST['contacto1'] ;
                        $scri = "UPDATE all_dates SET contacto1='$novo_contacto1' WHERE nome='$expt' ";
                        $script = mysqli_query($conect,$scri);
                        volta($novo_nome);
                        echo "<br>";
                        echo "no contacto1";
                    }
                    if($_POST["contacto2"]){
                        $novo_contacto2 = $_POST['contacto2'] ;
                        $scri = "UPDATE all_dates SET contacto2='$novo_contacto2' WHERE nome='$expt' ";
                        $script = mysqli_query($conect,$scri);
                        volta($novo_nome);
                        echo "<br>";
                        echo "no contacto2";
                    }
                    if($_POST["email"]){
                        $novo_email = $_POST['email'] ;
                        $scri = "UPDATE all_dates SET email='$novo_email' WHERE nome='$expt' ";
                        $script = mysqli_query($conect,$scri);
                        volta($novo_nome);
                        echo "<br>";
                        echo "no email";
                    }
                    if($_POST["localidade"]){
                        $novo_localidade = $_POST['localidade'] ;
                        $scri = "UPDATE all_dates SET localidade='$novo_localidade' WHERE nome='$expt' ";
                        $script = mysqli_query($conect,$scri);
                        volta($novo_nome);
                        echo "<br>";
                        echo "na localidade";
                    }
                    if($_POST["detalhes"]){
                        $novo_detalhes = $_POST['detalhes'] ;
                        $scri = "UPDATE all_dates SET nota='$novo_detalhes' WHERE nome='$expt' ";
                        $script = mysqli_query($conect,$scri);
                        volta($novo_nome);
                        echo "<br>";
                        echo "no detalhe";
                    }
                    if($_POST["sexo"]){
                       
                        $novo_sexo = $_POST['sexo'] ;
                        $scri = "UPDATE all_dates SET sexo='$novo_sexo' WHERE nome='$expt' ";
                        $script = mysqli_query($conect,$scri);
                        volta($novo_nome);
                        echo "<br>";
                        echo "no nome";
                    }

                }else{
                    echo "igual";
                }
            
            $a++;
        }

    }else{
        echo 'nada';
    }
    
    $close = mysqli_close($conect)

?>