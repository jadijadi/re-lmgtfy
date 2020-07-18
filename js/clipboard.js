function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("Copy");

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = ":کپی شد " + copyText.value;
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "ذخیره در کلیپبورد";
}

function openInNewTab() {
    var url = document.getElementById("myInput").value;
    var win = window.open(url, '_blank');
    win.focus();
}

function shortLink() {
    var param = document.getElementById("myInput").value;

    // The link shortening service cannot work with links containing spaces.
    // this 2 line code replace spaces with a character that is not used in searches.
    param = param.split("%20").join("˺");
    param = param.split("+").join("˺");

    var url = "https://is.gd/create.php?format=json&url=" + param;

    document.getElementById("short").innerHTML = "لطفا صبر کنید ...";

    document.getElementById("short").disabled = true;

    fetch(url, {
            method: 'GET'
        }).then(res => res.json())
        .then(responseJson => {
            document.getElementById("myInput").value = responseJson["shorturl"];
            document.getElementById("short").innerHTML = "لینک کوتاه";
            document.getElementById("short").disabled = false;
        })
        .catch(err => {
            console.log(err)
        })
}