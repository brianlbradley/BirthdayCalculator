function calc() {
  var date1 = new Date();
  var date2 = new Date(document.getElementById("date2").value);
   if (date2 > date1) {
    alert("Oops looks like you weren't born yet");
    return;

  }
  var diff = dateDiff(date1, date2);

  var output = "You are " + diff.year+ " year" + "s " + diff.month + " months And " + diff.day + " days Old";
  var output1 = "You are " + diff.days + " days old";
  var output2 = "You are " + diff.minutes+ " minutes old";
  var output3 = "You are " + diff.secondsalive + " seconds old";
  var output4 = "It is " + diff.cbdiff + " days until your next Birthday";
  var output5 =  diff.diff79 ;
  var output8 = "You were born on a " + diff.bornDay;
  var output9 = "Your next Birthday is on a " + diff.currentBdayWd;

  document.getElementById("output").innerHTML = output;
  document.getElementById("output1").innerHTML = output1;
  document.getElementById("output2").innerHTML = output2;
  document.getElementById("output3").innerHTML = output3;
  document.getElementById("output4").innerHTML = output4;
  document.getElementById("output5").innerHTML = output5;
  document.getElementById("output8").innerHTML = output8;
  document.getElementById("output9").innerHTML = output9;
  //document.getElementById("output5").innerHTML = output5;
 
}

