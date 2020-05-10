'use strict';

module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);
    const sass = require('node-sass');


    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                outputStyle: 'expanded',
                sourceMap: true,
                quiet: true // stop depreciation errors
            },
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },
        watch: {
            files: 'css/*.scss',
            task: ['sass']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options : {
                    watchTask: true,
                    server: {
                        bseDir: './'
                    }
                }
            }
        },
        copy: {
            html: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: 'dist'
                }]
            },
            fonts: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'node_modules/font-awesome',
                    src: ['font/*.*'],
                    dest: 'dist'
                }]
            }
        },
        clean: {
            build: {
                src: ['dist/']
            }
        },
        imagemin: { 
            options: { 
                optimizationLevel: 3
            },
            dynamic: {
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: './',                   // Src matches are relative to this path
                    src: ['img/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'dist/'                  // Destination path prefix
                }]
            }
        }

    });
    grunt.registerTask('css',['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('build', ['clean', 'copy', 'imagemin']);
}