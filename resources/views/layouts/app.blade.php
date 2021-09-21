<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="author" content="Kalisso.com">
	<meta name="accueil" content="Achat et vente en ligne parmi des millions de produits en stock. Livraison gratuite à partir de 2.000Fcfa d'achats. Vos articles à petits prix : culture, high-tech, mode, jouets, sport ...">
    <meta http-equiv="pragma" content="no-cache" />

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{config('app.name')}}</title>
    @include('assets.css')
</head>
<body>
    <div id="app">
        
        <router-view ></router-view>

    </div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
