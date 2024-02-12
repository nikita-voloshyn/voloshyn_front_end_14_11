function displayBrowserName() {
    const userAgent = navigator.userAgent;
    let browserName;

    if (userAgent.match(/OPR\//i)) {
        browserName = "Opera";
    } else if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "Firefox";
    } else if (userAgent.match(/safari/i) && !userAgent.match(/chrome|chromium|crios|edg|opr\//i)) {
        browserName = "Safari";
    } else if (userAgent.match(/edg/i)) {
        browserName = "Edge";
    } else {
        browserName = "Unknown";
    }

    document.getElementById('browserInfo').innerText = `Ваш браузер: ${browserName}`;
}

displayBrowserName();
