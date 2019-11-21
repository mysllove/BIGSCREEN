function classifySupervise() {
    layer.open({
        type: 2,
        title: '分类监管模型',
        shadeClose: true, //点击遮罩关闭层
        skin: "customSkin",
        area: ["90.6vw", "64.8vh"],
        shade: [0.5, '#000'],
        content: "layerHtml/classifySupervise.html"
    });
}

function xy() {
    layer.open({
        type: 2,
        title: `<span class="module-title">信用监管清单</span>`,
        shadeClose: true, //点击遮罩关闭层
        skin: "customSkin",
        area: ["88.5vw", "88.3vh"],
        shade: [0.5, '#000'],
        content: "layerHtml/xy.html"
    });
}