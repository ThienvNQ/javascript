console.log('Hello World')
let a = {
    name: 'ThienvNQ',
    age: 21
}
console.log('Check data objets: ', a)
console.log('My name\'s:', a.name)
//arr = [item1, item2, item3]
let b = ['IPhone14Pro', 'IPad12.9', 'Mac14inch', 'AppleWatchSr8'];
// console.log('typof b: ', typeof b, b)
// console.log('firts item: ', b[0], 'second item: ', b[1])
b.push("AirPods2");               // adds new element (AP2) to b
console.log('Những thiết bị của ThienvNQ: ', b);
// b.push("AirPods2"); // push trên câu lệnh console.log
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
// if (currentDay == 'Thứ ' + 0) {
    console.log(`Ngày hiện tại: ${dayOfWeek} ` + currentDate + `/` + currentMonth + '/' + currentYear);
    // console.log(`Giờ hiện tại: `, currentHour + `:` + currentMinute + ':' + currentSecond);
    // console.log('Năm hiện tại: ', currentYear);
    // console.log( 'Ngày hiện tại: ', currentDate);`
// } else {
// console.log(`Ngày hiện tại: `, currentDay + ` ` + currentDate + `/` + currentMonth + '/' + currentYear);}
console.log(`Giờ hiện tại: `, currentHour + `:` + currentMinute + ':' + currentSecond);
console.log('Check data objets: ', currentMonth)
// console.log('Năm hiện tại: ', currentYear);

// console.log( 'Ngày hiện tại: ', currentDate); }

let age = {
    ageMe: currentYear-2002,
    ageMom: currentYear-1965,
}
// let currentTime = new Date();
// let currentYear = currentTime.getFullYear();
// console.log('Năm hiện tại: ', currentYear);
let family =[
    {nameMe: 'ThienvNQ', ageMe: age.ageMe },
    {nameMom: 'Mom', ageMom: age.ageMom}
    ];
console.log('My family: ')
console.log('       Me: ', family[0].nameMe, ', Age: ', family[0].ageMe);
console.log('       Mom: ', family[1].nameMom, ', Age: ', family[1].ageMom);

// console.log('Age Me: ',age.ageMe, 'AgeMom: ',age.ageMom)