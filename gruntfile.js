module.exports = function(grunt) {

  grunt.initConfig({

    connect: {
      sever: {
        options: {
          hostname: 'localhost',
          port: 3000,
          base: 'src/main/',
          livereload: true
        }
      }
    },

    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      scripts: {
        files: ['src/main/**/*.html']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect', 'watch']);

};