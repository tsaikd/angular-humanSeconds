app

.config(["$translateProvider"
	, function($translateProvider) {

	$translateProvider
	.translations("en", {
		"{{num}} second":	"{{num}} second",
		"{{num}} seconds":	"{{num}} seconds",
		"{{num}} minute":	"{{num}} minute",
		"{{num}} minutes":	"{{num}} minutes",
		"{{num}} hour":		"{{num}} hour",
		"{{num}} hours":	"{{num}} hours",
		"{{num}} day":		"{{num}} day",
		"{{num}} days":		"{{num}} days",
		"{{num}} week":		"{{num}} week",
		"{{num}} weeks":	"{{num}} weeks",
		"{{num}} month":	"{{num}} month",
		"{{num}} months":	"{{num}} months",
		"{{num}} year":		"{{num}} year",
		"{{num}} years":	"{{num}} years"
	});

}])

;