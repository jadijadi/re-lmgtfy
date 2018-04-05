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

    var url = "http://api.yon.ir/?url=" + encodeURIComponent(param);

    document.getElementById("short").innerHTML = "لطفا صبر کنید ...";

    document.getElementById("short").disabled = true;

    fetch(url, {
            method: 'POST'
        }).then(res => res.json())
        .then(responseJson => {
            document.getElementById("myInput").value = "http://yon.ir/" + responseJson.output
            document.getElementById("short").innerHTML = "لینک کوتاه";
            document.getElementById("short").disabled = false;
        })
        .catch(err => {
            console.log(err)
        })
}
