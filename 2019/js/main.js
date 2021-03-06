$(function() {
    // soft scrolling to same page anchors
    $("a.soft-scroll").bind("click", function(event) {
        event.preventDefault();
        let $anchor = $(this);
        let href = $anchor.attr("href");
        if (href.substr(0, 1) !== "#") {
            return;
        }
        let offset = 0;
        if (href !== "#top") {
            offset = $(href).offset().top;
        }
        $("html")
            .stop()
            .animate(
                {
                    scrollTop: offset
                },
                1000,
                "easeInOutCubic",
                function() {
                    if (href !== "#top") {
                        window.location.hash = href;
                    } else {
                        window.location.hash = "";
                    }
                }
            );
    });
});
