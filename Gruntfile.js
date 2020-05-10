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
        }

    });
    grunt.registerTask('css',['sass']);
}