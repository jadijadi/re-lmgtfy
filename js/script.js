wside = (window.sidebar) ? true: false;
var isOff = false;
function mt_cm() {
    return false
}
function mt_md(e) {
    mac = navigator.userAgent.indexOf('Mac') != -1;
    if (document.all) {
        if (event.button == 2 || (mac && (event.ctrlKey || event.keyCode == 91))) {
            return false
        }
    } else {
        if (e.which == 3 || (mac && (e.modifiers == 2 || e.ctrlKey))) {
            return false
        }
    }
}
if (navigator.appName.indexOf('Internet Explorer') == -1 || (navigator.userAgent.indexOf('MSIE') != -1 && document.all.length != 0)) {
    if (document.all) {
        mac = navigator.userAgent.indexOf('Mac') != -1;
        version = parseFloat('0' + navigator.userAgent.substr(navigator.userAgent.indexOf('MSIE') + 5), 10);
        if (!mac && version > 4) {
            document.oncontextmenu = mt_cm
        } else {
            document.onmousedown = mt_md;
            document.onkeydown = mt_md
        }
    } else if (document.layers) {
        window.captureEvents(Event.MOUSEDOWN | Event.modifiers | Event.KEYDOWN);
        window.onmousedown = mt_md;
        window.onkeydown = mt_md
    } else if (document.getElementById && !document.all) {
        document.oncontextmenu = mt_cm
    }
}
function disdrag() {
    if (document.all) {
        document.ondragstart = new Function("return false");
        for (i = 0; i < document.images.length; i++) {
            z = document.images(i);
            z.galleryImg = 'no';
        }
    }
};
disdrag();
function mt_nls() {
    window.status = '';
    return true
}
function mt_nlsl() {
    mt_nls();
    setTimeout('mt_nlsl()', 10)
}
if (document.layers) document.captureEvents(Event.MOUSEOVER | Event.MOUSEOUT);
document.onmouseover = mt_nls;
document.onmouseout = mt_nls;
mt_nlsl();
if (document.URL.substring(0, 4) == 'file') {
    window.location = 'about:blank';
    isOff = true
}