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
		return "" + number + " " + $filter("translate")(text);
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