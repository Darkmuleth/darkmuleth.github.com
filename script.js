
$(function(){
    // $(".Banner > .NavigationBar").eq(0).JQueryTabView({
    //     tabs: [{
    //         caption: "JQueryTabView",
    //         cssClass: "TabBlockStyleBlue TabFontStyleType2"
    //     }],
    //     usePanel: false,
    //     tabHeight: 25,
    //     tabWidth: 150,
    //     tabClosable: false,
    //     noTools: true
    // });

    // 保证页面内容的高度不低于窗口高度
    function ResetHeight(){
        var height = $(window).innerHeight();
        var main = $(".MainArea").eq(0);
        if(main.outerHeight() < height){
            main.height(height);
        }
        var content = main.find(".Content").eq(0);
        height = main.outerHeight() - $(".Banner").eq(0).outerHeight(true) - $(".Footer").eq(0).outerHeight(true);
        if(content.outerHeight() < height){
            content.height(height);
        }
    }
    ResetHeight();
    $(window).resize(function(){
        ResetHeight();
    });

});