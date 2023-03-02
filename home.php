<?php

// variables
$MODULE_PATH = './modules/';

// notify about the new visitor
// include_once('newUser.php');

?>

<!DOCTYPE HTML>
<html lang="en" class="no-js">

<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-152010444-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-152010444-1');
    </script>

    <title>Kumar Shubham | Designer &amp; Developer</title>

    <?php include("meta.php"); ?>

    <?php include("link.php"); ?>

    <script src="js/wow.min.js"></script>
    <script>
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    })
    wow.init();
    </script>
</head>

<body id="top" data-spy="scroll" data-target=".navbar" data-offset="50">

    <!-- PRELOADER -->
    <div class="se-pre-con">
    </div>

    <!-- custom mouse pointer -->
    <div class="cursor mouse-chaser" data-cursor>
        <div></div>
    </div>

    <div id="fullpage">
        <div class="section">
            <!-- HERO -->
            <?php include($MODULE_PATH . 'hero.php'); ?>
        </div>
        <div class="section">
            <!-- ABOUT ME -->
            <?php include($MODULE_PATH . 'about_me.php'); ?>
        </div>
        <div class="section">
            <!-- EXPERIENCE -->
            <?php include($MODULE_PATH . 'experience.php'); ?>
        </div>
        <div class="section">
            <!-- SKILLS -->
            <?php include($MODULE_PATH . 'skills.php'); ?>
        </div>
        <div class="section">
            <!-- PROJECTS -->
            <?php include($MODULE_PATH . 'projects.php'); ?>
        </div>
        <div class="section">
            <!-- CONTACT ME -->
            <?php include($MODULE_PATH . 'contact.php') ?>
        </div>
        <div class="section">
            <!-- FOOTER -->
            <?php include($MODULE_PATH . 'footer.php'); ?>
        </div>
    </div>

    <!-- Modal for project -->

    <?php include($MODULE_PATH . 'modals/project.php'); ?>

    <a id="to-top" href="#top"><i class="fa fa-chevron-up fa-fw fa-1x"></i></a>

    <!-- links for js scripts -->
    <script src="js/jquery.min.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script src="js/splide.min.js" type="text/javascript"></script>
    <script src="js/app.js" type="text/javascript"></script>
    <script src="js/scroll.min.js" type="text/javascript"></script>
    <script src="js/parallax.min.js" type="text/javascript"></script>
    <script src="js/disable.min.js"></script> 
    <script src="js/sweetalert.min.js"></script>
    <!-- <script src="js/progress.js"></script> -->

    <script>
    var slideCountPerPage = 3;

    if (window.screen.height > window.screen.width && window.screen.width <= 767) {
        slideCountPerPage = 1;
    } else if (window.screen.height > window.screen.width && window.screen.width >= 768 && window.screen.width <= 960) {
        slideCountPerPage = 2;
    }
    document.addEventListener('DOMContentLoaded', function() {
        new Splide('.splide', {
            type: 'loop',
            perPage: slideCountPerPage,
            perMove: 1,
            autoplay: true,
        }).mount();
    });
    </script>

    <!-- removing all the other extra divs appended by hosting websites -->
    <div style="display:none!important">

</body>

</html>