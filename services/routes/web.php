<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return 'Wrong way...';
    //return $router->app->version();
});

$router->get('/{user}/[{pas}]', function ($user,$pas) use ($router) {
    $results = app('db')->select("SELECT * FROM eb_users WHERE user='".$user."' AND password='".$pas."'");
    return $results;
});

$router->get('/canales', function () use ($router) {
    $results = app('db')->select("SELECT * FROM eb_canales cs, eb_cfg_canales cfg WHERE cfg.id_canal=cs.id AND cs.estado = 0");
    return $results;
});

$router->get('/canal/{campo}/{valor}/{id}', function ($campo,$valor,$id) use ($router) {
    $valor = urldecode($valor);
    //return json_encode($valor);
    $results = app('db')->select("UPDATE eb_cfg_canales SET ".$campo."='".$valor."' WHERE id='".$id."'");
    return $results;
});

$router->get('/conversaciones', function () use ($router) {
    $results = app('db')->select("SELECT * FROM eb_conversaciones	");
    return $results;
});