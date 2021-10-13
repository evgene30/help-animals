// ======== UPbutton script
$(function () {
    // UPbutton script
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $("#topButtom").fadeIn();
        } else {
            $("#topButtom").fadeOut();
        }
    });
    $("#topButtom").click(function () {
        $("body,html").animate({ scrollTop: 0 }, 700);
    });
});
// =========== Burger-menu script =========
$(document).ready(function () {
    let link = $(".menu-link");
    let link_active = $(".menu-link_active");
    let menu = $(".menu");

    link.click(function () {
        link.toggleClass("menu-link_active");
        menu.toggleClass("menu_active");
    });
    link_active.click(function () {
        link.removeClass("menu-link_active");
    });
});

AOS.init({
    disable: function () {
        var maxWidth = 640;
        return window.innerWidth < maxWidth;
    },
});

$(document).ready(function ($) {
    $(".popup-open").click(function () {
        $(".popup-fade").fadeIn();
        return false;
    });

    $(".popup-close").click(function () {
        $(this).parents(".popup-fade").fadeOut();
        return false;
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $(".popup-fade").fadeOut();
        }
    });

    $(".popup-fade").click(function (e) {
        if ($(e.target).closest(".popup").length == 0) {
            $(this).fadeOut();
        }
    });
});

// ====== modal window script ============

document.querySelector("#mainpage").addEventListener("click", (event) => {
    switch (event.target.id) {
        case "myAuto-btn":
            const myAuto = document.getElementById("myAuto");
            myAuto.style.display = "flex";
            window.onclick = function (event) {
                if (event.target === myAuto || event.target.alt === "close") {
                    myAuto.style.display = "none";
                }
            };
            break;
        case "myVolun-btn":
            const myVolun = document.getElementById("myVolun");
            myVolun.style.display = "flex";
            window.onclick = function (event) {
                if (event.target === myVolun || event.target.alt === "close") {
                    myVolun.style.display = "none";
                }
            };
            break;
    }

    switch (event.target.value) {
        case "Забрать домой":
            const cardId = document.getElementById(
                event.target.parentElement.id
            );
            const myHome = document.getElementById("myHome");
            myHome.style.display = "flex";
            window.onclick = function (event) {
                if (event.target === myHome || event.target.alt === "close") {
                    myHome.style.display = "none";
                }
            };
            break;
        case "Забрать на передержку":
            const cardID = document.getElementById(
                event.target.parentElement.id
            );
            const myKeep = document.getElementById("myKeep");
            myKeep.style.display = "flex";
            window.onclick = function (event) {
                if (event.target === myKeep || event.target.alt === "close") {
                    myKeep.style.display = "none";
                }
            };

            break;
    }
});

// проверка на наличие touch device

if (
    "ontouchstart" in window ||
    (window.DocumentTouch && document instanceof DocumentTouch)
) {
    document.getElementById("topButtom").remove();
}
