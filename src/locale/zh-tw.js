app

.config(["$translateProvider"
	, function($translateProvider) {

	$translateProvider
	.translations("zh-tw", {
		"second": "秒",
		"seconds": "秒",
		"minute": "分",
		"minutes": "分",
		"hour": "時",
		"hours": "時",
		"day": "天",
		"days": "天",
		"week": "週",
		"weeks": "週",
		"month": "月",
		"months": "月",
		"year": "年",
		"years": "年"
	});

}])

;