document.addEventListener('DOMContentLoaded', function () {
    let personalInfo = {
        name: 'ThienvNQ',
        age: 21
    };

    let devices = ['IPhone14Pro', 'IPad12.9', 'Mac14inch', 'AppleWatchSr8', 'AirPods2'];

    let family = [
        { name: 'ThienvNQ', age: 21 },
        { name: 'Mom', age: new Date().getFullYear() - 1965 }
    ];

    displayPersonalInfo(personalInfo);
    displayDevices(devices);
    displayCurrentDateTime();
    displayFamilyInfo(family);
});

function displayPersonalInfo(info) {
    document.getElementById('name').textContent = info.name;
    document.getElementById('age').textContent = info.age;
}

function displayDevices(deviceList) {
    let list = document.getElementById('device-list');
    deviceList.forEach(device => {
        let listItem = document.createElement('li');
        listItem.textContent = device;
        list.appendChild(listItem);
    });
}

function displayCurrentDateTime() {
    let currentDate = new Date();
    document.getElementById('current-date').textContent = `Date: ${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    document.getElementById('current-time').textContent = `Time: ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
}

function displayFamilyInfo(family) {
    document.getElementById('me-name').textContent = family[0].name;
    document.getElementById('me-age').textContent = family[0].age;
    document.getElementById('mom-name').textContent = family[1].name;
    document.getElementById('mom-age').textContent = family[1].age;
}
