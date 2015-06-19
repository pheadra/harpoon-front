module.exports = function(grunt) {

	"use strict";

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Project configuration.
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		meta : {
			src : [ 'src/**/*.js', '!**/node_modules/**/*.js' ],
			test : [ 'test/**/*.html', 'test/**/*.js' ],
			grunt : [ 'Gruntfile.js' ],
			doc : [ 'docs' ]
		},

		watch : {
			all : {
				files : [ '**/*', '!**/node_modules/**' ],
				tasks : [ 'jshint:all', 'qunit:all' ]
			},
			grunt : {
				files : [ '<%= meta.grunt %>', 'tasks/**/*' ],
				tasks : [ 'jshint:grunt' ]
			},
			src : {
				files : [ '<%= meta.src %>', 'src/**/*' ],
				tasks : [ 'jshint:src' ]
			},
			test : {
				files : [ '<%= meta.test %>', '<%= meta.src %>' ],
				tasks : [ 'qunit:all' ]
			}
		},

		jshint : {
			all : [ '<%= meta.src %>' ],
			grunt : '<%= meta.grunt %>',
			src : '<%= meta.src %>',
			test : '<%= meta.test %>',
			/*
			 * use strict options to mimic JSLINT until we migrate to
			 * JSHINT in Brackets
			 */
			options : {
				jshintrc : '.jshintrc'
			}
		},

		qunit : {
			all : [ 'test/**/*.html' ]
		},

		yuidoc : {
			compile : {
				name : '<%= pkg.name %>',
				description : '<%= pkg.description %>',
				version : '<%= pkg.version %>',
				url : '<%= pkg.homepage %>',
				options : {
					paths : 'src/',
					outdir : 'docs/'
				}
			}
		},

		clean : {
			all : [ 'docs', 'forever' ],
			doc : [ 'docs' ]
		}
	});

	// Task
	grunt.registerTask('test', [ 'qunit:all' ]);
	grunt.registerTask('doc', [ 'clean:doc', 'yuidoc' ]);
	grunt.registerTask('default', [ 'clean:all', 'jshint:all', 'qunit:all',
			'yuidoc' ]);

};