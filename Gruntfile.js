module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/combined.js',
        dest: 'build/combined.min.js'
      }
    },
    concat: {
      options: {
        // separator: ';',
      },
      dist: {
        src: ['src/*'],
        dest: 'build/combined.js',
      }
    },
    watch: {
      files: ['src/*'],
      tasks: ['concat', 'uglify']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);

};
