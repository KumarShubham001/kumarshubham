$(window).load(function () {
    $(".se-pre-con").fadeOut("slow");
    $(".section-loader").fadeOut();
});

var text = '';
var textArr = [];
var totalHash = 0;
var displayText = '';
var selectedHash = 0;

$('#totalTag').text(selectedHash);

function parseText() {
    const textTempArr = [];

    text = $('#input-comment').val().trim();
    textArr = [...text.split(/\n| /)];
    displayText = '';
    totalHash = 0;
    uniqueHash = 0;
    selectedHash = 0;
    hashtagArr = [];

    if (text.lenght <= 0 || text == '') {
        $.dialog({
            title: 'Oops!',
            content: 'Please enter the caption!',
        });

        return;
    }

    textArr.forEach((item, index) => {
        if (item.length > 0 && item[0] == '#' && !hashtagArr.includes(item)) {
            totalHash += 1;
            uniqueHash += 1;
            hashtagArr.push(item);
            const newItem = {
                title: item,
                class: 'active'
            }
            item = newItem;

            displayText += `<span #` + index + ` class="` + item.class + `" onclick="toggleSelection(` + index + `)">` + item.title + `</span>`;
        } else if (hashtagArr.includes(item)) {
            totalHash += 1;
            const newItem = {
                title: item,
                class: 'inactive'
            }
            item = newItem;

            displayText += `<span #` + index + ` class="` + item.class + `" onclick="toggleSelection(` + index + `)">` + item.title + `</span>`;
        }
        else {
            displayText += item;
        }
        textTempArr.push(item);
        displayText += ' ';
    });

    displayText = displayText.trim();
    textArr = [...textTempArr];
    selectedHash = uniqueHash;
    $('#output-comment').html(displayText);
    $('#totalTag').text(selectedHash);
    $('#uniqueTags').text(uniqueHash);

    if (totalHash <= 0) {
        $.dialog({
            title: 'Oops!',
            content: 'No hashtag found!',
        });
    } else if (totalHash > 30) {
        $.dialog({
            title: 'Oops!',
            content: 'Total hashtags are greater than 30!',
        });
    }
}

function toggleSelection(index) {
    displayText = '';
    textArr[index].class = textArr[index].class == 'active' ? 'inactive' : 'active';
    if (textArr[index].class == 'active') selectedHash += 1;
    else selectedHash -= 1;
    textArr.forEach((item, index) => {
        if (item && item.title && item.title.length > 0 && item.title[0] == '#') {
            displayText += `<span #` + index + ` class="` + item.class + `" onclick="toggleSelection(` + index + `)">` + item.title + `</span>`;
        } else {
            displayText += item;
        }
        displayText += ' ';
    })
    displayText = displayText.trim();
    $('#output-comment').html(displayText);
    $('#totalTag').text(selectedHash);
}

function copy() {

    var copyTextStr = '';
    textArr.forEach(item => {
        if (item && item.title && item.title.length > 0 && item.title[0] == '#') {
            if (item.class == 'active') {
                copyTextStr += item.title;
                copyTextStr += ' ';
            }
        } else {
            copyTextStr += item;
            copyTextStr += ' ';
        }
    })
    copyTextStr = copyTextStr.trim();

    console.log('Result', copyTextStr);

    if (selectedHash > 0 && selectedHash <= 30) {
        copyText = document.createElement("textarea");
        copyText.innerHTML = copyTextStr;
        document.body.appendChild(copyText);
        copyText.select();
        try {
            var success = document.execCommand("copy");
            success ? console.log("copy successful") : console.log("copy unsuccessful");
        }
        catch (e) {
            console.log("browser not compatible");
        }
        document.body.removeChild(copyText);
        showToast(success ? "Tags copied!" : "Tags copy failed!");
    } else if (selectedHash > 0 && selectedHash > 30) {
        $.dialog({
            title: 'Oops!',
            content: 'Selected hashtags are greater than 30!',
        });
    } else {
        $.dialog({
            title: 'Oops!',
            content: 'No hashtag selected!',
        });
    }
}

function showToast(message) {
    var x = document.getElementById("snackbar");
    x.innerText = message;
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}