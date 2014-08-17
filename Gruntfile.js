module.exports = function(grunt) {
 
	grunt.registerTask('watch', [ 'watch' ]);
	grunt.registerTask('default', [ 'concat', 'uglify', 'sass' ]);
 
	grunt.initConfig({
		concat: {
			js: {
				options: {
					separator: ';',
				},
				files: {
					'js/build/head-scripts.js': [
						'bower_components/modernizr/modernizr.js',
						'js/modernizr.positionfixed.js'
					],
					'js/build/body-scripts.js': [
						'bower_components/sizzle/dist/sizzle.js',
						'bower_components/jQuery/dist/jquery.js',
						'bower_components/matchmedia/matchMedia.js',
						'bower_components/matchmedia/matchMedia.addListener.js',
						'bower_components/enquire/dist/enquire.js',
						'js/main.js',
						'js/bootstrapper.js'
					]
				}
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			js: {
				files: {
					'js/build/head-scripts.js': ['js/build/head-scripts.js'],
					'js/build/body-scripts.js': ['js/build/body-scripts.js']
				}
			}
		},
		sass: {
			dist: {
				files: {
					"css/main.css": "scss/main.scss",
					"css/no-mqs.css": "scss/no-mqs.scss"
				}
			}
		},
		watch: {
			js: {
				files: ['js/*.js'],
				tasks: ['concat:js', 'uglify:js'],
				options: {
					livereload: true,
				}
			},
			css: {
				files: ['scss/*.scss', 'scss/**/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true,
				}
			}
		}
	});
 
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
 
};
