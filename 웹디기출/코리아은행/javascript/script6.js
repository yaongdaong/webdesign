jQuery(document).ready(function () {
    $(".navi>li")
        .mouseover(function () {
            $(".submenu").stop().slideDown(500);
        })
        .mouseout(function () {
            $(".submenu").stop().slideUp(500);
        });

    setInterval(function () {
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginLeft: -1200 });
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginLeft: -2400 });
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginLeft: 0 });
        $(".slidelist").delay(2000);
    });

    // 공지사항, 갤러리 탭 전환 기능
    $(function () {
        $(".tabmenu>li>a").click(function () {
            $(this).parent().addClass("active").siblings().removeClass("active");
            return false;
        });
    });

    //레이어 팝업창
    $(".notice li:first").click(function () {
        $("#layer").addClass("active");
    });
    $(".btn").click(function () {
        $("#layer").removeClass("active");
    });
});
