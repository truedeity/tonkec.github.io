module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        /*************************************/
        /***** PACKAGE ***********************/
        /*************************************/

        pkg: grunt.file.readJSON('package.json'),

        /*************************************/
        /***** WATCHERS **********************/
        /*************************************/
        watch: {
            scss: {
                files: [
                    'static/scss/**/*.scss'
                ],
                tasks: ['sass:styleCSS'] //, 'cssmin:styleCSS'
            },
            js: {
                files: [
                    'static/js/*.js'
                ],
                tasks: ['concat:frontendJS'] //, 'uglify:frontendJS'
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                    'static/css/*.css',
                    'static/js/*.js',
                    '*.html'
                    ]
                }
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            }
        },

        /*************************************/
        /***** SCSS **************************/
        /*************************************/

        sass: {
            styleCSS: {
                options: {
                    sourceMap: true
                },
                files: {
                    'static/css/style.css': 'static/scss/style.scss'
                }
            }
        },

        /*************************************/
        /***** JAVASCRIPT ********************/
        /*************************************/

        concat: {
            options: {
                separator: ''
            },
            frontendJS: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'static/js/plugins.js',
                    'static/js/main.js'
                ],
                dest: 'static/js/frontend.js'
            }
        },

        uglify: {
            options: {
                sourceMap: false
            },
            frontendJS: {
                files: {
                    'static/js/frontend.min.js': ['static/js/frontend.js']
                }
            }
        },

        /*************************************/
        /***** CSS ***************************/
        /*************************************/

        cssmin: {
            styleCSS: {
                src: 'static/css/style.css',
                dest: 'static/css/style.min.css'
            }
        }

    });

    /*************************************/
    /***** PLUGINS ***********************/
    /*************************************/
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-combine-media-queries');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-connect');


    /*************************************/
    /***** TASKS *************************/
    /*************************************/
    grunt.registerTask('_mainWatcher', ['browserSync', 'watch']);
   

};