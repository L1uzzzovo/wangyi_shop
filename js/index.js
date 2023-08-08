alert("以严谨的态度，为中国消费者甄选天下优品 - 龙猫")


window.onload = function () {
    var need_fixed = document.getElementById('need_fixed');
    window.onscroll = function () {
        var top = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop
        if (top >= 50) {
            addClass(need_fixed, 'fixed_box');
        } else {
            removeClass(need_fixed, 'fixed_box');
        }
    }
}
function addClass(ele, classname) {
    var oldClass = ele.className;
    var pattern = new RegExp('(^|\\s)' + classname + '(\\s|$)');
    if (!pattern.test(oldClass)) {
        ele.className += ' ' + classname;
    }
}
function removeClass(ele, classname) {
    var oldClass = ele.className;
    var pattern = new RegExp('(^|\\s)' + classname + '(\\s|$)');
    if (pattern.test(oldClass)) {
        ele.className = ele.className.replace(pattern, ' ');
    }
}



var element = document.getElementById("a");
var showThreshold = window.innerHeight * 0.3;
function handleScroll() {
    var scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollHeight >= showThreshold) {
        element.style.display = "none";
    } else {
        element.style.display = "none";
    }
}
window.addEventListener("scroll", handleScroll);