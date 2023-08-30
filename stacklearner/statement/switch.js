var date = new Date();
var today = date.getDay();

//console.log(today)

// 0 - Sunday, 1- Monday, 2- Tuesday

switch (today) {
  case 0:
    console.log("Today is sunday");
    break;

  case 1:
    console.log("Today is monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wedenesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
    default: console.log('Not a valid number')
}
