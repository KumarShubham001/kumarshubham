<style>
    .image-list-container {
        width: 100%;
    }

    .item {
        padding: 10px;
        width: 100%;
        height: auto;
    }

    .item img {
        width: 100%;
    }
</style>

<?php
$dir = "../images/uploads/thumb/";

$imageList = [];

// Open a directory, and read its contents
if (is_dir($dir)) {
    if ($dh = opendir($dir)) {
        while (($file = readdir($dh)) !== false) {
            if ($file != '.' && $file != '..')
                array_push($imageList, $file);
        }
        closedir($dh);
    }
}
?>

<div class="image-list-container">
    <div class="row">
        <?php
        for ($i = count($imageList) - 1; $i >= 0; $i--) {
        ?>
            <div class="col-md-3 col-sm-4 col-xs-12">
                <div id="<?php echo $imageList[$i]; ?>" class="item">
                    <img onclick="deleteImage('<?php echo $imageList[$i]; ?>')" src=<?php echo $dir . $imageList[$i]; ?> />
                </div>
            </div>
        <?php
        }
        ?>
    </div>
</div>