<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="Kalisso.com">
    <meta name="accueil"
        content="Achat et vente en ligne parmi des millions de produits en stock. Livraison gratuite à partir de 2.000Fcfa d'achats. Vos articles à petits prix : culture, high-tech, mode, jouets, sport ...">
    <meta http-equiv="pragma" content="no-cache" />
    <script src="https://js.pusher.com/beams/1.0/push-notifications-cdn.js"></script>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name') }}</title>
    @include('assets.css')
    <style>
        .img {
            max-width: 100%; /* or any custom size */
            max-height: 100%; 
            object-fit: contain;
        }
        /* a:hover{
            color:rgb(241, 0, 0)
        } */
    </style>
</head>

<body>
    <div id="app">

        <router-view></router-view>

        {{-- <vue-cookie-accept-decline :ref="'myPanel1'" :elementId="'myPanel1'" :debug="false" :position="'top-left'"
            :type="'floating'" :disableDecline="false" :transitionName="'slideFromTop'" :showPostponeButton="false"
            @status="cookieStatus" @clicked-accept="cookieClickedAccept" @clicked-decline="cookieClickedDecline">

            <!-- Optional -->
            <div slot="postponeContent">
                &times;
            </div>

            <!-- Optional -->
            <div slot="message">
                Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre site Web. 
                <br>
                <a
                    href="https://kalisso.com/privacy" target="_blank">En savoir plus...</a>
            </div>

            <!-- Optional -->
            <div slot="declineContent">
                Refuser
            </div>

            <!-- Optional -->
            <div slot="acceptContent">
                Accepter!
            </div>
        </vue-cookie-accept-decline>

        <add-to-homescreen url="https://kalisso.com" content="Ajouter un raccourci à l'écran d'accueil" lang="fr_FR" iconPath="/kalisso.png"
            title="Ajout un raccourci Kalisso à l'écran d'acceuil de votre téléphone" />
         --}}
    </div>
    <script>
        window.User = {
            id: {{ optional(auth()->user())->id }}
        }
    </script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>

</html>
