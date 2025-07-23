<?php
try{
    $dsn = 'mysql:dbname=easy_bot;host=localhost';
    $user = 'root';
    $password = 'Apolo011.';

    $dbh = new PDO($dsn, $user, $password);
}catch(Exception $e){
    echo 'Error en conección: ',  $e->getMessage(), "\n";
}

?>