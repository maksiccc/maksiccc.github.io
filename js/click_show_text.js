//鼠标点击文字上浮效果
var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
    	//❤
        var a = new Array("看看下篇~", "点个赞~",  "发条评论~",  "支持一下~",  "再看一遍~",  "打赏一下~");
        const color = new Array('00F5FF', '54FF9F', '0000CD', '00BFFF', 'C0FF3E', '00FFFF', 'FFD700', 'FF0000', 'FF69B4', 'FF1493', 'FF00FF', 'EE82EE', '8A2BE2', 'A020F0', '1E90FF', '90EE90');
        var i_color = Math.floor(Math.random() * color.length);
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#" + color[i_color]
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            3000,
            function () {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}
