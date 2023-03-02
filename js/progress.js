/* -----------------------------------------*/
// CODE FOR PRELOADER PROGRESSBAR
var prog_width = 0;

document.onreadystatechange = function (e) {
    if (document.readyState == "interactive") {
        var all = document.getElementsByTagName("*");
        for (var i = 0, max = all.length; i < max; i++) {
            set_ele(all[i]);
        }
    }
}

function check_element(ele) {
    var all = document.getElementsByTagName("*");
    var totalele = all.length;
    var per_inc = 100 / totalele;

    if ($(ele).on()) {
        prog_width += per_inc;
        $(".progress_bar").animate({ width: prog_width + "%" }, 10);
    }

    else {
        set_ele(ele);
    }
}

function set_ele(set_element) {
    check_element(set_element);
}