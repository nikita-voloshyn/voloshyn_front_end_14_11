function displayBrowserInfo() {
    const browserInfo = `Браузер: ${navigator.userAgent}<br>
                         Версія: ${navigator.appVersion}<br>
                         Операційна система: ${navigator.platform}<br>
                         Розмір вікна: ${window.innerWidth} x ${window.innerHeight}px`;
    document.getElementById('browserInfo').innerHTML = browserInfo;
}

displayBrowserInfo();
