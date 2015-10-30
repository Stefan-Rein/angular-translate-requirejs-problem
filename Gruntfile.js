module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        requirejs: {
          compile: {
            options: {
                baseUrl: "app",
                mainConfigFile: "app/config.js",

                name: "appStarter",
                insertRequire: ["appStarter"],
                out: "app/build.js",
                include: ['../assets/libs/requirejs/require.min.js'],

                skipModuleInsertion: true,
                //wrapShim: true,

                optimize: "none",
                logLevel: 0,
                waitSeconds: 5
            }
          }
        }
    });


    grunt.registerTask('default', ['requirejs']);
};