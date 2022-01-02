const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    output: {
        chunkFilename: 'js/[name].js?id=[hash]',
    }
})
mix.js('resources/js/desktop/desktop.js', 'public/js')
.version()
.vue()
.postCss('resources/css/desktop.css', 'public/css', [require("tailwindcss"),])

mix.js('resources/js/mobile/mobile.js', 'public/js')
.version()
.vue()
.postCss('resources/css/mobile.css', 'public/css', [require("tailwindcss"),])

mix.disableSuccessNotifications();