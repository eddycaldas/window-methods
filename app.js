// Window methods / objects / properties

let val;
// outer height and width
val1 = window.outerHeight;
val2 = window.outerWidth;
console.log(val1);
console.log(val2);

// inner height and width
val3 = window.innerHeight;
val4 = window.innerWidth;
console.log(val3)
console.log(val4)

// scroll points
val5 = window.scrollY;
console.log(val5)

// location object
val6 = window.location;
val7 = window.location.hostname;
val8 = window.location.port;
val9 = window.location.href;
val10 = window.location.search;

console.log(val6);
console.log(val7);
console.log(val8);
console.log(val9);
console.log(val10);

//redirect
// window.location.href = 'http://google.com'

// reload
// window.location.reload();

// history object
// window.history.go(-2);
val = window.history.length;
console.log(val)


// navigator object is related iwth the browser
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.platform;

console.log(val)