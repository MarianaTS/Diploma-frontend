module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    env: grunt.option('env') || 'dev',


    express: {
      all: {
        options: {
          port:     grunt.option('port') || 9191,
          hostname: "0.0.0.0",
          bases:    ['dist'],
          livereload: true
        }
      }
    },

    open: {
      all: {
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    },  

    clean: {
      build: {
        src: ["dist"]
      }
    },

    copy: {
      html: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.html'],
            dest: 'dist/',
            ext: '.html',
            extDot: 'first'
          }
        ]
      }
    },

    concat: {
      dist: {
        src: [
          'src/js/<%= pkg.name %>.js',
          'src/env/<%= env %>.js',
          'src/js/controllers/**/*.js',
          'src/js/services/**/*.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },

    bower_concat: {
      all: {
        dest: 'dist/js/bower-libs.js',
        dependencies: { 
          'angular': ['jquery'],
          'angular-route': 'angular'
        },
        bowerOptions: {
          relative: false
        }
      }
    },


    compass: {
      dist: {
        options: {
        sassDir: 'src/css',
        cssDir: 'dist/css',
        environment: 'development'
        }
      }
    },

    watch: {
      files: [
        'src/index.html', 
        'src/templates/**/*.html', 
        'src/css/**/*.scss',
        'src/js/**/*.js'
      ],
      tasks: ['build'],
      options: {
        livereload: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('build', ['clean', 'concat', 'bower_concat', 'copy', 'compass']);
  grunt.registerTask('serve', ['build', 'express', 'open', 'watch']);
};