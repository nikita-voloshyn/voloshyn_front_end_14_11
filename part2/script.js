function getDevicesFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('devices') ? params.get('devices').split(',') : [];
}

function updateURL(device, isChecked) {
    const devices = getDevicesFromURL();
    if (isChecked) {
        if (!devices.includes(device)) {
            devices.push(device);
        }
    } else {
        const index = devices.indexOf(device);
        if (index > -1) {
            devices.splice(index, 1);
        }
    }
    const newParams = devices.length > 0 ? `?devices=${devices.join(',')}` : '';
    window.history.replaceState({}, '', `${window.location.pathname}${newParams}`);
}

function setupCheckboxes() {
    const devices = getDevicesFromURL();
    document.querySelectorAll('input[type="checkbox"][data-device]').forEach(checkbox => {
        if (devices.includes(checkbox.dataset.device.toLowerCase())) {
            checkbox.checked = true;
        }

        checkbox.addEventListener('change', (e) => {
            updateURL(e.target.dataset.device, e.target.checked);
        });
    });
}

setupCheckboxes();
