// config

var app =  
angular.module('app')
  .constant('server_url', '/')
  .config(
    [        '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', 'FacebookProvider', 'GooglePlusProvider','cryptProvider',
    function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide, FacebookProvider,   GooglePlusProvider, cryptProvider) {

        cryptProvider.setSecret('abcdefg1234567890');
        FacebookProvider.init('858617410822846');
        GooglePlusProvider.init({
            clientId: '974639913694-n9mc312ljjf9mrce85la0ipaloabj6tp.apps.googleusercontent.com',
            apiKey: 'derp'
        });

        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;
    }
  ])
  .config(['$translateProvider', function($translateProvider){
    // Register a loader for the static files
    // So, the module will search missing translation tables under the specified urls.
    // Those urls are [prefix][langKey][suffix].
    $translateProvider.useStaticFilesLoader({
      prefix: 'l10n/',
      suffix: '.js'
    });
    // Tell the module what language to use by default
    $translateProvider.preferredLanguage('en');
    // Tell the module to store the language in the local storage
    $translateProvider.useLocalStorage();

    $translateProvider.useSanitizeValueStrategy('escaped');

}]);