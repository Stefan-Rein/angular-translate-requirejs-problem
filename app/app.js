define([
        "./controller/AppController"
    ],
    function (
        AppController
    ) {
        var appName = "app";
        var dependencies = [
            "pascalprecht.translate",
            "ngCookies",
            "ngAnimate"
        ];
        var app = angular.module(appName, dependencies);

        app.controller("AppController", AppController);


        app.config(function ($translateProvider) {
            $translateProvider.useSanitizeValueStrategy(null);

            $translateProvider.translations('en', {
                RESOURCE_KEY: 'Should work..'
            });

            $translateProvider.translations('de', {
                RESOURCE_KEY: 'Sollte gehen..'
            });

            $translateProvider.preferredLanguage('en');
        });

        angular.bootstrap(document, [appName]);
    }
);