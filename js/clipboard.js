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
    /*     var param = document.getElementById("myInput").value;
        var json = {
            "createdAt": "10:20",
            "id": "123",
            "target": param,
            "password": false,
            "count": 100,
            "shortUrl": ""
        }
        var url = "https://kutt.it/api/url/submit";

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("myInput").value = this.responseText;
            }
        };
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.setRequestHeader("X-API-Key", "SBDVlNnbW5A0HoNqX6sO~Pq8AlL71f3mFcGe6b9Q");
        xhttp.send(json); */

    var param = document.getElementById("myInput").value;

    var data = JSON.stringify({
        "createdAt": "10:20",
        "id": "123",
        "target": param,
        "password": false,
        "count": 100,
        "shortUrl": ""
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "https://kutt.it/api/url/submit");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-API-Key", "SBDVlNnbW5A0HoNqX6sO~Pq8AlL71f3mFcGe6b9Q");
    xhr.setRequestHeader("Access-Control-Allow-Methods", "POST");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("Access-Control-Allow-Headers", "*");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "aafdc0e6-deb6-4be0-bb10-ee450be8123c");

    xhr.send(data);
}