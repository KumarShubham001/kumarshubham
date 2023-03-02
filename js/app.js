console.clear();
console.log(`
██╗  ██╗███████╗██╗     ██╗      ██████╗     ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗
██║  ██║██╔════╝██║     ██║     ██╔═══██╗    ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗
███████║█████╗  ██║     ██║     ██║   ██║    ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║    ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║
██║  ██║███████╗███████╗███████╗╚██████╔╝    ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝      ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝

> Hi there,
> I enjoy making acquaintances with folks who share my interests. Please contact me, as we may be able to assist each other.
> Cheers till then,
> Kumar Shubham
> mailto: hello@kumarshubham.in`);

// reload the window when someone changes the view size
function winSize() {
    var win_size = {};
    if (self.innerHeight) {
        win_size.height = self.innerHeight;
        win_size.width = self.innerWidth;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        win_size.height = document.documentElement.clientHeight;
        win_size.width = document.documentElement.Width;
    } else if (document.body) {
        win_size.height = document.body.clientHeight;
        win_size.width = document.body.clientWidth;
    }
    return win_size;
}

currWindowSize = winSize();

var curr_div_type = (currWindowSize.width < 767) ? 'm' : ((currWindowSize.width < 960) ? 't' : 'd');

window.addEventListener('resize', function (e) {
    console.log('%cOOoo seems like you are trying to change the window size!!', 'color: red');
    var WindowSize = winSize();
    var div_type = (WindowSize.width < 767) ? 'm' : ((WindowSize.width < 960) ? 't' : 'd');

    if (div_type != curr_div_type) {
        window.location.replace(window.location.href);
    };
}, false);

// LOAD THE PRELOADER
// set the current Year in the webpage
$('.currYear').text(new Date().getFullYear());

// fade out the white screen
setTimeout(function () {
    $(".se-pre-con").fadeOut(500);
}, 500);

// SEND THE MAIL, ASYNCHRONOUSLY
function contact() {
    event.preventDefault();

    var str = "name=" + document.getElementById('name').value + "&email=" + document.getElementById('email').value + "&message=" + document.getElementById('message').value;

    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            swal("Good job!", "Message sent, please wait for our reply!", "success", {
                button: "Thank you!",
            }).then(() => {
                $("input[type=text], textarea").val("");
                $("input[type=text], textarea").blur();
            });
            $('#send_button').attr("disabled", "true");
            $("#send-button").addClass("disabled-but");
        }
    };

    xmlhttp.open("POST", "mail.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(str);
}

// TO-TOP BUTTON ANIMATION
var fixed = false;
$(document).scroll(function () {
    if ($(this).scrollTop() > 700) {
        if (!fixed) {
            fixed = true;
            // $('#to-top').css({position:'fixed', display:'block'});
            $('#to-top').show("slow", function () {
                $('#to-top').css({
                    position: 'fixed',
                    display: 'block'
                });
            });
        }
    } else {
        if (fixed) {
            fixed = false;
            $('#to-top').hide("slow", function () {
                $('#to-top').css({
                    display: 'none'
                });
            });
        }
    }
});

// mouse chaser only turn on for desktop screen resolutions
$(document).ready(function () {
    if (window.innerHeight < window.innerWidth && window.innerWidth > 1024) {
        $('.cursor.mouse-chaser').show();
        let mouseChaser, pageWidth, getMouseChaser = () => { let e = $(".mouse-chaser"); return e.length ? e : $(document.createElement("div")).addClass("mouse-chaser").appendTo("body") }, initMouseChaser = () => { mouseChaser = getMouseChaser(), pageWidth = $(window).width(), void 0 !== mouseChaser && $(document).on("mousemove", function (e) { pageWidth > 992 && mouseChaser.length && Number(e.pageX) < pageWidth - 50 && Number(e.pageX) > 25 && (mouseChaser.css({ left: Number(e.pageX - 10), top: Number(e.pageY - 10) }), $("a, button, button a, input[type='submit']").hover(function () { mouseChaser.addClass("mouse-chaser-scaled") }, function () { mouseChaser.removeClass("mouse-chaser-scaled") })) }) }; initMouseChaser();
    } else {
        $('.cursor.mouse-chaser').hide();
    }
});

/* CODE FOR DONATE ME MODAL */
// js for donate modal
var projectModal = document.getElementById("project-modal");
var numItems = $('#modal-item.inner-container').length;

function showModal(id) {
    projectModal.style.display = "block";

    for (i = 0; i < numItems; i++) {
        if (i != id - 1) {
            $('#modal-item.inner-container').eq(i)[0].style.display = "none";
        }
    }
    $('#modal-item.inner-container').eq(id - 1)[0].style.display = "block";
}

function closeModal() {
    projectModal.style.display = "none";
}

document.querySelector('#project-modal:not(#modalWrapper)').onclick = function () {
    closeModal();
}
