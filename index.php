<!--
██╗  ██╗███████╗██╗     ██╗      ██████╗     ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗
██║  ██║██╔════╝██║     ██║     ██╔═══██╗    ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗
███████║█████╗  ██║     ██║     ██║   ██║    ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║    ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║
██║  ██║███████╗███████╗███████╗╚██████╔╝    ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝      ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝

Greetings !

When I wrote this code, only God and I understood what I was doing
Now, God only knows

If you don't like anything on this website, bite me 😁!
________________________________________________________________________________________

All Rights Reserved!
Do not copy anything from this website, or I can sue you for that 😀
But still If you want to suffer, ping me !
________________________________________________________________________________________

Cheers,
Kumar Shubham
mailto: hello@kumarshubham.in
________________________________________________________________________________________

I sincerely admit ! Not everything you see on the website was created by me from the ground up; 
the majority of it was inspired by or copied from open source public code.

SSSssshhhhh!! The code starts below -->

<?php

// Basic router in php
$request = $_SERVER['REQUEST_URI'];
$serverName = $_SERVER['SERVER_NAME'];

if ($serverName != 'localhost') {
    switch ($request) {
        case '/':
            require __DIR__ . '/home.php';
            break;
        case '':
            require __DIR__ . '/home.php';
            break;
        case '/index/':
            // header("Location: http://www.kumarshubham.in/index/index.php");
            echo '<script>window.location.replace("http://www.kumarshubham.in/index/index.php")</script>';
            // die();
            break;
        case '/gallery/':
            // header("Location: http://www.kumarshubham.in/gallery/index.php");
            echo '<script>window.location.replace("http://www.kumarshubham.in/gallery/index.php")</script>';
            // die();
            break;
        case '/upload/':
            // header("Location: http://www.kumarshubham.in/gallery/index.php");
            echo '<script>window.location.replace("http://www.kumarshubham.in/gallery/upload/index.php")</script>';
            // die();
            break;
        case '/hashtag_research/':
            echo '<script>window.location.replace("http://www.kumarshubham.in/hashtag_research/index.html")</script>';
            // die();
            break;
        default:
            http_response_code(404);
            require __DIR__ . '/404.php';
            break;
    }
} else {
    require __DIR__ . '/home.php';
    // echo $_SERVER['SERVER_PORT'];    // returns the port number used
}

?>