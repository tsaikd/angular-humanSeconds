
describe("humanSeconds", function() {

	beforeEach(module("humanSeconds"));

	var $filter, $translate, $humanSeconds;

	beforeEach(inject(function (_$filter_, _$translate_) {
		$filter = _$filter_;
		$translate = _$translate_;
		$humanSeconds = $filter("humanSeconds");
	}));

	it("should be a function object", function () {
		expect(typeof $filter("translate")).toBe("function");
	});

	it("should be translated string", function () {
		$translate.use("en");
		expect($humanSeconds(1))				.toEqual("1 second");
		expect($humanSeconds(9))				.toEqual("9 seconds");
		expect($humanSeconds(1*60))				.toEqual("1 minute");
		expect($humanSeconds(9*60))				.toEqual("9 minutes");
		expect($humanSeconds(1*60*60))			.toEqual("1 hour");
		expect($humanSeconds(9*60*60))			.toEqual("9 hours");
		expect($humanSeconds(1*24*60*60))		.toEqual("1 day");
		expect($humanSeconds(3*24*60*60))		.toEqual("3 days");
		expect($humanSeconds(9*24*60*60))		.toEqual("1 week");
		expect($humanSeconds(15*24*60*60))		.toEqual("2 weeks");
		expect($humanSeconds(33*24*60*60))		.toEqual("1 month");
		expect($humanSeconds(66*24*60*60))		.toEqual("2 months");
		expect($humanSeconds(366*24*60*60))		.toEqual("1 year");
		expect($humanSeconds(900*24*60*60))		.toEqual("2 years");

		$translate.use("zh-tw");
		expect($humanSeconds(1))				.toEqual("1 秒");
		expect($humanSeconds(9))				.toEqual("9 秒");
		expect($humanSeconds(1*60))				.toEqual("1 分");
		expect($humanSeconds(9*60))				.toEqual("9 分");
		expect($humanSeconds(1*60*60))			.toEqual("1 時");
		expect($humanSeconds(9*60*60))			.toEqual("9 時");
		expect($humanSeconds(1*24*60*60))		.toEqual("1 天");
		expect($humanSeconds(3*24*60*60))		.toEqual("3 天");
		expect($humanSeconds(9*24*60*60))		.toEqual("1 週");
		expect($humanSeconds(15*24*60*60))		.toEqual("2 週");
		expect($humanSeconds(33*24*60*60))		.toEqual("1 月");
		expect($humanSeconds(66*24*60*60))		.toEqual("2 月");
		expect($humanSeconds(366*24*60*60))		.toEqual("1 年");
		expect($humanSeconds(900*24*60*60))		.toEqual("2 年");
	});

});
