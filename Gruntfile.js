module.exports = function(grunt) {
    /*jslint smarttabs:true */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // JS TASKS ================================================================
        jshint: {
            all: ['public/js/**/*.js']
        },

        concat: {
            dist: {
                src: [
                    'bower_components/jquery/jquery.js',
                    'bower_components/angular/angular.js',
                    'bower_components/bootstrap/bootstrap.js',
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js',
                    'public/js/**/*.js' 
                ],
                dest: 'public/build/js/app.js'
            }
        },

        uglify: {
            options: { 
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            }, 
            build: {
                files: {
                    'public/build/js/app.min.js': 'public/build/js/app.js'
                }
            }
        },

        // CSS TASKS ===============================================================
        less: {
            build: {
                files: {
                    'public/build/css/app.css': 'public/styles/app.less'
                }
            }
        },

        cssmin: {
            build: {
                files: {
                    'public/build/css/app.min.css': 'public/build/css/app.css'
                }
            }
        },

        watch: {
            css: {
                files: ['public/styles/**/*.less'],
                tasks: ['less', 'cssmin']
            },
            js: {
                files: ['public/js/**/*.js'],
                tasks: ['concat', 'uglify']
            }
        },

        nodemon: {
            dev: {
                script: 'server.js'
            }
        },

        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['nodemon', 'watch']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['less', 'cssmin', 'concat', 'uglify', 'concurrent']);

};