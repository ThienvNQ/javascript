console.log('Hello World')
let a = {
    name: 'ThienvNQ',
    age: 21
}
console.log('Check data objects: ', a)
console.log('My name\'s:', a.name)

let b = ['IPhone14Pro', 'IPad12.9', 'Mac14inch', 'AppleWatchSr8'];
b.push("AirPods2");
console.log('Những thiết bị của ThienvNQ: ', b);

let currentTime = new Date();
let currentYear = currentTime.getFullYear();
let currentMonth = currentTime.getMonth() + 1;
let currentDate = currentTime.getDate();
let currentDay = currentTime.getDay();
let daysOfWeek = ['Chủ Nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
let dayOfWeek = daysOfWeek[currentDay];
let currentHour = currentTime.getHours();
let currentMinute = currentTime.getMinutes();
let currentSecond = currentTime.getSeconds();

console.log(`Ngày hiện tại: ${dayOfWeek} ` + currentDate + `/` + currentMonth + '/' + currentYear);
console.log(`Giờ hiện tại: `, currentHour + `:` + currentMinute + ':' + currentSecond);
console.log('Check data objects: ', currentMonth)

let age = {
    ageMe: currentYear - 2002,
    ageMom: currentYear - 1965,
}

let family = [
    { nameMe: 'ThienvNQ', ageMe: age.ageMe },
    { nameMom: 'Mom', ageMom: age.ageMom }
];
console.log('My family: ')
console.log('       Me: ', family[0].nameMe, ', Age: ', family[0].ageMe);
console.log('       Mom: ', family[1].nameMom, ', Age: ', family[1].ageMom);
