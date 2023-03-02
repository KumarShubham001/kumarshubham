<?php

$imageToDelete = $_POST['image'];

$thumbDir = "../images/uploads/thumb/" . $imageToDelete;
$actualDir = "../images/uploads/img/" . explode('.', $imageToDelete)[0] . '.jpeg';

if (!unlink($thumbDir)) {
    echo ("Cannot be deleted due to an error");
} else {
    if (!unlink($actualDir)) {
        echo ("Error deleting the image.");
    } else {
        echo ("Deleted successfully");
    }
}