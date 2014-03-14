module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		meta: {
			bowerrc: grunt.file.readJSON(".bowerrc"),
			banner: [
				"/* <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today('yyyy-mm-dd') %>",
				" * <%= pkg.homepage %>",
				" * License: <%= pkg.license %>",
				" */\n"
			].join("\n"),
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
		sync: {
			options: {
				include: ["name", "version", "description", "authors", "license", "homepage", "main"]
			}
		},
		karma: {
			unit: {
				configFile: "karma.config.js",
				singleRun: true
			}
		},
		concat: {
			dist: {
				options: {
					banner: "<%= meta.banner %>(function(){\n",
					footer: "\n}).call(this);"
				},
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
					sourceMap: true,
					banner: "<%= meta.banner %>"
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
	grunt.registerTask("test", ["karma"]);
	grunt.registerTask("build", ["concat", "uglify"]);
	grunt.registerTask("default", ["clean", "sync", "test", "build"]);

};
