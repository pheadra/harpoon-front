'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {
          
          $urlRouterProvider
              .otherwise('/app/dashboard-v1');

          $stateProvider
              // contents
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'tpl/app/layout.html'
              })
              .state('app.blank', {
                  url: '/blank',
                  template: '<div>blank</div>'

              })
              .state('app.dashboard-v1', {
                  url: '/dashboard-v1',
                  templateUrl: 'tpl/app_dashboard_v1.html',
                  controller:'DashboardCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad ){
                              return $ocLazyLoad.load(['js/app/dashboard/dashboard.js',
                                  'js/app/dashboard/dashboard-service.js',
                                  'js/app/dashboard/dashboard.css',
                              'js/app/realtime/realtime-service.js']);
                          }]
                  }
              })
              .state('app.servermap', {
                  url: '/servermap',
                  templateUrl: 'tpl/app_servermap.html',
                  controller:'ServerMapCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad ){
                              return $ocLazyLoad.load(['js/app/servermap/servermap.js']);
                          }]
                  }
              })
              .state('app.realtime', {
                  url: '/realtime',
                  templateUrl: 'tpl/app_realtime.html',
                  controller:'RealtimeCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad ){
                              return $ocLazyLoad.load(['js/app/realtime/realtime.js', 'js/app/realtime/realtime-service.js']);
                          }]
                  }
              })
              .state('app.transactionview', {
                  url: '/transactionview',
                  templateUrl: 'tpl/performance/transactionview.html',
                  controller:'TranscationViewCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad ){
                              return $ocLazyLoad.load(['js/app/performance/transactionview.js', 'js/app/performance/transaction-service.js']);
                          }]
                  }
              })
              .state('app.transactiondetail', {
                  url: '/transactiondetail',
                  templateUrl: 'tpl/performance/transactiondetail.html',
                  controller:'TranscationDetailCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad ){
                              return $ocLazyLoad.load(['js/app/performance/transactiondetail.js', 'js/app/performance/transaction-service.js']);
                          }]
                  }
              })
              .state('app.transaction', {
                  url: '/transaction',
                  templateUrl: 'tpl/performance/transaction.html',
                  controller:'TranscationCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad ){
                              return $ocLazyLoad.load(['js/app/performance/transaction.js', 'js/app/performance/transaction-service.js']);
                          }]
                  }
              })
              .state('app.analysis', {
                  url: '/analysis',
                  templateUrl:  'tpl/page_analysis.html',
                  controller:'AnalysisCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad ){
                              return $ocLazyLoad.load(['js/app/analysis/analysis.js']);
                          }]
                  }
              })
              .state('app.error', {
                  url: '/error',
                  templateUrl: 'tpl/error/error.html',
                  controller:'ErrorCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad ){
                              return $ocLazyLoad.load(['js/app/error/error.js', 'js/app/error/error-service.js']);
                          }]
                  }
              })
              .state('app.errordetail', {
                  url: '/errordetail/{id}',
                  templateUrl: 'tpl/error/errordetail.html',
                  controller:'ErrorDetailCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad ){
                              return $ocLazyLoad.load(['js/app/error/errordetail.js', 'js/app/error/error-service.js']);
                          }]
                  }
              })
              .state('access', {
                  url: '/access',
                  template: '<div ui-view ></div>'
              })
              .state('app.projects', {
                  url: '/projects',
                  templateUrl: 'tpl/ui_projects.html',
                  resolve: {
                      deps: ['uiLoad',
                          function( uiLoad ){
                              return uiLoad.load( ['js/app/user/projects.js'] );
                          }]
                  }
              })
              .state('access.project', {
                  url: '/project',
                  templateUrl: 'tpl/page_project.html',
                  resolve: {
                      deps: ['uiLoad',
                          function( uiLoad ){
                              return uiLoad.load( ['js/app/user/projectsform.js'] );
                          }]
                  }
              })
              .state('access.signin', {
                  url: '/signin',
                  templateUrl: 'tpl/page_signin.html',
                  resolve: {
                      deps: ['uiLoad',
                          function( uiLoad ){
                              return uiLoad.load( ['js/app/user/signin.js'] );
                          }]
                  }
              })
              .state('access.signup', {
                  url: '/signup',
                  templateUrl: 'tpl/page_signup.html',
                  resolve: {
                      deps: ['uiLoad',
                          function( uiLoad ){
                              return uiLoad.load( ['js/app/user/signup.js'] );
                          }]
                  }
              })
              .state('access.forgotpwd', {
                  url: '/forgotpwd',
                  templateUrl: 'tpl/page_forgotpwd.html'
              })
              .state('access.404', {
                  url: '/404',
                  templateUrl: 'tpl/page_404.html'
              })

          //app setting

              .state('app.setting', {
                  url: '/setting',
                  template: '<div ui-view class="fade-in-down"></div>'
              })
              .state('app.setting.general', {
                  url: '/general',
                  templateUrl: 'tpl/setting/page_general.html',
                  resolve: {
                      deps: ['uiLoad',
                          function( uiLoad ){
                              return uiLoad.load('js/app/setting/general.js');
                          }]
                  }
              })
              .state('app.setting.keys', {
                  url: '/keys',
                  templateUrl: 'tpl/setting/page_keys.html'
              })
              .state('app.setting.email', {
                  url: '/email',
                  templateUrl: 'tpl/setting/page_email.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad ){
                              return $ocLazyLoad.load([
                                  'js/app/setting/email.js'
                              ]);
                          }]
                  }
              })
              .state('app.setting.collorators', {
                  url: '/collorators',
                  templateUrl: 'tpl/setting/page_collorators.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function ($ocLazyLoad) {
                              return $ocLazyLoad.load([
                                  'js/app/setting/collorator.js'
                              ]);
                          }]
                  }
              })
              .state('app.quickstart', {
                  url: '/quickstart',
                  templateUrl: 'tpl/quickstart/quickstart.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad){
                              return $ocLazyLoad.load([
                                  'bower_components/image-picker/image-picker/image-picker.min.js',
                                  'bower_components/image-picker/image-picker/image-picker.css']).then(
                                  function(){
                                      return $ocLazyLoad.load('js/app/quickstart/quickstart.js');
                                  }
                              );
                          }]
                  }
              })
              .state('app.android1', {
                  url: '/android1',
                  templateUrl: 'tpl/quickstart/android1.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad){
                              return $ocLazyLoad.load([
                                  'js/app/quickstart/quickstart.js',
                                  'js/app/quickstart/quickstart-android.js',
                                  'js/app/quickstart/quickstart-service.js'

                              ]);
                          }]
                  }
              })
              .state('app.android2', {
                  url: '/android2',
                  templateUrl: 'tpl/quickstart/android2.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad){
                              return $ocLazyLoad.load([
                                  'js/app/quickstart/quickstart.js',
                                  'js/app/quickstart/quickstart-android.js',
                                  'js/app/quickstart/quickstart-service.js'
                              ]);
                          }]
                  }
              })
              .state('app.java', {
                  url: '/java',
                  templateUrl: 'tpl/document/android_docs.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad){
                              return $ocLazyLoad.load([
                                  'tpl/document/document.css'
                              ]);
                          }]
                  }
              })
              .state('app.node', {
                  url: '/node',
                  templateUrl: 'tpl/document/iphone_docs.html'
              })
              .state('app.rest', {
                  url: '/rest',
                  templateUrl: 'tpl/document/rest_docs.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad){
                              return $ocLazyLoad.load([
                                  'tpl/document/document.css'
                              ]);
                          }]
                  }
              })
              .state('app.sdkdownloads', {
                  url: '/sdkdownloads',
                  templateUrl: 'tpl/document/sdkdownloads.html'
              })

              .state('app.videos', {
                  url: '/videos',
                  templateUrl: 'tpl/document/youtube_docs.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad){
                              return $ocLazyLoad.load([
                                  'tpl/document/document.css'
                              ]);
                          }]
                  }
              })
              .state('app.terms', {
                  url: '/terms',
                  templateUrl: 'tpl/terms/terms.html'
              })
              .state('app.privacy', {
                  url: '/privacy',
                  templateUrl: 'tpl/terms/privacy.html'
              });
      }
    ]
  );
