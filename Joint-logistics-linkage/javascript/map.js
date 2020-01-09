$(document).ready(function() {





    var queryHouseOutline = function(hid, callback) {
        var baseURL = 'http://map.baidu.com/?reqflag=pcmap&coord_type=3&from=webmap&qt=ext&ext_ver=new&l=18';
        var url = baseURL + "&uid=" + hid;
        callback && (window.queryHouseOutlineCallback = callback);
        $.ajax({
            type: "get",
            async: false,
            url: url,
            dataType: "jsonp",
            jsonpCallback: "queryHouseOutlineCallback",
            success: function(datas) {}
        });
    };

    /**
     * 模糊查询小区信息, 无返回值
     * @param {} house  小区名称
     * @param {} city   所属城市名称
     * @param {} ak     百度地图AK
     * @param {} callback   回调函数，该函数可以接收到请求的返回值
     */
    var queryHouse = function(house, city, ak, callback) {
        var baseURL = 'http://api.map.baidu.com/place/v2/search?output=json&scope=1';
        var url = baseURL + "&q=" + house + "&region=" + city + "&ak=" + ak;
        callback && (window.queryHouseCallback = callback);
        $.ajax({
            type: "get",
            async: false,
            url: url,
            dataType: "jsonp",
            jsonpCallback: "queryHouseCallback",
            success: function(datas) {
                console.log(datas.results);

            }
        });
    };

    /**
     * 墨卡托坐标转百度坐标
     * @param {} coordinate
     * @return {}
     */
    var coordinateToPoints = function(map, coordinate) {
        var points = [];
        if (coordinate) {
            var arr = coordinate.split(";");
            if (arr) {
                for (var i = 0; i < arr.length; i++) {
                    var coord = arr[i].split(",");
                    if (coord && coord.length == 2) {
                        var mctXY = new BMap.Pixel(coord[0], coord[1]);
                        var project = map.getMapType().getProjection();
                        var point = project.pointToLngLat(mctXY);
                        points.push(new BMap.Point(point.lng, point.lat));
                    }
                }
            }
        }
        return points;
    };
    /**
     * 墨卡托坐标解析
     * @param {} mocator
     * @return {}
     */
    var parseGeo = function(mocator) {
        if (typeof mocator != 'string') {
            return {};
        }
        var t = mocator.split("|");
        var n = parseInt(t[0]);
        var i = t[1];
        var r = t[2];
        var o = r.split(";");
        if (n === 4) {
            for (var a = [], s = 0; s < o.length - 1; s++) {
                "1" === o[s].split("-")[0] && a.push(o[s].split("-")[1]);
            }
            o = a;
            o.push("");
        }
        var u = [];
        switch (n) {
            case 1:
                u.push(o[0]);
                break;
            case 2:
            case 3:
            case 4:
                for (var s = 0; s < o.length - 1; s++) {
                    var l = o[s];
                    if (l.length > 100) {
                        l = l.replace(/(-?[1-9]\d*\.\d*|-?0\.\d*[1-9]\d*|-?0?\.0+|0|-?[1-9]\d*),(-?[1-9]\d*\.\d*|-?0\.\d*[1-9]\d*|-?0?\.0+|0|-?[1-9]\d*)(,)/g,
                            "$1,$2;");
                        u.push(l);
                    } else {
                        for (var c = [], d = l.split(","), f = 0; f < d.length; f += 2) {
                            var p = d[f];
                            var h = d[f + 1];
                            c.push(p + "," + h);
                        }
                        u.push(c.join(";"))
                    }
                }
                break;
            default:
                break;
        }

        if (u.length <= 1) {
            u = u.toString();
        }

        var result = {
            type: n,
            bound: i,
            points: u
        };
        return result;
    };



    var map = new BMap.Map("allmap"); // 创建Map实例

    map.centerAndZoom(new BMap.Point(121.589397, 31.266436), 10);



    map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
    map.enableScrollWheelZoom(false); //开启鼠标滚轮缩放
    function deletePoint() {
        var allOverlay = map.getOverlays();
        for (var i = 0; i < allOverlay.length - 1; i++) {
            if (allOverlay[i].getLabel().content == "我是id=1") {
                map.removeOverlay(allOverlay[i]);
                return false;
            }
        }
    }
    /**
     * 第一个参数是城市名，第二参数是小区名 
     */
    var showArea = function(city, area) {
        queryHouse(area, city, "AH588ciG6nMHAxp65LiODSOsEnuukL7H", function(data) {
            //console.log(data)
            if (data.message == 'ok') {
                var houses = data.results;
                if (houses && houses.length > 0) {
                    // console.log(house)
                    var house = houses[0];
                    queryHouseOutline(house.uid, function(houseOutline) {
                        //console.log(houseOutline)
                        var geo = houseOutline.content.geo;
                        if (!geo) {
                            var location = house.location;
                            //console.log(location)
                            var point = new BMap.Point(location.lng, location.lat);
                            //console.log(point)
                            map.centerAndZoom(point, 21);
                            var marker = new BMap.Marker(point);
                            marker.setAnimation(BMAP_ANIMATION_BOUNCE);
                            map.addOverlay(marker);
                        } else {


                            // map.setZoom(20);


                            var markerArr = [
                                { point: "121.592186, 31.266313", title: "1", status: "A" },
                                { point: "121.591948, 31.266336", title: "2", status: "A" },
                                { point: "121.591854, 31.266008", title: "3", status: "A" },
                                { point: "121.59158,31.266054", title: "4", status: "A" },
                                { point: "121.59162,31.265668", title: "5", status: "A" },
                                { point: "121.591301,31.265749", title: "6", status: "A" },
                                { point: "121.591189,31.265499", title: "7", status: "A" },
                                { point: "121.590924,31.26529", title: "8", status: "A" },
                                { point: "121.590699,31.265051", title: "9", status: "A" },
                                { point: "121.590412,31.264804", title: "10", status: "A" },
                                { point: "121.590847,31.264576", title: "11", status: "A" },
                                { point: "121.59113,31.264553", title: "12", status: "A" },
                                { point: "121.591306,31.264931", title: "13", status: "A" },
                                { point: "121.591521,31.264893", title: "14", status: "A" },
                                { point: "121.591656,31.265213", title: "15", status: "A" },
                                { point: "121.591881,31.26514", title: "16", status: "A" },
                                { point: "121.592042,31.265414", title: "17", status: "A" },
                                { point: "121.592307,31.265344", title: "18", status: "A" },
                                { point: "121.592289,31.265722", title: "19", status: "A" },
                                { point: "121.592559,31.265661", title: "20", status: "A" },
                            ]
                            var point = new Array(); //存放标注点经纬度信息的数组
                            var marker = new Array(); //存放标注点对象的数组
                            var info = new Array(); //存放信息窗口对象的数组
                            //map.addOverlay(marker);
                            for (var i = 0; i < markerArr.length; i++) {

                                var p0 = markerArr[i].point.split(",")[0];
                                var p1 = markerArr[i].point.split(",")[1]; //按照原数组的point格式将地图点坐标的经纬度分别提出来
                                point[i] = new BMap.Point(p0, p1); //循环输出地图点坐标生成标记
                                marker[i] = new window.BMap.Marker(point[i]);
                                var label = new BMap.Label(i + 1, { offset: new BMap.Size(5, 5) });
                                // var iconA = new BMap.Icon("images/icon-" + (i + 1) + '.png', new BMap.Size(64, 64));
                                var iconA = new BMap.Icon("../images/icon-1.png", new BMap.Size(32, 32));
                                var iconB = new BMap.Icon("../images/icon-2.png", new BMap.Size(32, 32))
                                if (markerArr[i].status === "A") {
                                    marker[i] = new BMap.Marker(point[i], { icon: iconA })
                                } else if (markerArr[i].status == "B") {
                                    marker[i] = new BMap.Marker(point[i], { icon: iconB })
                                }

                                map.addOverlay(marker[i]);
                                marker[i].setLabel(label);
                                addClickHandler(marker[i]);
                                //marker[i].setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
                            }

                            function addClickHandler(marker) {
                                marker.addEventListener("click", function(e) {
                                    $(".BMap_Marker img").attr("src", "../images/icon-1.png")
                                    this.Ac.children[0].children[0].src = "../images/icon-2.png"
                                    $(this).css("background-color", "#fd6235")
                                    $(".views").show();
                                });
                            }
                            var geoObj = parseGeo(geo);
                            //边界点
                            var points = coordinateToPoints(map, geoObj.points);
                            var ply = new BMap.Polygon(points, {
                                strokeWeight: 2,
                                strokeColor: "#f7622f",
                                strokeOpacity: 0.9,
                                fillColor: "#c6eef5"
                            }); //建立多边形覆盖物
                            map.addOverlay(ply); //添加覆盖物

                            map.setViewport(ply.getPath()); //调整视野 
                            //map.centerAndZoom(new BMap.Point(121.589397, 31.266436), 19);
                            map.setZoom(19);

                        }
                    });
                }
            }
        });
    };
    $(".switchover").click(function() {
        let switchText = $(".switchover span").text()
        if (switchText == "切换GIS") {
            $(".switchover span").text('切换图表');
            $(".switchover").children('i').removeClass("layui-icon-spread-left").addClass("layui-icon-chart");
            $(".mapView-container").show(1000);
            $(".main-chart").hide(1000)
            deletePoint()
            setTimeout(() => {
                showArea(310000, '上海市浦东新区连城苑(长岛路)');
            }, 1000);
            //showArea(310000, '上海市浦东新区连城苑(长岛路)');
        } else {
            $(".switchover span").text('切换GIS');
            $(".switchover").children('i').removeClass("layui-icon-chart").addClass("layui-icon-spread-left");
            $(".main-chart").show(1000);
            $(".views").hide();
            $(".mapView-container").hide(1000)
        }
    })







});