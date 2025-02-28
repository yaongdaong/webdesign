jQuery(document).ready(function () {
    // 메뉴슬라이드다운
    $(".navi>li")
        .mouseover(function () {
            $(".submenu").stop().slideDown(500);
            $("#menu_bg").stop().slideDown(500);
        })
        .mouseout(function () {
            $(".submenu").stop().slideUp(500);
            $("#menu_bg").stop().slideUp(500);
        });

    // fade-in, fade-out
    $(".imgslide a:gt(0)").hide();
    setInterval(function () {
        $(".imgslide a:first-child").fadeOut().next("a").fadeIn().end().appendTo(".imgslide");
    }, 3000);

    // 모달레이어팝업
    $(".notice li:first").click(function () {
        $("#modal").addClass("active");
    });
    $(".btn").click(function () {
        $("#modal").removeClass("active");
    });
});
