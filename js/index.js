var now = new Date();
var morning = now.setHours(8,0,0,0);
var afternoon = now.setHours(16,0,0,0);
var br = "<br />";

document.write(now + br + morning + br + afternoon);

/* Output:
Wed Aug 01 2018 16:00:00 GMT+0200
1533103200000
1533132000000 
*/