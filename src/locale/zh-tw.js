app

.config(["$translateProvider"
	, function($translateProvider) {

	$translateProvider
	.translations("zh-tw", {
		"{{num}} second":	"{{num}} 秒",
		"{{num}} seconds":	"{{num}} 秒",
		"{{num}} minute":	"{{num}} 分",
		"{{num}} minutes":	"{{num}} 分",
		"{{num}} hour":		"{{num}} 時",
		"{{num}} hours":	"{{num}} 時",
		"{{num}} day":		"{{num}} 天",
		"{{num}} days":		"{{num}} 天",
		"{{num}} week":		"{{num}} 週",
		"{{num}} weeks":	"{{num}} 週",
		"{{num}} month":	"{{num}} 月",
		"{{num}} months":	"{{num}} 月",
		"{{num}} year":		"{{num}} 年",
		"{{num}} years":	"{{num}} 年"
	});

}])

;