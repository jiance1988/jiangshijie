$(function() {
    var c = new Coder("footer");
    c.load("<p><div class='bef_comment writecode'>/**</div>");
    c.load("<div class='bef_comment writecode'>&nbsp;*</div>");
    // c.load("<div class='bef_comment writecode'>&nbsp;*hi,我的名字叫蒋士杰</div>");
    // c.load("<div class='bef_comment writecode'>&nbsp;*我的目标是成为一个优秀的前端工程师</div>",2000);
    // c.load("<div class='bef_comment writecode'>&nbsp;*让我们来点实际的，看看我能做些什么</div>");
    // c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
    // c.load("<p><div class='bef_comment writecode'>/**</div>");
    // c.load("<div class='bef_comment writecode'>&nbsp;*让我们开始吧,我们先来让所有的变化都以动画的效果来显示</div>");
    // c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");
    // c.load("<p><div class='code writecode'><span class='bef_selector'>*</span> {</div>");
    // c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>-webkit-transition</span>: <span class='bef_value'> all 1s</span>;</div>");
    // c.load("<div class='code writecode'>}</div></p>");
    // c.load("<p><div class='bef_comment writecode'>/**</div>");
    // c.load("<div class='bef_comment writecode'>&nbsp;*看起来似乎没什么变化，不要着急，接下来你就会看到</div>");
    // c.load("<div class='bef_comment writecode'>&nbsp;*那么让我们来做一些改变</div>");
    // c.load("<div class='bef_comment writecode'>&nbsp;*先看看我的简历吧</div>");
    var w = new Coder("content");
    w.setClass("header",[{
        "name":"text-align",
        "val":"center"
    }]);
    c.load("<div class='bef_comment writecode'>&nbsp;*换个背景色怎么样</div>");
    w.setClass("html",[{
        "name":"background",
        "val":"rgb(210,210,210)"
    }]);
    c.load("<div class='bef_comment writecode'>&nbsp;*还是先看看我的简历吧</div>");
    w.addClass("#content","content");
    w.setClass(".content",[{
        "name":"display",
        "val":"block"
        }]);
    c.load("<div class='comment writecode'>&nbsp;*左面的简历看起来不是太令人满意，让我们先给他来点动态渲染</div>");
    // c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
    // c.load("<p><div class='code writecode'><span class='selector'>#work-text</span> { </div>");
    // c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateX(0deg) rotateY(190deg) rotateZ(180deg)</span>;</div>");
    // c.load("<div class='code writecode'>}</div></p>");
    // c.load("<p><div class='code writecode'><span class='selector'>#work-text #md</span> { </div>");
    // c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateY(190deg) rotateZ(180deg)</span>;</div>");
    // c.load("<div class='code writecode'>}</div></p>");
    // c.load("<p><div class='comment writecode'>/**</div>");
    // c.load("<div class='comment writecode'>&nbsp;*好了，让我们准备</div>");
    // c.load("<div class='comment writecode'>&nbsp;*</div>");
    // c.load("<div class='comment writecode'>&nbsp;*3....</div>");
    // c.load("<div class='comment writecode'>&nbsp;*2....</div>");
    // c.load("<div class='comment writecode'>&nbsp;*1....</div>");
    // c.load("<div class='comment writecode'>&nbsp;*</div>");
    // c.load("<div class='comment writecode'>&nbsp;*.</div>");
    // c.load("<div class='comment writecode'>&nbsp;*</div>");
    c.load("<div class='comment writecode'>&nbsp;*差不多了，让我们的简历动起来！</div>");
    c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
    c.setClass("#content", [{
        "name": "-webkit-transform",
        "val": "rotateX(0deg) rotateY(360deg)"
    }]);
    c.load("<p><div class='comment writecode'>/**</div>");
    c.load("<p><div class='comment writecode'>/**</div>");

});
var m = 0;

var Coder = function(dom) {
    this._dom = dom;
};

Coder.prototype = {
    constructor: Coder,
    load: function(code, second) {
        var dom = this._dom;
        var o = this;
        var _second = second ? second : 1000;
        _second = m + _second;
        setTimeout(function() {
            $('#' + dom).scrollTop( $('#' + dom)[0].scrollHeight );
            $("#" + dom).append(code);
        }, _second);
        m = _second;
    },
    setClass: function(dom, styles,second) {
        var _second = second ? second : 0;
        _second = m + _second;
        for (var i in styles) {
            setTimeout(function() {
                $(dom).css(styles[i].name, styles[i].val);
            }, _second);
        }
        m = _second;
    },
    addClass:function(dom,className){
        var second = m;
        setTimeout(function() {
            $(dom).addClass(className);
        }, second);
    }
}