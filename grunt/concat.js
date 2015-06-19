module.exports = {
    angular: {
        src: [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/jquery-class/src/jquery.Class.js',
            'bower_components/underscore/underscore-min.js',

            'public_src/js/vendor/d3/d3.js',
            'public_src/js/vendor/rubix/rubix.js',
            'public_src/js/vendor/dragtoselect/dragToSelect.js',
            'public_src/js/vendor/sankey/sankey.js',
            'bower_components/angular/angular.js',

            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-cookies/angular-cookies.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/angular-touch/angular-touch.js',

            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/ngstorage/ngStorage.js',
            'bower_components/angular-ui-utils/ui-utils.js',

            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',

            'bower_components/oclazyload/dist/ocLazyLoad.js',

            'bower_components/angular-translate/angular-translate.js',
            'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
            'bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
            'bower_components/angular-translate-storage-local/angular-translate-storage-local.js',
            'bower_components/moment/moment.js',
            'bower_components/angularjs-toaster/toaster.js',
            'bower_components/zeroclipboard/dist/zeroclipboard.js',
            'bower_components/ng-clip/dest/ng-clip.js',

            'bower_components/textAngular/dist/textAngular-sanitize.min.js',
            'bower_components/textAngular/dist/textAngular.min.js',
            'public_src/js/vendor/libs/tripledes.js',
            'public_src/js/vendor/modules/sociallogin/*',

            'bower_components/gojs/release/go.js',
            'public_src/js/vendor/libs/servermap.js',
           // 'bower_components/react/react.min.js',
           // 'bower_components/ngReact/ngReact.min.js',


            'public_src/js/*.js',
            'public_src/js/directives/*.js',
            'public_src/js/services/*.js',
            'public_src/js/filters/*.js',
            'public_src/js/app/dashboard/bootstrap.js',
            // 위치가 중요함. app이 선언된 이후에..
            'bower_components/ng-infinite-scroll/ng-infinite-scroll.js'

        ],
        dest: 'public/js/app.src.js'
    }
}
