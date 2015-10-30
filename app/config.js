require.config({
    waitSeconds: 0,
    baseUrl: "app",
    paths: {
        "appStarter": "./app",
        "angular": "../assets/libs/angular/angular",

        "angularTranslate": "../assets/libs/angularTranslate/angular-translate",
        "angularTranslateLoaderPartial": "../assets/libs/angularTranslate/service/loader-partial",
        


        "angularTranslateCookie": "../assets/libs/angularTranslate/service/storage-cookie",
        "angularTranslateLocal": "../assets/libs/angularTranslate/service/storage-local",
        "angularCookies": "../assets/libs/angular/angular-cookies.min",
        "angularAnimate": "../assets/libs/angular/angular-animate.min"
    },
    shim: {
        "appStarter": {
            //exports: "appStarter",
            deps: [
                "angular",
                "angularCookies",
                "angularAnimate",

                "angularTranslate",

                "angularTranslateCookie",
                "angularTranslateLocal",
                "angularTranslateLoaderPartial"
            ]
        },
        "angular": {
            exports: "angular"
        },
        
        "angularCookies": {
            deps: ["angular"]
        },
        "angularAnimate": {
            deps: ["angular"]
        },

        "angularTranslate": {
            deps: ["angular"]
        },
        "angularTranslateCookie": {
            deps: ["angularTranslate"]
        },
        "angularTranslateLocal": {
            deps: ["angularTranslate"]
        },
        "angularTranslateLoaderPartial": {
            deps: ["angularTranslate"]
        }
    }
});

require(["appStarter"]);