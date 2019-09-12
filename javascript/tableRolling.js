(function ($) {
    $.fn.myScroll = function (options) {
        var defaults = {
            speed: 40,
            rowHeight: 24
        };
        var opts = $.extend({}, defaults, options),
            intId = [];

        function marquee(obj, step) {
            obj.find("table").animate({
                marginTop: '-=1'
            }, 0, function () {
                var s = Math.abs(parseInt($(this).css("margin-top")));
                if (s >= step) {
                    $(this).find("tr").slice(0, 1).appendTo($(this));
                    $(this).css("margin-top", 0);
                }
            });
        }
        this.each(function (i) {
            var sh = opts["rowHeight"],
                speed = opts["speed"],
                _this = $(this);
            intId[i] = setInterval(function () {
                if (_this.find("table").height() <= _this.height()) {
                    clearInterval(intId[i]);
                } else {
                    marquee(_this, sh);
                }
            }, speed);
            _this.hover(function () {
                clearInterval(intId[i]);
            }, function () {
                intId[i] = setInterval(function () {
                    if (_this.find("table").height() <= _this.height()) {
                        clearInterval(intId[i]);
                    } else {
                        marquee(_this, sh);
                    }
                }, speed);
            });
        });
    };
    $.fn.myScrollGV = function (options) {
        var defaults = {
            speed: 40,
            rowHeight: 24
        };
        var opts = $.extend({}, defaults, options),
            intId = [];

        function marquee(obj, step) {
            obj.find("tbody").animate({
                marginTop: '-=1'
            }, 0, function () {
                var s = Math.abs(parseInt($(this).css("margin-top")));
                if (s >= step) {
                    $(this).find("tr.Tr").slice(0, 1).appendTo($(this));
                    $(this).css("margin-top", 0);
                }
            });
        }
        this.each(function (i) {
            var sh = opts["rowHeight"],
                speed = opts["speed"],
                _this = $(this);
            intId[i] = setInterval(function () {
                if (_this.find("tbody").height() <= _this.height()) {
                    clearInterval(intId[i]);
                } else {
                    marquee(_this, sh);
                }
            }, speed);
            _this.hover(function () {
                clearInterval(intId[i]);
            }, function () {
                intId[i] = setInterval(function () {
                    if (_this.find("tbody").height() <= _this.height()) {
                        clearInterval(intId[i]);
                    } else {
                        marquee(_this, sh);
                    }
                }, speed);
            });
        });
    };
    $.fn.myScrollFH = function (options) {
        var defaults = {
            speed: 40,
            rowHeight: 24
        };
        var opts = $.extend({}, defaults, options),
            intId = [],
            rows = 1,
            _that = this;
        if (typeof _that.find("table tr:eq(0) td:eq(0)").attr("rowspan") != "undefined") {
            rows = parseInt(_that.find("table tr:eq(0) td:eq(0)").attr("rowspan"));
        }

        function marquee(obj, step, i) {
            obj.find("table").animate({
                marginTop: '-=1'
            }, 0, function () {
                var s = Math.abs(parseInt($(this).css("margin-top")));
                if (s >= step) {
                    $(this).css("margin-top", 0);
                    $(this).find("tr").slice(0, rows).appendTo($(this));
                    rows = parseInt(_that.find("table tr:eq(0) td:eq(0)").attr("rowspan"));
                    clearInterval(intId[i]);
                    intId = [];
                    obj.unbind("mouseenter").unbind("mouseleave");
                    _that.myScrollFH(options);
                }
            });
        }
        this.each(function (i) {
            var sh = opts["rowHeight"],
                speed = opts["speed"],
                _this = $(this);
            if (typeof _this.find("table tr:eq(0) td:eq(0)").attr("rowspan") != "undefined") {
                sh = sh * rows;
            }
            intId[i] = setInterval(function () {
                if (_this.find("table").height() <= _this.height()) {
                    clearInterval(intId[i]);
                    intId = [];
                } else {
                    marquee(_this, sh, i);
                }
            }, speed);
            _this.hover(function () {
                clearInterval(intId[i]);
                intId = [];
            }, function () {
                var sh = opts["rowHeight"],
                    speed = opts["speed"];
                if (typeof _this.find("table tr:eq(0) td:eq(0)").attr("rowspan") != "undefined") {
                    sh = sh * rows;
                }
                intId[i] = setInterval(function () {
                    if (_this.find("table").height() <= _this.height()) {
                        clearInterval(intId[i]);
                        intId = [];
                    } else {
                        marquee(_this, sh, i);
                    }
                }, speed);
            });
        });
    };
})(jQuery);