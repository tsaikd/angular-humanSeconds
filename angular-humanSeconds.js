var app = angular

.module("humanSeconds", [
	"pascalprecht.translate"
])

;
app

.filter("humanSeconds", ["$filter", function ($filter) {
	var minute = 60;
	var hour = minute * 60;
	var day = hour * 24;
	var week = day * 7;
	var year = day * 365;
	var month = year / 12;
	var format = function(number, text) {
		if (number !== 1) {
			text += "s";
		}
		text = "{{num}} " + text;
		return $filter("translate")(text, {num: number});
	};

	return function (seconds) {
		seconds = Math.round(seconds);
		switch (false) {
		case !(seconds < minute):
			return format(seconds, "second");
		case !(seconds < hour):
			return format(Math.floor(seconds / minute), "minute");
		case !(seconds < day):
			return format(Math.floor(seconds / hour), "hour");
		case !(seconds < week):
			return format(Math.floor(seconds / day), "day");
		case !(seconds < month):
			return format(Math.floor(seconds / week), "week");
		case !(seconds < year):
			return format(Math.floor(seconds / month), "month");
		default:
			return format(Math.floor(seconds / year), "year");
		}
	};
}])

;
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