function dateDiff(date1, date2) {
	var date1 = new Date();
  var date2 = new Date(document.getElementById("date2").value);
  
  var diff = {};

 
var weekday = new Array();
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

 
  //console.log(currentBday);

  diff.secondsalive = ((date1 - date2) / (1000)).toLocaleString({
    undefined,
    maximumFractionDigits: 1
  });
  diff.minutes = ((date1 - date2) / (1000*60)).toLocaleString({
    undefined,
    maximumFractionDigits: 1
  });
  diff.day = date1.getDate() - date2.getDate();

  diff.days = ((date1 - date2) / (1000 * 60 * 60 * 24)).toFixed(1);
  diff.year = date1.getFullYear() - date2.getFullYear();
  diff.month = date1.getMonth() - date2.getMonth();
  diff.bornDay = weekday[date2.getDay()];



  var currentBdYear = date1.getFullYear();
  var currentBdMonth = date2.getMonth() + 1;
  var currentBdDay = date2.getDate();


  var currentBday = new Date(currentBdMonth + "/" + currentBdDay + "/" + currentBdYear);
  var fixedBday =new Date(currentBdMonth + "/" + currentBdDay + "/" + 2019);

  var BdayMonth=date2.getMonth() +1;
  var BdayDay = date2.getDate();
  var currentMonth = date1.getMonth() +1;
  var currentDay = date1.getDate();

  var monthDay=(BdayMonth + "/" + BdayDay);
  var currentMonthDay = (currentMonth + "/" + currentDay);


  if (monthDay == currentMonthDay) {
    alert("Happy Birthday");
  }

  diff.cbdiff = ((currentBday-date1) / (1000 * 60 * 60 * 24)).toFixed(1);
  diff.currentBdayWd = weekday[currentBday.getDay()];

  if (diff.cbdiff < 0) {
   
    var date = new Date(currentBday);
     var date2 = new Date(document.getElementById("date2").value);
    date.setFullYear(date.getFullYear() + 1);   
    diff.cbdiff = ((date - date1) / (1000 * 60 * 60 * 24)).toFixed(1);
     diff.currentBdayWd =weekday[date.getDay()];
  }

var date79 = new Date(document.getElementById("date2").value);
var date1=new Date();
    date79.setFullYear(date79.getFullYear() + 79);
    diff.diff79 =((date79 - date1) / (1000 * 60 * 60 * 24)).toFixed(0);

      if(diff.diff79<0) {
      	diff.diff79 ="You have exceeded your life span by " +(((date79 - date1) / (1000 * 60 * 60 * 24))*-1).toFixed(0) + " Days!"; 
      } else {
      	diff.diff79 = "You have " +((date79 - date1) / (1000 * 60 * 60 * 24)).toFixed(0) + " Days or " +(((date79 - date1) / (1000 * 60 * 60 * 24))/365).toFixed(1)+" years to reach your average life span!";
      }

function birthstones() {
  var birthMonth = date2.getMonth() +1;
  console.log(birthMonth);
  var birthstone;

  if(birthMonth=== 1) {
    birthstone ="Your birthstone is Garnet";
    return birthstone;

    
  } else if (birthMonth=== 2) {
     birthstone ="Your birthstone is Amethyst";
     return birthstone;
  }
  else if (birthMonth=== 3) {
     birthstone ="Your birthstone is Aquamarine";
     return birthstone;
  }
  else if (birthMonth=== 4) {
     birthstone ="Your birthstone is Diamond";
     return birthstone;
  }
  else if (birthMonth=== 5) {
     birthstone ="Your birthstone is Emerald";
     return birthstone;
  }
  else if (birthMonth=== 6) {
     birthstone ="Your birthstone is Pearl";
     return birthstone;
  }
  else if (birthMonth=== 7) {
     birthstone ="Your birthstone is Ruby";
     return birthstone;
  }
  else if (birthMonth=== 8) {
     birthstone ="Your birthstone is Peridot";
     return birthstone;
  }
  else if (birthMonth=== 9) {
     birthstone ="Your birthstone is Sapphire";
     return birthstone;
  }

else if (birthMonth=== 10) {
     birthstone ="Your birthstone is Opal";
     return birthstone;
  }
else if (birthMonth=== 11) {
     birthstone ="Your birthstone is Topaz";
     return birthstone;
  }
  else if (birthMonth=== 12) {
     birthstone ="Your birthstone is Turquoise";
     return birthstone;
  }
  }
  document.getElementById("output6").innerHTML = birthstones();

function zodiac() {
  
  var zodiac;
if(fixedBday >=  new Date('7/23/2019') && fixedBday <= new Date('8/22/19')) {
  console.log(fixedBday);
    zodiac ="You're sign is Leo who's symbol is The Lion";
    return zodiac;
    
  } else if (fixedBday >=  new Date('3/21/2019') && fixedBday <= new Date('4/19/19')) {
  console.log(fixedBday);
    zodiac ="Your sign is Aries who's symbol is The Ram";
   return zodiac;
  }else if (fixedBday >=  new Date('4/20/2019') && fixedBday <= new Date('5/20/19')) {
  console.log(fixedBday);
    zodiac ="Your sign is Taurus who's symbol is The Bull";
   return zodiac;
  
  } else if (fixedBday >=  new Date('5/21/2019') && fixedBday <= new Date('6/20/19')) {
  console.log(fixedBday);
    zodiac ="Your sign is Gemini who's symbol is The Twins";
   return zodiac;
  

  } else if (fixedBday >=  new Date('6/21/2019') && fixedBday <= new Date('7/22/19')) {
  console.log(fixedBday);
    zodiac ="Your sign is Cancer who's symbol is The Crab";
   return zodiac;

  } else if (fixedBday >=  new Date('8/23/2019') && fixedBday <= new Date('9/22/19')) {
  console.log(fixedBday);
    zodiac ="Your sign is Virgo who's symbol is The Virgin Maiden";
   return zodiac;
  }
else if (fixedBday >=  new Date('9/23/2019') && fixedBday <= new Date('10/22/19')) {
  console.log(fixedBday);
    zodiac ="Your sign is Libra who's symbol is The Scales";
   return zodiac;
  }
  else if (fixedBday >=  new Date('10/23/2019') && fixedBday <= new Date('11/21/19')) {
  console.log(fixedBday);
    zodiac ="Your sign is Scorpio who's symbol is The Scorpion";
   return zodiac;
  }

   else if (fixedBday >=  new Date('2/19/2019') && fixedBday <= new Date('3/20/19')) {
  console.log(fixedBday);
    zodiac ="Your sign is Pisces who's symbol is The Fish";
   return zodiac;
  }

   else if (fixedBday >=  new Date('11/22/2019') && fixedBday <= new Date('12/21/19')) {
  console.log(fixedBday);
    zodiac ="Your sign is Sagittarius who's symbol is The Centaur";
   return zodiac;
  }

   else if (fixedBday >=  new Date('12/22/2019') &&    fixedBday <= new Date('12/31/2019')
    || (fixedBday >=  new Date('1/1/2019') &&    fixedBday <= new Date('1/19/2019'))) {
 
    zodiac ="Your sign is Capricorn who's symbol is The Goat";
   return zodiac;
  }

   else if (fixedBday >=  new Date('1/20/2019') && fixedBday <= new Date('2/18/19')) {
  console.log(fixedBday);
    zodiac ="Your sign is Aquarius who's symbol is The Water Bearer";
   return zodiac;
  }

 
}

document.getElementById("output7").innerHTML = zodiac();

  if (diff.day < 0) {
    diff.month--;
    var dayDiff = new Date(date1.getYear(), date1.getMonth(), 0).getDate() - date2.getDate();
    diff.day = date1.getDate();
    if (dayDiff > 0) {
      diff.day += dayDiff;
    }
  }
  if (diff.month < 0) {
    diff.month += 12;
    diff.year--;
  }
  return diff;
}


