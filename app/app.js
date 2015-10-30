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
                RESOURCE_KEY: 'Should work..',
                TITLE: 'Hello',
                FOO: 'This is a paragraph.',
                BUTTON_LANG_EN: 'english',
                BUTTON_LANG_DE: 'german'
            });

            $translateProvider.translations('de', {
                RESOURCE_KEY: 'Sollte gehen..',
                TITLE: 'Hallo',
                FOO: 'Das ist ein Paragraph.',
                BUTTON_LANG_EN: 'englisch',
                BUTTON_LANG_DE: 'deutsch'
            });

            $translateProvider.preferredLanguage('en');
        });

        angular.bootstrap(document, [appName]);
    }
);