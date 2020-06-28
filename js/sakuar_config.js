//只在桌面版网页启用特效,改代码无效暂未解决
var windowWidth = $(window).width();
if (windowWidth > 768) {
    document.write('<script type="text/javascript" src="/js/sakura.js"><\/script>');
}