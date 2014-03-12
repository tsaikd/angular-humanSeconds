module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("bower.json"),
		meta: {
			bowerrc: grunt.file.readJSON(".bowerrc"),
			lib: "<%= meta.bowerrc.directory %>",
			dist: "."
		},
		clean: {
			dist: [
				".tmp",
				"<%= meta.dist %>/*.min.js",
				"<%= meta.dist %>/*.map"
			]
		},
		concat: {
			dist: {
				src: [
					"src/*.js",
					"src/locale/*.js"
				],
				dest: "<%= meta.dist %>/<%= pkg.name %>.js"
			}
		},
		uglify: {
			all: {
				options: {
					sourceMap: true
				},
				files: {
					"<%= meta.dist %>/<%= pkg.name %>.min.js": [
						"<%= meta.dist %>/<%= pkg.name %>.js"
					]
				}
			}
		}
	});

	require("load-grunt-tasks")(grunt);
	grunt.registerTask("build", ["concat", "uglify"]);
	grunt.registerTask("default", ["clean", "sync", "build"]);

};
