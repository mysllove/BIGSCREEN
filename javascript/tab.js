(function($) {

    var Tab = function(tab) {
        var _this = this;
        // 保存单个tab组件
        this.tab = tab;
        // 默认配置参数
        this.config = {
                "triggerType": "mouseover", // 用来定义鼠标的触发类型，是click还是mouseover
                "effect": "default", // 用来定义内容切换效果，是直接切换还是淡入淡出效果
                "invoke": 1, // 默认展示第几个tab
                "auto": false // 定义tab是否自动切换，及自动切换时间间隔
            }
            // 如果配置参数存在，就扩展掉默认配置参数
        if (this.getConfig()) {
            $.extend(this.config, this.getConfig());
        }

        // 保存tab标签列表、对应的内容列表
        this.tabItems = this.tab.find("ul.tab-control li");
        this.contentItems = this.tab.find("div.option-group div.group-item");

        // 保存配置参数
        var config = this.config;

        if (config.triggerType === "click") {
            this.tabItems.bind(config.triggerType, function() {
                _this.invoke($(this));
            })
        } else if (config.triggerType != "click") {
            this.tabItems.bind("mouseover", function() {
                _this.invoke($(this));
            })
        }

        // 自动切换功能，如果配置了时间，我们就根据时间间隔进行自动切换
        if (config.auto) {
            // 定义一个全局的定时器
            this.timer = null;
            // 计数器
            this.loop = 0;

            this.autoPlay();

            this.tab.hover(function() {
                window.clearInterval(_this.timer);
            }, function() {
                _this.autoPlay();
            })
        }

        // 设置默认显示第几个tab
        if (config.invoke > 1) {
            this.invoke(this.tabItems.eq(config.invoke - 1));
        }
    };

    Tab.prototype = {
        // 自动间隔时间切换
        autoPlay: function() {
            var _this = this,
                tabItems = this.tabItems, // 临时保存tab列表
                tabLength = tabItems.size(), // tab的个数
                config = this.config;
            this.timer = window.setInterval(function() {
                _this.loop++;
                if (_this.loop >= tabLength) {
                    _this.loop = 0;
                };
                tabItems.eq(_this.loop).trigger(config.triggerType);
            }, config.auto);
        },

        // 事件驱动函数
        invoke: function(currentTab) {
            var _this = this;
            var index = currentTab.index();
            // tab选中状态
            currentTab.addClass('active').siblings().removeClass('active');
            // 切换对应的内容区域
            var effect = this.config.effect;
            var conItems = this.contentItems;
            if (effect === "default" || effect != "fade") {
                conItems.eq(index).addClass('current').siblings().removeClass('current');
            } else if (effect === "fade") {
                conItems.eq(index).fadeIn().siblings().fadeOut();
            };
            // 注意：如果参数配置了自动切换时间，要把当前的loop的值设置成当前tab的index
            if (this.config.auto) {
                this.loop = index;
            }
        },

        // 获取配置参数
        getConfig: function() {
            // 拿一下tab elem节点上的data-config
            var config = this.tab.attr("data-config");
            // 确保有配置参数
            if (config && config != "") {
                return $.parseJSON(config);
            } else {
                return null;
            }
        }
    };

    // Tab.init = function(tabs){
    // 	var _this = this;
    // 	tabs.each(function(){
    // 		new _this($(this));
    // 	})
    // }

    // 注册成jq方法
    $.fn.extend({
        tab: function() {
            this.each(function() {
                new Tab($(this));
            });
            return this;
        }
    })

    window.Tab = Tab;
})(jQuery);